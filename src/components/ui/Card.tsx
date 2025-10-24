'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'elevated' | 'outlined' | 'glass' | 'patriotic' | 'premium'
  padding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  hover?: boolean
  rounded?: 'md' | 'lg' | 'xl' | '2xl' | '3xl'
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  variant = 'default',
  padding = 'md',
  hover = false,
  rounded = 'xl',
  ...props
}) => {
  const baseClasses = 'transition-all duration-300'
  
  const variantClasses = {
    default: 'bg-white border border-neutral-200 shadow-sm hover:shadow-md',
    elevated: 'bg-white shadow-lg hover:shadow-xl',
    outlined: 'bg-white border-2 border-primary-300 hover:border-primary-400',
    glass: 'glass',
    patriotic: 'glass-patriotic',
    premium: 'bg-gradient-to-br from-white to-neutral-50 shadow-xl border border-gold-200'
  }
  
  const paddingClasses = {
    xs: 'p-3',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
    '2xl': 'p-12'
  }
  
  const roundedClasses = {
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl'
  }
  
  const hoverClasses = hover ? 'hover-lift cursor-pointer' : ''
  
  return (
    <div 
      className={cn(
        baseClasses,
        variantClasses[variant],
        paddingClasses[padding],
        roundedClasses[rounded],
        hoverClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Card }
