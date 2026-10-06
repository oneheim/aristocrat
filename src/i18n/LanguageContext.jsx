import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { localizeProject } from '../data/projects'
import { copy } from './copy'

const STORAGE_KEY = 'aristocrat-lang'
const LanguageContext = createContext(null)

function readLang() {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    if (value === 'ru' || value === 'en') return value
  } catch {
    /* ignore */
  }
  return 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readLang)

  function setLang(next) {
    if (next !== 'ru' && next !== 'en') return
    setLangState(next)
  }

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = copy[lang].documentTitle
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t: copy[lang] }), [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return ctx
}

export function useCopy() {
  return useLanguage().t
}

export function useLocalizedProject(project) {
  const { lang } = useLanguage()
  return useMemo(() => localizeProject(project, lang), [project, lang])
}

export function useLocalizedProjects(projects) {
  const { lang } = useLanguage()
  return useMemo(
    () => projects.map((project) => localizeProject(project, lang)),
    [projects, lang],
  )
}
