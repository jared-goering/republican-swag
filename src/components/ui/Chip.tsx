import React from 'react'
import { cn } from '@/lib/utils'

interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  icon?: React.ReactNode
}

const Chip: React.FC<ChipProps> = ({ 
  className, 
  children, 
  icon,
  ...props 
}) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm',
        'border border-primary-200 rounded-full text-sm font-medium text-primary-700',
        'shadow-soft',
        className
      )}
      {...props}
    >
      {icon && <span className="w-4 h-4 flex-shrink-0">{icon}</span>}
      {children}
    </div>
  )
}

export { Chip }

