import { useCopy } from '../i18n/LanguageContext'
import Logo from './Logo'

const social = ['TELEGRAM', 'INSTAGRAM', 'YOUTUBE', 'TIKTOK']

function Contacts() {
  const t = useCopy()

  return (
    <footer className="contacts" id="contacts">
      <div className="contacts-grid">
        <div className="contacts-intro">
          <p>
            {t.contacts.intro[0]}
            <br />
            {t.contacts.intro[1]}
          </p>
          <a className="text-underline contacts-cta" href="mailto:studio@aristocrat.com">
            {t.contacts.cta}
          </a>
        </div>

        <nav className="contacts-nav" aria-label={t.contacts.footerAria}>
          <a href="/#about">{t.contacts.about}</a>
          <a href="/#contacts">{t.contacts.contacts}</a>
          <a href="/#contacts">{t.contacts.cookies}</a>
        </nav>

        <nav className="contacts-social" aria-label={t.contacts.socialAria}>
          {social.map((item) => (
            <a key={item} href="#contacts">
              {item}
            </a>
          ))}
        </nav>

        <span className="contacts-copy">© 2026 ARISTOCRAT</span>
        <a className="contacts-privacy" href="#contacts">
          {t.contacts.privacy}
        </a>
        <span className="contacts-by">{t.contacts.by}</span>
      </div>

      <div className="contacts-wordmark" aria-label="ARISTOCRAT">
        <Logo variant="wordmark" />
      </div>
    </footer>
  )
}

export default Contacts
