import React from 'react';
import { blog } from '../../PortfolioData'; // Adjust the path as necessary
import "./Blog.scss";

const Blog = () => {
    return (
        <section id="Blog">
           <h2>{blog.heading}</h2>
          {/*  <h3>{researchProjects.subHeading}</h3>
            <div  className="projects-container">
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
            </div>*/}
        </section>
    );
};

export default Blog;
