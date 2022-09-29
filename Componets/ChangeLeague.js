import showModal from "./Modal.js";
import { createLeague, managerData } from "../fpl.js";



function setNewLeague(teamID) {
  managerData.leagues.classic.forEach((element) => {
    if (element.id == teamID) {
      localStorage.setItem("currentLeagueID", element.id);
      localStorage.setItem("currentLeagueName", element.name);
      createLeague(element.id)
      location.reload();
    }
  });
}

export default function changeLeague(user) {
  let div = document.createElement("div");
  div.setAttribute("class", "league-options");
  managerData.leagues.classic.forEach((element) => {
    let option = document.createElement("div");
    option.setAttribute("id", element.id);
    option.setAttribute("class", "option");

    let inputText = document.createElement("div");
    inputText.innerText = element.name;
    let icon = document.createElement("div");
    icon.setAttribute("class", "material-icons");
    icon.innerText = "arrow_forward";

    icon.addEventListener(
      "click",
      function () {
        setNewLeague(option.id);
      },
      false
    );
    option.appendChild(inputText);
    option.appendChild(icon);
    div.appendChild(option);
  });

  showModal(
    //Header
    "Select New League",
    //Body
    div
  );
}
