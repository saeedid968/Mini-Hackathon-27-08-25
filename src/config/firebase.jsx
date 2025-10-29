import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDKqc6enk78ncqQS1bwqrRgewnm26ZIBCg",
  authDomain: "react-mini-hackathon-a53df.firebaseapp.com",
  projectId: "react-mini-hackathon-a53df",
  storageBucket: "react-mini-hackathon-a53df.firebasestorage.app",
  messagingSenderId: "281407988581",
  appId: "1:281407988581:web:f114b32178dcdbd20cf78c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

