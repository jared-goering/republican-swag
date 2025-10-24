'use client'

import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ValueProps from '@/components/ValueProps'
import Categories from '@/components/Categories'
import HowItWorks from '@/components/HowItWorks'
import Compliance from '@/components/Compliance'
import CTASection from '@/components/CTASection'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/Button'
import { MessageCircle } from 'lucide-react'
import { trackEvent } from '@/lib/utils'

export default function Home() {
  const [showContactModal, setShowContactModal] = useState(false)
  const [showFloatingCTA, setShowFloatingCTA] = useState(false)

  // Show floating CTA on mobile after scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 800
      setShowFloatingCTA(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleFloatingCTAClick = () => {
    trackEvent('floating_cta_click')
    setShowContactModal(true)
  }

  const handleModalClose = () => {
    setShowContactModal(false)
  }

  return (
    <>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main id="main-content" className="pt-20">
        <Hero />
        <ValueProps />
        <Categories />
        <HowItWorks />
        <Compliance />
        <CTASection />
        
        {/* Contact Form Section */}
        <section id="contact" className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Enhanced Floating CTA Button - Mobile Only */}
      {showFloatingCTA && (
        <div className="fixed bottom-8 right-6 z-40 lg:hidden animate-scale-in">
          <Button
            onClick={handleFloatingCTAClick}
            size="lg"
            className="rounded-full shadow-patriotic hover:shadow-2xl transform hover:scale-110 transition-all duration-300 px-8 py-4 animate-pulse-glow"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            <span className="font-bold">Start Order</span>
          </Button>
        </div>
      )}

      {/* Contact Modal */}
      {showContactModal && (
        <ContactForm 
          isModal={true} 
          onClose={handleModalClose}
        />
      )}
    </>
  )
}