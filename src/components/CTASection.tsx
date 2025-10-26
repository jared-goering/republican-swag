import React from 'react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ArrowRight } from 'lucide-react'
import { trackEvent } from '@/lib/utils'

const CTASection: React.FC = () => {
  const handleStartOrder = () => {
    trackEvent('cta_click', { location: 'cta_section', action: 'start_order' })
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <section className="section-spacing bg-gradient-to-br from-primary-700 to-primary-900 text-white relative">
      {/* Single subtle dot pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 2px, transparent 2px)',
        backgroundSize: '50px 50px'
      }}></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Clean, focused headline */}
        <h2 className="text-display font-heading mb-6 leading-tight text-white">
          Gear that's ready for{' '}
          <span className="text-accent-300">the trail</span>
        </h2>

        {/* Simple subheading */}
        <p className="text-body-large text-primary-100 mb-12 max-w-3xl mx-auto">
          From grassroots organizing to victory celebrations, we deliver the professional merchandise 
          that helps Republican campaigns win hearts, minds, and elections.
        </p>

        {/* Single, prominent CTA */}
        <Button 
          onClick={handleStartOrder}
          variant="primary"
          size="xl"
          icon={<ArrowRight className="w-6 h-6" />}
          iconPosition="right"
        >
          Start an Order
        </Button>
      </div>
    </section>
  )
}

export default CTASection

