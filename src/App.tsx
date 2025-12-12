
import { projects } from './data/projects';
import { ProjectCard } from './components/ProjectCard';

function App() {
  return (
    <div className="container">
      <h1 className="page-title">Projects</h1>
      <div className="grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default App;
