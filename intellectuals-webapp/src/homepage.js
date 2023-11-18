import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './css/HeroSection.css';
import './css/GlobalNav.css';

function GlobalNav() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" sticky='top' bg="dark" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand href="#">INTELLECTUALS</Navbar.Brand>
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
    return (
        <div>
            <div className="hero-container">
                <div className="hero-content">
                    <h1>Top Tier Team in the Field of Electrical and Computer Engineering</h1>
                    <p>Bring your idea to live with a professional team of engineers. We have what it takes to make your dreams a reality!</p>
                    <button className="get-started-button">Get Started</button>
                </div>
                <div className="images-container">
                    <img src="../public/intellectuals_homepage.jpg" alt="The Development Team" className="teamphoto-image" />
                    <img src="../public/logo512.png" alt="Code Editor" className="code-editor-image" />
                </div>
            </div>
            <hr
                style={{
                    background: 'lime',
                    color: 'lime',
                    borderColor: 'lime',
                    height: '3px',
                }}
            />
        </div>



    );
};

export { HeroSection };

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);

export {ColoredLine}