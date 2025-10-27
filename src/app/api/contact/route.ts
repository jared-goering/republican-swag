import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

// Validation schema matching the frontend form
const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  committee: z.string().min(2, 'Committee/Campaign name is required'),
  officeLevel: z.enum(['Local', 'State', 'Federal']),
  state: z.string().min(2, 'State is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  products: z.array(z.string()).min(1, 'Please select at least one product type'),
  quantities: z.string().min(1, 'Please provide approximate quantities'),
  timeline: z.string().min(1, 'Timeline/key dates are required'),
  paidForBy: z.string().min(1, '"Paid for by" line is required'),
  notes: z.string().optional(),
  consent: z.boolean().refine(val => val === true, 'You must agree to be contacted')
})

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json()
    
    // Validate the data
    const validatedData = contactFormSchema.parse(body)
    
    // Log the submission (in production, you'd want proper logging)
    console.log('=== NEW CAMPAIGN MERCHANDISE REQUEST ===')
    console.log('Timestamp:', new Date().toISOString())
    console.log('Campaign:', validatedData.committee)
    console.log('Contact:', validatedData.fullName)
    console.log('Email:', validatedData.email)
    console.log('Phone:', validatedData.phone || 'Not provided')
    console.log('Office Level:', validatedData.officeLevel)
    console.log('State:', validatedData.state)
    console.log('Products:', validatedData.products.join(', '))
    console.log('Quantities:', validatedData.quantities)
    console.log('Timeline:', validatedData.timeline)
    console.log('Paid for by:', validatedData.paidForBy)
    console.log('Notes:', validatedData.notes || 'None')
    console.log('Consent given:', validatedData.consent)
    console.log('==========================================')
    
    // Send email notification to business owner
    try {
      console.log('📧 Attempting to send emails...')
      console.log('API Key exists:', !!process.env.RESEND_API_KEY)
      console.log('From email:', process.env.FROM_EMAIL || 'orders@republicanswag.com')
      console.log('To email:', process.env.NOTIFICATION_EMAIL || 'jared@homeplaceapparel.com')
      
      const businessEmail = await resend.emails.send({
        from: 'onboarding@resend.dev', // Use Resend's verified domain for testing
        to: [process.env.NOTIFICATION_EMAIL || 'jared@homeplaceapparel.com'],
        subject: `🎯 New Campaign Order Request: ${validatedData.committee}`,
        html: generateEmailTemplate(validatedData),
      })
      console.log('✅ Business notification response:', JSON.stringify(businessEmail, null, 2))
      
      // Send confirmation email to customer
      const customerEmail = await resend.emails.send({
        from: 'onboarding@resend.dev', // Use Resend's verified domain for testing
        to: [validatedData.email],
        subject: 'Your Republican Swag Request Received',
        html: generateConfirmationTemplate(validatedData),
      })
      console.log('✅ Customer confirmation response:', JSON.stringify(customerEmail, null, 2))
      
      console.log('✅ All emails sent successfully')
    } catch (emailError) {
      console.error('❌ Email sending failed:', emailError)
      console.error('Error details:', JSON.stringify(emailError, null, 2))
      // Don't fail the entire request if email fails
    }
    
    // TODO: Wire up to CRM/Database (Airtable, Notion, etc.)
    // Example with Airtable:
    /*
    const airtableResponse = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Leads`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          'Full Name': validatedData.fullName,
          'Committee': validatedData.committee,
          'Email': validatedData.email,
          'Phone': validatedData.phone,
          'Office Level': validatedData.officeLevel,
          'State': validatedData.state,
          'Products': validatedData.products.join(', '),
          'Quantities': validatedData.quantities,
          'Timeline': validatedData.timeline,
          'Paid For By': validatedData.paidForBy,
          'Notes': validatedData.notes,
          'Submitted': new Date().toISOString(),
        }
      })
    })
    */
    
    // TODO: Wire up to Slack/Discord notification
    // Example with Slack webhook:
    /*
    await fetch(process.env.SLACK_WEBHOOK_URL!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: `🎯 New Campaign Order Request`,
        blocks: [
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `*New Order Request*\n*Campaign:* ${validatedData.committee}\n*Contact:* ${validatedData.fullName}\n*Email:* ${validatedData.email}\n*Office:* ${validatedData.officeLevel} (${validatedData.state})\n*Products:* ${validatedData.products.join(', ')}`
            }
          }
        ]
      })
    })
    */
    
    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Request submitted successfully',
        // Include a summary for the frontend to display
        summary: {
          campaign: validatedData.committee,
          contact: validatedData.fullName,
          email: validatedData.email,
          products: validatedData.products,
          timeline: validatedData.timeline
        }
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Contact form submission error:', error)
    
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation failed',
          errors: error.issues 
        },
        { status: 400 }
      )
    }
    
    // Handle other errors
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error' 
      },
      { status: 500 }
    )
  }
}

// Helper function to generate email template for business owner
function generateEmailTemplate(data: any) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Campaign Order Request</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
        .header { background: #dc2626; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 12px; }
        .label { font-weight: bold; color: #374151; }
        .products { background: white; padding: 15px; border-radius: 6px; margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="header">
        <h2>🎯 New Campaign Order Request</h2>
        <p>You have received a new merchandise request!</p>
      </div>
      <div class="content">
        <div class="field"><span class="label">Campaign:</span> ${data.committee}</div>
        <div class="field"><span class="label">Contact:</span> ${data.fullName}</div>
        <div class="field"><span class="label">Email:</span> <a href="mailto:${data.email}">${data.email}</a></div>
        <div class="field"><span class="label">Phone:</span> ${data.phone || 'Not provided'}</div>
        <div class="field"><span class="label">Office Level:</span> ${data.officeLevel} (${data.state})</div>
        <div class="products">
          <div class="field"><span class="label">Products:</span> ${data.products.join(', ')}</div>
          <div class="field"><span class="label">Quantities:</span> ${data.quantities}</div>
          <div class="field"><span class="label">Timeline:</span> ${data.timeline}</div>
          <div class="field"><span class="label">Paid for by:</span> ${data.paidForBy}</div>
          ${data.notes ? `<div class="field"><span class="label">Notes:</span> ${data.notes}</div>` : ''}
        </div>
        <div class="field"><em>Submitted: ${new Date().toLocaleString()}</em></div>
      </div>
    </body>
    </html>
  `
}

// Helper function to generate confirmation email for customer
function generateConfirmationTemplate(data: any) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Your Request Received</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
        .header { background: #dc2626; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
        .summary { background: white; padding: 15px; border-radius: 6px; margin: 15px 0; }
      </style>
    </head>
    <body>
      <div class="header">
        <h2>✅ Request Received!</h2>
        <p>Thank you for your campaign merchandise request</p>
      </div>
      <div class="content">
        <p>Hi ${data.fullName},</p>
        <p>We've received your merchandise request for <strong>${data.committee}</strong> and will get back to you within 24-48 hours with a custom quote.</p>
        
        <div class="summary">
          <h3>Request Summary:</h3>
          <p><strong>Products:</strong> ${data.products.join(', ')}</p>
          <p><strong>Quantities:</strong> ${data.quantities}</p>
          <p><strong>Timeline:</strong> ${data.timeline}</p>
        </div>
        
        <p>Our team will review your requirements and contact you at <strong>${data.email}</strong>${data.phone ? ` or <strong>${data.phone}</strong>` : ''} with pricing and next steps.</p>
        
        <p>If you have any immediate questions, feel free to reply to this email.</p>
        
        <p>Best regards,<br>
        Republican Swag Team</p>
      </div>
    </body>
    </html>
  `
}
