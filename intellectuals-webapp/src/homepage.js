import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Canvas } from "react-three-fiber";
import Orb from './components/Orb'
import OrbitingOrb from "./components/OrbitingOrb";

import './css/HeroSection.css';
import './css/GlobalNav.css';

function GlobalNav() {
    return (
        <Navbar expand="lg" id="navbar" className="bg-body-tertiary" sticky='top' bg="dark" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand id = "logo-name" href="#">INTELLECTUALS</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavDropdown title="Team" id="teamScrollingDropdown">
                            <div className="navDropDown">
                                <NavDropdown.Item href="#navAnshulPage" className= 'dropDownItem'>
                                    Anshul Gowda
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#navJosephPage" className= 'dropDownItem'>
                                    Joseph Bart
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#navRafaPage" className= 'dropDownItem'>
                                    Rafa Rangel de la Tejera
                                </NavDropdown.Item>
                                <NavDropdown.Item href="navNitinPage" className= 'dropDownItem'>
                                    Nitin Nagarkar
                                </NavDropdown.Item>
                            </div>
                        </NavDropdown>

                        <NavDropdown title="Projects" id="projectsScrollingDropDown">
                            <div className="navDropDown">
                                <NavDropdown.Item href="#navWifiTherm" className= 'dropDownItem'>
                                    Wifi Thermometer
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#navIRTransmitReceive" className= 'dropDownItem'>
                                    IR Transmitter & Receiver
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#Intellectuals WebApp" className= 'dropDownItem'>
                                    Intellectuals Personal Website
                                </NavDropdown.Item>
                            </div>
                        </NavDropdown>
                        <Nav.Link href="#">
                            Contact
                        </Nav.Link>
                    </Nav>
                    <Button variant="outline-success">Login / Sign Up</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export { GlobalNav} ;

const HeroSection = () => {
    const [isOrbitingOrbFront, setIsOrbitingOrbFront] = useState(false);

    return (
        <div>
            <div className="hero-container">
                <div className="hero-content">
                    <h1>Top Tier Team in the Field of Electrical and Computer Engineering</h1>
                    <p>Bring your idea to live with a professional team of engineers. We have what it takes to make your dreams a reality!</p>
                    <Button variant="outline-success">Get Started</Button>
                </div>
                <div className="images-container">
                    {/*<div className="image-container">*/}
                        {/*<Canvas className="orb-canvas" style={{ width: '100%', height: '100%', }}>*/}
                        {/*<Canvas className="orb-canvas" style={{ width: '70%', height: '70%',top: '-10%', left: '-5%', transform: 'translate(20%, -10%)' }}>*/}
                        {/*    <Orb color="#fff702" factor={10} ambientColor='0x404040'/>*/}
                        {/*</Canvas>*/}
                        <Canvas id = 'big-orb-canvas' className="orb-canvas" style={{ width: '62%', height: '62%',top: '-10%', left: '-5%', transform: 'translate(20%, -10%)' }}>
                            <Orb color="#FFFD82" factor={3} ambientColor='#FFFD82'/>
                        </Canvas>
                        {/* Orb 2 - Medium and placed in the center */}
                        <Canvas id = 'medium-orb-canvas' className="orb-canvas" style={{ width: '45%', height: '45%', top: '8%', left: '10%', transform: 'translate(20%, -20%)' }}>
                            <Orb color="#61E786" factor={10} ambientColor='#61E786' />
                        </Canvas>
                        {/*/!* Orb 3 - Smallest and placed top left *!/*/}
                        <Canvas id = 'small-orb-canvas' className="orb-canvas" style={{ width: '25%', height: '25%', top: '38%', left: '-40%', transform: 'translate(20%, -30%)'}}>
                            <Orb color="#ED217C" factor={30} ambientColor='#ED217C'/>
                        </Canvas>
                    {/*</div>*/}



                    {/*<div className="canvas-container" style={{ height: '500px', width: '500px' }}>*/}
                    {/*    <Canvas className="orb-canvas">*/}
                    {/*        <Orb color="#fff702" factor={10} />*/}
                    {/*    </Canvas>*/}
                    {/*</div>*/}
                </div>
            </div>
            <hr style={{
                background: '#E63946',
                color: '#E63946',
                borderColor: '#E63946',
                height: '10px',
            }}/>
        </div>
    );
};

export { HeroSection };

const ColoredLine = ({ color }) => (
    <hr
        id='horizontal-divider'
        style={{
            color: color,
            backgroundColor: color,
            height: 5,
            opacity: 1,
        }}
    />

);

export { ColoredLine };