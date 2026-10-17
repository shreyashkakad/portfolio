import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="visually-hidden">Projects</h2>
      {projects.map((p, i) => <ProjectCard key={p.name} project={p} index={i} />)}
    </section>
  );
}
