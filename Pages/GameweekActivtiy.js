import { league, managerData, currentGw } from "../fpl.js";
import { convertChipName } from "../script.js";
import { getPlayerWebName } from "../fpl.js";
import { createColumnHeader } from "../script.js";
export default async function gameweekActivity() {


  document.getElementById("screen").innerHTML = "";
  document.getElementById("screen").removeAttribute("class", "center");
  let header = document.createElement("div");
  header.setAttribute("class", "header-text");
  header.innerHTML = "Gameweek Activity";
  document.getElementById("screen").appendChild(header);

  let adsense = document.createElement("div");
  adsense.innerHTML =
    '<script async="async" data-cfasync="false" src="//pl17733301.profitablegatetocontent.com/762e9aae97b9acabd6a74af2d4d5ac2e/invoke.js"></script><div id="container-762e9aae97b9acabd6a74af2d4d5ac2e"></div>';
  document.getElementById("screen").appendChild(adsense);

  let table = document.createElement("table");
  table.setAttribute("id", "table");
  let thead = document.createElement("thead");
  table.appendChild(thead);
  document.getElementById("screen").appendChild(table);

  //Columns
  let pos = document.createElement("th");
  pos.setAttribute("class", "first");
  pos.innerText = "Pos";
  thead.appendChild(pos);

  createColumnHeader('team', 'Team', thead)
  createColumnHeader('activeChip', 'Chip', thead)
  createColumnHeader('captain', 'Captain', thead)
  createColumnHeader('score', 'Score', thead)
  createColumnHeader('total', 'Total', thead)

  league.forEach((element) => {
    let tr = document.createElement("tr");
    tr.setAttribute("class", "table-row");
    if (element.entry == managerData.id) {
      tr.setAttribute("id", "current-user");
    }
    let rankMovement = document.createElement("i");
    if (element.rank == element.last_rank) {
      rankMovement.innerText = "●";
      rankMovement.setAttribute("class", "rank-equal");
    }
    if (element.rank < element.last_rank) {
      rankMovement.innerText = "▲";
      rankMovement.setAttribute("class", "rank-up");
    }

    if (element.rank > element.last_rank) {
      rankMovement.innerText = "▼";
      rankMovement.setAttribute("class", "rank-down");
    }

    let pos = document.createElement("td");
    pos.innerText = element.rank;
    pos.appendChild(rankMovement);
    tr.appendChild(pos);

    let team = document.createElement("td");
    let name = document.createElement("div");
    name.setAttribute("class", "team-name");
    name.innerText = element.entry_name;
    let manager = document.createElement("div");
    manager.setAttribute("class", "manager-name");
    manager.innerText = element.player_name;
    team.appendChild(name);
    team.appendChild(manager);
    tr.appendChild(team);

    if (element.currentWeek[0].active_chip) {

      let activeChip = document.createElement("td");
      
      activeChip.innerText = convertChipName(element.currentWeek[0].active_chip);
      activeChip.setAttribute("class", convertChipName(element.currentWeek[0].active_chip));
      
      tr.appendChild(activeChip);
    } else {
      let activeChip = document.createElement("td");
      
      activeChip.innerHTML = '<span class="material-icons">clear</span>'
      
      tr.appendChild(activeChip);
    }

    let captain = document.createElement("td");
    element.currentWeek[0].picks.forEach((player)=>{
      if(player.is_captain == true){
        captain.innerText = getPlayerWebName(player.element)
      }
    })

    tr.appendChild(captain);
    
    

    let score = document.createElement("td");
    score.innerText = element.event_total;
    tr.appendChild(score);

    let total = document.createElement("td");
    total.innerText = element.total;
    tr.appendChild(total);

    document.getElementById("table").appendChild(tr);

    const rows = Array.from(document.querySelectorAll("tr"));

    function slideOut(row) {
      row.classList.add("slide-out");
    }

    function slideIn(row, index) {
      setTimeout(function () {
        row.classList.remove("slide-out");
      }, (index + 5) * 50);
    }

    rows.forEach(slideOut);

    rows.forEach(slideIn);
  });
}
