import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCVBglKpWrQrv8LDjxeqpNwVo_RLrPzZ0U",
    authDomain: "clone-59d94.firebaseapp.com",
    databaseURL: "https://clone-59d94.firebaseio.com",
    projectId: "clone-59d94",
    storageBucket: "clone-59d94.appspot.com",
    messagingSenderId: "255124233338",
    appId: "1:255124233338:web:0736dad1324a31eeb82fc3",
    measurementId: "G-YKW7V5CGK9"
});

const auth = firebase.auth();

export {auth}
