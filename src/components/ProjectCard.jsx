import { ArrowUpRight } from "./Icons.jsx";

function Preview({ project }) {
  // Decorative stand-in until a real screenshot is added. Not a claim about the UI.
  return (
    <div className="preview" aria-hidden="true">
      <div className="preview__win">
        <div className="preview__bar"><i /><i /><i /></div>
        <pre>{project.preview ?? `~/dotfiles
├── .zshrc
├── .vimrc
├── .gitconfig
└── .config/
    └── nvim/`}</pre>
      </div>
    </div>
  );
}

export default function ProjectCard({ project, index }) {
  const n = String(index + 1).padStart(2, "0");
  return (
    <article className="project">
      <div className="project__tab">Project {n}</div>
      <div className="project__card">
        <div className="project__info">
          <p className="project__status"><span className="dot" /> {project.status}</p>
          <h3>{project.name}</h3>
          <p className="project__one">{project.oneLiner}</p>
          <p className="project__desc">{project.description}</p>
          <ul className="project__tech" aria-label="Technologies">
            {project.tech.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <div className="project__links">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer">View project <ArrowUpRight /></a>
            )}
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer">View code <ArrowUpRight /></a>
            )}
          </div>
        </div>
        <Preview project={project} />
      </div>
    </article>
  );
}
