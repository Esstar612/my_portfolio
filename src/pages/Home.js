import React, { useState } from 'react';
import './Home.css';
import DescriptionCard from '../components/DescriptionCard';
import projectDocumentation from '../articles/ProjectDocumentation';

const Home = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projectList = [
        {
            year: "2024",
            title: "Stock and Weather App",
            description: "Designed and implemented a stock and weather app using APIs for real-time data.",
            details: "The app fetches and displays live stock and weather data using API integrations for real-time updates.",
            documentation: projectDocumentation.stockWeatherApp
        },
        {
            year: "2023",
            title: "Bored Web Application",
            description: "A web app suggesting activities for users, featuring secure user authentication.",
            details: "The app helps users find activities based on their mood, with a secure sign-in feature.",
            documentation: projectDocumentation.boredWebApp
        },
        {
            year: "2023",
            title: "Travercity Web Application",
            description: "An application providing localized information about new cities.",
            details: "This app provides curated city information to help users explore new locations.",
            documentation: projectDocumentation.travercityWebApp
        }
    ];

    return (
        <div className="home">
            <section className="intro">
                <h1>Hey, I'm Star</h1>
                <p>I'm a junior Computer Science student at Rensselaer Polytechnic Institute, passionate about
                    full-stack development and open-source projects.</p>
                <p>On this site, you can check out my <a href="#projects">projects</a>, learn more <a href="/about">about
                    me</a>, or view my <a href="/open-source">open source contributions</a>.</p>
            </section>

            <section className="projects-preview" id="projects">
                <h2>Projects</h2>
                <div className="mini-grid">
                    {projectList.map((project, index) => (
                        <div key={index} className="mini-card">
                            <p className="year">{project.year}</p>
                            <h3
                                onClick={() => setSelectedProject(project)}
                                style={{ cursor: "pointer", textDecoration: "underline" }}
                            >
                                {project.title}
                            </h3>
                            <p>{project.description}</p>
                            <div className="project-links">
                                <a

                                    className="link-button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setSelectedProject(project);
                                    }}
                                >
                                    Article
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {selectedProject && (
                <DescriptionCard
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    );
};

export default Home;
