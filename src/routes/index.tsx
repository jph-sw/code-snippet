import { createFileRoute } from '@tanstack/react-router'
import {
  Activity,
  Filter,
  Plus,
  Search,
  ShieldCheck,
  Terminal,
} from 'lucide-react'
import { useMemo, useState } from 'react'
import type { ProgrammingLanguage } from '@/lib/types'
import { SnippetCard } from '@/components/snippet-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Modal } from '@/components/ui/modal'
import { SnippetForm } from '@/components/snippet-form'
import { useSnippets } from '@/hooks/use-snippets'

const LANGUAGE_FILTERS = [
  'all',
  'javascript',
  'typescript',
  'python',
  'html',
  'rust',
  'go',
  'sql',
] as const

export const Route = createFileRoute('/')({ component: App })

function App() {
  const {
    snippets,
    addSnippet,
    deleteSnippet,
    editSnippet,
    getFilteredSnippets,
  } = useSnippets()

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLang, setSelectedLang] = useState<ProgrammingLanguage | 'all'>(
    'all',
  )
  const [showAddForm, setShowAddForm] = useState(false)
  const [newSnippet, setNewSnippet] = useState({
    title: '',
    language: 'javascript' as ProgrammingLanguage,
    code: '',
    description: '',
  })

  const filteredSnippets = useMemo(
    () => getFilteredSnippets(searchTerm, selectedLang),
    [getFilteredSnippets, searchTerm, selectedLang],
  )

  const handleSubmitNewSnippet = (e: React.FormEvent) => {
    e.preventDefault()
    if (newSnippet.title.trim() && newSnippet.code.trim()) {
      addSnippet(newSnippet)
      setNewSnippet({
        title: '',
        language: 'javascript',
        code: '',
        description: '',
      })
      setShowAddForm(false)
    }
  }

  return (
    <>
      <Modal
        isOpen={showAddForm}
        onClose={() => setShowAddForm(false)}
        title="NEW_ENTRY_FORM"
      >
        <SnippetForm
          snippet={newSnippet}
          onSubmit={handleSubmitNewSnippet}
          onCancel={() => setShowAddForm(false)}
          onChange={setNewSnippet}
        />
      </Modal>

      <div className="flex flex-col h-screen max-h-screen">
        <header className="flex justify-between items-center px-4 py-2 border-b border-[#00FF41]/30 text-[10px] font-bold bg-black sticky top-0 z-50">
          <div className="flex items-center gap-4">
            <span className="matrix-glow flex items-center gap-1">
              <ShieldCheck size={12} /> VAULT_OS [SECURE_SESSION]
            </span>
            <span className="opacity-40">CPU_LOAD: 12%</span>
            <span className="opacity-40">UPTIME: 99.9%</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#00FF41] opacity-70">
              DATE_{new Date().toLocaleDateString()}
            </span>
            <span className="animate-pulse flex items-center gap-1 text-[#00FF41]">
              <Activity size={12} /> LIVE_SYNC
            </span>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          <aside className="w-64 border-r border-[#00FF41]/30 bg-black flex flex-col gap-6 p-4 overflow-y-auto">
            <section>
              <Button
                variant="primary"
                onClick={() => setShowAddForm(true)}
                className="w-full mb-4 flex items-center justify-center gap-2"
              >
                <Plus size={14} /> NEW_ENTRY
              </Button>
              <div className="relative mb-4">
                <Input
                  type="text"
                  placeholder="QUERY_VAULT..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
                <Search
                  className="absolute left-2 top-1/2 -translate-y-1/2 opacity-50"
                  size={14}
                />
              </div>
            </section>

            <section>
              <h3 className="text-[10px] font-bold opacity-40 uppercase mb-2 flex items-center gap-1">
                <Filter size={10} /> Syntax_Filters
              </h3>
              <div className="flex flex-col gap-1">
                {LANGUAGE_FILTERS.map((lang) => (
                  <button
                    key={lang}
                    onClick={() =>
                      setSelectedLang(lang as ProgrammingLanguage | 'all')
                    }
                    className={`
                      text-left px-2 py-1 text-[10px] uppercase transition-colors
                      ${selectedLang === lang ? 'bg-[#003B00] matrix-glow' : 'opacity-60 hover:opacity-100'}
                    `}
                  >
                    {lang === 'all' ? '> ALL_FILES' : `> ${lang}`}
                  </button>
                ))}
              </div>
            </section>

            <section className="mt-auto border-t border-[#003B00] pt-4">
              <h3 className="text-[10px] font-bold opacity-40 uppercase mb-2 italic">
                System_Logs
              </h3>
              <div className="text-[9px] opacity-40 space-y-1 font-mono">
                <p>[INFO] Database initialized.</p>
                <p>[INFO] {snippets.length} entries loaded.</p>
                <p>[INFO] Encryption active.</p>
              </div>
            </section>
          </aside>

          <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#0D0208]">
            <div className="max-w-5xl mx-auto">
              {filteredSnippets.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 border border-dashed border-[#003B00] opacity-40">
                  <Terminal size={48} />
                  <p className="mt-4 text-xs font-bold">
                    NO_RESULTS_RETURNED_FROM_SEARCH
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredSnippets.map((snippet) => (
                    <SnippetCard
                      key={snippet.id}
                      snippet={snippet}
                      onDelete={deleteSnippet}
                      onEdit={editSnippet}
                    />
                  ))}
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
