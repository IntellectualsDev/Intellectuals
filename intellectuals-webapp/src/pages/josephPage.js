import React from 'react';
import Profile from '../components/Profile'
import {GlobalNav} from "../homepage";
import LoginModule from "../components/loginModule";
import {JosephPageData} from "../data/data";
const josephPage = () => {
    return (
        <div style={{backgroundColor: '#000000'}}>
            <GlobalNav />
            <Profile JSON={JosephPageData}/>
        </div>
    );
};

export default josephPage;