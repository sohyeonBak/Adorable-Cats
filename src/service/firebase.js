import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDkX2IjY1Q7_JXYSk2r91wNlMdjzWWR2Eo",
    authDomain: "adorable-cats.firebaseapp.com",
    projectId: "adorable-cats",
    storageBucket: "adorable-cats.appspot.com",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;