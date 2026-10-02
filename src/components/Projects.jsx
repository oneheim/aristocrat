import LetterTiles from './LetterTiles'
import ProjectCard from './ProjectCard'
import { catalogProjects } from '../data/projects'

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-bar">
        <LetterTiles text="PROJECTS" />
        <a className="text-underline" href="/projects">
          view all projects
        </a>
      </div>

      <div className="projects-grid">
        {catalogProjects.map((project) => (
          <ProjectCard project={project} key={project.slug} cta="view more" />
        ))}
      </div>
    </section>
  )
}

export default Projects
