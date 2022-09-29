import { league, managerData, currentGw } from "../fpl.js";
import { createColumnHeader } from "../script.js";

export default async function leagueTable() {
  var firstPlace = league[0].total;

  document.getElementById("screen").innerHTML = "";
  document.getElementById("screen").removeAttribute("class", "center");
  let header = document.createElement("div");
  header.setAttribute("class", "header-text");
  header.innerHTML = "League Table";
  document.getElementById("screen").appendChild(header);

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
  createColumnHeader('score', ('GW' + currentGw), thead)
  createColumnHeader('total', 'Total', thead)
  createColumnHeader('totop', 'To Top', thead)

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

    let score = document.createElement("td");
    score.innerText = element.event_total;
    tr.appendChild(score);

    let total = document.createElement("td");
    total.innerText = element.total;
    tr.appendChild(total);

    let toTop = document.createElement("td");
    toTop.innerText = firstPlace - element.total;
    tr.appendChild(toTop);

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
