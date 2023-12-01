import React from 'react';
import AnimatedProjectsHeroGraphic from "../components/AnimatedProjectsHero";
import '../css/AnimatedHomepageHero.css'

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import {GlobalNav} from "../homepage";
import StarsHero from "../components/StarsHero";
import {JosephPageData} from "../data/data";
import Profile from "../components/Profile";
import CommentsModule from "../components/commentsModule";

const anshulPage = () => {
    return(
        <div>
            <GlobalNav />
            <StarsHero data={JosephPageData}/>
            <Profile JSON={JosephPageData}/>
            <CommentsModule pathPage={"/Joseph"}/>
        </div>
        );
};

export default anshulPage;