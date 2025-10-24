import React from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'accent' | 'gold' | 'outline' | 'new' | 'popular' | 'featured'
  size?: 'sm' | 'md'
  children: React.ReactNode
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'static'
}

const Badge: React.FC<BadgeProps> = ({ 
  className, 
  variant = 'default', 
  size = 'md', 
  children,
  position = 'static',
  ...props 
}) => {
  return (
    <div
      className={cn(
        // Base styles
        'inline-flex items-center rounded-full font-medium',
        
        // Size variants
        {
          'px-2.5 py-0.5 text-xs': size === 'sm',
          'px-3 py-1 text-sm': size === 'md',
        },
        
        // Color variants
        {
          'bg-primary-100 text-primary-800': variant === 'default',
          'bg-accent-100 text-accent-800': variant === 'accent',
          'bg-yellow-100 text-yellow-800': variant === 'gold',
          'border border-primary-300 text-primary-700 bg-white': variant === 'outline',
          'bg-black text-white rounded-lg shadow-lg font-bold uppercase tracking-wide': variant === 'new',
          'bg-accent text-white rounded-lg shadow-lg font-bold uppercase tracking-wide': variant === 'popular',
          'bg-gradient-to-r from-accent to-primary text-white rounded-lg shadow-lg font-bold uppercase tracking-wide': variant === 'featured',
        },
        
        // Position variants
        {
          'absolute top-4 left-4 z-10': position === 'top-left',
          'absolute top-4 right-4 z-10': position === 'top-right',
          'absolute bottom-4 left-4 z-10': position === 'bottom-left',
          'absolute bottom-4 right-4 z-10': position === 'bottom-right',
        },
        
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Badge }
