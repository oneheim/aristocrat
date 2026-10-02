import LetterTiles from './LetterTiles'
import { team, teamExtraCount } from '../data/team'

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
}

function Team() {
  return (
    <section className="team">
      <LetterTiles text="TEAM" />

      <div className="team-grid">
        {team.map((member) => (
          <article className="team-card" key={member.name}>
            <span className="team-avatar" aria-hidden="true">
              {initials(member.name)}
            </span>
            <strong>{member.name}</strong>
            <span>{member.role}</span>
          </article>
        ))}

        <article className="team-card team-card-more">
          <strong>+{teamExtraCount}</strong>
          <span className="text-underline">view all staff members</span>
        </article>
      </div>
    </section>
  )
}

export default Team
