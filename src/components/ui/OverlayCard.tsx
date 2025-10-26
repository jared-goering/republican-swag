'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface OverlayCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  backgroundImage?: string
  overlay?: 'light' | 'dark' | 'gradient' | 'patriotic' | 'none'
  className?: string
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'wide'
  hover?: boolean
  variant?: 'default' | 'patriotic' | 'premium'
}

const OverlayCard: React.FC<OverlayCardProps> = ({
  children,
  backgroundImage,
  overlay = 'dark',
  className,
  aspectRatio = 'landscape',
  hover = true,
  variant = 'default',
  ...props
}) => {
  const aspectRatioClasses = {
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[3/2]',
    wide: 'aspect-[5/3]'
  }

  const overlayClasses = {
    light: 'bg-white/60',
    dark: 'bg-black/40',
    gradient: 'bg-gradient-to-t from-black/70 via-black/20 to-transparent',
    patriotic: 'patriotic-overlay',
    none: ''
  }

  const getHoverClasses = () => {
    if (!hover) return ''
    
    switch (variant) {
      case 'patriotic':
        return 'group cursor-pointer patriotic-hover patriotic-card'
      case 'premium':
        return 'group cursor-pointer premium-hover premium-card'
      default:
        return 'group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl'
    }
  }

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl',
        aspectRatioClasses[aspectRatio],
        getHoverClasses(),
        className
      )}
      {...props}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      {/* Patriotic Top Border for patriotic variant */}
      {variant === 'patriotic' && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-white to-primary z-20" />
      )}
      
      {/* Overlay */}
      {overlay !== 'none' && (
        <div className={cn('absolute inset-0', overlayClasses[overlay])} />
      )}
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 lg:p-8 text-white">
        {children}
      </div>
    </div>
  )
}

export { OverlayCard }

