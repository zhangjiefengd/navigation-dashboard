
import React from 'react';
import { Github, Activity, AlertCircle, MoreHorizontal, GitBranch, Clock } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const getStatusIcon = (status: Project['status']) => {
        switch (status) {
            case 'success':
                return <Activity className="w-5 h-5 text-gray-400" />;
            case 'warning':
                return <AlertCircle className="w-5 h-5 text-gray-400" />;
            case 'error':
                return <AlertCircle className="w-5 h-5 text-red-500" />;
            default:
                return <Activity className="w-5 h-5 text-gray-400" />;
        }
    };

    return (
        <div className="project-card">
            <div className="card-header">
                <div className="project-icon">
                    <img
                        src={`https://www.google.com/s2/favicons?sz=64&domain=${project.url}`}
                        alt={`${project.name} icon`}
                        className="favicon"
                    />
                </div>
                <div className="project-info">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-name">
                        {project.name}
                    </a>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-url">
                        {project.url.replace('https://', '')}
                    </a>
                </div>
                <div className="card-actions">
                    {/* Status Icon Wrapper for circular border effect if needed */}
                    <div className="status-icon-wrapper">
                        {getStatusIcon(project.status)}
                    </div>
                    <button className="more-btn">
                        <MoreHorizontal className="w-5 h-5 text-gray-500" />
                    </button>
                </div>
            </div>

            <div className="repo-info">
                <Github className="w-4 h-4 text-gray-700" />
                <span className="repo-name">{project.github}</span>
            </div>

            <div className="commit-message">
                {project.description}
            </div>

            <div className="meta-info">
                <div className="meta-item">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{project.lastUpdate}</span>
                </div>
                <span className="separator">on</span>
                <div className="meta-item branch">
                    <GitBranch className="w-3.5 h-3.5" />
                    <span>{project.branch}</span>
                </div>
            </div>
        </div>
    );
};
