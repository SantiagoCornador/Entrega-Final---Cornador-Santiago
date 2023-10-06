
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzvZZS09XdePMYVghn03PhQdrZdf4I340",
  authDomain: "tiendasc-38a98.firebaseapp.com",
  projectId: "tiendasc-38a98",
  storageBucket: "tiendasc-38a98.appspot.com",
  messagingSenderId: "990389437446",
  appId: "1:990389437446:web:9c28d227cc534ad74e2f87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app