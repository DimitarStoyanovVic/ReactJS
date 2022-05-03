import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhK0mIOF5JderIRyW00IJf2aObmJxTlMA",
  authDomain: "crwn-clothing-db-d4cf7.firebaseapp.com",
  projectId: "crwn-clothing-db-d4cf7",
  storageBucket: "crwn-clothing-db-d4cf7.appspot.com",
  messagingSenderId: "469698263569",
  appId: "1:469698263569:web:3dd4aaaf9c369da47a0fb0",
  measurementId: "G-GGZFKD9P7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);