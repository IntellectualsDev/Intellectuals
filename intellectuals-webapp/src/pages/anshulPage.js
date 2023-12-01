import React from 'react';
import AnimatedHomepageHeroGraphic from "../components/AnimatedHomepageHeroGraphic";
import '../css/AnimatedHomepageHero.css'

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import {GlobalNav} from "../homepage";

const anshulPage = () => {
    return(
        <div>
            <p>Hello</p>
            {/*<GlobalNav />*/}
            {/*<Container className='opaque-container' fluid>*/}
            {/*    <div className='animated-squares'>*/}
            {/*        <AnimatedHomepageHeroGraphic />*/}
            {/*    </div>*/}
            {/*    <Row>*/}
            {/*        <Col xs ={12} className='hero-top'>*/}
            {/*        </Col>*/}
            {/*        <Col xs ={12} className='anim-hero-content'>*/}
            {/*            <h1>Intellectuals</h1>*/}
            {/*            <h2>Sculpting Code, Forging Innovation</h2>*/}
            {/*        </Col>*/}
            {/*        <Col xs ={12} className='hero-bottom'>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*</Container>*/}
        </div>
        );
};

export default anshulPage;