'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn, scrollToElement, trackEvent } from '@/lib/utils'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    // Set initial state
    setIsScrolled(window.scrollY > 50)

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { label: 'Products', href: 'categories' },
    { label: 'How it Works', href: 'how-it-works' },
    { label: 'Compliance', href: 'compliance' },
  ]

  const handleNavClick = (href: string) => {
    trackEvent('nav_click', { section: href })
    scrollToElement(href)
    setIsMenuOpen(false)
  }

  const handleCTAClick = () => {
    trackEvent('cta_click', { location: 'header' })
    scrollToElement('contact')
  }

  return (
    <>
      {/* Skip link for accessibility */}
      <a 
        href="#main-content" 
        className="skip-link"
        onFocus={() => trackEvent('skip_link_focus')}
      >
        Skip to main content
      </a>
      
      <header 
        className="fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 pointer-events-none"
        role="banner"
      >
        <div className="flex justify-center pt-4 px-4">
          <div className={cn(
            'flex items-center justify-between transition-all duration-500 pointer-events-auto',
            'rounded-full px-6 py-3 max-w-4xl w-full',
            isScrolled 
              ? 'glass-header-pill shadow-2xl' 
              : 'bg-white/85 backdrop-blur-sm shadow-lg border border-white/30'
          )}>
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => {
                  trackEvent('logo_click')
                  scrollToElement('hero')
                }}
                className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
                aria-label="Go to top of page"
              >
                <img 
                  src="/republican swag logo-02.png" 
                  alt="Republican Swag" 
                  className="h-8 w-auto"
                />
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6" role="navigation" aria-label="Main navigation">
              {navigationItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-primary-700 hover:text-accent transition-colors font-medium text-sm"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex">
              <Button 
                onClick={handleCTAClick} 
                variant="primary"
                size="sm"
                icon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                }
                iconPosition="right"
              >
                Start an Order
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-primary hover:text-accent transition-colors"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation Pill */}
        {isMenuOpen && (
          <div className="flex justify-center pt-2 px-4 lg:hidden">
            <div 
              id="mobile-menu"
              className="glass-header-pill shadow-2xl animate-slide-up rounded-2xl px-6 py-6 max-w-sm w-full"
            >
              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-center px-4 py-3 text-primary-700 hover:text-accent-600 hover:bg-white/20 rounded-xl transition-all duration-300 font-medium text-sm"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-2">
                  <Button 
                    onClick={handleCTAClick} 
                    variant="primary"
                    size="md"
                    className="w-full"
                    icon={
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    }
                    iconPosition="right"
                  >
                    Start an Order
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header
