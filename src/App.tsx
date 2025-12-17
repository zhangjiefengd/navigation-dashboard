import { projects } from './data/projects';
import { ProjectCard } from './components/ProjectCard';

function App() {
  return (
    <div className="app-wrapper">
      <div className="header-section">
        <h1 className="page-title">在线服务状态</h1>
        <p className="page-subtitle">监控所有在线服务的运行状态与更新</p>
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
