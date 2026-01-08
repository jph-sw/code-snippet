import { useCallback } from 'react'
import { useLocalStorage } from './use-local-storage'
import type { ProgrammingLanguage, Snippet } from '@/lib/types'

const INITIAL_SNIPPETS: Array<Snippet> = [
  {
    id: '1',
    title: 'TERMINAL_CLEAR',
    language: 'javascript',
    code: 'console.clear();\nconsole.log("System reboot complete...");',
    description: 'Basic clear command for the log.',
    createdAt: 1715000000000,
  },
]

const STORAGE_KEY = 'snippet_vault_data_matrix' as const

export const useSnippets = () => {
  const [snippets, setSnippets] = useLocalStorage<Array<Snippet>>(
    STORAGE_KEY,
    INITIAL_SNIPPETS,
  )

  const addSnippet = useCallback(
    (snippet: Omit<Snippet, 'id' | 'createdAt'>) => {
      const newSnippet: Snippet = {
        ...snippet,
        id: crypto.randomUUID(),
        createdAt: Date.now(),
      }
      setSnippets((prev) => [newSnippet, ...prev])
    },
    [setSnippets],
  )

  const deleteSnippet = useCallback(
    (id: string) => {
      setSnippets((prev) => prev.filter((s) => s.id !== id))
    },
    [setSnippets],
  )

  const editSnippet = useCallback(
    (id: string, updatedSnippet: Omit<Snippet, 'id' | 'createdAt'>) => {
      setSnippets((prev) =>
        prev.map((s) => (s.id === id ? { ...s, ...updatedSnippet } : s)),
      )
    },
    [setSnippets],
  )

  const getFilteredSnippets = useCallback(
    (searchTerm: string, language: ProgrammingLanguage | 'all') => {
      return snippets
        .filter(
          (s) =>
            s.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (language === 'all' || s.language === language),
        )
        .sort((a, b) => b.createdAt - a.createdAt)
    },
    [snippets],
  )

  return {
    snippets,
    addSnippet,
    deleteSnippet,
    editSnippet,
    getFilteredSnippets,
  }
}
