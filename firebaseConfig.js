// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-bzlouWxWjYnuaVDU5GvPsPhYLF-pEHE",
  authDomain: "nextproject-6f383.firebaseapp.com",
  projectId: "nextproject-6f383",
  storageBucket: "nextproject-6f383.appspot.com",
  messagingSenderId: "262720435185",
  appId: "1:262720435185:web:cc39628ae9c173284d8a50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;