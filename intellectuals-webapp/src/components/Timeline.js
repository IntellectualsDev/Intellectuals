import React from 'react';
import {Card, CardBody} from 'react-bootstrap';
import '../css/Timeline.css'; // Make sure to create this CSS file for styling

const Timeline = ({ teamMembers }) => {
    return (
        <div className="timeline-container">
            {/* This is the vertical line of the timeline */}
            <div className="timeline-line"></div>

            {teamMembers.map((member, index) => (
                <div key={member.id} className="timeline-item">
                    {/* The circle on the timeline */}
                    <div className={`timeline-icon ${index % 2 === 0 ? 'left' : 'right'}`}></div>

                    <div className={`profile-container ${index % 2 === 0 ? 'left' : 'right'}`}>
                        {/* Profile will go here */}
                        <img src={member.image} alt={member.name} className="profile-image"/>
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                    </div>

                    <div className={`projects-container ${index % 2 === 0 ? 'right' : 'left'}`}>
                        {/* Project cards will go here */}
                        {member.projects.map(project => (
                            <Card key={project.id} style={{ width: '18rem' }}>
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
