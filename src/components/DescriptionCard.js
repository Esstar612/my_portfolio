// DescriptionCard.js
import React from 'react';
import './DescriptionCard.css';

const DescriptionCard = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="description-card-overlay">
            <div className="description-card">
                <button className="close-button" onClick={onClose}>✖</button>
                <p className="year">{project.year}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p><strong>Details:</strong> {project.details}</p>

                {/* Render the full documentation content */}
                <div className="full-documentation">
                    {project.documentation}
                </div>
            </div>
        </div>
    );
};

export default DescriptionCard;
