import React from 'react'
import { Button } from '@/components/ui/Button'

const ValueProps: React.FC = () => {
  const valueProps = [
    {
      title: 'Launch Fast, Look Professional',
      subtitle: 'Campaign Operations',
      description: 'We source U.S.-made blanks, print in the Midwest, and turn around production quickly — so you\'re never showing up to an event with last-minute, low-quality swag.',
      gradient: 'from-primary-600 via-primary-700 to-primary-800',
      theme: 'dark'
    },
    {
      title: 'Built for Republican Campaigns',
      subtitle: 'Communications Team',
      description: 'We work exclusively with Republican candidates and committees. You don\'t have to explain timelines, pressure, or what\'s at stake. We\'re already operating on campaign speed.',
      gradient: 'from-neutral-700 via-neutral-800 to-neutral-900',
      theme: 'dark'
    },
    {
      title: 'Fundraising-Ready Gear',
      subtitle: 'Finance Team',
      description: 'We help you choose pieces that actually convert — hats, tees, outerwear, donor bundles. The goal is not just "have merch," it\'s "turn enthusiasm into dollars."',
      gradient: 'from-accent-600 via-accent-700 to-accent-800',
      theme: 'dark'
    },
    {
      title: 'FEC Compliance Support',
      subtitle: 'Legal & Compliance',
      description: 'We apply required disclaimers, align pricing with contribution rules, and provide fulfillment documentation so your treasurer or compliance vendor has what they need.',
      gradient: 'from-gold-600 via-gold-700 to-gold-800',
      theme: 'dark'
    }
  ]


  return (
    <section className="section-spacing bg-white" aria-labelledby="value-props-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center component-spacing">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full mb-6 border border-primary-200/50">
            <span className="text-sm font-bold text-primary-700 uppercase tracking-wider">
              ⚡ Campaign Solutions
            </span>
          </div>
          
          <h2 
            id="value-props-heading"
            className="text-display font-heading text-primary element-spacing tracking-tight"
          >
            Everything Your Campaign Needs
          </h2>
          <p className="text-body-large text-neutral-700 max-w-4xl mx-auto">
            From grassroots organizing to major events, we deliver the quality, speed, and compliance support 
            that Republican candidates need to win.
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Top Row - Two Compact Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div
              className={`relative overflow-hidden rounded-3xl lg:aspect-[5/3] min-h-[320px] lg:min-h-[280px] bg-gradient-to-br ${valueProps[0].gradient} group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover-lift`}
            >
              {/* Background pattern overlay */}
              <div className="absolute inset-0 bg-subtle-pattern opacity-10"></div>
              
              <div className="relative h-full flex flex-col justify-center p-6 sm:p-8 lg:p-8 text-white">
                <div className="space-y-4 sm:space-y-3">
                  <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                    <p className="text-xs font-bold uppercase tracking-wider text-white">
                      {valueProps[0].subtitle}
                    </p>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight text-white font-heading">
                    {valueProps[0].title}
                  </h3>
                  
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-white/95">
                    {valueProps[0].description}
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`relative overflow-hidden rounded-3xl lg:aspect-[5/3] min-h-[320px] lg:min-h-[280px] bg-gradient-to-br ${valueProps[1].gradient} group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover-lift`}
            >
              {/* Background pattern overlay */}
              <div className="absolute inset-0 bg-subtle-pattern opacity-10"></div>
              
              <div className="relative h-full flex flex-col justify-center p-6 sm:p-8 lg:p-8 text-white">
                <div className="space-y-4 sm:space-y-3">
                  <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                    <p className="text-xs font-bold uppercase tracking-wider text-white">
                      {valueProps[1].subtitle}
                    </p>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight text-white font-heading">
                    {valueProps[1].title}
                  </h3>
                  
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-white/95">
                    {valueProps[1].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row - Two More Compact Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div
              className={`relative overflow-hidden rounded-3xl lg:aspect-[5/3] min-h-[320px] lg:min-h-[280px] bg-gradient-to-br ${valueProps[2].gradient} group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover-lift`}
            >
              {/* Background pattern overlay */}
              <div className="absolute inset-0 bg-subtle-pattern opacity-10"></div>
              
              <div className="relative h-full flex flex-col justify-center p-6 sm:p-8 lg:p-8 text-white">
                <div className="space-y-4 sm:space-y-3">
                  <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                    <p className="text-xs font-bold uppercase tracking-wider text-white">
                      {valueProps[2].subtitle}
                    </p>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight text-white font-heading">
                    {valueProps[2].title}
                  </h3>
                  
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-white/95">
                    {valueProps[2].description}
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`relative overflow-hidden rounded-3xl lg:aspect-[5/3] min-h-[320px] lg:min-h-[280px] bg-gradient-to-br ${valueProps[3].gradient} group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover-lift`}
            >
              {/* Background pattern overlay */}
              <div className="absolute inset-0 bg-subtle-pattern opacity-10"></div>
              
              <div className="relative h-full flex flex-col justify-center p-6 sm:p-8 lg:p-8 text-white">
                <div className="space-y-4 sm:space-y-3">
                  <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                    <p className="text-xs font-bold uppercase tracking-wider text-white">
                      {valueProps[3].subtitle}
                    </p>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight text-white font-heading">
                    {valueProps[3].title}
                  </h3>
                  
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-white/95">
                    {valueProps[3].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center mt-20">
          <div className="glass-patriotic rounded-3xl p-12 max-w-2xl mx-auto border border-white/30">
            <h3 className="text-heading-2 font-heading text-primary-800 mb-4">
              Ready to see what we can do for your campaign?
            </h3>
            <p className="text-body text-primary-700 mb-8">
              Join hundreds of Republican campaigns who trust us with their merchandise needs.
            </p>
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              variant="primary"
              size="lg"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              }
              iconPosition="right"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValueProps
