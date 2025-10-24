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
          {/* Logo with enhanced styling */}
          <div className="flex justify-center mb-16 animate-scale-in">
            <div className="relative">
              <img 
                src="/republican swag logo-02.png" 
                alt="Republican Swag" 
                className="h-24 sm:h-28 lg:h-36 w-auto drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-36 sm:h-36 lg:w-44 lg:h-44 bg-gradient-to-br from-gold-400/15 via-accent-300/10 to-transparent rounded-full blur-xl -z-10"></div>
            </div>
          </div>

          {/* Main Headline with improved hierarchy */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading text-primary mb-10 leading-[1.1] tracking-tight animate-slide-up">
            <span className="block mb-2">American-made merch for</span>
            <span className="bg-gradient-to-r from-accent-600 via-accent-500 to-accent-700 bg-clip-text text-transparent">
              Republican campaigns
            </span>
          </h1>

          {/* Enhanced Subheading */}
          <p className="text-lg sm:text-xl lg:text-2xl text-neutral-600 mb-16 max-w-4xl mx-auto leading-relaxed font-light animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="font-semibold text-primary">U.S.-made blanks</span>, <span className="font-semibold text-primary">Midwest printing</span>, fast proofs, and <span className="font-semibold text-primary">FEC-savvy layouts</span>. 
            <br className="hidden sm:block" />
            Everything you need to gear up for the campaign trail.
          </p>

          {/* Enhanced Primary CTA */}
          <div className="mb-24 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={handleCTAClick}
              size="lg"
              className="text-xl px-16 py-6 shadow-patriotic hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 rounded-2xl font-bold uppercase tracking-wide hover-glow relative overflow-hidden group"
            >
              <span className="relative z-10">Start an Order</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            <p className="text-sm text-neutral-500 mt-4 font-medium">Free consultation • Fast turnaround • FEC compliant</p>
          </div>

          {/* Compact Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-16 max-w-4xl mx-auto">
            {trustChips.map((chip, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 glass-patriotic rounded-full px-6 py-3 hover-lift animate-fade-in-up group"
                style={{ animationDelay: `${index * 100 + 600}ms` }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(chip.icon, { className: "w-5 h-5 text-white" })}
                </div>
                <span className="text-sm font-semibold text-primary-800 whitespace-nowrap">
                  {chip.text}
                </span>
              </div>
            ))}
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
