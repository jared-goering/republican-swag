'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { scrollToElement, trackEvent } from '@/lib/utils'

const ProductShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Products', count: 12 },
    { id: 'apparel', label: 'Apparel', count: 5 },
    { id: 'signage', label: 'Signs & Banners', count: 3 },
    { id: 'handouts', label: 'Handouts', count: 2 },
    { id: 'premium', label: 'Premium Items', count: 2 }
  ]

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
      image: '/images/products/hat-preview.jpg',
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

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory)

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
    trackEvent('product_category_filter', { category: categoryId })
  }

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

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 component-spacing">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`inline-flex items-center px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-accent-600 to-accent-700 text-white shadow-patriotic transform scale-105'
                  : 'bg-white text-primary-700 border-2 border-primary-200 hover:border-accent-300 hover:text-accent-700 hover:scale-105'
              }`}
            >
              {category.label}
              <Badge 
                variant={activeCategory === category.id ? 'light' : 'secondary'} 
                className="ml-2"
              >
                {category.count}
              </Badge>
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
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

              {/* Product Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-accent-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-patriotic-stars opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-accent-500 to-primary-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">
                        {product.name.charAt(0)}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-primary-700">
                      Professional Preview
                    </p>
                  </div>
                </div>
                
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
