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
    inputText.innerHTML = "<div><p>Please enter a new Team ID</p>" + 
    "<p>Login to your account at the official <a href='https://fantasy.premierleague.com' target='_blank' >FPL Website.</a> (Not the app)</p>" +
  "<p>Select the 'Pick Team' tab.</p>" + 
  "<p>On the right (below if using a mobile browser), you will see a link titled 'View gameweek history'.</p>" +
  "<p>Click on the link. The page will then reload and your numerical team ID will be revealed in the address bar.</p></div>"
  
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