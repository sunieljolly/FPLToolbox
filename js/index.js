//////////////////////////BASE URLS/////////////////////////////////////////////////////////////////////
BASE_URL =
  "https://myfpl-proxy.herokuapp.com/http://fantasy.premierleague.com/api/";
IMAGE_URL =
  "https://myfpl-proxy.herokuapp.com/http://resources.premierleague.com/premierleague/photos/players/110x140/p";
////////////////GOOGLE CHARTS CODE//////////////////////////////////////////////////////////////////////
google.charts.load("current", { packages: ["table"] });
google.charts.load("current", { packages: ["corechart"] });
/////////////////////////////////////////////////////////////////////////////////////////////////////////
var teamId = "";
var leagueId = "";
var league = [];
var team = [];
var leagueInfo = [];
var leagueName;
var teamInfo = [];
var managerData = {};
var managerLeagues = [];
var managerName;
var teamName;
var eventPoints;
var bootstrap = {};
var overallLeagueData = {};
var mostCaptained;
var currentGw;
var nextGw;
var nextGwDeadline;
var previousGw;
var previousGwDeadline;
var gWAverageScore = 0;
var gwHighestScore = 0;
var gameweeksPoints = [];
var footballer = {};
var liveFootballer = {};
var footballerId;
var plTable = {};
var plFixtures = {};
var thisWeekFixtures = [];
var plTeam = {};
var manager;
var eventStatusDate;
var eventStatus;
var managerDetails;

var fplpink = "#FF1751";
var fpldarkred = "#80072D";
var fplgreen = "#01FC7A";
var fplyellow = "#d8bd14";
var fplblue = "#81bcff";

const loginDiv = document.getElementById("login");
const tableDiv = document.getElementById("table");

async function getStatus() {
  loginDiv.innerHTML =
    '<div class="loading-bar-div center">' +
    '<div id="myBar" class="loading-bar"></div></div>';
  leagueLoader();
  return (
    new Promise((reject) => {
      $.ajax({
        url: BASE_URL + "leagues-classic/314/standings/",
        type: "GET",
        success: function (data) {
          setTimeout(getBootstrap, 800);
          setTimeout(checkUser, 1000);
        },
        error: function (error) {
          if (error.status == 503) {
            alert(error.statusText + " Please come back later");
          }
          console.log(error)
          loginDiv.innerHTML = "Please come back later";
        },
      });
    }),
    $.ajax({
      url: BASE_URL + "event-status/",
      type: "GET",
      success: function (data) {
        eventStatus = data.leagues;
        eventStatusDate = data.status[data.status.length - 1].date;
      },
      error: function (error) {
        if (error.status == 503) {
          alert(error.statusText + " Please come back later");
          loginDiv.innerHTML = "Please come back later";
        }
        closeWindow();
      },
    })
  );
}
setTimeout(getStatus, 500);




async function getBootstrap() {
  $.ajax({
    url: BASE_URL + "bootstrap-static/",
    type: "GET",
    success: function (data) {
      bootstrap = data;
      for (var i = 0; i < bootstrap.events.length; i++) {
        if (bootstrap.events[i].is_current === true) {
          currentGw = bootstrap.events[i].id;
          mostCaptained = bootstrap.events[i].most_captained;
          mostViceCaptained = bootstrap.events[i].most_vice_captained;
          mostSelected = bootstrap.events[i].most_selected;
          topPlayer = bootstrap.events[i].top_element_info.id;
          topPlayerPoints = bootstrap.events[i].top_element_info.points;
          gWAverageScore = bootstrap.events[i].average_entry_score;
          gwHighestScore = bootstrap.events[i].highest_score;
        }
        if (bootstrap.events[i].is_next === true) {
          nextGw = bootstrap.events[i].id;
          nextGwDeadline = bootstrap.events[i].deadline_time;
        }
        if (bootstrap.events[i].is_previous === true) {
          previousGw = bootstrap.events[i].id;
          previousGwDeadline = bootstrap.events[i].deadline_time;
        }
      }
    },
    error: function (data) {
      console.log(
        data.statusText +
          ": Something went wrong. Please try again later (line 117)"
      );
      location.reload();
    },
  });
  setTimeout(function () {
    $.ajax({
      url: BASE_URL + "event/" + currentGw + "/live/",
      type: "GET",
      success: function (data) {
        gameweekLiveData = data;
      },
      error: function (data) {
        console.log(
          data.statusText +
            ": Something went wrong. Please try again later (line 131)"
        );
        location.reload();
      },
    });
  }, 2000);
}
function checkUser() {
  loginDiv.innerHTML =
    '<div class="form" id="form">' +
    '<input class="input" type="number" id="teamId" placeholder="Enter Team ID here"/>' +
    '<button id="submit" class="send-button" onclick="submitTeamId()">' +
    '<i class="material-icons">send</i></button>' +
    '</div><p id="myBtn" class="help">How do I find my Team ID?</p>' +
    '<div id="last-user"></div></div>';

  if (localStorage.getItem("existing-user")) {
    teamId = localStorage.getItem("existing-user");
    document.getElementById("last-user").innerHTML =
      '<div class="previous-user center" onclick="loadTeam(' +
      teamId +
      ')">' +
      '<i class="material-icons">account_circle</i><br>' +
      "<p>" +
      teamId +
      "</p>" +
      "</div>";
    document.getElementById("myBtn").innerHTML = "";
  }

  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // Get the input field
  var input = document.getElementById("teamId");
  // Execute a function when the user releases a key on the keyboard
  input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("submit").click();
    }
  });
}
async function submitTeamId() {
  teamId = document.getElementById("teamId").value;
  localStorage.setItem("existing-user", teamId);
  loadTeam(teamId);
}
async function loadTeam(teamId) {
  loginDiv.innerHTML = "";
  return new Promise((resolve, reject) => {
    $.ajax({
      url: BASE_URL + "/entry/" + teamId + "/event/" + currentGw + "/picks/",
      type: "GET",
      success: function (data) {
        resolve(data);
        team = data;
      },
      error: function (error) {
        reject(error);
        if ((error.statusText = "error")) {
          alert("Team ID incorrect");
          localStorage.removeItem("existing-user");
          location.reload();
        }
      },
    });
  }).then((team) => {
    $.ajax({
      url: BASE_URL + "/entry/" + teamId + "/",
      type: "GET",
      success: function (managerData) {
        console.log(managerData)
        teamName = managerData.name;
        managerName = managerData.player_first_name;
        managerLastName = managerData.player_last_name;
        overallPoints = managerData.summary_overall_points;
        overallRank = managerData.summary_overall_rank;
        eventPoints = managerData.summary_event_points;
        eventRank = managerData.summary_event_rank;
        managerLocation = managerData.player_region_name
        managerDetails = managerName + " " + managerLastName + " - " + managerLocation
        gtag('event', managerDetails);
        for (var i = 0; i < managerData.leagues.classic.length; i++) {
          checkLeagueLength(managerData.leagues.classic[i].id)
        }
        gtag("event", managerDetails, {
          'theme': document.documentElement.getAttribute("data-theme"),
        });
      },
      error: function (error) {
        reject(error);
      },
    });
    tableDiv.innerHTML =
      '<div class="loading-bar-div center">' +
      '<div id="myBar" class="loading-bar"></div></div>';
    leagueLoader();
    setTimeout(showLeagues, 2000);
  });
}
function showLeagues() {
  gtag("event", managerDetails, {
    'change_league': 'user changed leagues',
  });
  document.getElementById("watermark").innerHTML = '';
  var data = new google.visualization.DataTable();
  data.addColumn("number", "ID");
  data.addColumn("string", "League");
  for (var i = 0; i < managerLeagues.length; i++) {
    data.addRows([[managerLeagues[i].id, managerLeagues[i].name]]);
  }
  data.addRows([[00000, '<i class="material-icons">logout</i>']]);
  var options = {
    alternatingRowStyle: false,
    allowHtml: true,
    width: "100%",
    height: "100%",
    sort: "disable",
    cssClassNames: {
      headerRow: "headerRow",
      tableRow: "tableRow",
      oddTableRow: "oddTableRow",
      tableCell: "tableCell",
      hoverTableRow: "hoverTableRow1",
    },
  };

  var table = new google.visualization.Table(document.getElementById("table"));
  google.visualization.events.addListener(table, "select", selectHandler);
  var view = new google.visualization.DataView(data);
  view.hideColumns([0]);
  table.draw(view, options);

  function selectHandler() {
    var selectedItem = table.getSelection()[0];
    if (selectedItem) selectedLeague = data.getValue(selectedItem.row, 0);
    if (selectedLeague == 00000) logout();
    submitLeague(selectedLeague);
  }
}
function submitLeague(selectedLeague) {
  hideMenu();
  tableDiv.innerHTML =
    '<div class="loading-bar-div center">' +
    '<div id="myBar" class="loading-bar"></div></div>';
  leagueLoader();

  league = [];
  leagueInfo = [];
  createLeague(selectedLeague)
    .then((data) => {
      addChips();
      setTimeout(function () {
        addCurrentWeekData();
      }, 1500);
      leagueName = leagueInfo[0].name;
    })
    .catch((error) => {
      console.log(error);
      if (error.status == 503) {
        alert(error.responseText + " Please come back later");
        location.reload();
      }
    });
}
async function createLeague(selectedLeague) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: BASE_URL + "leagues-classic/" + selectedLeague + "/standings/",
      type: "GET",
      success: function (league_data) {
        resolve(league_data);
        if (
          league_data.standings.has_next == true
        ) {
          alert(
            "This league is too big to compare! Please try another league with 50 teams or less."
          );
          showLeagues(teamId);
        } else {
          leagueInfo.push(league_data.league);
          for (var i = 0; i < league_data.standings.results.length; i++) {
            league.push(league_data.standings.results[i]);
          }
          setTimeout(function () {
            document.getElementById("user-details").innerHTML =
              '<div class="user-details">' +
              '<p class="left" id="username">Welcome, ' +
              managerName +
              "!</p>" +
              '<p class="right" id="league-name">' +
              league_data.league.name +
              "</p><d/iv>";
            createMenu();
          }, 5000);
        }
      },
      error: function (error) {
        reject(error);
      },
    });
  });
}
function hideMenu() {
  tableDiv.innerHTML = "";
  document.getElementById("league-table").innerHTML = "";
  document.getElementById("m-league-table").innerHTML = "";
  document.getElementById("gameweek-activity").innerHTML = "";
  document.getElementById("m-gameweek-activity").innerHTML = "";
  document.getElementById("chip-usage").innerHTML = "";
  document.getElementById("m-chip-usage").innerHTML = "";
  document.getElementById("change-league").innerHTML = "";
  document.getElementById("m-change-league").innerHTML = "";
  document.getElementById("compare-team").innerHTML = "";
  document.getElementById("m-compare-team").innerHTML = "";
  document.getElementById("contact").innerHTML = "";
  document.getElementById("m-contact").innerHTML = "";
  document.getElementById("logout").innerHTML = "";
  document.getElementById("m-logout").innerHTML = "";
}
function createMenu() {
  tableDiv.innerHTML = "";
  // document.getElementById("my-team").innerHTML =
  //   '<p onclick="myTeam()">My Team</p>';
  // document.getElementById("m-my-team").innerHTML =
  //   '<p onclick="myTeam()">My Team</p>';
  document.getElementById("league-table").innerHTML =
    '<p onclick="leagueTable()">League Table</p>';
  document.getElementById("m-league-table").innerHTML =
    '<p onclick="leagueTable()">League Table</p>';
  document.getElementById("gameweek-activity").innerHTML =
    '<p onclick="gameweekActivty()">Gameweek Activty</p>';
  document.getElementById("m-gameweek-activity").innerHTML =
    '<p onclick="gameweekActivty()">Gameweek Activty</p>';
  document.getElementById("chip-usage").innerHTML =
    '<p onclick="chipUsage()">Chip Usage</p>';
  document.getElementById("m-chip-usage").innerHTML =
    '<p onclick="chipUsage()">Chip Usage</p>';
  document.getElementById("change-league").innerHTML =
    '<p onclick="showLeagues()">Change League</p>';
  document.getElementById("m-change-league").innerHTML =
    '<p onclick="showLeagues()">Change League</p>';
  document.getElementById("compare-team").innerHTML =
    '<p onclick="compareTeam()">Compare Team</p>';
  document.getElementById("m-compare-team").innerHTML =
    '<p onclick="compareTeam()">Compare Team</p>';
    document.getElementById("follow").innerHTML =
    '<a href="https://twitter.com/fpltoolbox" target="_blank">Follow Me</a>';
  document.getElementById("m-follow").innerHTML =
    '<a href="https://twitter.com/fpltoolbox" target="_blank">Follow Me</a>';
  document.getElementById("contact").innerHTML =
    '<a href="mailto:fpltoolbox@email.com" target="_blank">Contact</a>';
  document.getElementById("m-contact").innerHTML =
    '<a href="mailto:fpltoolbox@email.com" target="_blank">Contact</a>';
  document.getElementById("logout").innerHTML =
    '<p onclick="logout()">Log Out</p>';
  document.getElementById("m-logout").innerHTML =
    '<p onclick="logout()">Log Out</p>';
  document.getElementById("score").innerHTML =
    '<div class="score center">' +
    '<d class="center"><p>' +
    gWAverageScore +
    "</p><p>Average</p></d>" +
    '<d class="center"><p>' +
    eventPoints +
    "</p><p>Score</p></d>" +
    '<d class="center"><p>' +
    gwHighestScore +
    "</p><p>Highest</p></d></div>";
  leagueTable();
}

async function checkLeagueLength(leagueID) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: BASE_URL + "leagues-classic/" + leagueID + "/standings/",
      type: "GET",
      success: function (league_data) {
        resolve(league_data);
        if (
          league_data.standings.has_next == false
        ) {
          managerLeagues.push(league_data.league)
        } 
      },
      error: function (error) {
        reject(error);
      },
    });
  });
}