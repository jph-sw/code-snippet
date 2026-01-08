import { Button } from './ui/button'
import { Input } from './ui/input'
import { Select } from './ui/select'
import { Textarea } from './ui/textarea'
import { FormField } from './ui/form-field'
import type { ProgrammingLanguage } from '@/lib/types'
import type { FormEvent } from 'react'
import { LANGUAGES } from '@/lib/constants'

interface SnippetFormData {
  title: string
  language: ProgrammingLanguage
  code: string
  description: string
}

interface SnippetFormProps {
  snippet: SnippetFormData
  onSubmit: (e: FormEvent) => void
  onCancel: () => void
  onChange: (snippet: SnippetFormData) => void
  submitLabel?: string
}

export const SnippetForm = ({
  snippet,
  onSubmit,
  onCancel,
  onChange,
  submitLabel = 'SAVE_ENTRY',
}: SnippetFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <FormField label="TITLE">
        <Input
          type="text"
          value={snippet.title}
          onChange={(e) => onChange({ ...snippet, title: e.target.value })}
          placeholder="ENTER_TITLE..."
          required
        />
      </FormField>

      <FormField label="LANGUAGE">
        <Select
          value={snippet.language}
          onChange={(e) =>
            onChange({
              ...snippet,
              language: e.target.value as ProgrammingLanguage,
            })
          }
        >
          {LANGUAGES.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </Select>
      </FormField>

      <FormField label="CODE">
        <Textarea
          value={snippet.code}
          onChange={(e) => onChange({ ...snippet, code: e.target.value })}
          className="font-mono h-48"
          placeholder="PASTE_CODE_HERE..."
          required
        />
      </FormField>

      <FormField label="DESCRIPTION (OPTIONAL)">
        <Textarea
          value={snippet.description}
          onChange={(e) =>
            onChange({ ...snippet, description: e.target.value })
          }
          className="h-20"
          placeholder="ADD_DESCRIPTION..."
        />
      </FormField>

      <div className="flex gap-2 justify-end pt-4 border-t border-[#003B00]">
        <Button type="button" variant="ghost" onClick={onCancel}>
          CANCEL
        </Button>
        <Button type="submit" variant="primary">
          {submitLabel}
        </Button>
      </div>
    </form>
  )
}
