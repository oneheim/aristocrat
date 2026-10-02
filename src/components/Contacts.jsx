const social = ['TELEGRAM', 'INSTAGRAM', 'YOUTUBE', 'TIKTOK']

function Contacts() {
  return (
    <footer className="contacts" id="contacts">
      <div className="contacts-top">
        <div className="contacts-intro">
          <p>
            A trusted partner for
            <br />
            events of any scale
          </p>
          <a className="text-underline contacts-cta" href="mailto:studio@aristocrat.com">
            Contact us
          </a>
        </div>

        <nav className="contacts-nav" aria-label="Footer">
          <a href="/#about">ABOUT US</a>
          <a href="/#contacts">CONTACTS</a>
          <a href="/#contacts">COOCKIES & PRIVACY</a>
        </nav>

        <nav className="contacts-social" aria-label="Social">
          {social.map((item) => (
            <a key={item} href="#contacts">
              {item}
            </a>
          ))}
        </nav>
      </div>

      <div className="contacts-meta">
        <span>© 2025 ARISTOCRAT</span>
        <a href="#contacts">privacy policy</a>
        <span>website by oneheim</span>
      </div>

      <p className="contacts-wordmark">
        <span>ARISTOCRAT</span>
      </p>
    </footer>
  )
}

export default Contacts
