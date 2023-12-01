import React from 'react';
import AnimatedProjectsHeroGraphic from "../components/AnimatedProjectsHero";
import '../css/AnimatedHomepageHero.css'

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import {GlobalNav} from "../homepage";
import StarsHero from "../components/StarsHero";
import {AnshulPageData, JosephPageData} from "../data/data";
import Profile from "../components/Profile";
import CommentsModule from "../components/commentsModule";

const anshulPage = () => {
    return(
        <div>
            <GlobalNav />
            <StarsHero data={AnshulPageData}/>
            <Profile JSON={AnshulPageData}/>
            <CommentsModule pathPage={"/Anshul"}/>
        </div>
        );
};

export default anshulPage;