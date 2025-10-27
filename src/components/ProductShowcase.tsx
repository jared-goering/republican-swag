'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { scrollToElement, trackEvent } from '@/lib/utils'

const ProductShowcase: React.FC = () => {

  const products = [
    {
      id: 1,
      name: 'Campaign T-Shirts',
      category: 'apparel',
      image: '/images/products/tshirt-preview.jpg',
      description: 'Premium cotton tees with professional screen printing',
      features: ['U.S.-made blanks', 'Fade-resistant inks', 'Multiple colors'],
      price: '',
      popular: true
    },
    {
      id: 2,
      name: 'Yard Signs',
      category: 'signage',
      image: '/images/products/yard-sign-preview.jpg',
      description: 'Weather-resistant corrugated plastic signs',
      features: ['Full-color printing', 'Stakes included', 'Custom sizes'],
      price: '',
      popular: true
    },
    {
      id: 3,
      name: 'Campaign Hats',
      category: 'apparel',
      image: '/images/products/hat-preview.png',
      description: 'Structured caps with embroidered logos',
      features: ['Adjustable fit', 'Premium embroidery', 'Multiple styles'],
      price: '',
      popular: false
    },
    {
      id: 4,
      name: 'Palm Cards',
      category: 'handouts',
      image: '/images/products/palm-card-preview.jpg',
      description: 'Professional voter information cards',
      features: ['High-quality cardstock', 'Double-sided printing', 'FEC compliant'],
      price: '',
      popular: false
    },
    {
      id: 5,
      name: 'Banners',
      category: 'signage',
      image: '/images/products/banner-preview.jpg',
      description: 'Vinyl banners for events and rallies',
      features: ['Weather-resistant', 'Grommets included', 'Custom sizing'],
      price: '',
      popular: false
    },
    {
      id: 6,
      name: 'Donor Gifts',
      category: 'premium',
      image: '/images/products/donor-gift-preview.jpg',
      description: 'Premium items for major donors',
      features: ['Custom packaging', 'High-end materials', 'Personalization'],
      price: '',
      popular: false
    }
  ]

  const handleProductClick = (productId: number) => {
    trackEvent('product_showcase_click', { product_id: productId })
    scrollToElement('contact')
  }

  return (
    <section className="section-spacing bg-gradient-to-br from-neutral-50 to-primary-50" aria-labelledby="products-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center component-spacing">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-100 to-primary-100 rounded-full mb-6 border border-accent-200/50">
            <span className="text-sm font-bold text-primary-700 uppercase tracking-wider">
              🎯 Campaign Essentials
            </span>
          </div>
          
          <h2 
            id="products-heading"
            className="text-display font-heading text-primary element-spacing tracking-tight"
          >
            Professional Merchandise That
            <span className="block bg-gradient-to-r from-accent-600 to-accent-700 bg-clip-text text-transparent">
              Wins Campaigns
            </span>
          </h2>
          
          <p className="text-body-large text-neutral-700 max-w-3xl mx-auto">
            From grassroots organizing to major events, our campaign-grade merchandise 
            helps you build momentum, raise funds, and mobilize supporters.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 hover:border-accent-200 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge */}
              {product.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="accent" className="font-bold">
                    🔥 Popular
                  </Badge>
                </div>
              )}

              {/* Product Image */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-heading-3 font-heading text-primary group-hover:text-accent-700 transition-colors">
                    {product.name}
                  </h3>
                </div>

                <p className="text-body text-neutral-600 mb-4">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-neutral-700">
                      <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  onClick={() => handleProductClick(product.id)}
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-accent-600 group-hover:text-white group-hover:border-accent-600"
                  icon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.003 8.003 0 01-7.93-6.93c-.04-.28-.07-.57-.07-.87v-.2c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                    </svg>
                  }
                >
                  Get Quote
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-patriotic rounded-3xl p-8 max-w-2xl mx-auto border border-white/30">
            <h3 className="text-heading-2 font-heading text-primary-800 mb-4">
              Need Something Custom?
            </h3>
            <p className="text-body text-primary-700 mb-6">
              We specialize in custom solutions for unique campaign needs. 
              From special events to donor appreciation, we've got you covered.
            </p>
            <Button
              onClick={() => {
                trackEvent('custom_product_cta_click')
                scrollToElement('contact')
              }}
              variant="primary"
              size="lg"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              }
              iconPosition="right"
            >
              Discuss Custom Options
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
