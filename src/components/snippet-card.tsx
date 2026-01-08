import { useState } from 'react'
import { Edit, Save, Trash2, X } from 'lucide-react'
import { IconButton } from './ui/icon-button'
import { Input } from './ui/input'
import { Select } from './ui/select'
import { Textarea } from './ui/textarea'
import { FormField } from './ui/form-field'
import { CodeDisplay } from './code-display'
import type { ProgrammingLanguage, Snippet } from '@/lib/types'
import { LANGUAGES } from '@/lib/constants'

interface SnippetCardProps {
  snippet: Snippet
  onDelete: (id: string) => void
  onEdit: (
    id: string,
    updatedSnippet: Omit<Snippet, 'id' | 'createdAt'>,
  ) => void
}

export const SnippetCard = ({
  snippet,
  onDelete,
  onEdit,
}: SnippetCardProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedSnippet, setEditedSnippet] = useState({
    title: snippet.title,
    language: snippet.language,
    code: snippet.code,
    description: snippet.description,
  })

  const langInfo = LANGUAGES.find((l) => l.value === snippet.language)

  const handleSaveEdit = () => {
    if (editedSnippet.title.trim() && editedSnippet.code.trim()) {
      onEdit(snippet.id, editedSnippet)
      setIsEditing(false)
    }
  }

  const handleCancelEdit = () => {
    setEditedSnippet({
      title: snippet.title,
      language: snippet.language,
      code: snippet.code,
      description: snippet.description,
    })
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <div className="matrix-border matrix-bg-subtle p-3 flex flex-col gap-2 relative overflow-hidden">
        <div className="flex justify-between items-center border-b border-[#003B00] pb-2">
          <h3 className="text-sm font-bold uppercase matrix-glow">EDIT_MODE</h3>
          <div className="flex gap-2">
            <IconButton variant="success" onClick={handleSaveEdit} title="Save">
              <Save size={14} />
            </IconButton>
            <IconButton
              variant="danger"
              onClick={handleCancelEdit}
              title="Cancel"
            >
              <X size={14} />
            </IconButton>
          </div>
        </div>

        <div className="space-y-2">
          <FormField label="Title">
            <Input
              type="text"
              value={editedSnippet.title}
              onChange={(e) =>
                setEditedSnippet({ ...editedSnippet, title: e.target.value })
              }
              className="p-1"
            />
          </FormField>

          <FormField label="Language">
            <Select
              value={editedSnippet.language}
              onChange={(e) =>
                setEditedSnippet({
                  ...editedSnippet,
                  language: e.target.value as ProgrammingLanguage,
                })
              }
              className="p-1"
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.label}
                </option>
              ))}
            </Select>
          </FormField>

          <FormField label="Code">
            <Textarea
              value={editedSnippet.code}
              onChange={(e) =>
                setEditedSnippet({ ...editedSnippet, code: e.target.value })
              }
              className="font-mono h-32"
            />
          </FormField>

          <FormField label="Description">
            <Textarea
              value={editedSnippet.description}
              onChange={(e) =>
                setEditedSnippet({
                  ...editedSnippet,
                  description: e.target.value,
                })
              }
              className="h-16 p-1"
            />
          </FormField>
        </div>
      </div>
    )
  }

  return (
    <div className="matrix-border matrix-bg-subtle p-3 flex flex-col gap-2 relative overflow-hidden group h-full">
      <div className="flex justify-between items-center border-b border-[#003B00] pb-2">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-[10px] opacity-70">
              [{langInfo?.label || '??'}]
            </span>
            <h3 className="text-sm font-bold uppercase matrix-glow">
              {snippet.title}
            </h3>
          </div>
          <span className="text-[10px] opacity-40">
            TIMESTAMP_{snippet.createdAt}
          </span>
        </div>
        <div className="flex gap-2">
          <IconButton onClick={() => setIsEditing(true)} title="Edit">
            <Edit size={14} />
          </IconButton>
          <IconButton
            variant="danger"
            onClick={() => onDelete(snippet.id)}
            title="Delete"
          >
            <Trash2 size={14} />
          </IconButton>
        </div>
      </div>

      <CodeDisplay code={snippet.code} language={snippet.language} />

      {snippet.description && (
        <p className="text-[10px] opacity-60 italic px-1">
          // {snippet.description}
        </p>
      )}
    </div>
  )
}

export default SnippetCard
