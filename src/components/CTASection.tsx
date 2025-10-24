import React from 'react'
import { ArrowRight, Package } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { trackEvent } from '@/lib/utils'

const CTASection: React.FC = () => {
  const handleStartOrder = () => {
    trackEvent('cta_click', { location: 'cta_section', action: 'start_order' })
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSamplePack = () => {
    trackEvent('cta_click', { location: 'cta_section', action: 'sample_pack' })
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-primary-800 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-heading mb-6 leading-tight">
            Gear that's ready for{' '}
            <span className="text-accent-200">the trail</span>
          </h2>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-primary-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            From grassroots organizing to victory celebrations, we've got the merchandise 
            that helps Republican campaigns win hearts, minds, and elections.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={handleStartOrder}
              size="lg"
              className="bg-accent hover:bg-accent-600 text-white shadow-soft-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-xl px-8 py-4"
            >
              Start an Order
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            
            <Button 
              onClick={handleSamplePack}
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary shadow-soft-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-xl px-8 py-4"
            >
              <Package className="w-5 h-5 mr-2" />
              Request Sample Pack
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent-200 mb-2">500+</div>
              <div className="text-primary-200">Republican campaigns served</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent-200 mb-2">48hr</div>
              <div className="text-primary-200">Average proof turnaround</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent-200 mb-2">99.8%</div>
              <div className="text-primary-200">Quality approval rate</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent-200 mb-2">100%</div>
              <div className="text-primary-200">FEC compliance focus</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full translate-x-48 translate-y-48"></div>
    </section>
  )
}

export default CTASection
