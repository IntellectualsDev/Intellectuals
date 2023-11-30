import React from 'react';
import Profile from '../components/Profile'
import {GlobalNav} from "../homepage";
import LoginModule from "../components/loginModule";
import {JosephPageData} from "../data/data";
import StarsHero from "../components/StarsHero";
const josephPage = () => {
    return (
        <div style={{backgroundColor: '#000000'}}>
            <GlobalNav />
            <StarsHero data={JosephPageData}/>

            <Profile JSON={JosephPageData}/>
        </div>
    );
};

export default josephPage;