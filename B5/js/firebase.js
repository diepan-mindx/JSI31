// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDTx864YzUuMfDptKNyT_9R-8BiwsWt0nE",
  authDomain: "jsi31-7afc1.firebaseapp.com",
  databaseURL: "https://jsi31-7afc1-default-rtdb.firebaseio.com",
  projectId: "jsi31-7afc1",
  storageBucket: "jsi31-7afc1.firebasestorage.app",
  messagingSenderId: "78876558382",
  appId: "1:78876558382:web:10e1facacfdd40d4320bbf",
  measurementId: "G-G5N7S3X01R",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// ==============================================================

function validateLoginForm(email, password) {
  // kiem tra bo trong truong nhap lieu
  if (email === "" || password === "") {
    alert("You need to fill all fields!");
    return false;
  }

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // kiem tra dinh dang email
  if (!emailRegex.test(email)) {
    alert("Email is bad format!");
    return false;
  }

  // pass duoi 6 chu so
  if (password.length < 6) {
    alert("Password must be at least 6 characters long!");
    return false;
  }
  return true;
}

function signinFirebase(email, password) {
  const auth = getAuth(app);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      console.log(user);
      alert("Signin Successfull");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Firebase error: your account is not found or password is incorrect');
    });
}

// bat su kien cho button login
document.querySelector("#login_btn").addEventListener("click", (e) => {
  e.preventDefault();
  // lay du lieu tu html element
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  // kiem tra du lieu
  if (validateLoginForm(email, password)) {
    // khong co loi o client
    // signin bang firebase
    signinFirebase(email, password);
    return;
  } else return;
});
