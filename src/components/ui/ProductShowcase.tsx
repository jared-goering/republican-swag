'use client'

import React from 'react'
import { OverlayCard } from './OverlayCard'
import { Badge } from './Badge'
import { cn } from '@/lib/utils'

interface ProductShowcaseProps {
  title: string
  subtitle?: string
  description?: string
  image: string
  badge?: {
    text: string
    variant?: 'new' | 'popular' | 'featured'
  }
  price?: string
  className?: string
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'wide'
  onClick?: () => void
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  title,
  subtitle,
  description,
  image,
  badge,
  price,
  className,
  aspectRatio = 'portrait',
  onClick
}) => {
  return (
    <OverlayCard
      backgroundImage={image}
      overlay="gradient"
      aspectRatio={aspectRatio}
      className={cn('group', className)}
      onClick={onClick}
    >
      {/* Badge */}
      {badge && (
        <Badge
          variant={badge.variant || 'new'}
          position="top-left"
          size="sm"
        >
          {badge.text}
        </Badge>
      )}

      {/* Content */}
      <div className="space-y-2">
        {subtitle && (
          <p className="text-sm text-white/80 uppercase tracking-wider font-medium">
            {subtitle}
          </p>
        )}
        
        <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight">
          {title}
        </h3>
        
        {description && (
          <p className="text-sm text-white/90 leading-relaxed">
            {description}
          </p>
        )}
        
        {price && (
          <p className="text-lg font-bold text-white">
            {price}
          </p>
        )}
      </div>

      {/* Hover indicator */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="bg-white text-black px-4 py-2 rounded-full font-semibold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          View Details
        </div>
      </div>
    </OverlayCard>
  )
}

export { ProductShowcase }
