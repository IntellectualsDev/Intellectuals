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
        'BSE Computer Science',
        'Minor in Arts'
    ],
    experience:[
        'Work1',
        'Work2',
        'Work3'
    ],
    professional:[
        'prof_skill1',
        'prof_skill2',
        'prof_skill3',
        'prof_skill4',
    ],
    personal:[
        'personal_skill1',
        'personal_skill2',
        'personal_skill3',
        'personal_skill4',

    ],
    about:"Computer Science Engineer",
    name:"Joseph"
}
export {JosephPageData}

