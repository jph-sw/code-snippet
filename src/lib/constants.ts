import type { ProgrammingLanguage } from './types'

export const LANGUAGES: ReadonlyArray<{
  readonly value: ProgrammingLanguage
  readonly label: string
}> = [
  { value: 'javascript', label: 'JS' },
  { value: 'typescript', label: 'TS' },
  { value: 'python', label: 'PY' },
  { value: 'html', label: 'HTML' },
  { value: 'css', label: 'CSS' },
  { value: 'rust', label: 'RS' },
  { value: 'go', label: 'GO' },
  { value: 'cpp', label: 'C++' },
  { value: 'sql', label: 'SQL' },
  { value: 'other', label: 'ETC' },
] as const
