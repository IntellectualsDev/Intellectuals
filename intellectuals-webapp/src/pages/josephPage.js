import React from 'react';
import Profile from '../components/Profile'
import {GlobalNav} from "../homepage";
import LoginModule from "../components/loginModule";
const josephPage = () => {
    return (
        <div style={{backgroundColor: '#000000'}}>
            <GlobalNav />
            <Profile />
        </div>
    );
};

export default josephPage;