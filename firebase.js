import { initializeApp, } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import {
  getAuth
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArYh1SpafOiGpVNTFw_K-04zRdJNSJOVA",
  authDomain: "fpltoolbox-69577.firebaseapp.com",
  projectId: "fpltoolbox-69577",
  storageBucket: "fpltoolbox-69577.appspot.com",
  messagingSenderId: "669691820425",
  appId: "1:669691820425:web:c01f23f4b6ca8885f7c958"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);