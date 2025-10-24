import React from 'react'
import { ProductShowcase } from '@/components/ui/ProductShowcase'
import { trackEvent } from '@/lib/utils'

const Categories: React.FC = () => {
  const products = [
    {
      title: 'Campaign Apparel',
      subtitle: 'New Collection',
      description: 'Premium t-shirts, polos, and hoodies for staff and supporters',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop&crop=center',
      badge: { text: 'New', variant: 'new' as const },
      featured: true
    },
    {
      title: 'Rally Signs',
      subtitle: 'High Impact',
      description: 'Weather-resistant yard signs and banners for maximum visibility',
      image: 'https://images.unsplash.com/photo-1541872705-1f73c6400ec9?w=600&h=800&fit=crop&crop=center',
      badge: { text: 'Popular', variant: 'popular' as const }
    },
    {
      title: 'Professional Handouts',
      subtitle: 'Campaign Materials',
      description: 'Palm cards, brochures, and policy sheets for door-to-door outreach',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=800&fit=crop&crop=center'
    },
    {
      title: 'Vehicle Graphics',
      subtitle: 'Mobile Advertising',
      description: 'Car magnets, bumper stickers, and window clings for campaign vehicles',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=800&fit=crop&crop=center'
    },
    {
      title: 'VIP Collection',
      subtitle: 'Premium Items',
      description: 'Embroidered polos, custom gifts, and exclusive donor materials',
      image: 'https://images.unsplash.com/photo-1556821840-3a9fbc86339e?w=600&h=800&fit=crop&crop=center',
      badge: { text: 'Featured', variant: 'featured' as const }
    }
  ]


  const handleProductClick = (productTitle: string) => {
    trackEvent('product_click', { product: productTitle })
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      id="categories" 
      className="py-16 lg:py-24 bg-gray-50" 
      aria-labelledby="categories-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 
            id="categories-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-primary mb-8 tracking-tight"
          >
            New Drops
          </h2>
          <p className="text-xl lg:text-2xl text-ink max-w-4xl mx-auto font-light leading-relaxed">
            Stand out with our latest collections—bold designs, premium fabrics, and 
            street-ready fits. Once they're gone, they're gone. Don't miss out.
          </p>
        </div>

        {/* Product Showcase Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Featured Product - Full Width */}
          <div className="mb-6">
            <ProductShowcase
              title={products[0].title}
              subtitle={products[0].subtitle}
              description={products[0].description}
              image={products[0].image}
              badge={products[0].badge}
              aspectRatio="wide"
              onClick={() => handleProductClick(products[0].title)}
              className="w-full"
            />
          </div>
          
          {/* Regular Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.slice(1).map((product, index) => (
              <ProductShowcase
                key={index + 1}
                title={product.title}
                subtitle={product.subtitle}
                description={product.description}
                image={product.image}
                badge={product.badge}
                aspectRatio="landscape"
                onClick={() => handleProductClick(product.title)}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-xl text-ink mb-8 font-light">
            Don't see what you need? We create custom designs too.
          </p>
          <button 
            onClick={() => {
              trackEvent('cta_click', { location: 'categories', action: 'custom_request' })
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center px-8 py-4 bg-black text-white font-bold rounded-2xl hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 uppercase tracking-wide"
          >
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  )
}

export default Categories
