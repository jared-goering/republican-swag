import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'patriotic' | 'cta'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, loading = false, icon, iconPosition = 'left', ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base styles with enhanced animations
          'inline-flex items-center justify-center font-semibold transition-all duration-300 ease-out',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50 disabled:transform-none',
          'relative overflow-hidden group',
          
          // Size variants with better proportions
          {
            'px-2 py-1.5 text-xs rounded-md gap-1': size === 'xs',
            'px-3 py-2 text-sm rounded-lg gap-2': size === 'sm',
            'px-4 py-2.5 text-base rounded-lg gap-2': size === 'md',
            'px-6 py-3 text-lg rounded-xl gap-3': size === 'lg',
            'px-8 py-4 text-xl rounded-2xl gap-3': size === 'xl',
          },
          
          // Enhanced color variants with better interactions
          {
            // Primary - Main CTA button
            'bg-gradient-to-r from-accent-600 to-accent-700 text-white hover:from-accent-700 hover:to-accent-800 active:from-accent-800 active:to-accent-900 shadow-patriotic hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105': variant === 'primary',
            
            // Secondary - Alternative actions
            'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 active:from-primary-800 active:to-primary-900 shadow-lg hover:shadow-xl transform hover:-translate-y-1': variant === 'secondary',
            
            // Outline - Subtle actions
            'border-2 border-primary-600 text-primary-600 bg-white hover:bg-primary-600 hover:text-white hover:border-primary-700 active:bg-primary-700 shadow-sm hover:shadow-md transform hover:-translate-y-0.5': variant === 'outline',
            
            // Ghost - Minimal actions
            'text-primary-600 hover:bg-primary-50 hover:text-primary-700 active:bg-primary-100 rounded-xl': variant === 'ghost',
            
            // Patriotic - Special patriotic styling
            'bg-gradient-to-r from-accent-600 via-white to-primary-600 text-primary-800 font-bold hover:from-accent-700 hover:via-white hover:to-primary-700 shadow-patriotic hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 border-2 border-white': variant === 'patriotic',
            
            // CTA - Maximum impact call-to-action
            'bg-gradient-to-r from-accent-600 to-accent-700 text-white font-bold uppercase tracking-wide hover:from-accent-700 hover:to-accent-800 shadow-patriotic hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105': variant === 'cta',
          },
          
          className
        )}
        ref={ref}
        disabled={loading}
        {...props}
      >
        {/* Loading spinner */}
        {loading && (
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
        )}
        
        {/* Left icon */}
        {icon && iconPosition === 'left' && !loading && (
          <span className="flex-shrink-0">{icon}</span>
        )}
        
        {/* Button content */}
        <span className="relative z-10">{children}</span>
        
        {/* Right icon */}
        {icon && iconPosition === 'right' && !loading && (
          <span className="flex-shrink-0 group-hover:translate-x-1 transition-transform">{icon}</span>
        )}
        
        {/* Hover effect overlay for gradient buttons */}
        {(variant === 'primary' || variant === 'secondary' || variant === 'cta') && (
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
