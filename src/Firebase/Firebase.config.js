import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxNJNWlz8YSOuArnH6bE7EmIAi0gZZ6Xk",
  authDomain: "milestone-12-db30c.firebaseapp.com",
  projectId: "milestone-12-db30c",
  storageBucket: "milestone-12-db30c.appspot.com",
  messagingSenderId: "1091490470691",
  appId: "1:1091490470691:web:e03fc3fc35e4fd14044a96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;