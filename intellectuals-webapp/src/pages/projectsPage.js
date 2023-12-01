import React, {Component, useEffect} from 'react';
import Slider from '../components/Slider/NetflixSlider'
import '../css/ProjectsPage.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {GlobalNav} from "../homepage";

const projects = [
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
    }
];

// const movies = [
//     {
//         id: 1,
//         image: '/display-pic.png',
//         imageBg: '/logo192.png',
//         title: 'Project 1'
//     },
//     {
//         id: 2,
//         image: '/display-pic.png',
//         imageBg: '/logo192.png',
//         title: 'Project 2'
//     },
//     {
//         id: 3,
//         image: '/display-pic.png',
//         imageBg: '/logo192.png',
//         title: 'Project 3'
//     },
//     {
//         id: 4,
//         image: '/display-pic.png',
//         imageBg: '/logo192.png',
//         title: 'Project 4'
//     },
//     {
//         id: 5,
//         image: '/display-pic.png',
//         imageBg: '/logo192.png',
//         title: 'Project 5'
//     },
//     {
//         id: 6,
//         image: '/display-pic.png',
//         imageBg: '/logo192.png',
//         title: 'Project 6'
//     }
// ];

const ProjectsHeroSection = () => (
    <div className="projects-hero-section"
         style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/jigsaw.jpeg)` }}
    >
        <div className='project-hero-content'>
            <h1>Discover Innovation</h1>
            <p>Explore the projects that are shaping the future of technology.</p>
        </div>
    </div>
);

const ProjectsPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="projects-page">
            <GlobalNav />
            <ProjectsHeroSection />
            <Row>
                    <h4 className={"heading"}>Featured Projects:</h4>
            </Row>
            <Slider>
                {projects.map(project => (
                    <Slider.Item project={project} key={project.id}>item1</Slider.Item>
                ))}
            </Slider>
            <Row>
                <h4 className={"heading"}>Embedded Systems:</h4>
            </Row>
            <Slider>
                {projects.map(project => (
                    <Slider.Item project={project} key={project.id}>item1</Slider.Item>
                ))}
            </Slider>
            <Row>
                <h4 className={"heading"}>Data Engineering:</h4>
            </Row>
            <Slider>
                {projects.map(project => (
                    <Slider.Item project={project} key={project.id}>item1</Slider.Item>
                ))}
            </Slider>
        </div>
    );
}

export default ProjectsPage;