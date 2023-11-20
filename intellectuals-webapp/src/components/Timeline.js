import React from 'react';
import { Card } from 'react-bootstrap';
import '../css/Timeline.css'; // Make sure to create this CSS file for styling

const Timeline = ({ teamMembers }) => {
    return (
        <div className="timeline-container">
            <div className="timeline-line"></div>
            {teamMembers.map((member, index) => (
                <div key={member.id} className="timeline-item">
                    <div className={`profile-container`}>
                        <img src={member.image} alt={member.name} className="profile-image"/>
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                    </div>
                    <div className="timeline-icon"></div>
                    <div className={`projects-container card-group-scrollable`}>
                        {member.projects.map(project => (
                            <Card className = 'project-card rounded border-danger' key={project.id} style={{ minWidth: '18rem' }} bg='dark'>
                                <Card.Img variant="top" src={project.image} />
                                <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Text>{project.description}</Card.Text>
                                    <Card.Link href="#">View</Card.Link>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
