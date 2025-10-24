import React from 'react'
import { Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { trackEvent } from '@/lib/utils'

const Packages: React.FC = () => {
  const packages = [
    {
      name: 'Local Race Kit',
      subtitle: '100–500 pieces',
      description: 'Perfect for city council, school board, and local races',
      price: 'Starting at $500',
      popular: false,
      features: [
        '100-500 total pieces',
        'Basic apparel (t-shirts, hats)',
        'Yard signs (18"x24")',
        'Business cards & palm cards',
        'FEC disclaimer placement',
        'Standard 7-10 day turnaround',
        'Single delivery location',
        'Email support'
      ],
      color: 'primary'
    },
    {
      name: 'Statewide Momentum',
      subtitle: '1k–5k pieces',
      description: 'Comprehensive package for state legislature and congressional races',
      price: 'Starting at $2,500',
      popular: true,
      features: [
        '1,000-5,000 total pieces',
        'Full apparel line (shirts, polos, hoodies)',
        'Large format (banners, signs)',
        'Professional handouts & brochures',
        'Rush proofs (24-48 hours)',
        'Priority production queue',
        'Multi-location delivery',
        'Dedicated account manager',
        'Reorder discounts'
      ],
      color: 'accent'
    },
    {
      name: 'National/Coalition',
      subtitle: '5k+ pieces',
      description: 'Enterprise solution for major campaigns and PACs',
      price: 'Custom pricing',
      popular: false,
      features: [
        '5,000+ pieces (volume discounts)',
        'Premium materials & finishes',
        'Custom design services',
        'White-glove compliance review',
        'Expedited 24-hour proofs',
        'Dedicated production line',
        'Nationwide distribution network',
        'Campaign strategy consultation',
        'Bulk storage & fulfillment',
        'Priority customer success team'
      ],
      color: 'gold'
    }
  ]

  const getColorClasses = (color: string, isPopular: boolean) => {
    if (isPopular) {
      return {
        card: 'border-2 border-accent shadow-soft-lg scale-105',
        header: 'bg-accent text-white',
        button: 'bg-accent hover:bg-accent-600 text-white'
      }
    }
    
    switch (color) {
      case 'accent':
        return {
          card: 'border border-gray-200 shadow-soft hover:shadow-soft-lg',
          header: 'bg-accent-50 text-accent-700',
          button: 'bg-accent hover:bg-accent-600 text-white'
        }
      case 'primary':
        return {
          card: 'border border-gray-200 shadow-soft hover:shadow-soft-lg',
          header: 'bg-primary-50 text-primary-700',
          button: 'bg-primary hover:bg-primary-600 text-white'
        }
      case 'gold':
        return {
          card: 'border border-gray-200 shadow-soft hover:shadow-soft-lg',
          header: 'bg-yellow-50 text-yellow-700',
          button: 'bg-yellow-600 hover:bg-yellow-700 text-white'
        }
      default:
        return {
          card: 'border border-gray-200 shadow-soft hover:shadow-soft-lg',
          header: 'bg-primary-50 text-primary-700',
          button: 'bg-primary hover:bg-primary-600 text-white'
        }
    }
  }

  const handleQuoteRequest = (packageName: string) => {
    trackEvent('package_quote_request', { package: packageName })
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      id="packages" 
      className="py-16 lg:py-24 bg-gray-50" 
      aria-labelledby="packages-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            id="packages-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-primary mb-6"
          >
            Packages built for every race
          </h2>
          <p className="text-xl text-ink max-w-3xl mx-auto">
            From local campaigns to major races, we have packages designed to meet your specific needs and budget. 
            All packages include FEC compliance support.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {packages.map((pkg, index) => {
            const colors = getColorClasses(pkg.color, pkg.popular)
            return (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${colors.card}`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="accent" size="sm">
                      Most Popular
                    </Badge>
                  </div>
                )}

                {/* Header */}
                <div className={`px-8 py-6 ${colors.header}`}>
                  <h3 className="text-2xl font-bold font-heading mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-lg font-semibold mb-2">
                    {pkg.subtitle}
                  </p>
                  <p className="opacity-90">
                    {pkg.description}
                  </p>
                </div>

                {/* Price */}
                <div className="px-8 py-6 border-b border-gray-100">
                  <div className="text-3xl font-bold text-primary">
                    {pkg.price}
                  </div>
                  <p className="text-sm text-ink mt-1">
                    Custom quotes based on specific needs
                  </p>
                </div>

                {/* Features */}
                <div className="px-8 py-6">
                  <ul className="space-y-4">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-ink">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="px-8 pb-8">
                  <button
                    onClick={() => handleQuoteRequest(pkg.name)}
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-soft hover:shadow-soft-lg flex items-center justify-center group ${colors.button}`}
                  >
                    Request Quote
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-soft max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold font-heading text-primary mb-4">
              Need something different?
            </h3>
            <p className="text-lg text-ink mb-6">
              Every campaign is unique. We offer fully custom packages tailored to your specific needs, 
              timeline, and budget. No minimums, no maximums – just what works for your race.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => {
                  trackEvent('custom_package_request')
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                variant="primary"
                size="lg"
              >
                Request Custom Package
              </Button>
              <Button 
                onClick={() => {
                  trackEvent('sample_pack_request')
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                variant="outline"
                size="lg"
              >
                Request Sample Pack
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Packages
