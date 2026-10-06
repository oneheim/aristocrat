import LetterTiles from './LetterTiles'
import ProjectCard from './ProjectCard'
import { useCopy, useLocalizedProjects } from '../i18n/LanguageContext'
import { catalogProjects } from '../data/projects'

function Projects() {
  const t = useCopy()
  const projects = useLocalizedProjects(catalogProjects)

  return (
    <section className="projects" id="projects">
      <div className="section-bar">
        <LetterTiles text={t.projects.tiles} />
        <a className="text-underline" href="/projects">
          {t.projects.viewAll}
        </a>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.slug} cta={t.projects.viewMore} />
        ))}
      </div>
    </section>
  )
}

export default Projects
