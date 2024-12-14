// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFtHnDGau-q9XqJJFWA4iwqjClENa37a4",
  authDomain: "jaben-naki-client.firebaseapp.com",
  projectId: "jaben-naki-client",
  storageBucket: "jaben-naki-client.firebasestorage.app",
  messagingSenderId: "987589882592",
  appId: "1:987589882592:web:3103ca8d37b2e458d15685"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;