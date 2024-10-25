import React from 'react';
import { researchProjects } from '../../PortfolioData'; // Adjust the path as necessary
import "./ResearchProjects.scss";

const ResearchProjects = () => {
    return (
        <section>
            <h2>{researchProjects.heading}</h2>
            <h3>{researchProjects.subHeading}</h3>
            <div className="projects-container">
                {researchProjects.projectsList.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.imageSrc} alt={project.imageAlt} />
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                        {project.hasLink && (
                            <a href={project.projectLink} target="_blank" rel="noopener noreferrer">View Project</a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ResearchProjects;
