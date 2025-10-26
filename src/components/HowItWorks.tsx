import React from 'react'
import { Upload, CheckCircle, Printer, Truck } from 'lucide-react'
import { Card } from '@/components/ui/Card'

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      icon: <Upload className="w-8 h-8" />,
      title: 'Upload/Brief',
      description: 'Share your design files, campaign details, and requirements. No design? We can help create one.',
      details: ['Upload artwork or brief us on your needs', 'Specify quantities and timeline', 'Choose products and materials', 'Provide campaign information for compliance']
    },
    {
      number: 2,
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Proof & Compliance Check',
      description: 'We review for FEC compliance, optimize for print, and send you a detailed proof within 24-48 hours.',
      details: ['FEC disclaimer placement review', 'Print quality optimization', 'Color matching confirmation', 'Digital proof for approval']
    },
    {
      number: 3,
      icon: <Printer className="w-8 h-8" />,
      title: 'Print in the Midwest',
      description: 'Your order goes into production at our facility with campaign-grade quality control and fast turnaround.',
      details: ['Production at our Midwest facility', 'Quality control at every step', 'Real-time order tracking', 'Rush options available']
    },
    {
      number: 4,
      icon: <Truck className="w-8 h-8" />,
      title: 'Deliver & Replenish',
      description: 'Direct shipping to your events, offices, or distributed delivery. Easy reordering for consistent branding.',
      details: ['Flexible delivery options', 'Event-specific shipping', 'Bulk or distributed delivery', 'Easy reorder process']
    }
  ]

  return (
    <section 
      id="how-it-works" 
      className="py-16 lg:py-24 bg-white" 
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            id="how-it-works-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-primary mb-6"
          >
            How it works
          </h2>
          <p className="text-xl text-ink max-w-3xl mx-auto">
            From concept to delivery, we make campaign merchandise simple, compliant, and fast. 
            Here's our proven 4-step process.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Hidden on mobile */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-20"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <Card variant="elevated" padding="lg" hover={true} className="relative z-10 h-full flex flex-col min-h-[400px]">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8">
                    <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-700 rounded-2xl mb-6 mt-4">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-bold font-heading text-primary mb-4">
                      {step.title}
                    </h3>
                    <p className="text-ink mb-6 leading-relaxed flex-shrink-0">
                      {step.description}
                    </p>

                    {/* Details List */}
                    <ul className="space-y-2 flex-1">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start text-sm text-ink">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>

                {/* Arrow - Only show between steps on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-6 z-20">
                    <div className="w-12 h-12 bg-white rounded-full shadow-soft flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Summary - Mobile */}
        <div className="mt-16 bg-primary-50 rounded-2xl p-8 lg:hidden">
          <h3 className="text-xl font-bold font-heading text-primary mb-4 text-center">
            Typical Timeline
          </h3>
          <div className="flex justify-between items-center text-center">
            <div>
              <div className="text-2xl font-bold text-accent">Day 1</div>
              <div className="text-sm text-ink">Upload & Brief</div>
            </div>
            <div className="w-8 h-0.5 bg-primary-300"></div>
            <div>
              <div className="text-2xl font-bold text-accent">Day 2-3</div>
              <div className="text-sm text-ink">Proof Ready</div>
            </div>
            <div className="w-8 h-0.5 bg-primary-300"></div>
            <div>
              <div className="text-2xl font-bold text-accent">Day 5-7</div>
              <div className="text-sm text-ink">In Production</div>
            </div>
            <div className="w-8 h-0.5 bg-primary-300"></div>
            <div>
              <div className="text-2xl font-bold text-accent">Day 10-14</div>
              <div className="text-sm text-ink">Delivered</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-ink mb-6">
            Ready to get started? The process is easier than you think.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-600 transition-colors duration-200 shadow-soft hover:shadow-soft-lg"
          >
            Start Your Order
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
