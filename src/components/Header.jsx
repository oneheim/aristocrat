import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'about us', href: '/about' },
  { label: 'services', href: '/services' },
  { label: 'projects', href: '/projects' },
  { label: 'contacts', href: '/#contacts' },
]

function Header({ variant = 'dark' }) {
  const { pathname } = useLocation()
  const ctaHref = variant === 'light' ? '#order' : '/#contacts'

  return (
    <header className={`site-header${variant === 'light' ? ' is-light' : ''}`}>
      <Link className="logo" to="/">
        ARISTOCRAT
      </Link>

      <a className="header-cta" href={ctaHref}>
        order a project
      </a>

      <nav className="main-nav" aria-label="Primary">
        {navItems.map((item) => {
          const isActive = item.href === pathname
          const className = `nav-link${isActive ? ' is-active' : ''}`

          return item.href.startsWith('/#') || item.href.startsWith('#') ? (
            <a key={item.label} className={className} href={item.href}>
              {item.label}
            </a>
          ) : (
            <Link key={item.label} className={className} to={item.href}>
              {item.label}
            </Link>
          )
        })}
        <span className="lang" aria-label="Language">
          <span className="lang-muted">ru\</span>
          <span>en</span>
        </span>
      </nav>
    </header>
  )
}

export default Header
