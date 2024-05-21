// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
console.log("Importing firebaseConfig from:", './firebaseConfig.js');
import firebaseConfig from "../firebaseCredentials/firebaseConfig";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Initialize Facebook Auth Provider
const provider = new FacebookAuthProvider();

// Function to handle Facebook sign-in
const signInWithFacebook = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    // User signed in successfully.
    console.log(result.user);
  } catch (error) {
    // Handle Errors here.
    console.error(error);
  }
};

// Example button click event to trigger Facebook sign-in
document.querySelector(".facebook").addEventListener("click", signInWithFacebook);
