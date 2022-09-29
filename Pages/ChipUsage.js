import { league, managerData, currentGw } from "../fpl.js"
import { convertChipName } from "../script.js";
import { createColumnHeader } from "../script.js";
export default async function leagueTable() {
  var firstPlace = league[0].total;
 
  document.getElementById("screen").innerHTML = "";
  document.getElementById("screen").removeAttribute("class", "center");
  let header = document.createElement("div");
  header.setAttribute("class", "header-text");
  header.innerHTML = "Chip Usage";
  document.getElementById("screen").appendChild(header);
  
  let adsense = document.createElement("div");
  adsense.innerHTML = '<script async="async" data-cfasync="false" src="//pl17733301.profitablegatetocontent.com/762e9aae97b9acabd6a74af2d4d5ac2e/invoke.js"></script><div id="container-762e9aae97b9acabd6a74af2d4d5ac2e"></div>'
  document.getElementById("screen").appendChild(adsense)
  

  let table = document.createElement("table");
  table.setAttribute('id', 'table')
  let thead = document.createElement("thead");
  table.appendChild(thead)
  document.getElementById("screen").appendChild(table);
  
 

  //Columns
  createColumnHeader('team', 'Team', thead)
  createColumnHeader('chip1', '1', thead)
  createColumnHeader('chip2', '2', thead)
  createColumnHeader('chip3', '3', thead)
  createColumnHeader('chip4', '4', thead)
  createColumnHeader('chip5', '5', thead)

  league.forEach((element) => {


    let tr = document.createElement("tr");
    tr.setAttribute('class', 'table-row')

    

    let team = document.createElement("td")
    let name = document.createElement("div")
    name.setAttribute('class', 'team-name')
    name.innerText = element.entry_name
    let manager = document.createElement("div")
    manager.setAttribute('class', 'manager-name')
    manager.innerText = element.player_name
    team.appendChild(name)
    team.appendChild(manager)
    
    tr.appendChild(team)
    
    if(element.chips[0]){
      let chip1 = document.createElement("td")
      chip1.innerText = convertChipName(element.chips[0].name)
      chip1.setAttribute('class', convertChipName(element.chips[0].name))
      tr.appendChild(chip1)
    }
    if(element.chips[1]){
      let chip2 = document.createElement("td")
      chip2.innerText = convertChipName(element.chips[1].name)
      chip2.setAttribute('class', convertChipName(element.chips[1].name))
      tr.appendChild(chip2)
    }
    if(element.chips[2]){
      let chip3 = document.createElement("td")
      chip3.innerText = convertChipName(element.chips[2].name)
      chip3.setAttribute('class', convertChipName(element.chips[2].name))
      tr.appendChild(chip3)
    }
    if(element.chips[3]){
      let chip4 = document.createElement("td")
      chip4.innerText = convertChipName(element.chips[3].name)
      chip4.setAttribute('class', convertChipName(element.chips[3].name))
      tr.appendChild(chip4)
    }
    if(element.chips[4]){
      let chip5 = document.createElement("td")
      chip5.innerText = convertChipName(element.chips[4].name)
      chip5.setAttribute('class', convertChipName(element.chips[4].name))
      tr.appendChild(chip5)
    }

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
  })
  
}