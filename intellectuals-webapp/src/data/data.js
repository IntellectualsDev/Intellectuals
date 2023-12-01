const teamMembers = [
    {
        id: 1,
        link:'/anshul',
        name: "Anshul Gowda",
        role: "Electrical Engineering, BSE & Pre-Medicine",
        image: "/anshul_profilephoto.png", // Replace with actual path
        projects: [
            {
                id: 'p1',
                title: "WiFi Thermometer",
                description: " Wifi Thermometer blending RaspberryPi and Node.js technology for temperature monitoring and communication.",
                image: "/wifitherm_largephoto.png", // Replace with actual path
            },
            {
                id: 'p2',
                title: "Yale Kidney BioBank Automated ML Pipeline",
                description: "Created a ML automated pipeline to extract and standardized data from PDF kidney biopsy reports",
                image: "/YaleMLPipeline_SmallPhoto.png", // Replace with actual path
            },
            {
                id: 'p3',
                title: "Delirium Identification Publication",
                description: "Conducted a systematic review of delirium identification and training under the mentorship of Dr. Sangil Lee MD",
                image: "/DeliriumPublication_LargePhoto.png", // Replace with actual path
            },
            {
                id: 'p4',
                title: "Intellecuals Web app FrontEnd",
                description: "Member of the Intellectuals Development Team who aided in the design, architecture, and implementation of the React & Google FirebaseIntellectuals Web Application. ",
                image: "/IntellectualsWebApp_SmallPhoto.png", // Replace with actual path
            },
        ],
    },

    {
        id: 2,
        link:'/rafa',
        name: "Rafael Rangel de la Tejera",
        role: "Electrical Engineering, BSE",
        image: "/rafa-pic.png", // Replace with actual path
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
        image: "/joseph_profilephoto.png", // Replace with actual path
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
                image: 'wifitherm_smallphoto.png',
                imageBg: '/wifitherm_largephoto.png',
                title: 'Wifi-Thermometer',
                description:" The Intellectuals created a Wifi Thermometer, which includes a RaspberryPi Model 4B and a Node.js Webserver. The Raspberry Pi component utilizes peripherals like a temperature sensor and LCD display, managed by a Python script that handles socket communication and allows remote SSH control. The Node.js WebServer is scalable, featuring asynchronous sockets and a Twilio API for SMS messaging. The frontend offers real-time updates with Chart.js, and a user-friendly interface for phone number input, graph selection, and temperature limit settings.",
            },
            {
                id: 2,
                image: 'wifitherm_smallphoto.png',
                imageBg: '/wifitherm_largephoto.png',
                title: 'Russian doll',
                description: " ",
            },
            {
                id: 3,
                image: 'wifitherm_smallphoto.png',
                imageBg: '/wifitherm_largephoto.png',
                title: 'The rain',
                description: " ",
            },
            {
                id: 4,
                image: 'wifitherm_smallphoto.png',
                imageBg: '/wifitherm_largephoto.png',
                title: 'Sex education',
                description: " ",
            },
            {
                id: 5,
                image: 'wifitherm_smallphoto.png',
                imageBg: '/wifitherm_largephoto.png',
                title: 'Elite',
                description: " ",
            },
            {
                id: 6,
                image: 'wifitherm_smallphoto.png',
                imageBg: '/wifitherm_largephoto.png',
                title: 'Black mirror',
                description: " ",
            },
        ]
    },

    {
        electrical:[
            {
                id: 1,
                image: '/slide1.jpg',
                imageBg: '/slide1b.webp',
                title: '1983',
                description: " ",
            },
            {
                id: 2,
                image: '/slide2.jpg',
                imageBg: '/slide2b.webp',
                title: 'Russian doll',
                description: " ",
            },
            {
                id: 3,
                image: '/slide3.jpg',
                imageBg: '/slide3b.webp',
                title: 'The rain',
                description: " ",
            },
            {
                id: 4,
                image: '/slide4.jpg',
                imageBg: '/slide4b.webp',
                title: 'Sex education',
                description: " ",
            },
            {
                id: 5,
                image: '/slide5.jpg',
                imageBg: '/slide5b.webp',
                title: 'Elite',
                description: " ",
            },
            {
                id: 6,
                image: '/slide6.jpg',
                imageBg: '/slide6b.webp',
                title: 'Black mirror',
                description: " ",
            },
        ]
    },
    {
        software:[
            {
                id: 1,
                image: '/slide1.jpg',
                imageBg: '/slide1b.webp',
                title: '1983',
                description: " ",
            },
            {
                id: 2,
                image: '/slide2.jpg',
                imageBg: '/slide2b.webp',
                title: 'Russian doll',
                description: " ",
            },
            {
                id: 3,
                image: '/slide3.jpg',
                imageBg: '/slide3b.webp',
                title: 'The rain',
                description: " ",
            },
            {
                id: 4,
                image: '/slide4.jpg',
                imageBg: '/slide4b.webp',
                title: 'Sex education',
                description: " ",
            },
            {
                id: 5,
                image: '/slide5.jpg',
                imageBg: '/slide5b.webp',
                title: 'Elite',
                description: " ",
            },
            {
                id: 6,
                image: '/slide6.jpg',
                imageBg: '/slide6b.webp',
                title: 'Black mirror',
                description: " ",
            },
        ]
    },

    {
        misc:[
            {
                id: 1,
                image: '/slide1.jpg',
                imageBg: '/slide1b.webp',
                title: '1983',
                description: " ",
            },
            {
                id: 2,
                image: '/slide2.jpg',
                imageBg: '/slide2b.webp',
                title: 'Russian doll',
                description: " ",
            },
            {
                id: 3,
                image: '/slide3.jpg',
                imageBg: '/slide3b.webp',
                title: 'The rain',
                description: " ",
            },
            {
                id: 4,
                image: '/slide4.jpg',
                imageBg: '/slide4b.webp',
                title: 'Sex education',
                description: " ",
            },
            {
                id: 5,
                image: '/slide5.jpg',
                imageBg: '/slide5b.webp',
                title: 'Elite',
                description: " ",
            },
            {
                id: 6,
                image: '/slide6.jpg',
                imageBg: '/slide6b.webp',
                title: 'Black mirror',
                description: " ",
            },
        ]
    },
    {
        anshul:[
            {
                id: 1,
                image: '/slide1.jpg',
                imageBg: '/slide1b.webp',
                title: '1983',
                description: " ",
            },
            {
                id: 2,
                image: '/slide2.jpg',
                imageBg: '/slide2b.webp',
                title: 'Russian doll',
                description: " ",
            },
            {
                id: 3,
                image: '/slide3.jpg',
                imageBg: '/slide3b.webp',
                title: 'The rain',
                description: " ",
            },
            {
                id: 4,
                image: '/slide4.jpg',
                imageBg: '/slide4b.webp',
                title: 'Sex education',
                description: " ",
            },
            {
                id: 5,
                image: '/slide5.jpg',
                imageBg: '/slide5b.webp',
                title: 'Elite',
                description: " ",
            },
            {
                id: 6,
                image: '/slide6.jpg',
                imageBg: '/slide6b.webp',
                title: 'Black mirror',
                description: " ",
            },
        ]
    },
    {
        rafa:[
            {
                id: 1,
                image: '/slide1.jpg',
                imageBg: '/slide1b.webp',
                title: '1983',
                description: " ",
            },
            {
                id: 2,
                image: '/slide2.jpg',
                imageBg: '/slide2b.webp',
                title: 'Russian doll',
                description: " ",
            },
            {
                id: 3,
                image: '/slide3.jpg',
                imageBg: '/slide3b.webp',
                title: 'The rain',
                description: " ",
            },
            {
                id: 4,
                image: '/slide4.jpg',
                imageBg: '/slide4b.webp',
                title: 'Sex education',
                description: " ",
            },
            {
                id: 5,
                image: '/slide5.jpg',
                imageBg: '/slide5b.webp',
                title: 'Elite',
                description: " ",
            },
            {
                id: 6,
                image: '/slide6.jpg',
                imageBg: '/slide6b.webp',
                title: 'Black mirror',
                description: " ",
            },
        ]
    },
    {
        joseph:[
            {
                id: 1,
                image: '/slide1.jpg',
                imageBg: '/slide1b.webp',
                title: '1983',
                description: " ",
            },
            {
                id: 2,
                image: '/slide2.jpg',
                imageBg: '/slide2b.webp',
                title: 'Russian doll',
                description: " ",
            },
            {
                id: 3,
                image: '/slide3.jpg',
                imageBg: '/slide3b.webp',
                title: 'The rain',
                description: " ",
            },
            {
                id: 4,
                image: '/slide4.jpg',
                imageBg: '/slide4b.webp',
                title: 'Sex education',
                description: " ",
            },
            {
                id: 5,
                image: '/slide5.jpg',
                imageBg: '/slide5b.webp',
                title: 'Elite',
                description: " ",
            },
            {
                id: 6,
                image: '/slide6.jpg',
                imageBg: '/slide6b.webp',
                title: 'Black mirror',
                description: " ",
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
                title: '1983',
                description: " ",
            },
            {
                id: 2,
                image: '/slide2.jpg',
                imageBg: '/slide2b.webp',
                title: 'Russian doll',
                description: " ",
            },
            {
                id: 3,
                image: '/slide3.jpg',
                imageBg: '/slide3b.webp',
                title: 'The rain',
                description: " ",
            },
            {
                id: 4,
                image: '/slide4.jpg',
                imageBg: '/slide4b.webp',
                title: 'Sex education',
                description: " ",
            },
            {
                id: 5,
                image: '/slide5.jpg',
                imageBg: '/slide5b.webp',
                title: 'Elite',
                description: " ",
            },
            {
                id: 6,
                image: '/slide6.jpg',
                imageBg: '/slide6b.webp',
                title: 'Black mirror',
                description: " ",
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
        'Smart',
        'Cool',
        'Sexy',
        'Athletic',
        'Intellectual',
    ],
    about:"Emo/Skater Boy Engineer",
    name:"Joseph",
    aboutMe:"Hi! My name is Joseph and i hate all of you :)",
    imagePath:"/joseph_profilephoto.png"

}
export {JosephPageData}

const RafaPageData ={
    education:[
        'BSE Electrical and Computer Science Engineering : University of Iowa',
        'MSE Electrical and Computer Science Engineering : University of Iowa',
        'Minor in Computers Science : University of Iowa',
        'Minor in Mathematics : University of Iowa',
    ],
    experience:[
        'Mobile engineer intern, Caseys',
        'Software engineer intern, Caseys',
        'Resident Assistant, University of Iowa',
        'Teaching assistant for Introduction for Computer engineering, University of Iowa ',
        'Supplemental Instruction leader, University of Iowa',

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
        'Intelligent',
    ],
    personal2:[
        'Problem solver',
        'Cool',
        'Athletic',
        'Charmer',
        'Funny',
    ],
    about:"Athletic Engineer",
    name:"Rafa",
    aboutMe:"Hi! I am from México",
    imagePath:"/rafa-pic.png"
}
export {RafaPageData}

const AnshulPageData ={
    education:[
        'Electrical Engineering BSE, University of Iowa, May 2024',
        'Computer Science Minor, University of Iowa, May 2024',
        'Pre-Medicine Track',
        'Ko-Chang and Maria Weiyi Pan Engineering Scholarship',
        'Volunteer UI Free Mobile Clinic'
    ],
    experience:[
        'Founder/Director, Grad Path 504 Non-profit',
        'Research Assistant, Yale University School of Medicine\'s CTRA',
        'Clinical Research Assistant, UIHC Emergency Department',
        'Alumni, Yale University\'s KUH Undergraduate Summer Research Internship',
        'Research Assistant, ImagiQ ',

    ],
    professional:[
        'React.js',
        'Node Framework',
        'JavaScript',
        'Java',
        'Natural Language Procesing',
        'Decentralized Architecture'
    ],
    professional2:[
        'C++,C',
        'Python, Django',
        'MySql,MongoDB, MariaDB',
        'AVR Assembly',
        'Data Scraping',
        'Git VCS'
    ],
    personal:[
        'Drive',
        'Empathy',
        'Communication',
        'Intellectual',
        'Problem Solving',
    ],
    personal2:[
        'Foodie!',
        'Travel Nut',
        'Bourdain Fan!',
        'Tennis!',
        'Friend :)',
    ],
    about:"Edible Engineer",
    name:"Anshul Gowda",
    aboutMe:"Existentialism, Wit, and a craving for good Dosa and Web Development",
    imagePath:"/anshul_profilephoto.png"
}
export {AnshulPageData}