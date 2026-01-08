import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Button } from './ui/button'
import { IconButton } from './ui/icon-button'
import type { ProgrammingLanguage } from '@/lib/types'

interface CodeDisplayProps {
  code: string
  language: ProgrammingLanguage
}

const PREVIEW_LINES = 3

export const CodeDisplay = ({ code, language }: CodeDisplayProps) => {
  const [copying, setCopying] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const lines = code.split('\n')
  const shouldShowToggle = lines.length > PREVIEW_LINES
  const displayCode = isExpanded
    ? code
    : lines.slice(0, PREVIEW_LINES).join('\n')

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopying(true)
    setTimeout(() => setCopying(false), 2000)
  }

  return (
    <div className="relative flex flex-col">
      <div
        className={`relative overflow-hidden ${!isExpanded && shouldShowToggle ? 'max-h-32' : ''}`}
      >
        <SyntaxHighlighter
          language={language}
          style={atomDark}
          customStyle={{
            margin: 0,
            padding: '0.5rem',
            background: 'rgba(0, 0, 0, 0.5)',
            fontSize: '0.75rem',
            borderRadius: 0,
          }}
          codeTagProps={{
            style: {
              fontFamily: 'JetBrains Mono, monospace',
              color: '#00FF41',
            },
          }}
        >
          {displayCode}
        </SyntaxHighlighter>

        {/* Fade effect when collapsed */}
        {!isExpanded && shouldShowToggle && (
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />
        )}

        <Button
          variant="primary"
          size="sm"
          onClick={handleCopy}
          className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {copying ? 'COPIED' : 'COPY'}
        </Button>
      </div>

      {shouldShowToggle && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-center gap-1 py-1 text-[10px] opacity-60 hover:opacity-100 transition-opacity uppercase border-t border-[#003B00] mt-1"
        >
          {isExpanded ? (
            <>
              <ChevronUp size={12} /> COLLAPSE
            </>
          ) : (
            <>
              <ChevronDown size={12} /> EXPAND ({lines.length} lines)
            </>
          )}
        </button>
      )}
    </div>
  )
}
