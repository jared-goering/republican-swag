'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface OverlayCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  backgroundImage?: string
  overlay?: 'light' | 'dark' | 'gradient' | 'none'
  className?: string
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'wide'
  hover?: boolean
}

const OverlayCard: React.FC<OverlayCardProps> = ({
  children,
  backgroundImage,
  overlay = 'dark',
  className,
  aspectRatio = 'landscape',
  hover = true,
  ...props
}) => {
  const aspectRatioClasses = {
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    wide: 'aspect-[16/9]'
  }

  const overlayClasses = {
    light: 'bg-white/60',
    dark: 'bg-black/40',
    gradient: 'bg-gradient-to-t from-black/70 via-black/20 to-transparent',
    none: ''
  }

  const hoverClasses = hover 
    ? 'group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl' 
    : ''

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl',
        aspectRatioClasses[aspectRatio],
        hoverClasses,
        className
      )}
      {...props}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
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
