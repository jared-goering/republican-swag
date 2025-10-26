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
  const [currentStep, setCurrentStep] = useState(1)
  const [formStarted, setFormStarted] = useState(false)

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
    if (!formStarted) {
      setFormStarted(true)
      trackEvent('form_start', { modal: isModal })
    }
  }

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 3))
    trackEvent('form_step_advance', { step: currentStep + 1 })
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const getStepProgress = () => {
    return (currentStep / 3) * 100
  }

  const selectedProducts = watch('products') || []

  return (
    <div className={isModal ? 'fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4' : ''}>
      <div className={`bg-white rounded-2xl shadow-soft-lg ${isModal ? 'max-w-2xl w-full max-h-[90vh] overflow-y-auto' : 'max-w-4xl mx-auto'} p-8`}>
        {/* Enhanced Header with Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-heading-1 font-heading text-primary mb-2">
                Start Your Order
              </h2>
              <p className="text-body text-neutral-600">
                Tell us about your campaign and we'll get you a custom quote within 24-48 hours.
              </p>
            </div>
            {isModal && onClose && (
              <button
                onClick={onClose}
                className="p-2 text-neutral-600 hover:text-primary transition-colors rounded-lg hover:bg-neutral-100"
                aria-label="Close form"
              >
                <X className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Progress Bar */}
          {formStarted && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-caption text-neutral-600 font-semibold">
                  Step {currentStep} of 3
                </span>
                <span className="text-caption text-neutral-600">
                  {Math.round(getStepProgress())}% Complete
                </span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-accent-600 to-accent-700 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${getStepProgress()}%` }}
                />
              </div>
              
              {/* Step Labels */}
              <div className="flex justify-between mt-3">
                <span className={`text-xs font-medium ${currentStep >= 1 ? 'text-accent-600' : 'text-neutral-400'}`}>
                  Campaign Info
                </span>
                <span className={`text-xs font-medium ${currentStep >= 2 ? 'text-accent-600' : 'text-neutral-400'}`}>
                  Product Details
                </span>
                <span className={`text-xs font-medium ${currentStep >= 3 ? 'text-accent-600' : 'text-neutral-400'}`}>
                  Timeline & Notes
                </span>
              </div>
            </div>
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

        {/* Enhanced Progressive Form */}
        <form onSubmit={handleSubmit(onSubmit)} onFocus={handleFormStart}>
          {/* Step 1: Campaign Information */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-slide-up">
              <div className="text-center mb-8">
                <h3 className="text-heading-2 font-heading text-primary mb-2">
                  Campaign Information
                </h3>
                <p className="text-body text-neutral-600">
                  Let's start with the basics about your campaign
                </p>
              </div>
              
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
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
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
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
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
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
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
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
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
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
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
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              
              {/* Step 1 Navigation */}
              <div className="flex justify-end mt-8">
                <Button
                  type="button"
                  onClick={nextStep}
                  variant="primary"
                  size="lg"
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  }
                  iconPosition="right"
                >
                  Continue to Products
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Product Details */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-slide-up">
              <div className="text-center mb-8">
                <h3 className="text-heading-2 font-heading text-primary mb-2">
                  Product Details
                </h3>
                <p className="text-body text-neutral-600">
                  Tell us what merchandise you need for your campaign
                </p>
              </div>

              {/* Products Needed */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-3">
                  Products Needed * (Select all that apply)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {productOptions.map((product) => (
                    <label key={product} className="flex items-center space-x-3 cursor-pointer p-3 border border-neutral-200 rounded-lg hover:border-accent-300 hover:bg-accent-50 transition-colors">
                      <input
                        {...register('products')}
                        type="checkbox"
                        value={product}
                        className="w-4 h-4 text-accent border-neutral-300 rounded focus:ring-accent"
                      />
                      <span className="text-neutral-700 font-medium">{product}</span>
                    </label>
                  ))}
                </div>
                {errors.products && (
                  <p className="mt-1 text-sm text-red-600">{errors.products.message}</p>
                )}
              </div>

              {/* Quantities */}
              <div>
                <label htmlFor="quantities" className="block text-sm font-semibold text-primary mb-2">
                  Approximate Quantities *
                </label>
                <input
                  {...register('quantities')}
                  type="text"
                  id="quantities"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                  placeholder="e.g., 500 t-shirts, 100 yard signs, 1000 palm cards"
                />
                <p className="mt-1 text-xs text-neutral-600">
                  Don't worry about exact numbers - we'll help you determine the right quantities
                </p>
                {errors.quantities && (
                  <p className="mt-1 text-sm text-red-600">{errors.quantities.message}</p>
                )}
              </div>

              {/* Paid For By */}
              <div>
                <label htmlFor="paidForBy" className="block text-sm font-semibold text-primary mb-2">
                  "Paid for by" Line *
                </label>
                <input
                  {...register('paidForBy')}
                  type="text"
                  id="paidForBy"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                  placeholder="e.g., Paid for by Smith for Congress"
                />
                <p className="mt-1 text-xs text-neutral-600">This will be used for FEC disclaimer requirements</p>
                {errors.paidForBy && (
                  <p className="mt-1 text-sm text-red-600">{errors.paidForBy.message}</p>
                )}
              </div>

              {/* Step 2 Navigation */}
              <div className="flex justify-between mt-8">
                <Button
                  type="button"
                  onClick={prevStep}
                  variant="outline"
                  size="lg"
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                  }
                >
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={nextStep}
                  variant="primary"
                  size="lg"
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  }
                  iconPosition="right"
                >
                  Continue to Timeline
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Timeline & Notes */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-slide-up">
              <div className="text-center mb-8">
                <h3 className="text-heading-2 font-heading text-primary mb-2">
                  Timeline & Additional Details
                </h3>
                <p className="text-body text-neutral-600">
                  Help us understand your timeline and any special requirements
                </p>
              </div>

              {/* Timeline */}
              <div>
                <label htmlFor="timeline" className="block text-sm font-semibold text-primary mb-2">
                  Timeline/Key Dates *
                </label>
                <textarea
                  {...register('timeline')}
                  id="timeline"
                  rows={3}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-none"
                  placeholder="e.g., Need by March 15th for primary, rally on March 20th"
                />
                <p className="mt-1 text-xs text-neutral-600">
                  Include any key dates, events, or deadlines we should know about
                </p>
                {errors.timeline && (
                  <p className="mt-1 text-sm text-red-600">{errors.timeline.message}</p>
                )}
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="notes" className="block text-sm font-semibold text-primary mb-2">
                  Additional Notes
                </label>
                <textarea
                  {...register('notes')}
                  id="notes"
                  rows={4}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-none"
                  placeholder="Any additional details, special requirements, or questions..."
                />
                <p className="mt-1 text-xs text-neutral-600">
                  Tell us about colors, designs, special events, or anything else we should consider
                </p>
              </div>

              {/* Consent */}
              <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    {...register('consent')}
                    type="checkbox"
                    className="w-4 h-4 text-accent border-neutral-300 rounded focus:ring-accent mt-1 flex-shrink-0"
                  />
                  <span className="text-sm text-neutral-700">
                    You agree to be contacted about your request via email or phone. We'll use this information to provide you with a custom quote and campaign merchandise services. *
                  </span>
                </label>
                {errors.consent && (
                  <p className="mt-1 text-sm text-red-600">{errors.consent.message}</p>
                )}
              </div>

              {/* Step 3 Navigation */}
              <div className="flex justify-between mt-8">
                <Button
                  type="button"
                  onClick={prevStep}
                  variant="outline"
                  size="lg"
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                  }
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  loading={isSubmitting}
                  variant="cta"
                  size="lg"
                  icon={
                    <Send className="w-5 h-5" />
                  }
                  iconPosition="right"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </Button>
              </div>
            </div>
          )}
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
