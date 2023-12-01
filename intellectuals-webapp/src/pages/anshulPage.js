import React from 'react';
import AnimatedHero from "../components/AnimatedHero";
import '../css/NewHeroSection.css'

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import {GlobalNav} from "../homepage";

const anshulPage = () => {
    return(
        <div>
            <GlobalNav />
            <Container className='opaque-container' fluid>
                <div className='animated-squares'>
                    <AnimatedHero />
                </div>
                <Row>
                    <Col xs ={12} className='hero-top'>
                    </Col>
                    <Col xs ={12} className='anim-hero-content'>
                        <h1>Intellectuals</h1>
                        <h2>Sculpting Code, Forging Innovation</h2>
                    </Col>
                    <Col xs ={12} className='hero-bottom'>
                    </Col>
                </Row>
            </Container>
        </div>
        );
};

export default anshulPage;