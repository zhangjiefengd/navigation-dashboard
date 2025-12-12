import { projects } from './data/projects';
import { ProjectCard } from './components/ProjectCard';

function App() {
  return (
    <div className="app-wrapper">
      <div className="header-section">
        <h1 className="page-title">Deployments</h1>
        <p className="page-subtitle">Monitoring status of all active services</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default App;
