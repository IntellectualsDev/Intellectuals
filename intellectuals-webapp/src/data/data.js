const teamMembers = [
    {
        id: 1,
        link:'/anshul',
        name: "Anshul Gowda",
        role: "Electrical Engineering, BSE & Pre-Medicine",
        image: "/display-pic.png", // Replace with actual path
        projects: [
            {
                id: 'p1',
                title: "WiFi Thermometer",
                description: "Embedded systems project that consists of a thermometer that connects to a website... TODO",
                image: "/logo192.png", // Replace with actual path
            },
            {
                id: 'p2',
                title: "Yale Kidney BioBank Automated ML Pipeline",
                description: "Created a ML automated pipeline to extract and standardized data from PDF kidney biopsy reports",
                image: "/logo192.png", // Replace with actual path
            },
            {
                id: 'p3',
                title: "Delirium Identification Training Publication Lee Lab",
                description: "Conducted a systematic review of delirium identification and training under the mentorship of Dr. Sangil Lee MD",
                image: "/logo192.png", // Replace with actual path
            },
            {
                id: 'p4',
                title: "Intellecuals Web app FrontEnd",
                description: "Designed and implemented the Intellectuals webapp frontend",
                image: "/logo192.png", // Replace with actual path
            },
        ],
    },

    {
        id: 2,
        link:'/rafa',
        name: "Rafael Rangel de la Tejera",
        role: "Electrical Engineering, BSE",
        image: "/display-pic.png", // Replace with actual path
        projects: [
            {
                id: 'p1',
                title: "WiFi Thermometer",
                description: "Embedded systems project that consists of a thermometer that connects to a website... TODO",
                image: "/logo192.png", // Replace with actual path
            },
            {
                id: 'p2',
                title: "Influencer App",
                description: "Created a influencer gig networking app... TODO",
                image: "/logo192.png", // Replace with actual path
            },
            {
                id: 'p3',
                title: "Caseys Frontend Web App",
                description: "Flutter App for Casey's front of house TODO",
                image: "/logo192.png", // Replace with actual path
            },
        ],
    },

    // {
    //     id: 3,
    //     name: "Nitin Nagarkar",
    //     role: "Mechanical Engineering, Electrical Engineering, BSE",
    //     image: "/display-pic.png", // Replace with actual path
    //     projects: [
    //         {
    //             id: 'p1',
    //             title: "WiFi Thermometer",
    //             description: "Embedded systems project that consists of a thermometer that connects to a website... TODO",
    //             image: "/logo192.png", // Replace with actual path
    //         },
    //         {
    //             id: 'p2',
    //             title: "Robotics Research UIUC",
    //             description: "Research stuff, robotics, UIUC... TODO",
    //             image: "/logo192.png", // Replace with actual path
    //         },
    //         {
    //             id: 'p3',
    //             title: "Other Mechanical stuff",
    //             description: "Other stuff... TODO",
    //             image: "/logo192.png", // Replace with actual path
    //         },
    //     ],
    // },

    {
        id: 3,
        link:'/nitin',
        name: "Eli Paulsen",
        role: "Computer Science Engineering, BSE",
        image: "/display-pic.png", // Replace with actual path
        projects: [
            {
                id: 'p1',
                title: "Collins Aerospace Embedded Engineer",
                description: "Embedded systems project that consists DOD related infrastructure solutions... TODO",
                image: "/logo192.png", // Replace with actual path
            },
            {
                id: 'p2',
                title: "UIowa IT Developer",
                description: "Institutional Web Development at Scale, focused on UIX and backend technologies... TODO",
                image: "/logo192.png", // Replace with actual path
            },
            {
                id: 'p3',
                title: "Chess Clock",
                description: "Hardware/software project fit to chess professional specs TODO ",
                image: "/logo192.png", // Replace with actual path
            },
        ],
    },

    {
        id: 4,
        link:'/joseph',
        name: "Joseph Bartoszczyk",
        role: "Computer Science Engineering, BSE",
        image: "/display-pic.png", // Replace with actual path
        projects: [
            {
                id: 'p1',
                title: "Java Game Engine",
                description: "In house developed 3D game engine... TODO",
                image: "/logo192.png", // Replace with actual path
            },
            {
                id: 'p2',
                title: "Geolocator Webapp",
                description: "Some crap using the google geolocator... TODO",
                image: "/logo192.png", // Replace with actual path
            },
            {
                id: 'p3',
                title: "DND",
                description: "Avidly plays DND instead of hanging out with his friends :/ TODO",
                image: "/logo192.png", // Replace with actual path
            },
            {
                id: 'NA',
                title: "View All",
                description: "",
                image: "/logo192.png", // Replace with actual path
            },
        ],
    },
    // ... more team members
];

export {teamMembers};

const projects = [
    {
        featured:[
            {
                id: 1,
                image: '/slide1.jpg',
                imageBg: '/slide1b.webp',
                title: '1983'
            },
            {
                id: 2,
                image: '/slide2.jpg',
                imageBg: '/slide2b.webp',
                title: 'Russian doll'
            },
            {
                id: 3,
                image: '/slide3.jpg',
                imageBg: '/slide3b.webp',
                title: 'The rain',
            },
            {
                id: 4,
                image: '/slide4.jpg',
                imageBg: '/slide4b.webp',
                title: 'Sex education'
            },
            {
                id: 5,
                image: '/slide5.jpg',
                imageBg: '/slide5b.webp',
                title: 'Elite'
            },
            {
                id: 6,
                image: '/slide6.jpg',
                imageBg: '/slide6b.webp',
                title: 'Black mirror'
            },
        ]
    },

    {
        electrical:[
            {
                id: 1,
                image: '/slide1.jpg',
                imageBg: '/slide1b.webp',
                title: '1983'
            },
            {
                id: 2,
                image: '/slide2.jpg',
                imageBg: '/slide2b.webp',
                title: 'Russian doll'
            },
            {
                id: 3,
                image: '/slide3.jpg',
                imageBg: '/slide3b.webp',
                title: 'The rain',
            },
            {
                id: 4,
                image: '/slide4.jpg',
                imageBg: '/slide4b.webp',
                title: 'Sex education'
            },
            {
                id: 5,
                image: '/slide5.jpg',
                imageBg: '/slide5b.webp',
                title: 'Elite'
            },
            {
                id: 6,
                image: '/slide6.jpg',
                imageBg: '/slide6b.webp',
                title: 'Black mirror'
            },
        ]
    },
    {
        software:[
            {
                id: 1,
                image: '/slide1.jpg',
                imageBg: '/slide1b.webp',
                title: '1983'
            },
            {
                id: 2,
                image: '/slide2.jpg',
                imageBg: '/slide2b.webp',
                title: 'Russian doll'
            },
            {
                id: 3,
                image: '/slide3.jpg',
                imageBg: '/slide3b.webp',
                title: 'The rain',
            },
            {
                id: 4,
                image: '/slide4.jpg',
                imageBg: '/slide4b.webp',
                title: 'Sex education'
            },
            {
                id: 5,
                image: '/slide5.jpg',
                imageBg: '/slide5b.webp',
                title: 'Elite'
            },
            {
                id: 6,
                image: '/slide6.jpg',
                imageBg: '/slide6b.webp',
                title: 'Black mirror'
            },
        ]
    },

    {
        misc:[
            {
                id: 1,
                image: '/slide1.jpg',
                imageBg: '/slide1b.webp',
                title: '1983'
            },
            {
                id: 2,
                image: '/slide2.jpg',
                imageBg: '/slide2b.webp',
                title: 'Russian doll'
            },
            {
                id: 3,
                image: '/slide3.jpg',
                imageBg: '/slide3b.webp',
                title: 'The rain',
            },
            {
                id: 4,
                image: '/slide4.jpg',
                imageBg: '/slide4b.webp',
                title: 'Sex education'
            },
            {
                id: 5,
                image: '/slide5.jpg',
                imageBg: '/slide5b.webp',
                title: 'Elite'
            },
            {
                id: 6,
                image: '/slide6.jpg',
                imageBg: '/slide6b.webp',
                title: 'Black mirror'
            },
        ]
    },
    {
        anshul:[
            {
                id: 1,
                image: '/slide1.jpg',
                imageBg: '/slide1b.webp',
                title: '1983'
            },
            {
                id: 2,
                image: '/slide2.jpg',
                imageBg: '/slide2b.webp',
                title: 'Russian doll'
            },
            {
                id: 3,
                image: '/slide3.jpg',
                imageBg: '/slide3b.webp',
                title: 'The rain',
            },
            {
                id: 4,
                image: '/slide4.jpg',
                imageBg: '/slide4b.webp',
                title: 'Sex education'
            },
            {
                id: 5,
                image: '/slide5.jpg',
                imageBg: '/slide5b.webp',
                title: 'Elite'
            },
            {
                id: 6,
                image: '/slide6.jpg',
                imageBg: '/slide6b.webp',
                title: 'Black mirror'
            },
        ]
    },
    {
        rafa:[
            {
                id: 1,
                image: '/slide1.jpg',
                imageBg: '/slide1b.webp',
                title: '1983'
            },
            {
                id: 2,
                image: '/slide2.jpg',
                imageBg: '/slide2b.webp',
                title: 'Russian doll'
            },
            {
                id: 3,
                image: '/slide3.jpg',
                imageBg: '/slide3b.webp',
                title: 'The rain',
            },
            {
                id: 4,
                image: '/slide4.jpg',
                imageBg: '/slide4b.webp',
                title: 'Sex education'
            },
            {
                id: 5,
                image: '/slide5.jpg',
                imageBg: '/slide5b.webp',
                title: 'Elite'
            },
            {
                id: 6,
                image: '/slide6.jpg',
                imageBg: '/slide6b.webp',
                title: 'Black mirror'
            },
        ]
    },
    {
        joseph:[
            {
                id: 1,
                image: '/slide1.jpg',
                imageBg: '/slide1b.webp',
                title: '1983'
            },
            {
                id: 2,
                image: '/slide2.jpg',
                imageBg: '/slide2b.webp',
                title: 'Russian doll'
            },
            {
                id: 3,
                image: '/slide3.jpg',
                imageBg: '/slide3b.webp',
                title: 'The rain',
            },
            {
                id: 4,
                image: '/slide4.jpg',
                imageBg: '/slide4b.webp',
                title: 'Sex education'
            },
            {
                id: 5,
                image: '/slide5.jpg',
                imageBg: '/slide5b.webp',
                title: 'Elite'
            },
            {
                id: 6,
                image: '/slide6.jpg',
                imageBg: '/slide6b.webp',
                title: 'Black mirror'
            },
        ]
    },
    {
        //TODO: change
        nitin:[
            {
                id: 1,
                image: '/slide1.jpg',
                imageBg: '/slide1b.webp',
                title: '1983'
            },
            {
                id: 2,
                image: '/slide2.jpg',
                imageBg: '/slide2b.webp',
                title: 'Russian doll'
            },
            {
                id: 3,
                image: '/slide3.jpg',
                imageBg: '/slide3b.webp',
                title: 'The rain',
            },
            {
                id: 4,
                image: '/slide4.jpg',
                imageBg: '/slide4b.webp',
                title: 'Sex education'
            },
            {
                id: 5,
                image: '/slide5.jpg',
                imageBg: '/slide5b.webp',
                title: 'Elite'
            },
            {
                id: 6,
                image: '/slide6.jpg',
                imageBg: '/slide6b.webp',
                title: 'Black mirror'
            },
        ]
    }
];

export {projects};

const JosephPageData ={
    education:[
        'BSE Computer Science : University of Iowa',
        'Minor in Arts : University of Iowa',
        'High School Diploma : Iowa City West High'
    ],
    experience:[
        'Student IT Specialist : UIHC : Iowa City, IA',
    ],
    professional:[
        'React Framework',
        'Node Framework',
        'JavaScript',
        'Java',
        'OpenGL',
    ],
    professional2:[
        'C++,C,C#',
        'Python',
        'MySql,NoSQL',
        'AVR Assembly',
        'Relational Databases',
    ],
    personal:[
        'LeaderShip',
        'Communication',
        'Fast Learner',
        'Charisma',
        'Swagger',
    ],
    personal2:[
        'LeaderShip',
        'Communication',
        'Fast Learner',
        'Charisma',
        'Swagger',
    ],
    about:"Computer Science Engineer",
    name:"Joseph",
    aboutMe:"Hi! My name is Joseph and i hate all of you :)"
}
export {JosephPageData}

