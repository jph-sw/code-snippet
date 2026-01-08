import type { LabelHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode
}

export const Label = ({ className, children, ...props }: LabelProps) => {
  return (
    <label
      className={cn('block text-[10px] opacity-70 mb-1 uppercase', className)}
      {...props}
    >
      {children}
    </label>
  )
}
