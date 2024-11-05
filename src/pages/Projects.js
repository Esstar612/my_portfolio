import React, { useState } from 'react';
import './Projects.css';
import DescriptionCard from '../components/DescriptionCard';
import projectDocumentation from '../articles/ProjectDocumentation';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projectList = [
        {
            title: "Stock and Weather App",
            description: "Integrated real-time market data and currency exchange rates, with a custom news API and weather forecasts using geolocation.",
            technologies: "JavaScript, TypeScript, MongoDB, Express, React, Node.js",
            year: "2024",
            documentation: projectDocumentation.stockWeatherApp
        },
        {
            title: "Bored Web Application",
            description: "A web app suggesting activities for users, with secure user authentication and a sleek interface design.",
            technologies: "JavaScript, TypeScript, MongoDB, Express, React, Node.js",
            year: "2023",
            documentation: projectDocumentation.boredWebApp
        },
        {
            title: "Travercity Web Application",
            description: "Provides users with localized information about new cities, aggregating local news and offering a travel log function.",
            technologies: "JavaScript, HTML, CSS",
            year: "2023",
            documentation: projectDocumentation.travercityWebApp
        }
    ];

    return (
        <section className="projects">
            <h1>Projects</h1>
            {projectList.map((project, index) => (
                <div
                    key={index}
                    className="project-card"
                    onClick={() => setSelectedProject(project)} // Set selected project on click
                >
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p><strong>Technologies:</strong> {project.technologies}</p>
                </div>
            ))}

            {selectedProject && (
                <DescriptionCard
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)} // Close the description card
                />
            )}
        </section>
    );
};

export default Projects;
