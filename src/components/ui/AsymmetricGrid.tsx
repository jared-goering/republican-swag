'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface AsymmetricGridProps {
  children: React.ReactNode
  className?: string
  variant?: 'masonry' | 'featured' | 'showcase' | 'mixed'
}

const AsymmetricGrid: React.FC<AsymmetricGridProps> = ({
  children,
  className,
  variant = 'showcase'
}) => {
  const variantClasses = {
    // Masonry-style grid with varied heights
    masonry: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max',
    
    // Featured item takes more space
    featured: 'grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-fr',
    
    // Product showcase style (like inspiration image)
    showcase: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8',
    
    // Mixed sizes for varied content
    mixed: 'grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min'
  }

  return (
    <div className={cn(variantClasses[variant], className)}>
      {children}
    </div>
  )
}

// Helper components for specific grid items
const GridItem: React.FC<{
  children: React.ReactNode
  span?: 'small' | 'medium' | 'large' | 'full'
  className?: string
}> = ({ children, span = 'medium', className }) => {
  const spanClasses = {
    small: 'md:col-span-1',
    medium: 'md:col-span-2', 
    large: 'md:col-span-3 lg:col-span-4',
    full: 'md:col-span-full'
  }

  return (
    <div className={cn(spanClasses[span], className)}>
      {children}
    </div>
  )
}

const FeaturedItem: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className }) => {
  return (
    <div className={cn('md:col-span-2 md:row-span-2', className)}>
      {children}
    </div>
  )
}

export { AsymmetricGrid, GridItem, FeaturedItem }
