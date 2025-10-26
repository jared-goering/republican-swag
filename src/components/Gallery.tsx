'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Placeholder gallery items - in a real implementation, these would be actual campaign merchandise photos
  const galleryItems = [
    {
      id: 1,
      src: '/api/placeholder/400/300',
      alt: 'Republican campaign t-shirts with consistent branding',
      caption: 'Consistent branding across multiple t-shirt designs for a statewide race',
      category: 'Apparel'
    },
    {
      id: 2,
      src: '/api/placeholder/400/300',
      alt: 'Professional yard signs with FEC compliant disclaimers',
      caption: 'FEC-compliant yard signs with proper disclaimer placement',
      category: 'Signage'
    },
    {
      id: 3,
      src: '/api/placeholder/400/300',
      alt: 'Campaign rally banners and flags',
      caption: 'Large format banners and flags for campaign rallies',
      category: 'Rally Materials'
    },
    {
      id: 4,
      src: '/api/placeholder/400/300',
      alt: 'Professional campaign brochures and palm cards',
      caption: 'High-quality brochures and palm cards for door-to-door canvassing',
      category: 'Print Materials'
    },
    {
      id: 5,
      src: '/api/placeholder/400/300',
      alt: 'Custom embroidered polo shirts for campaign staff',
      caption: 'Premium embroidered polos for campaign staff and volunteers',
      category: 'Staff Apparel'
    },
    {
      id: 6,
      src: '/api/placeholder/400/300',
      alt: 'Vehicle magnets and bumper stickers',
      caption: 'Durable vehicle magnets and bumper stickers for mobile advertising',
      category: 'Vehicle Graphics'
    },
    {
      id: 7,
      src: '/api/placeholder/400/300',
      alt: 'Campaign buttons and pins collection',
      caption: 'Variety of campaign buttons and pins for events and giveaways',
      category: 'Accessories'
    },
    {
      id: 8,
      src: '/api/placeholder/400/300',
      alt: 'Premium donor gifts and VIP merchandise',
      caption: 'Exclusive merchandise for major donors and VIP supporters',
      category: 'VIP Items'
    }
  ]

  const openModal = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? galleryItems.length - 1 : selectedImage - 1)
    } else {
      setSelectedImage(selectedImage === galleryItems.length - 1 ? 0 : selectedImage + 1)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal()
    if (e.key === 'ArrowLeft') navigateImage('prev')
    if (e.key === 'ArrowRight') navigateImage('next')
  }

  return (
    <section 
      id="gallery" 
      className="py-16 lg:py-24 bg-gray-50" 
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            id="gallery-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-primary mb-6"
          >
            Our work in action
          </h2>
          <p className="text-xl text-ink max-w-3xl mx-auto">
            See the quality and consistency that Republican campaigns across the country trust. 
            Every piece reflects our commitment to excellence and attention to detail.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1"
              onClick={() => openModal(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openModal(index)
                }
              }}
              aria-label={`View larger image: ${item.alt}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-primary rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-ink leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Assurance Note */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-soft max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold font-heading text-primary mb-4">
            Consistent Quality, Every Time
          </h3>
          <p className="text-lg text-ink mb-6">
            Our campaign-grade quality control ensures that every piece meets the same high standards, 
            whether you're ordering 100 pieces or 10,000. Color consistency, proper sizing, and 
            attention to detail are guaranteed.
          </p>
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            aria-label="Close image viewer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateImage('prev')
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateImage('next')
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <div 
            className="relative max-w-4xl max-h-[80vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryItems[selectedImage].src}
              alt={galleryItems[selectedImage].alt}
              width={800}
              height={600}
              className="w-full h-auto object-contain rounded-lg"
              priority
            />
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
              <h3 id="modal-title" className="font-semibold mb-1">
                {galleryItems[selectedImage].category}
              </h3>
              <p className="text-sm opacity-90">
                {galleryItems[selectedImage].caption}
              </p>
            </div>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
            {selectedImage + 1} of {galleryItems.length}
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery

