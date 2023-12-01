import React, {Component, useEffect} from 'react';
import Slider from '../components/Slider/NetflixSlider'
import '../css/ProjectsPage.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {GlobalNav} from "../homepage";
import {projects} from "../data/data"
import {AnimatedProjectsHero} from "../components/AnimatedProjectsHero";

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

            {/*<ProjectsHeroSection />*/}
                <AnimatedProjectsHero />

            <Container className='projects-slider-container' fluid>
                <Row>
                    <Col xs ={12} className= 'heading-col'>
                        <h4 className={"heading"}>Featured Projects:</h4>
                    </Col>
                    <Col xs ={12} className= 'slider-col'>
                        <Slider>
                            {projects[0].featured.map((project, index) => (
                                <Slider.Item project={project} key={project.id}>item{index+1}</Slider.Item>
                            ))}
                        </Slider>
                    </Col>

                    <Col xs ={12} className= 'heading-col'>
                        <h4 className={"heading"}>Electrical Engineering:</h4>
                    </Col>
                    <Col xs ={12} className= 'slider-col'>
                        <Slider>
                            {projects[1].electrical.map((project, index) => (
                                <Slider.Item project={project} key={project.id}>item{index+1}</Slider.Item>
                            ))}
                        </Slider>
                    </Col>

                    <Col xs ={12} className= 'heading-col'>
                        <h4 className={"heading"}>Software Development:</h4>
                    </Col>
                    <Col xs ={12} className= 'slider-col'>
                        <Slider>
                            {projects[2].software.map((project, index) => (
                                <Slider.Item project={project} key={project.id}>item{index+1}</Slider.Item>
                            ))}
                        </Slider>
                    </Col>

                    <Col xs ={12} className= 'heading-col'>
                        <h4 className={"heading"}>Miscellaneous:</h4>
                    </Col>
                    <Col xs ={12} className= 'slider-col'>
                        <Slider>
                            {projects[3].misc.map((project, index) => (
                                <Slider.Item project={project} key={project.id}>item{index+1}</Slider.Item>
                            ))}
                        </Slider>
                    </Col>
                </Row>
            </Container>
            {/*//TODO: migrate to personal pages with proper styling*/}
            {/*<Row>*/}
            {/*    <h4 className={"heading"}>Anshul's Projects:</h4>*/}
            {/*</Row>*/}
            {/*<Slider>*/}
            {/*    {projects[4].anshul.map((project, index) => (*/}
            {/*        <Slider.Item project={project} key={project.id}>item{index+1}</Slider.Item>*/}
            {/*    ))}*/}
            {/*</Slider>*/}

            {/*<Row>*/}
            {/*    <h4 className={"heading"}>Rafa's Projects:</h4>*/}
            {/*</Row>*/}
            {/*<Slider>*/}
            {/*    {projects[5].rafa.map((project, index) => (*/}
            {/*        <Slider.Item project={project} key={project.id}>item{index+1}</Slider.Item>*/}
            {/*    ))}*/}
            {/*</Slider>*/}

            {/*<Row>*/}
            {/*    <h4 className={"heading"}>Joseph's Projects:</h4>*/}
            {/*</Row>*/}
            {/*<Slider>*/}
            {/*    {projects[6].joseph.map((project, index) => (*/}
            {/*        <Slider.Item project={project} key={project.id}>item{index+1}</Slider.Item>*/}
            {/*    ))}*/}
            {/*</Slider>*/}

            {/*<Row>*/}
            {/*    <h4 className={"heading"}>Nitin's Projects:</h4>*/}
            {/*</Row>*/}
            {/*<Slider>*/}
            {/*    {projects[7].nitin.map((project, index) => (*/}
            {/*        <Slider.Item project={project} key={project.id}>item{index+1}</Slider.Item>*/}
            {/*    ))}*/}
            {/*</Slider>*/}
        </div>
    );
}

export default ProjectsPage;