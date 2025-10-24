import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

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
    
    // TODO: Wire up to email service (Resend, EmailJS, SendGrid, etc.)
    // Example with Resend:
    /*
    import { Resend } from 'resend'
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    await resend.emails.send({
      from: 'orders@gopmerchco.com',
      to: ['sales@gopmerchco.com'],
      subject: `New Order Request: ${validatedData.committee}`,
      html: generateEmailTemplate(validatedData),
    })
    
    // Send confirmation email to customer
    await resend.emails.send({
      from: 'orders@gopmerchco.com',
      to: [validatedData.email],
      subject: 'Your GOP Merch Co. Request Received',
      html: generateConfirmationTemplate(validatedData),
    })
    */
    
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

// Helper function to generate email template (for future use)
function generateEmailTemplate(data: any) {
  return `
    <h2>New Campaign Merchandise Request</h2>
    <p><strong>Campaign:</strong> ${data.committee}</p>
    <p><strong>Contact:</strong> ${data.fullName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
    <p><strong>Office Level:</strong> ${data.officeLevel}</p>
    <p><strong>State:</strong> ${data.state}</p>
    <p><strong>Products:</strong> ${data.products.join(', ')}</p>
    <p><strong>Quantities:</strong> ${data.quantities}</p>
    <p><strong>Timeline:</strong> ${data.timeline}</p>
    <p><strong>Paid for by:</strong> ${data.paidForBy}</p>
    ${data.notes ? `<p><strong>Notes:</strong> ${data.notes}</p>` : ''}
    <p><em>Submitted: ${new Date().toLocaleString()}</em></p>
  `
}

// Helper function to generate confirmation email template (for future use)
function generateConfirmationTemplate(data: any) {
  return `
    <h2>Thank you for your request!</h2>
    <p>Hi ${data.fullName},</p>
    <p>We've received your merchandise request for <strong>${data.committee}</strong> and will get back to you within 24-48 hours with a custom quote.</p>
    <h3>Your Request Summary:</h3>
    <ul>
      <li><strong>Products:</strong> ${data.products.join(', ')}</li>
      <li><strong>Quantities:</strong> ${data.quantities}</li>
      <li><strong>Timeline:</strong> ${data.timeline}</li>
    </ul>
    <p>If you have any immediate questions, feel free to reply to this email or call us at (555) 123-4567.</p>
    <p>Best regards,<br>The GOP Merch Co. Team</p>
  `
}
