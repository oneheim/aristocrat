import { Link, useSearchParams } from 'react-router-dom'
import { CATEGORIES, isCategoryId } from '../data/categories'
import { allProjects } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'

function categoryCount(id) {
  return allProjects.filter((project) => project.category === id).length
}

function formatLabel(label, count, showCounts) {
  if (!showCounts || count === 0) return `/${label}`
  return `/${label} (${count})`
}

function CategoryList({ className, showCounts = false }) {
  const { lang, t } = useLanguage()
  const [params] = useSearchParams()
  const active = isCategoryId(params.get('cat')) ? params.get('cat') : null
  const allLabel = lang === 'ru' ? 'все' : 'all'

  return (
    <ul
      className={`category-list${className ? ` ${className}` : ''}`}
      aria-label={t.projects.categoriesAria}
    >
      <li>
        <Link
          to="/projects"
          className={active ? undefined : 'is-active'}
          aria-current={active ? undefined : 'page'}
        >
          {formatLabel(allLabel, allProjects.length, showCounts)}
        </Link>
      </li>
      {CATEGORIES.map((item) => {
        const isActive = active === item.id
        const label = lang === 'ru' ? item.ru : item.en
        return (
          <li key={item.id}>
            <Link
              to={`/projects?cat=${item.id}`}
              className={isActive ? 'is-active' : undefined}
              aria-current={isActive ? 'page' : undefined}
            >
              {formatLabel(label, categoryCount(item.id), showCounts)}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default CategoryList
