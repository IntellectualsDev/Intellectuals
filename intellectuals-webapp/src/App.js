import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import AnshulsPage from './anshulPage.js';
import JosephsPage from './josephPage.js';
import RafasPage from './rafaPage.js';
import NitinsPage from './nitinPage.js';

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
  return (
      <Router>
        <div>
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
            </ul>
          </nav>

          <Routes>
            <Route path="/anshul" element={<AnshulsPage />} />
            <Route path="/joseph" element={<JosephsPage />} />
            <Route path="/rafa" element={<RafasPage />} />
            <Route path="/nitin" element={<NitinsPage />} />
            <Route path="/" element={<h1>Home Page</h1>} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
