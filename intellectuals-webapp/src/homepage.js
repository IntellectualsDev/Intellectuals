import React, {useEffect, useRef, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Canvas } from "react-three-fiber";
import Orb from './components/Orb'
import { onAuthStateChanged } from 'firebase/auth';
import OrbitingOrb from "./components/OrbitingOrb";

import './css/HeroSection.css';
import './css/GlobalNav.css';
import {Link} from "react-router-dom";

//todo
import { auth } from './database/firebase';
import {browserSessionPersistence, setPersistence} from "firebase/auth";

//todo


function GlobalNav() {

    const [user, setUser] = useState(null);
    const [signedIn, setSignedIn] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [loading, setLoading] = useState(true);



    useEffect(() => {

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                // Clicked outside the dropdown, close it
                setDropdownOpen(false);
            }
        };

        // Attach the event listener when the component mounts
        document.addEventListener('mousedown', handleClickOutside);

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });
        // Detach the event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            unsubscribe();
        };



    }, []);



    const handleSignOut = async () => {
        try {
            await auth.signOut();
            // Additional logic after signing out, if needed
        } catch (error) {
            console.error('Error signing out:', error.message);
        }
    };


    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <Navbar expand="lg" id="navbar" className="bg-body-tertiary" sticky='top' bg="dark" data-bs-theme="dark">
            <Container fluid>
                <Link to="/" className={"redirecting-style"}>
                    <Navbar.Brand id = "logo-name">INTELLECTUALS</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavDropdown title="Team" id="teamScrollingDropdown">
                            <div className="navDropDown">
                                <Link to="/anshul" className={"redirecting-style"}>
                                    <NavDropdown.Item href="#navAnshulPage" className= 'dropDownItem'>
                                        Anshul Gowda
                                    </NavDropdown.Item>
                                </Link>
                                <Link to="/joseph" className={"redirecting-style"}>
                                    <NavDropdown.Item href="#navJosephPage" className= 'dropDownItem'>
                                        Joseph Bart
                                    </NavDropdown.Item>
                                </ Link>

                                <Link to="/rafa" className={"redirecting-style"}>
                                    <NavDropdown.Item href="#navRafaPage" className= 'dropDownItem'>
                                        Rafa Rangel de la Tejera
                                    </NavDropdown.Item>
                                </ Link>

                                <Link to="/nitin" className={"redirecting-style"}>
                                    <NavDropdown.Item href="navNitinPage" className= 'dropDownItem'>
                                        Nitin Nagarkar
                                    </NavDropdown.Item>
                                </ Link>
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
                    {user ? (
                        <div className="user-dropdown" ref={dropdownRef}>
                            <div className="user-circle" onClick={toggleDropdown}>
                                {user && user.email[0]}
                            </div>
                            {isDropdownOpen && (
                                <div className="dropdown-content">
                                    <p>Email: {user && user.email}</p>
                                    <Link to="/login">
                                        <button className={"sign-out-button"} onClick={handleSignOut}>Sign Out</button>
                                    </ Link>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link to="/login">
                            <Button variant="outline-success" className="custom-button">
                                Login / Sign Up
                            </Button>
                        </Link>
                    )}

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

export { ColoredLine, auth};