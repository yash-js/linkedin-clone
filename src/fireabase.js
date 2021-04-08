import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv6JMf1BRYnao4hMHyVA_nQ2zYnKvrWO0",
  authDomain: "linkedinclone-8e639.firebaseapp.com",
  projectId: "linkedinclone-8e639",
  storageBucket: "linkedinclone-8e639.appspot.com",
  messagingSenderId: "235964730385",
  appId: "1:235964730385:web:fd3c05423533af3327b5b0",
  measurementId: "G-5ZGZV2PNGG",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
