import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about">
            <div className="about-content">
                <h1>About Me</h1>
                <p>
                    Hi, I'm Star Olaojo, a driven junior Computer Science student at Rensselaer Polytechnic Institute, dual majoring in Computer Science & Information Technology and Web Sciences, with a minor in Cognitive Science. With a passion for full-stack development, I've worked on various projects ranging from web applications to open-source contributions.
                </p>
                <p>
                    I thrive on solving problems and building innovative solutions, and I am actively seeking opportunities to apply my skills and expand my knowledge. When I’m not coding, you can find me organizing events for the Black Student Alliance or learning about new technologies and frameworks.
                </p>
            </div>

            <div className="about-extra">
                <div className="about-card">
                    <h2>Resume</h2>
                    <div className="card-links">
                        <a href="/assets/Esther_Resume.pdf" target="_blank" rel="noopener noreferrer" className="link-button">View My Resume</a>
                        <a href="/assets/Esther_Resume.pdf" download className="link-button">Download My Resume</a>
                    </div>
                </div>

                <div className="about-card">
                    <h2>Certifications</h2>
                    <p>Oracle Cloud Infrastructure 2023 Certified Foundations Associate</p>
                    <div className="card-links">
                        <a href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=4D5EDD7CC2C03B3E1E346D6EF1FBEC403320985F6B2E237D8831068965F75870"
                           target="_blank" rel="noopener noreferrer" className="link-button">View Certification Badge</a>
                        <a href="/assets/eCertificate.pdf" target="_blank" rel="noopener noreferrer" className="link-button">View Certification PDF</a>
                        <a href="/assets/eCertificate.pdf" download className="link-button">Download Certification</a>
                    </div>
                </div>

                <div className="about-card">
                    <h2>Contact Information</h2>
                    <p>Email: <a href="mailto:Esstar612@gmail.com">Esstar612@gmail.com</a></p>
                    <p>GitHub: <a href="https://github.com/esstar612" target="_blank" rel="noopener noreferrer">github.com/esstar612</a></p>
                </div>
            </div>
        </section>
    );
};

export default About;
