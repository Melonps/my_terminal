/* Firebase */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { firebaseConfig } from './../config/firebase-config'
const firebase = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebase);

import { getAuth } from "firebase/auth";
const auth = getAuth();

export { firebase, db , auth };