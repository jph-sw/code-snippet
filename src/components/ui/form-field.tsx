import { Label } from './label'
import type { ReactNode } from 'react'

interface FormFieldProps {
  label: string
  children: ReactNode
}

export const FormField = ({ label, children }: FormFieldProps) => {
  return (
    <div>
      <Label>{label}:</Label>
      {children}
    </div>
  )
}
