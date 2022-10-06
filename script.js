import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import showModal from "./Componets/Modal.js";




const auth = getAuth();

export function convertChipName(chip) {
  //Convert FPL chip name to user friendly chip names
  if (chip == "wildcard") return "WC";
  if (chip == "freehit") return "FH";
  if (chip == "bboost") return "BB";
  if (chip == "3xc") return "TC";
  if (chip == "") return "";   
}


export function createColumnHeader(column, columnName, thead){
  column = document.createElement("th");  
  column.innerText = columnName
  thead.appendChild(column)
}

// Sign in
document.getElementById("login").addEventListener(
  "click",
  function () {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        document.getElementById("screen").removeAttribute("class", "center");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage);
      });
  },
  false
);

//Forgot email
document.getElementById("forgotemail").addEventListener(
  "click",
  function () {
    document.getElementById("login").setAttribute("id", "submit");
    document.getElementById("submit").innerText = "Submit";
    document.getElementById("submit").onclick = function () {
      let email = document.getElementById("email").value;

      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert("Reset email sent. Please check your spam folder.");
          location.reload();
        })
        .catch((e) => {
          alert(e);
        });
    };
    document.getElementById("password").remove();
    document.getElementById("new-account").remove();
    document.getElementById("forgotemail").innerText = "Back to login";
    document.getElementById("forgotemail").onclick = function () {
      location.reload();
    };
  },
  false
);

//Don't have an account? new account
document.getElementById("new-account").addEventListener("click", function () {
  document.getElementById("new-account").remove()
  document.getElementById("login").remove();
  let element0 = document.createElement("div");
  element0.setAttribute("class", "input-group");

  let element01 = document.createElement("input");
  element01.setAttribute("placeholder", "Team ID");
  element01.setAttribute("type", "number");
  element0.appendChild(element01);
  document.getElementById("form").appendChild(element0);

  let help = document.createElement("p");
  help.setAttribute("id", "help");
  help.innerText = "What's my team ID?";

  


  document.getElementById("form").appendChild(help);
  
  document.getElementById("help").onclick = function () {
    let help = document.createElement("p");
  help.setAttribute("id", "help");
  help.innerHTML =   "<div><p>Login to your account at the official <a href='https://fantasy.premierleague.com' target='_blank' >FPL Website.</a> (Not the app)</p>" +
  "<p>Select the 'Pick Team' tab.</p>" + 
  "<p>On the right (below if using a mobile browser), you will see a link titled 'View gameweek history'.<p>" +
  "<p>Click on the link. The page will then reload and your numerical team ID will be revealed in the address bar.</p></div>"
  
  showModal('Help', help)
  };



  let element1 = document.createElement("button");
  element1.setAttribute("id", "sign-up");
  element1.innerText = "Sign up";
  document.getElementById("login-container").appendChild(element1);


  document.getElementById('forgotemail').innerText = "Back to login";
  document.getElementById("forgotemail").onclick = function () {
    location.reload();
  };
  document.getElementById("sign-up").innerText = "Sign up";
  (document.getElementById("sign-up").onclick = function () {
    let email = document.getElementById("email").value;
    let ID = element01.value;
    let password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(user, {
            displayName: ID,
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
        alert(errorMessage)

      });

    document.getElementById("new-account").remove();
    document.getElementById("forgotemail").remove();

    let element2 = document.createElement("p");
    element2.setAttribute("id", "forgotemail");
    element2.innerText = "Back to login";
    document.getElementById("login-container").appendChild(element2);

    document.getElementById("forgotemail").innerText = "Back to login";
    document.getElementById("forgotemail").onclick = function () {
      location.reload();
    };

    console.log(document.getElementById("sign-up"));
  }),
    false;
});
