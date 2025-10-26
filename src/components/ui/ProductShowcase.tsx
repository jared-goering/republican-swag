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
  variant?: 'default' | 'patriotic' | 'premium' | 'featured'
  size?: 'small' | 'medium' | 'large' | 'featured'
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
  variant = 'default',
  size = 'medium',
  onClick
}) => {
  const getOverlayType = () => {
    switch (variant) {
      case 'patriotic':
        return 'patriotic'
      case 'featured':
        return 'gradient'
      default:
        return 'gradient'
    }
  }

  const getCardVariant = () => {
    switch (variant) {
      case 'patriotic':
        return 'patriotic'
      case 'premium':
        return 'premium'
      default:
        return 'default'
    }
  }

  return (
    <OverlayCard
      backgroundImage={image}
      overlay={getOverlayType()}
      aspectRatio={aspectRatio}
      variant={getCardVariant()}
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
      <div className="space-y-3">
        {subtitle && (
          <p className={cn(
            "uppercase tracking-wider font-bold",
            size === 'small' ? "text-xs" : "text-sm",
            variant === 'patriotic' 
              ? "text-gold-300" 
              : "text-white/80"
          )}>
            {subtitle}
          </p>
        )}
        
        <h3 className={cn(
          "font-bold text-white leading-tight transition-all duration-300",
          size === 'featured' ? "text-lg lg:text-xl" :
          size === 'large' ? "text-base lg:text-lg" :
          size === 'medium' ? "text-sm lg:text-base" :
          "text-xs lg:text-sm",
          variant === 'patriotic' && "group-hover:text-gold-200"
        )}>
          {title}
        </h3>
        
        {description && (
          <p className={cn(
            "leading-relaxed transition-all duration-300",
            size === 'featured' ? "text-xs" : 
            size === 'large' ? "text-xs" :
            size === 'medium' ? "text-xs" :
            "text-xs hidden sm:block",
            variant === 'patriotic' 
              ? "text-white/95 group-hover:text-white" 
              : "text-white/90"
          )}>
            {description}
          </p>
        )}
        
        {price && (
          <p className={cn(
            "font-bold",
            size === 'featured' ? "text-xl" : "text-lg",
            variant === 'patriotic' 
              ? "text-gold-300" 
              : "text-white"
          )}>
            {price}
          </p>
        )}
      </div>

      {/* Enhanced Hover indicator */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
        <div className={cn(
          "px-6 py-3 rounded-full font-bold text-sm transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 shadow-lg",
          variant === 'patriotic' 
            ? "bg-gradient-to-r from-accent to-primary text-white border border-white/20" 
            : "bg-white text-black"
        )}>
          {variant === 'patriotic' ? 'EXPLORE' : 'View Details'}
        </div>
      </div>
      
      {/* Patriotic corner accent */}
      {variant === 'patriotic' && (
        <div className="absolute top-4 right-4 w-8 h-8 opacity-30 group-hover:opacity-60 transition-opacity duration-300">
          <div className="w-full h-full bg-gradient-to-br from-accent to-primary rounded-full animate-pulse"></div>
        </div>
      )}
    </OverlayCard>
  )
}

export { ProductShowcase }

