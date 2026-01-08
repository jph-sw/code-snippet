import {   forwardRef } from 'react'
import type {ButtonHTMLAttributes, ReactNode} from 'react';
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'ghost', size = 'md', className, children, ...props }, ref) => {
    const baseStyles =
      'font-bold uppercase transition-all disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary:
        'bg-[#00FF41] text-[#0D0208] hover:shadow-[0_0_10px_var(--matrix-green)]',
      ghost: 'opacity-60 hover:opacity-100 hover:text-[#00FF41]',
      danger: 'opacity-60 hover:opacity-100 hover:text-red-500',
    }

    const sizes = {
      sm: 'text-[10px] p-1',
      md: 'text-xs p-2',
      lg: 'text-sm p-3',
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
