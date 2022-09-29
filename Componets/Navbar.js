import { getAuth } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import settings from "../Pages/Settings.js";
import leagueTable from "../Pages/LeagueTable.js";
import gameweekActivity from "../Pages/GameweekActivtiy.js";
import compareTeam from "../Pages/CompareTeam.js";
import chipUsage from "../Pages/ChipUsage.js";
import callFPL from "../fpl.js";


const auth = getAuth();
function navbarItem(id, iconName) {
  let div = document.createElement("p");
  div.setAttribute("id", id);
  let icon = document.createElement("i");
  icon.setAttribute("class", "material-icons");
  icon.innerHTML = iconName;
  div.appendChild(icon);
  document.getElementById("navbar").appendChild(div);
}

const navBarItems = [
  {
    id: "league-table",
    iconName: "table_chart",
  },
  {
    id: "gameweek-activity",
    iconName: "event",
  },
  {
    id: "chip-usage",
    iconName: "radio_button_checked",
  },
  {
    id: "compare-team",
    iconName: "compare_arrows",
  },
  {
    id: "settings",
    iconName: "more_vert",
  },
];

auth.onAuthStateChanged((user) => {
  let loader = document.createElement('div')
  loader.setAttribute("class", "loader")
  if (user) { 
    document.getElementById("login-container").innerHTML = ""
    document.getElementById("login-container").appendChild(loader)
  }
  setTimeout(()=> {
  if (user) {
    document.getElementById("login-container").remove()
    navBarItems.forEach((element) => {
      navbarItem(element.id, element.iconName)
    });

    document.getElementById("league-table").addEventListener(
      "click",
      function () {
        leagueTable();
        gtag('event', 'Log in: ' + user.displayName, {
          'Clicked': 'League Table',
        });
      },
      false
    );
    document.getElementById("gameweek-activity").addEventListener(
      "click",
      function () {
        gameweekActivity();
        gtag('event', 'Log in: ' + user.displayName, {
          'Clicked': 'Gameweek Activity',
        });
      },
      false
    );
    document.getElementById("chip-usage").addEventListener(
      "click",
      function () {
        chipUsage();
        gtag('event', 'Log in: ' + user.displayName, {
          'Clicked': 'Chip Usage',
        });
      },
      false
    );
    document.getElementById("compare-team").addEventListener(
      "click",
      function () {
        compareTeam();
        gtag('event', 'Log in: ' + user.displayName, {
          'Clicked': 'Compare Team',
        });
      },
      false
    );
    document.getElementById("settings").addEventListener(
      "click",
      function () {
        settings();
      },
      false
    );
    callFPL(user.displayName)
  } else {
    // User not logged in or has just logged out.
    console.log("no user");
  }
}, 5000)
});
