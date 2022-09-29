import { getAuth } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
const auth = getAuth();
import logOut from "../Componets/LogOut.js";
import createOption from "../Componets/SettingsOption.js";
import changeTeamID from "../Componets/ChangeTeamID.js";
import changeLeague from "../Componets/ChangeLeague.js";

let leagueName = localStorage.getItem("currentLeagueName");

export default function settings() {
  auth.onAuthStateChanged((user) => {
    document.getElementById("screen").innerHTML = "";
    document.getElementById("screen").removeAttribute("class", "center");
    let div = document.createElement("div");
    div.setAttribute("class", "header-text");
    div.innerHTML = "More";
    document.getElementById("screen").appendChild(div);

    const menuItems = [
      {
        settingName: "Change Team",
        settingSubtitle: user.displayName,
        iconName: "autorenew",
        divID: "change-team",
      },
      {
        settingName: "Change League",
        settingSubtitle: leagueName,
        iconName: "autorenew",
        divID: "change-league",
      },
      {
        settingName: "Contact",
        settingSubtitle: "Twitter",
        iconName: "email",
        divID: "contact",
      },
      {
        settingName: "Share",
        settingSubtitle: "Share",
        iconName: "share",
        divID: "share",
      },
      {
        settingName: "Support",
        settingSubtitle: "Support Me",
        iconName: "favorite",
        divID: "support",
      },
      // {
      //   settingName: "Theme",
      //   settingSubtitle: "theme",
      //   iconName: "dark_mode",
      //   divID: "theme",
      // },
      {
        settingName: "As Featured on Youtube",
        settingSubtitle: "FPL Focal",
        iconName: "tv",
        divID: "youtube",
      },
      {
        settingName: "Logout",
        settingSubtitle: "Exit",
        iconName: "logout",
        divID: "logout",
      },
    ];

    menuItems.forEach((element) => {
      createOption(
        element.settingName,
        element.settingSubtitle,
        element.iconName,
        element.divID
      );
    });

    document.getElementById("logout").addEventListener(
      "click",
      function () {
        logOut(auth);
        gtag('event', 'User: ' + user.displayName, {
          'Clicked': 'Log Out',
        });
      },
      false
    );
    document.getElementById("youtube").addEventListener(
      "click",
      function () {
        window.open("https://youtu.be/4fyJtLOd6Qc?t=335");
        gtag('event', 'User: ' + user.displayName, {
          'Clicked': 'Go to Youtube',
        });
      },
      false
    );
    document.getElementById("support").addEventListener(
      "click",
      function () {
        window.open("https://ko-fi.com/sunnysunny");
        gtag('event', 'User: ' + user.displayName, {
          'Clicked': 'Support Me',
        });
      },
      false
    );
    document.getElementById("contact").addEventListener(
      "click",
      function () {
        window.open("https://twitter.com/fpltoolbox");
        gtag('event', 'User: ' + user.displayName, {
          'Clicked': 'Go to Twitter',
        });
      },
      false
    );
    document.getElementById("change-team").addEventListener(
      "click",
      function () {
        changeTeamID(user);
      },
      false
    );
    document.getElementById("change-league").addEventListener(
      "click",
      function () {
        changeLeague(user);
      },
      false
    );
    document.getElementById("share").addEventListener(
      "click",
      function () {
        if (navigator.share) {
          navigator
            .share({
              title: "FPL Toolbox",
              text: "Compare your FPL team with your opponent's",
              url: "https://fpltoolbox.com",
            })

            .then(() => {
              gtag('event', 'User: ' + user.displayName, {
                'Clicked': 'Shared Website',
              });
            })
            .catch((err) => {
              // Handle errors, if occured
              console.log("Error while using Web share API:");
              console.log(err);
            });
        } else {
          // Alerts user if API not available
          alert("Browser doesn't support this API !");
        }
      },
      false
    );
  });
}

// <li><a href="https://twitter.com/fpltoolbox" class="material-icons" target="_blank">mail</a></li>
