import React from 'react';
import AnimatedProjectsHeroGraphic from "../components/AnimatedProjectsHero";
import '../css/AnimatedHomepageHero.css'

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import {GlobalNav} from "../homepage";

const anshulPage = () => {
    return(
        <div>
            <h1>Hello</h1>
            {/*<div>*/}
            {/*    <Container className='opaque-container' fluid>*/}
            {/*        <div className='animated-squares'>*/}
            {/*            <AnimatedProjectsHeroGraphic />*/}
            {/*        </div>*/}
            {/*        <Row>*/}
            {/*            <Col xs ={12} className='hero-top'>*/}
            {/*            </Col>*/}
            {/*            <Col xs ={12} className='anim-hero-content'>*/}
            {/*                <h1>Discover Innovation</h1>*/}
            {/*                <h2>Explore the projects that are shaping the future of technology.</h2>*/}
            {/*            </Col>*/}
            {/*            <Col xs ={12} className='hero-bottom'>*/}
            {/*            </Col>*/}
            {/*        </Row>*/}
            {/*    </Container>*/}
            {/*</div>*/}
        </div>
        );
};

export default anshulPage;