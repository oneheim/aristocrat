import LetterTiles from './LetterTiles'
import { useLanguage } from '../i18n/LanguageContext'
import { team, teamExtraCount } from '../data/team'

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
}

function Team() {
  const { lang, t } = useLanguage()

  return (
    <section className="team">
      <LetterTiles text={t.team.tiles} />

      <div className="team-grid">
        {team.map((member) => (
          <article className="team-card" key={member.name}>
            <span className="team-avatar" aria-hidden="true">
              {initials(member.name)}
            </span>
            <strong>{member.name}</strong>
            <span>{lang === 'ru' ? member.roleRu : member.role}</span>
          </article>
        ))}

        <article className="team-card team-card-more">
          <strong>+{teamExtraCount}</strong>
          <span className="text-underline">{t.team.viewAll}</span>
        </article>
      </div>
    </section>
  )
}

export default Team
