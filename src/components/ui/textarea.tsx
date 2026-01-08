import {  forwardRef } from 'react'
import type {TextareaHTMLAttributes} from 'react';
import { cn } from '@/lib/utils'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn('w-full p-2 text-xs scrollbar-hide', className)}
        {...props}
      />
    )
  }
)

Textarea.displayName = 'Textarea'
