import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAs4W32AHRyiBqkpPXp0n0oL8Iix77XC_M",
  authDomain: "linkedin-clone-42f7e.firebaseapp.com",
  projectId: "linkedin-clone-42f7e",
  storageBucket: "linkedin-clone-42f7e.appspot.com",
  messagingSenderId: "480408550576",
  appId: "1:480408550576:web:a838b9f4d1f546f72a0f75",
  measurementId: "G-CCJBBRBX85",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
