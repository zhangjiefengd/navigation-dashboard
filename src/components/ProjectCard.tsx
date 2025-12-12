
import React from 'react';

import type { Project } from '../data/projects';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="project-card">
            <div className="card-header">
                <div className="project-info">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-name">
                        {project.name}
                    </a>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-url">
                        {project.url.replace('https://', '')}
                    </a>
                </div>
            </div>
        </div>
    );
};
