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
import {AnimatedHompageHero} from "./components/AnimatedHomepageHero";

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div >
            <GlobalNav />
            {/*<HeroSection />*/}
            <AnimatedHompageHero />
            <Timeline teamMembers={teamMembers}/>
        </div>
    );
}

export default Home;