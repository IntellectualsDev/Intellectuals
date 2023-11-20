import React from 'react';
import { Card } from 'react-bootstrap';
import '../css/Timeline.css'; // Updated CSS file path
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap Icons

const Timeline = ({ teamMembers }) => {
    return (
        <div className="timeline-container">
            <div className="timeline-line"></div> {/* Vertical line for the timeline */}
            {teamMembers.map((member) => (
                <div key={member.id} className="timeline-item">
                    <div className="profile-container">
                        <img src={member.image} alt={member.name} className="profile-image" />
                        <div className="profile-text">
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                        </div>
                    </div>
                    <div className="timeline-icon"></div> {/* Circle icon on the timeline */}
                    <div className="projects-container">
                        {member.projects.map(project => (
                            <Card className='project-card rounded border-danger' key={project.id} bg='dark'>
                                <Card.Img variant="top" src={project.image} />
                                <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Text>{project.description}</Card.Text>
                                    <Card.Link href="#">View</Card.Link>
                                </Card.Body>
                            </Card>
                        ))}
                        <div className="view-more-container">
                            <button className="view-more-icon">
                                <i className="bi bi-three-dots"></i>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;






// import React from 'react';
// import { Card } from 'react-bootstrap';
// import '../css/Timeline.css'; // Make sure to create this CSS file for styling
// import "bootstrap-icons/font/bootstrap-icons.css";
//
// const Timeline = ({ teamMembers }) => {
//     return (
//         <div className="timeline-container">
//             <div className="timeline-line"></div>
//             {teamMembers.map((member, index) => (
//                 <div key={member.id} className="timeline-item">
//                     <div className={`profile-container`}>
//                         <img src={member.image} alt={member.name} className="profile-image"/>
//                         <h3>{member.name}</h3>
//                         <p>{member.role}</p>
//                     </div>
//                     <div className="timeline-icon"></div>
//                     <div className={`projects-container card-group-scrollable`}>
//                         {member.projects.map(project => (
//                             <Card className = 'project-card rounded border-danger' key={project.id} style={{ minWidth: '18rem' }} bg='dark'>
//                                 <Card.Img variant="top" src={project.image} />
//                                 <Card.Body className='profile-body-text'>
//                                     <Card.Title>{project.title}</Card.Title>
//                                     <Card.Text>{project.description}</Card.Text>
//                                     <Card.Link href="#">View</Card.Link>
//                                 </Card.Body>
//                             </Card>
//                         ))}
//                         <div className="view-more-container">
//                             <button className="view-more-icon">
//                                 <i className="bi bi-three-dots"></i>
//                             </button>
//                         </div>
//                         <div className="spacer"></div> {/* This is the spacing element */}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };
//
// export default Timeline;
