'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface AsymmetricGridProps {
  children: React.ReactNode
  className?: string
  variant?: 'masonry' | 'featured' | 'showcase' | 'mixed' | 'patriotic-masonry'
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
    mixed: 'grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min',
    
    // Patriotic masonry with strategic positioning
    'patriotic-masonry': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max'
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
  span?: 'small' | 'medium' | 'large' | 'featured' | 'full'
  className?: string
}> = ({ children, span = 'medium', className }) => {
  const spanClasses = {
    // Small cards - 1 column
    small: 'md:col-span-1 lg:col-span-2',
    // Medium cards - 1-2 columns  
    medium: 'md:col-span-2 lg:col-span-2',
    // Large cards - 2-3 columns
    large: 'md:col-span-2 lg:col-span-3',
    // Featured cards - takes prominent space
    featured: 'md:col-span-4 lg:col-span-4 md:row-span-2',
    // Full width
    full: 'col-span-full'
  }

  return (
    <div className={cn(spanClasses[span], className)}>
      {children}
    </div>
  )
}

// Patriotic Grid Item with enhanced positioning
const PatrioticGridItem: React.FC<{
  children: React.ReactNode
  size?: 'small' | 'medium' | 'large' | 'featured'
  className?: string
}> = ({ children, size = 'medium', className }) => {
  const sizeClasses = {
    small: 'col-span-1',
    medium: 'col-span-1', 
    large: 'col-span-1 md:col-span-2',
    featured: 'col-span-1 md:col-span-3 lg:col-span-2'
  }

  return (
    <div className={cn(sizeClasses[size], 'hover-lift', className)}>
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

export { AsymmetricGrid, GridItem, PatrioticGridItem, FeaturedItem }