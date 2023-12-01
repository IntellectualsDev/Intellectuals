import React from 'react';
import CommentsModule from "../components/commentsModule";
import {GlobalNav} from "../homepage";
import StarsHero from "../components/StarsHero";
import {JosephPageData, RafaPageData} from "../data/data";
import Profile from "../components/Profile";

const rafaPage = () => {
    return (
        <div style={{backgroundColor: '#000000'}}>

            <GlobalNav />
            <StarsHero data={RafaPageData}/>
            <Profile JSON={RafaPageData}/>
            <CommentsModule pathPage={"/Rafa"}/>
        </div>
    );
};

export default rafaPage;