import React from 'react';
import Profile from '../components/Profile'
import {GlobalNav} from "../homepage";
import LoginModule from "../components/loginModule";
import {JosephPageData} from "../data/data";
import StarsHero from "../components/StarsHero";
import Slider from "../components/Slider/NetflixSlider";
const josephPage = () => {
    return (
        <div style={{backgroundColor: '#000000'}}>
            <GlobalNav />
            <StarsHero data={JosephPageData}/>
            <Profile JSON={JosephPageData}/>
            {/*<Slider>*/}
            {/*    {projects.map(project => (*/}
            {/*        <Slider.Item project={project} key={project.id}>item1</Slider.Item>*/}
            {/*    ))}*/}
            {/*</Slider>*/}
        </div>
    );
};

export default josephPage;