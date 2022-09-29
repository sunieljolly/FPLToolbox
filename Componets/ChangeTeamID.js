import { updateProfile } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import showModal from "./Modal.js";

export default function changeTeamID(user) {
  gtag('event', 'User: ' + user.displayName, {
    'Clicked': 'Set New Team ID',
  });  
  let inputBox = document.createElement('input')
    inputBox.setAttribute("placeholder", "Enter Team ID");
    inputBox.setAttribute("id", "teamID");
    inputBox.setAttribute("type", "number");
    let nextLine = document.createElement('div')
    nextLine.innerHTML = '<br>'
    let div = document.createElement('div')
    let inputText = document.createElement('p')
    inputText.innerText = "Please enter a new Team ID"
    let button = document.createElement('Button')
    button.innerText = "Submit"
    button.onclick = function(){
      updateProfile(user, {
        displayName: inputBox.value
      }).then(()=>{
        location.reload()
      }).catch((error) => {
        console.log(error)
      })
    };
    div.appendChild(inputText)
    div.appendChild(inputBox)
    div.appendChild(nextLine)
    div.appendChild(button)
    showModal(
      //Header
      "Team ID",
      //Body
      div
      );
}