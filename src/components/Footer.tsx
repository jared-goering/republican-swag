import React from 'react'
import { trackEvent } from '@/lib/utils'

const Footer: React.FC = () => {
  const handleLinkClick = (linkType: string) => {
    trackEvent('footer_link_click', { link_type: linkType })
  }

  return (
    <footer className="bg-primary text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold font-heading mb-4">Republican Swag</h3>
            <p className="text-primary-200">
              American-made merchandise for Republican campaigns. Printed in the Midwest with campaign-grade quality control.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-heading mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => {
                    handleLinkClick('products')
                    document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    handleLinkClick('compliance')
                    document.getElementById('compliance')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  FEC Compliance
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    handleLinkClick('resources')
                    document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Resources
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="text-lg font-semibold font-heading mb-4">Legal & Compliance</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/terms" 
                  className="text-primary-200 hover:text-white transition-colors"
                  onClick={() => handleLinkClick('terms')}
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="/privacy" 
                  className="text-primary-200 hover:text-white transition-colors"
                  onClick={() => handleLinkClick('privacy')}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="/accessibility" 
                  className="text-primary-200 hover:text-white transition-colors"
                  onClick={() => handleLinkClick('accessibility')}
                >
                  Accessibility Statement
                </a>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-primary-800 rounded-lg">
              <p className="text-xs text-primary-200">
                <strong>Compliance Notice:</strong> We provide operational guidance for FEC compliance but are not legal advisors. 
                Consult your campaign attorney for legal advice on political advertising requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-200 text-sm">
            © 2024 Republican Swag. All rights reserved. Made in the USA.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-primary-200 text-sm">
              Proudly serving Republican campaigns nationwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
