import React from 'react'

const ValueProps: React.FC = () => {
  const valueProps = [
    {
      title: 'Ship Your Campaign Quickly',
      subtitle: 'Fast Production',
      description: 'From design to delivery, we move at campaign speed. Rush options available for last-minute events and urgent needs.',
      gradient: 'from-primary-600 via-primary-700 to-primary-800',
      theme: 'dark'
    },
    {
      title: 'Built by the Streets, Made for You',
      subtitle: 'American Manufacturing',
      description: 'Every piece crafted in our Midwest facility with union-friendly practices and campaign-grade quality control.',
      gradient: 'from-neutral-700 via-neutral-800 to-neutral-900',
      theme: 'dark'
    },
    {
      title: 'Elevate Your Street Game',
      subtitle: 'Premium Quality',
      description: 'From bold graphics to premium materials, everything you need to make your campaign stand out from the crowd.',
      gradient: 'from-accent-600 via-accent-700 to-accent-800',
      theme: 'dark'
    },
    {
      title: 'FEC Compliant & Campaign Ready',
      subtitle: 'Legal Expertise',
      description: 'Expert guidance on disclaimer placement and sizing. We handle compliance so you can focus on winning.',
      gradient: 'from-gold-600 via-gold-700 to-gold-800',
      theme: 'dark'
    }
  ]


  return (
    <section className="py-12 lg:py-16 bg-white" aria-labelledby="value-props-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            id="value-props-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-primary mb-8 tracking-tight"
          >
            Everything Your Campaign Needs
          </h2>
          <p className="text-xl lg:text-2xl text-ink max-w-4xl mx-auto font-light leading-relaxed">
            From grassroots organizing to major events, we deliver the quality, speed, and compliance support 
            that Republican candidates need to win.
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Top Row - Two Compact Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div
              className={`relative overflow-hidden rounded-3xl aspect-[5/3] min-h-[280px] bg-gradient-to-br ${valueProps[0].gradient} group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover-lift`}
            >
              {/* Background pattern overlay */}
              <div className="absolute inset-0 bg-subtle-pattern opacity-10"></div>
              
              <div className="relative h-full flex flex-col justify-center p-6 lg:p-8 text-white">
                <div className="space-y-3">
                  <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                    <p className="text-xs font-bold uppercase tracking-wider text-white">
                      {valueProps[0].subtitle}
                    </p>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold leading-tight text-white font-heading">
                    {valueProps[0].title}
                  </h3>
                  
                  <p className="text-base lg:text-lg leading-relaxed text-white/95">
                    {valueProps[0].description}
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`relative overflow-hidden rounded-3xl aspect-[5/3] min-h-[280px] bg-gradient-to-br ${valueProps[1].gradient} group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover-lift`}
            >
              {/* Background pattern overlay */}
              <div className="absolute inset-0 bg-subtle-pattern opacity-10"></div>
              
              <div className="relative h-full flex flex-col justify-center p-6 lg:p-8 text-white">
                <div className="space-y-3">
                  <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                    <p className="text-xs font-bold uppercase tracking-wider text-white">
                      {valueProps[1].subtitle}
                    </p>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold leading-tight text-white font-heading">
                    {valueProps[1].title}
                  </h3>
                  
                  <p className="text-base lg:text-lg leading-relaxed text-white/95">
                    {valueProps[1].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row - Two More Compact Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div
              className={`relative overflow-hidden rounded-3xl aspect-[5/3] min-h-[280px] bg-gradient-to-br ${valueProps[2].gradient} group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover-lift`}
            >
              {/* Background pattern overlay */}
              <div className="absolute inset-0 bg-subtle-pattern opacity-10"></div>
              
              <div className="relative h-full flex flex-col justify-center p-6 lg:p-8 text-white">
                <div className="space-y-3">
                  <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                    <p className="text-xs font-bold uppercase tracking-wider text-white">
                      {valueProps[2].subtitle}
                    </p>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold leading-tight text-white font-heading">
                    {valueProps[2].title}
                  </h3>
                  
                  <p className="text-base lg:text-lg leading-relaxed text-white/95">
                    {valueProps[2].description}
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`relative overflow-hidden rounded-3xl aspect-[5/3] min-h-[280px] bg-gradient-to-br ${valueProps[3].gradient} group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover-lift`}
            >
              {/* Background pattern overlay */}
              <div className="absolute inset-0 bg-subtle-pattern opacity-10"></div>
              
              <div className="relative h-full flex flex-col justify-center p-6 lg:p-8 text-white">
                <div className="space-y-3">
                  <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                    <p className="text-xs font-bold uppercase tracking-wider text-white">
                      {valueProps[3].subtitle}
                    </p>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold leading-tight text-white font-heading">
                    {valueProps[3].title}
                  </h3>
                  
                  <p className="text-base lg:text-lg leading-relaxed text-white/95">
                    {valueProps[3].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center mt-20">
          <div className="glass-patriotic rounded-3xl p-12 max-w-2xl mx-auto">
            <p className="text-xl text-primary-700 mb-8 font-semibold">
              Ready to see what we can do for your campaign?
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-accent-600 to-accent-700 text-white font-bold rounded-2xl hover:from-accent-700 hover:to-accent-800 transition-all duration-300 shadow-patriotic hover:shadow-2xl transform hover:-translate-y-1 uppercase tracking-wide"
            >
              Get Started Today
              <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValueProps
