'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { X, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { trackEvent } from '@/lib/utils'

// Form validation schema
const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  committee: z.string().min(2, 'Committee/Campaign name is required'),
  officeLevel: z.enum(['Local', 'State', 'Federal'], {
    message: 'Please select office level'
  }),
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

type ContactFormData = z.infer<typeof contactFormSchema>

interface ContactFormProps {
  isModal?: boolean
  onClose?: () => void
  preselectedIntent?: string
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  isModal = false, 
  onClose,
  preselectedIntent 
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      products: preselectedIntent ? [preselectedIntent] : []
    }
  })

  const productOptions = [
    'Apparel (T-shirts, Polos, Hats)',
    'Rally & Field (Signs, Banners, Buttons)',
    'Handouts (Brochures, Palm Cards, Flyers)',
    'Vehicle & Large Format (Magnets, Billboards)',
    'VIP/Donor (Premium Items, Custom Gifts)',
    'Custom/Other'
  ]

  const stateOptions = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ]

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    trackEvent('form_submit_attempt', { 
      office_level: data.officeLevel,
      state: data.state,
      products: data.products.length
    })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage('Thanks! We\'ll reach out shortly to finalize details.')
        trackEvent('form_submit_success', { 
          office_level: data.officeLevel,
          state: data.state 
        })
        reset()
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('Sorry, there was an error submitting your request. Please try again or email us directly.')
      trackEvent('form_submit_error', { error: 'api_error' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFormStart = () => {
    trackEvent('form_start', { modal: isModal })
  }

  const selectedProducts = watch('products') || []

  return (
    <div className={isModal ? 'fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4' : ''}>
      <div className={`bg-white rounded-2xl shadow-soft-lg ${isModal ? 'max-w-2xl w-full max-h-[90vh] overflow-y-auto' : 'max-w-4xl mx-auto'} p-8`}>
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold font-heading text-primary mb-2">
              Start Your Order
            </h2>
            <p className="text-ink">
              Tell us about your campaign and we'll get you a custom quote within 24-48 hours.
            </p>
          </div>
          {isModal && onClose && (
            <button
              onClick={onClose}
              className="p-2 text-ink hover:text-primary transition-colors"
              aria-label="Close form"
            >
              <X className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-green-800 mb-1">Request Submitted!</h3>
              <p className="text-green-700">{submitMessage}</p>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-red-800 mb-1">Submission Error</h3>
              <p className="text-red-700">{submitMessage}</p>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} onFocus={handleFormStart}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-primary mb-2">
                Full Name *
              </label>
              <input
                {...register('fullName')}
                type="text"
                id="fullName"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                placeholder="Your full name"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
              )}
            </div>

            {/* Committee/Campaign */}
            <div>
              <label htmlFor="committee" className="block text-sm font-semibold text-primary mb-2">
                Committee/Campaign *
              </label>
              <input
                {...register('committee')}
                type="text"
                id="committee"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                placeholder="Campaign or committee name"
              />
              {errors.committee && (
                <p className="mt-1 text-sm text-red-600">{errors.committee.message}</p>
              )}
            </div>

            {/* Office Level */}
            <div>
              <label htmlFor="officeLevel" className="block text-sm font-semibold text-primary mb-2">
                Office Level *
              </label>
              <select
                {...register('officeLevel')}
                id="officeLevel"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
              >
                <option value="">Select office level</option>
                <option value="Local">Local (City Council, School Board, etc.)</option>
                <option value="State">State (Legislature, Governor, etc.)</option>
                <option value="Federal">Federal (Congress, Senate, etc.)</option>
              </select>
              {errors.officeLevel && (
                <p className="mt-1 text-sm text-red-600">{errors.officeLevel.message}</p>
              )}
            </div>

            {/* State */}
            <div>
              <label htmlFor="state" className="block text-sm font-semibold text-primary mb-2">
                State *
              </label>
              <select
                {...register('state')}
                id="state"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
              >
                <option value="">Select state</option>
                {stateOptions.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
              {errors.state && (
                <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                Email Address *
              </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">
                Phone Number
              </label>
              <input
                {...register('phone')}
                type="tel"
                id="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          {/* Products Needed */}
          <div className="mt-6">
            <label className="block text-sm font-semibold text-primary mb-3">
              Products Needed * (Select all that apply)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {productOptions.map((product) => (
                <label key={product} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    {...register('products')}
                    type="checkbox"
                    value={product}
                    className="w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent"
                  />
                  <span className="text-ink">{product}</span>
                </label>
              ))}
            </div>
            {errors.products && (
              <p className="mt-1 text-sm text-red-600">{errors.products.message}</p>
            )}
          </div>

          {/* Quantities */}
          <div className="mt-6">
            <label htmlFor="quantities" className="block text-sm font-semibold text-primary mb-2">
              Approximate Quantities *
            </label>
            <input
              {...register('quantities')}
              type="text"
              id="quantities"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
              placeholder="e.g., 500 t-shirts, 100 yard signs, 1000 palm cards"
            />
            {errors.quantities && (
              <p className="mt-1 text-sm text-red-600">{errors.quantities.message}</p>
            )}
          </div>

          {/* Timeline */}
          <div className="mt-6">
            <label htmlFor="timeline" className="block text-sm font-semibold text-primary mb-2">
              Timeline/Key Dates *
            </label>
            <textarea
              {...register('timeline')}
              id="timeline"
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-none"
              placeholder="e.g., Need by March 15th for primary, rally on March 20th"
            />
            {errors.timeline && (
              <p className="mt-1 text-sm text-red-600">{errors.timeline.message}</p>
            )}
          </div>

          {/* Paid For By */}
          <div className="mt-6">
            <label htmlFor="paidForBy" className="block text-sm font-semibold text-primary mb-2">
              "Paid for by" Line *
            </label>
            <input
              {...register('paidForBy')}
              type="text"
              id="paidForBy"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
              placeholder="e.g., Paid for by Smith for Congress"
            />
            <p className="mt-1 text-xs text-ink">This will be used for FEC disclaimer requirements</p>
            {errors.paidForBy && (
              <p className="mt-1 text-sm text-red-600">{errors.paidForBy.message}</p>
            )}
          </div>

          {/* Notes */}
          <div className="mt-6">
            <label htmlFor="notes" className="block text-sm font-semibold text-primary mb-2">
              Additional Notes
            </label>
            <textarea
              {...register('notes')}
              id="notes"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-none"
              placeholder="Any additional details, special requirements, or questions..."
            />
          </div>

          {/* Consent */}
          <div className="mt-6">
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                {...register('consent')}
                type="checkbox"
                className="w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent mt-1"
              />
              <span className="text-sm text-ink">
                You agree to be contacted about your request via email or phone. *
              </span>
            </label>
            {errors.consent && (
              <p className="mt-1 text-sm text-red-600">{errors.consent.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="w-full sm:w-auto"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Submit Request
                </>
              )}
            </Button>
          </div>
        </form>

        {/* Privacy Notice */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs text-ink">
            <strong>Privacy Notice:</strong> We collect this information to provide you with a custom quote 
            and campaign merchandise services. We do not sell or share your information with third parties. 
            You may request deletion of your information at any time by contacting us.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
