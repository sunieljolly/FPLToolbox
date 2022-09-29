import { league, managerData, currentGw, team } from "../fpl.js";
import { getPlayerWebName, getPlayerTeam } from "../fpl.js";
import compareModal from "./CompareModal.js";

let teamA = document.createElement("div");
let teamB = document.createElement("div");
teamA.setAttribute("id", "team-a");
teamB.setAttribute("id", "team-b");
export default function showTeams(teamID) {
  gtag('event', 'User: ' + managerData.id, {
    'Clicked': 'Compared a Team',
  });
  teamA.innerHTML = "";
  teamB.innerHTML = "";
  if (managerData.id != teamID) {
    league.forEach((element) => {
      if (element.entry == teamID) {
        element.currentWeek[0].picks.forEach((pick) => {
          let playerDivA = document.createElement('div')
          playerDivA.setAttribute("class", "player-divA");
          let player = document.createElement("p");
          player.setAttribute("class", "player");
          player.innerText = getPlayerWebName(pick.element);

          let playerTeam = document.createElement("p");
          playerTeam.setAttribute("class", "player-team");
          playerTeam.innerText = "(" + getPlayerTeam(pick.element) + ")";
          
          playerDivA.appendChild(playerTeam)
          playerDivA.appendChild(player)
          
          

          teamA.appendChild(playerDivA);
        });
        let manager = document.createElement("p");
        manager.innerText = "Manager" + "\n" + element.player_name;
        teamA.appendChild(manager);
      }
    });
    

        team.picks.forEach((pick) => {
          let playerDivB = document.createElement('div')
          playerDivB.setAttribute("class", "player-divB");
          let player = document.createElement("p");
          player.setAttribute("class", "player");
          player.innerText = getPlayerWebName(pick.element);
          
          let playerTeam = document.createElement("p");
          playerTeam.setAttribute("class", "player-team");
          playerTeam.innerText = "(" + getPlayerTeam(pick.element) + ")";
          
          playerDivB.appendChild(player)
          playerDivB.appendChild(playerTeam)          
          

          teamB.appendChild(playerDivB);
        });
        let manager = document.createElement("p");
        manager.innerText = "Manager" + "\n" + managerData.player_first_name;
        teamB.appendChild(manager);
      

    compareModal(
      //Header
      "Team Sheets",
      //Body
      teamA,
      teamB
    );
  } else {
    console.log("can't pick own team");
  }
}
