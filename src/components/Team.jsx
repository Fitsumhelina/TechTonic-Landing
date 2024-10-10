    // Card.jsx
    import React from 'react';
    import './../scss/Team.scss'

    const Team = ({ title, role, imageUrl, socialLinks }) => {
    return (
        <div className="card">
        <div className="card-photo" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className="card-title">
            {title} <br />
            <span>{role}</span>
        </div>
        <div className="card-socials">
            {socialLinks.map((link, index) => (
            <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`card-socials-btn ${link.platform}`}
            >
                {link.icon}
            </a>
            ))}
        </div>
        </div>
    );
    };

    export default Team;
