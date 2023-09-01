import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCVuvWJNwqmlXfoqdAj4_Ff_mHiEkx4DPI",
  authDomain: "mortgage-broker-survey-data.firebaseapp.com",
  databaseURL:
    "https://mortgage-broker-survey-data-default-rtdb.firebaseio.com",
  projectId: "mortgage-broker-survey-data",
  storageBucket: "mortgage-broker-survey-data.appspot.com",
  messagingSenderId: "230473775455",
  appId: "1:230473775455:web:b3674db6ac83310601deea",
  measurementId: "G-9RSRQT4FNB",
};


const app = initializeApp(firebaseConfig);

export default app;
