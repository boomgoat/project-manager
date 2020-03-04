import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyASjbeGPnmTehdd0mE5-tq2Ls84eFIroNQ",
  authDomain: "redux-planner-165a3.firebaseapp.com",
  databaseURL: "https://redux-planner-165a3.firebaseio.com",
  projectId: "redux-planner-165a3",
  storageBucket: "redux-planner-165a3.appspot.com",
  messagingSenderId: "270999544986",
  appId: "1:270999544986:web:ab200c0a49e35f350feb23",
  measurementId: "G-59YH7WYSKC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
