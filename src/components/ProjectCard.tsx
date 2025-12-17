import React from 'react';
import { Globe } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="premium-card">
      <div className="card-header">
        <div className="project-identity">
          <div className="icon-box">
            <Globe size={24} />
          </div>
          <div className="title-group">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-title"
            >
              {project.name}
            </a>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              {project.url.replace(/^https?:\/\//, '')}
            </a>
          </div>
        </div>
      </div>

      <div className="card-content">
        <p className="project-description">
          {project.description}
        </p>
      </div>

    </div>
  );
};
