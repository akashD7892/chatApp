import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_sKyvvqEnC2nAsJ7mYmlgLwmPwwJkrzY",
  authDomain: "chatapp-8b702.firebaseapp.com",
  projectId: "chatapp-8b702",
  storageBucket: "chatapp-8b702.appspot.com",
  messagingSenderId: "322756993157",
  appId: "1:322756993157:web:bec746ec28b5695d6dc9ec"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();