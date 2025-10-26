'use client'

import React from 'react'
import { CheckCircle, Flag, Shield, Users } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { scrollToElement, trackEvent } from '@/lib/utils'

const Hero: React.FC = () => {
  const handleCTAClick = () => {
    trackEvent('cta_click', { location: 'hero', action: 'start_order' })
    scrollToElement('contact')
  }

  const trustChips = [
    { text: 'U.S.-made blanks', icon: <Flag size={16} /> },
    { text: 'Midwest facility', icon: <CheckCircle size={16} /> },
    { text: 'Campaign-grade QC', icon: <Shield size={16} /> },
    { text: 'FEC disclaimer support', icon: <Users size={16} /> },
  ]

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center gradient-hero bg-stars overflow-hidden"
      role="banner"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Patriotic gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-accent-200/30 to-accent-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-primary-200/40 to-primary-400/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-gold-200/20 to-gold-400/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Subtle overlay pattern */}
        <div className="absolute inset-0 bg-subtle-pattern opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Logo with Patriotic Elements */}
          <div className="flex justify-center mb-20 animate-scale-in">
            <div className="relative group">
              {/* Patriotic background elements */}
              <div className="absolute -inset-8 bg-gradient-to-r from-accent-100/20 via-white/30 to-primary-100/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="absolute -inset-4 bg-gradient-to-br from-gold-200/30 to-transparent rounded-full blur-xl"></div>
              
              {/* Logo container with enhanced styling */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-patriotic group-hover:shadow-2xl transition-all duration-500 border border-white/50">
                <img 
                  src="/republican swag logo-02.png" 
                  alt="Republican Swag - American-made merchandise for Republican campaigns" 
                  className="h-28 sm:h-32 lg:h-40 w-auto group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Subtle patriotic accent */}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-accent-500 via-white to-primary-500 rounded-full"></div>
              </div>
              
              {/* Floating stars decoration */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-accent-400 rounded-full animate-pulse opacity-60"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary-400 rounded-full animate-pulse opacity-50" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Enhanced Main Headline with Better Hierarchy */}
          <div className="mb-16 animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-100 to-primary-100 rounded-full mb-6 border border-accent-200/50">
              <span className="text-sm font-bold text-primary-700 uppercase tracking-wider">
                🇺🇸 Campaign-Grade Quality
              </span>
            </div>
            
            <h1 className="text-hero font-heading text-primary mb-6 tracking-tight">
              <span className="block mb-2">American-made merch for</span>
              <span className="bg-gradient-to-r from-accent-600 via-accent-500 to-accent-700 bg-clip-text text-transparent block">
                winning campaigns
              </span>
            </h1>

            {/* Enhanced Value Proposition */}
            <p className="text-body-large text-neutral-700 mb-8 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <span className="font-bold text-primary-700">U.S.-made blanks</span> • <span className="font-bold text-primary-700">Midwest printing</span> • <span className="font-bold text-primary-700">Fast turnaround</span> • <span className="font-bold text-primary-700">FEC compliance</span>
            </p>
            
            <p className="text-body text-neutral-600 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
              From grassroots organizing to major rallies, we deliver professional merchandise that converts supporters into donors and volunteers into advocates.
            </p>
          </div>

          {/* Enhanced Primary CTA with Urgency */}
          <div className="mb-24 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col items-center space-y-6">
              <Button 
                onClick={handleCTAClick}
                variant="cta"
                size="xl"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                }
                iconPosition="right"
              >
                Start Your Order
              </Button>
              
              <div className="text-center">
                <p className="text-sm text-neutral-600 font-medium mb-2">
                  ✓ Free consultation • ✓ 24-48hr quotes • ✓ FEC compliant layouts
                </p>
                <div className="inline-flex items-center px-3 py-1 bg-accent-50 border border-accent-200 rounded-full">
                  <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse mr-2"></div>
                  <span className="text-xs font-semibold text-accent-700 uppercase tracking-wide">
                    Rush orders available for campaign deadlines
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Trust Indicators with Better Visual Hierarchy */}
          <div className="mb-16">
            <p className="text-caption text-neutral-600 text-center mb-8 uppercase tracking-wider font-semibold">
              Trusted by Republican campaigns nationwide
            </p>
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
              {trustChips.map((chip, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 glass-patriotic rounded-2xl px-6 py-4 hover-lift animate-fade-in-up group border border-white/30"
                  style={{ animationDelay: `${index * 100 + 600}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {React.cloneElement(chip.icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-primary-800 whitespace-nowrap">
                      {chip.text}
                    </span>
                    <span className="text-xs text-primary-600 opacity-80">
                      {index === 0 && "Quality materials"}
                      {index === 1 && "Local production"}
                      {index === 2 && "Professional standards"}
                      {index === 3 && "Legal compliance"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-3 opacity-70 hover:opacity-100 transition-all duration-300 group">
          <span className="text-sm text-primary font-semibold tracking-wide">Scroll to explore</span>
          <div className="glass-patriotic w-8 h-12 rounded-full flex justify-center items-start pt-3 group-hover:scale-110 transition-transform duration-300">
            <div className="w-1.5 h-4 bg-gradient-to-b from-accent-500 to-primary-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}

export default Hero
