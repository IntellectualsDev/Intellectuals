import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import { GlobalNav, HeroSection } from './homepage';
import Timeline from './components/Timeline';
import teamMembers from "./data/data";

import AnshulsPage from './pages/anshulPage';
import JosephsPage from './pages/josephPage.js';
import RafasPage from './pages/rafaPage.js';
import NitinsPage from './pages/nitinPage.js';
import LoginPage from "./pages/loginPage";
import ProjectsPage from "./pages/projectsPage";
import Home from './Home'

import ScrollToTop from "./components/ScrollToTop";
/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPA3db2CVAzgww6tlQjQMKBvOyHvXd-yM",
  authDomain: "intellectuals-webpage.firebaseapp.com",
  projectId: "intellectuals-webpage",
  storageBucket: "intellectuals-webpage.appspot.com",
  messagingSenderId: "1049072823880",
  appId: "1:1049072823880:web:fb18c4d27aef630e01727d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 */



function App() {

  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }

  return (
      <Router>
        <div style={{backgroundColor: "#000000"}}>
          {/*<ScrollToTop />*/}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/anshul" element={<AnshulsPage />} />
            <Route path="/joseph" element={<JosephsPage />} />
            <Route path="/rafa" element={<RafasPage />} />
            <Route path="/nitin" element={<NitinsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/" element={<h1>Home Page</h1>} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
