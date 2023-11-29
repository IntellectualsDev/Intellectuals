// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,setPersistence,browserSessionPersistence } from 'firebase/auth';
import 'firebase/auth';
import {getDatabase} from 'firebase/database';
import firebase from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyAPA3db2CVAzgww6tlQjQMKBvOyHvXd-yM",
    authDomain: "intellectuals-webpage.firebaseapp.com",
    databaseURL: "https://intellectuals-webpage-default-rtdb.firebaseio.com",
    projectId: "intellectuals-webpage",
    storageBucket: "intellectuals-webpage.appspot.com",
    messagingSenderId: "1049072823880",
    appId: "1:1049072823880:web:fb18c4d27aef630e01727d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const database = getDatabase(app);

export { auth , database};
//export const auth = auth();
//export default firebase;