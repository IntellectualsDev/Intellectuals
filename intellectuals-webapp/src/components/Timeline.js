import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card } from 'react-bootstrap';
import '../css/Timeline.css';

const timelineItemVariants = {
    minimized: {
        opacity: 0,
        transition: { duration: 0.2 }
    },
    maximized: {
        opacity: 1,
        transition: { duration: 0.2 }
    }
};

const TimelineItem = React.forwardRef(({ member, isMinimized }, ref) => (
    <div className="timeline-item" ref={ref}>
        <motion.div
            className="profile-container"
            animate={isMinimized ? "minimized" : "maximized"}
            variants={timelineItemVariants}
        >
            {/* ...profile content */}
            <div className="profile-container">
                <div className='profile-image-container'>
                    <img src={member.image} alt={member.name} className="profile-image" />
                </div>
                <div className="profile-text-container">
                    <h3 id='team-name-header'>{member.name}</h3>
                    <span className="badge badge-secondary">{member.role}</span>
                    {/*<p>{member.role}</p>*/}
                </div>
            </div>

        </motion.div>
        <div className="timeline-icon"></div>
        <motion.div
            className="projects-container"
            animate={isMinimized ? "minimized" : "maximized"}
            variants={timelineItemVariants}
        >
            {/* ...projects content */}
            <div className="projects-container">
                {member.projects.map(project => (
                    <Card className='project-card rounded border-danger' key={project.id} bg='dark'>
                        <Card.Img variant="top" src={project.image} />
                        <Card.Body>
                            <Card.Title className='card-title'>{project.title}</Card.Title>
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

        </motion.div>
    </div>
));

const Timeline = ({ teamMembers }) => {
    const [focusedItem, setFocusedItem] = useState(null);
    const itemRefs = useRef(teamMembers.map(() => React.createRef()));

    const handleScroll = () => {
        const focusedIndex = itemRefs.current.reduce((closest, curr, index) => {
            const box = curr.current.getBoundingClientRect();
            const offset = Math.abs(box.top);
            if (offset < closest.offset) {
                return { index, offset };
            } else {
                return closest;
            }
        }, { index: 0, offset: Number.POSITIVE_INFINITY }).index;

        setFocusedItem(focusedIndex);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="timeline-container">
            <div className="timeline-line"></div>
            {teamMembers.map((member, index) => (
                <TimelineItem
                    key={member.id}
                    member={member}
                    isMinimized={index !== focusedItem}
                    ref={itemRefs.current[index]}
                />
            ))}
        </div>
    );
};

export default Timeline;










// import React from 'react';
// import { Card } from 'react-bootstrap';
// import '../css/Timeline.css'; // Updated CSS file path
// import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap Icons
//
// const Timeline = ({ teamMembers }) => {
//     return (
//         <div className="timeline-container">
//             <div className="timeline-line"></div> {/* Vertical line for the timeline */}
//             {teamMembers.map((member) => (
//                 <div key={member.id} className="timeline-item">
//                     <div className="profile-container">
//                         <div className='profile-image-container'>
//                             <img src={member.image} alt={member.name} className="profile-image" />
//                         </div>
//                         <div className="profile-text-container">
//                             <h3 id='team-name-header'>{member.name}</h3>
//
//                             <span className="badge badge-secondary">{member.role}</span>
//                             {/*<p>{member.role}</p>*/}
//                         </div>
//                     </div>
//                     <div className="timeline-icon"></div> {/* Circle icon on the timeline */}
//                     <div className="projects-container">
//                         {member.projects.map(project => (
//                             <Card className='project-card rounded border-danger' key={project.id} bg='dark'>
//                                 <Card.Img variant="top" src={project.image} />
//                                 <Card.Body>
//                                     <Card.Title className='card-title'>{project.title}</Card.Title>
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
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };
//
// export default Timeline;






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
