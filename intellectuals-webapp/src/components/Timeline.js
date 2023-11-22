import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card } from 'react-bootstrap';
import '../css/Timeline.css';
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap Icons

// Variants for the profile image and text
const profileImageVariants = {
    minimized: {
        scale: 0.5, // Smaller profile picture when minimized
        opacity: 1, // Profile picture becomes transparent when minimized
        x: "180%",
        transition: { duration: 0.2 }
    },
    maximized: {
        scale: 1, // Normal size profile picture when maximized
        opacity: 1, // Profile picture fully visible when maximized
        x: "0%",
        transition: { duration: 0.2 }
    }
};

const profileTextVariants = {
    minimized: {
        opacity: 0, // Text becomes fully transparent and disappears when minimized
        transition: { duration: 0.2 }
    },
    maximized: {
        opacity: 1, // Text fully visible when maximized
        transition: { duration: 0.2 }
    }
};

// Variants for the project cards container
const timelineItemVariants = {
    minimized: {
        opacity: 0, // Projects container becomes transparent when minimized
        transition: { duration: 0.2 }
    },
    maximized: {
        opacity: 1, // Projects container fully visible when maximized
        transition: { duration: 0.2 }
    }
};

const timelineIconVariants = {
    minimized: {
        scale: 1,
        transition: {duration: 0.2}

    },
    maximized: {
        scale: 2,
        transition: {duration: 0.2}
    }
}

const TimelineItem = React.forwardRef(({ member, isMinimized }, ref) => (
    <div className="timeline-item" ref={ref}>
        <div className="profile-container">
            <motion.div
                className='profile-image-container'
                variants={profileImageVariants}
                animate={isMinimized ? "minimized" : "maximized"}
            >
                <img src={member.image} alt={member.name} className="profile-image" />
            </motion.div>
            <motion.div
                className="profile-text-container"
                variants={profileTextVariants}
                animate={isMinimized ? "minimized" : "maximized"}
            >
                <h3 id='team-name-header'>{member.name}</h3>
                <span className="badge badge-secondary">{member.role}</span>
            </motion.div>
        </div>

        <motion.div
            className="timeline-icon"
            variants={timelineIconVariants}
            animate={isMinimized ? "minimized" : "maximized"}
        ></motion.div>

        {/*<div className="timeline-icon"></div> /!* Circle icon on the timeline *!/*/}

        <motion.div
            className="projects-container"
            variants={timelineItemVariants}
            animate={isMinimized ? "minimized" : "maximized"}
        >
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





// import React, { useState, useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { Card } from 'react-bootstrap';
// import '../css/Timeline.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
//
//
// const timelineItemVariants = {
//     minimized: {
//         opacity: 0,
//         transition: { duration: 0.2 }
//     },
//     maximized: {
//         opacity: 1,
//         transition: { duration: 0.2 }
//     }
// };
//
// const TimelineItem = React.forwardRef(({ member, isMinimized }, ref) => (
//     <div className="timeline-item" ref={ref}>
//         <motion.div
//             className="profile-container"
//             animate={isMinimized ? "minimized" : "maximized"}
//             variants={timelineItemVariants}
//         >
//             {/* ...profile content */}
//             <div className="profile-container">
//                 <div className='profile-image-container'>
//                     <img src={member.image} alt={member.name} className="profile-image" />
//                 </div>
//                 <div className="profile-text-container">
//                     <h3 id='team-name-header'>{member.name}</h3>
//                     <span className="badge badge-secondary">{member.role}</span>
//                     {/*<p>{member.role}</p>*/}
//                 </div>
//             </div>
//
//         </motion.div>
//         <div className="timeline-icon"></div>
//         <motion.div
//             className="projects-container"
//             animate={isMinimized ? "minimized" : "maximized"}
//             variants={timelineItemVariants}
//         >
//             {/* ...projects content */}
//             <div className="projects-container">
//                 {member.projects.map(project => (
//                     <Card className='project-card rounded border-danger' key={project.id} bg='dark'>
//                         <Card.Img variant="top" src={project.image} />
//                         <Card.Body>
//                             <Card.Title className='card-title'>{project.title}</Card.Title>
//                             <Card.Text>{project.description}</Card.Text>
//                             <Card.Link href="#">View</Card.Link>
//                         </Card.Body>
//                     </Card>
//                 ))}
//                 <div className="view-more-container">
//                     <button className="view-more-icon">
//                         <i className="bi bi-three-dots"></i>
//                     </button>
//                 </div>
//             </div>
//
//         </motion.div>
//     </div>
// ));
//
// const Timeline = ({ teamMembers }) => {
//     const [focusedItem, setFocusedItem] = useState(null);
//     const itemRefs = useRef(teamMembers.map(() => React.createRef()));
//
//     const handleScroll = () => {
//         const focusedIndex = itemRefs.current.reduce((closest, curr, index) => {
//             const box = curr.current.getBoundingClientRect();
//             const offset = Math.abs(box.top);
//             if (offset < closest.offset) {
//                 return { index, offset };
//             } else {
//                 return closest;
//             }
//         }, { index: 0, offset: Number.POSITIVE_INFINITY }).index;
//
//         setFocusedItem(focusedIndex);
//     };
//
//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);
//
//     return (
//         <div className="timeline-container">
//             <div className="timeline-line"></div>
//             {teamMembers.map((member, index) => (
//                 <TimelineItem
//                     key={member.id}
//                     member={member}
//                     isMinimized={index !== focusedItem}
//                     ref={itemRefs.current[index]}
//                 />
//             ))}
//         </div>
//     );
// };
//
// export default Timeline;

