import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import Logo from './Logo'

function Header({ variant = 'dark' }) {
  const { pathname } = useLocation()
  const { lang, setLang, t } = useLanguage()
  const ctaHref = variant === 'light' ? '#order' : '/#contacts'
  const navItems = [
    { label: t.nav.about, href: '/about' },
    { label: t.nav.services, href: '/services' },
    { label: t.nav.projects, href: '/projects' },
    { label: t.nav.contacts, href: '/#contacts' },
  ]

  return (
    <header className={`site-header${variant === 'light' ? ' is-light' : ''}`}>
      <Link className="logo" to="/" aria-label="ARISTOCRAT">
        <Logo />
      </Link>

      <a className="header-cta" href={ctaHref}>
        {t.ctaOrder}
      </a>

      <nav className="main-nav" aria-label={t.navAria}>
        {navItems.map((item) => {
          const isActive = item.href === pathname
          const className = `nav-link${isActive ? ' is-active' : ''}`

          return item.href.startsWith('/#') || item.href.startsWith('#') ? (
            <a key={item.href} className={className} href={item.href}>
              {item.label}
            </a>
          ) : (
            <Link key={item.href} className={className} to={item.href}>
              {item.label}
            </Link>
          )
        })}
        <div className="lang" role="group" aria-label={t.langAria}>
          <button
            type="button"
            className={lang === 'ru' ? 'is-active' : 'lang-muted'}
            aria-pressed={lang === 'ru'}
            onClick={() => setLang('ru')}
          >
            ru
          </button>
          <span className="lang-slash lang-muted">\</span>
          <button
            type="button"
            className={lang === 'en' ? 'is-active' : 'lang-muted'}
            aria-pressed={lang === 'en'}
            onClick={() => setLang('en')}
          >
            en
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
