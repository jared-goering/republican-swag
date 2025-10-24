import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base styles
          'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          
          // Size variants
          {
            'px-3 py-2 text-sm': size === 'sm',
            'px-4 py-2.5 text-base': size === 'md',
            'px-6 py-3 text-lg': size === 'lg',
          },
          
          // Color variants with enhanced styling
          {
            'bg-gradient-to-r from-accent-600 to-accent-700 text-white hover:from-accent-700 hover:to-accent-800 active:from-accent-800 active:to-accent-900 shadow-patriotic hover:shadow-2xl transform hover:-translate-y-1': variant === 'primary',
            'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 active:from-primary-800 active:to-primary-900 shadow-lg hover:shadow-xl transform hover:-translate-y-1': variant === 'secondary',
            'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white hover:border-primary-700 active:bg-primary-700 shadow-sm hover:shadow-md transform hover:-translate-y-0.5': variant === 'outline',
            'text-primary-600 hover:bg-primary-50 hover:text-primary-700 active:bg-primary-100 rounded-xl': variant === 'ghost',
          },
          
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
