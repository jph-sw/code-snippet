export type ProgrammingLanguage =
  | 'javascript'
  | 'typescript'
  | 'python'
  | 'html'
  | 'css'
  | 'rust'
  | 'go'
  | 'cpp'
  | 'sql'
  | 'other'

export interface Snippet {
  id: string
  title: string
  language: ProgrammingLanguage
  code: string
  description: string
  createdAt: number
}
