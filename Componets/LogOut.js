import { signOut } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

export default function logOut(auth) {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("Logged out");
      location.reload();
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
}
