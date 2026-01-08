import { X } from 'lucide-react'
import { Button } from './button'
import type { ReactNode } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="matrix-border matrix-bg-subtle bg-[#0D0208] p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4 border-b border-[#003B00] pb-2">
          <h2 className="text-sm font-bold uppercase matrix-glow">{title}</h2>
          <Button variant="ghost" size="sm" onClick={onClose} title="Close">
            <X size={14} />
          </Button>
        </div>
        {children}
      </div>
    </div>
  )
}
