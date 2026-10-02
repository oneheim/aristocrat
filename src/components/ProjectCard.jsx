import { Link } from 'react-router-dom'

function ProjectCard({ project, variant = 'default', cta = 'read more' }) {
  return (
    <article className={`project-card${variant === 'wide' ? ' project-card-wide' : ''}`}>
      <img src={project.image} alt="" />
      <div className="project-meta">
        <span className="project-tag">{project.tag}</span>
        <span className="project-year">{project.year}</span>
        <h3>{project.title}</h3>
        <p>{project.place}</p>
        <Link className="btn-ghost" to={`/projects/${project.slug}`}>
          {cta}
        </Link>
      </div>
    </article>
  )
}

export default ProjectCard
