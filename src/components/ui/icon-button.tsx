import {   forwardRef } from 'react'
import type {ButtonHTMLAttributes, ReactNode} from 'react';
import { cn } from '@/lib/utils'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'ghost' | 'danger' | 'success'
  children: ReactNode
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ variant = 'ghost', className, children, ...props }, ref) => {
    const variants = {
      ghost: 'opacity-40 hover:opacity-100 hover:text-[#00FF41]',
      danger: 'opacity-40 hover:opacity-100 hover:text-red-500',
      success: 'opacity-70 hover:opacity-100 hover:text-[#00FF41]',
    }

    return (
      <button
        ref={ref}
        className={cn('transition-all', variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

IconButton.displayName = 'IconButton'
