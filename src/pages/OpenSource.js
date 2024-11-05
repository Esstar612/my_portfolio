import React from 'react';
import './OpenSource.css';

const OpenSource = () => {
    return (
        <section className="open-source">
            <h1>Open Source Contributions</h1>
            <div className="project-card">
                <h3>
                    <a
                        href="https://github.com/e-oj/Magic-Grid"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Magic Grid
                    </a>
                </h3>
                <p>
                    Implemented highly requested features, increasing user satisfaction. Led a team to develop <a
                    href="https://github.com/e-oj/use-magic-grid"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <strong>use-magic-grid</strong>
                </a>, a React port enabling seamless integration of Magic Grid into React apps. Actively contribute to issue resolution, code reviews, and feature implementation.
                </p>
                <p>
                    <a href="https://github.com/esstar612" target="_blank" rel="noopener noreferrer">
                        View my GitHub
                    </a>
                </p>
            </div>
        </section>
    );
};

export default OpenSource;
