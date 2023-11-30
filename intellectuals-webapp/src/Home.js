import React, {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';


import AnshulsPage from './pages/anshulPage';
import JosephsPage from './pages/josephPage.js';
import RafasPage from './pages/rafaPage.js';
import NitinsPage from './pages/nitinPage.js';
import {GlobalNav, HeroSection} from "./homepage";
import Timeline from "./components/Timeline";
import {teamMembers} from "./data/data";

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div >
            <GlobalNav />
            <HeroSection />
            <Timeline teamMembers={teamMembers}/>
            <nav>
                <ul>
                    <li>
                        <Link to="/anshul">Anshul's Page</Link>
                    </li>
                    <li>
                        <Link to="/joseph">Joseph's Page</Link>
                    </li>
                    <li>
                        <Link to="/rafa">Rafa's Page</Link>
                    </li>
                    <li>
                        <Link to="/nitin">Nitin's Page</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects Page</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;