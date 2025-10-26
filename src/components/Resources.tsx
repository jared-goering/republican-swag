import React from 'react'
import { Download, FileText, CheckSquare, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { trackEvent } from '@/lib/utils'

const Resources: React.FC = () => {
  const resources = [
    {
      icon: <CheckSquare className="w-8 h-8" />,
      title: 'FEC Disclaimer Checklist',
      subtitle: 'Print & Digital',
      description: 'Complete checklist covering FEC disclaimer requirements for all types of campaign materials, including sizing, placement, and exceptions.',
      format: 'PDF Guide',
      pages: '8 pages',
      color: 'accent'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Made in USA Claims',
      subtitle: 'Quick Guide',
      description: 'Navigate "Made in USA" labeling requirements and understand when and how to make these claims on campaign merchandise.',
      format: 'PDF Reference',
      pages: '4 pages',
      color: 'primary'
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'accent':
        return {
          bg: 'bg-accent-50 group-hover:bg-accent-100',
          icon: 'bg-accent-100 text-accent-700 group-hover:bg-accent-200',
          button: 'bg-accent hover:bg-accent-600 text-white'
        }
      case 'primary':
        return {
          bg: 'bg-primary-50 group-hover:bg-primary-100',
          icon: 'bg-primary-100 text-primary-700 group-hover:bg-primary-200',
          button: 'bg-primary hover:bg-primary-600 text-white'
        }
      default:
        return {
          bg: 'bg-primary-50 group-hover:bg-primary-100',
          icon: 'bg-primary-100 text-primary-700 group-hover:bg-primary-200',
          button: 'bg-primary hover:bg-primary-600 text-white'
        }
    }
  }

  const handleResourceDownload = (resourceTitle: string) => {
    trackEvent('resource_download', { resource: resourceTitle })
    // In a real implementation, this would trigger the actual download
    // For now, we'll show the contact form
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      id="resources" 
      className="py-16 lg:py-24 bg-white" 
      aria-labelledby="resources-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            id="resources-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-primary mb-6"
          >
            Free campaign resources
          </h2>
          <p className="text-xl text-ink max-w-3xl mx-auto">
            Download our expert guides to help navigate FEC compliance and campaign merchandise best practices. 
            These resources are free for all Republican campaigns.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, index) => {
            const colors = getColorClasses(resource.color)
            return (
              <div 
                key={index}
                className={`group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg ${colors.bg}`}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 ${colors.icon}`}>
                  {resource.icon}
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold font-heading text-primary mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-lg font-semibold text-accent mb-4">
                    {resource.subtitle}
                  </p>
                  <p className="text-ink leading-relaxed mb-4">
                    {resource.description}
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-ink">
                    <span className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      {resource.format}
                    </span>
                    <span>{resource.pages}</span>
                  </div>
                </div>

                {/* Download Button */}
                <button
                  onClick={() => handleResourceDownload(resource.title)}
                  className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-soft hover:shadow-soft-lg group/btn ${colors.button}`}
                >
                  <Download className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                  Download Free Guide
                </button>
              </div>
            )
          })}
        </div>

        {/* Additional Resources Section */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold font-heading text-primary mb-6">
              Need more help?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-100 text-accent-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-primary mb-2">Custom Compliance Review</h4>
                <p className="text-sm text-ink">Get your specific materials reviewed for FEC compliance</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 text-primary-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-primary mb-2">Design Consultation</h4>
                <p className="text-sm text-ink">Work with our team to create compliant, effective designs</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 text-yellow-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckSquare className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-primary mb-2">Campaign Strategy</h4>
                <p className="text-sm text-ink">Merchandise strategy aligned with your campaign goals</p>
              </div>
            </div>

            <p className="text-lg text-ink mb-6">
              Our team has worked with Republican campaigns at every level. We're here to help you succeed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => {
                  trackEvent('consultation_request')
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                variant="primary"
                size="lg"
              >
                Schedule Consultation
              </Button>
              <Button 
                onClick={() => {
                  trackEvent('question_submit')
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                variant="outline"
                size="lg"
              >
                Ask a Question
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-ink max-w-2xl mx-auto">
            <strong>Note:</strong> These resources provide operational guidance based on our experience 
            with campaign merchandise. They are not legal advice. Always consult with your campaign 
            attorney for legal guidance on political advertising requirements.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Resources

