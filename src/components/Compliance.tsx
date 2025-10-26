import React from 'react'
import { Shield, FileCheck, AlertTriangle, BookOpen } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'

const Compliance: React.FC = () => {
  const compliancePoints = [
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: 'FEC disclaimers placed where required',
      description: 'We ensure proper "Paid for by" disclaimers on all applicable materials per FEC guidelines.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Small-item/impracticability exceptions observed',
      description: 'Items too small for disclaimers (buttons, pens) are handled according to FEC small item rules.'
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: '"Made in USA" claims qualified if not all-U.S.',
      description: 'We clearly distinguish between U.S.-made blanks and imported alternatives with proper labeling.'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Documentation on file',
      description: 'Complete records of materials, sourcing, and compliance decisions maintained for your campaign.'
    }
  ]

  return (
    <section 
      id="compliance"
      className="py-16 lg:py-24 bg-white" 
      aria-labelledby="compliance-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Compliance Callout */}
        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-12 mb-16 border border-primary-100">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 text-accent-700 rounded-2xl mb-6">
              <Shield className="w-8 h-8" />
            </div>
            
            <h2 
              id="compliance-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-primary mb-6"
            >
              FEC Compliance Made Simple
            </h2>
            
            <p className="text-xl text-ink mb-8 leading-relaxed">
              Navigate campaign finance regulations with confidence. Our team understands FEC requirements 
              and ensures your merchandise meets all applicable compliance standards.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="accent" size="md">FEC Compliant</Badge>
              <Badge variant="outline" size="md">Documentation Included</Badge>
              <Badge variant="default" size="md">Expert Review</Badge>
            </div>
          </div>
        </div>

        {/* Compliance Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {compliancePoints.map((point, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent-100 text-accent-700 rounded-xl flex items-center justify-center">
                    {point.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {point.title}
                  </h3>
                  <p className="text-ink leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Compliance
