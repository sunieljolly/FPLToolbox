//////////////////////////BASE URLS/////////////////////////////////////////////////////////////////////
BASE_URL = "https://myfpl-proxy.herokuapp.com/http://fantasy.premierleague.com/api/";
IMAGE_URL = "https://myfpl-proxy.herokuapp.com/http://resources.premierleague.com/premierleague/photos/players/110x140/p";
//TEAM_IMAGE_URL = 'https://myfpl-proxy.herokuapp.com/http://resources.premierleague.com/premierleague/badges/50/t'

//BASE_URL = "http://fantasy.premierleague.com/api/";
//IMAGE_URL =
//  "http://resources.premierleague.com/premierleague/photos/players/110x140/p";
//TEAM_IMAGE_URL = "http://resources.premierleague.com/premierleague/badges/50/t";
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////GOOGLE CHARTS CODE//////////////////////////////////////////////////////////////////////
google.charts.load("current", { packages: ["table"] });
google.charts.load("current", { packages: ["corechart"] });
//google.charts.load("current", { packages: ["line"] });
/////////////////////////////////////////////////////////////////////////////////////////////////////////
var teamId = "";
var leagueId = "";
var league = [];
var team = [];
var leagueInfo = [];
var leagueName;
var teamInfo = [];
var managerData = {};
var managerLeagues = {};
var managerName;
var teamName;
var eventPoints;
var bootstrap = {};
var overallLeagueData = {};
var mostCaptained;
var mostViceCaptained;
var mostSelected;
var topPlayer;
var topPlayerPoints;
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
var diffA = [];
var diffB = [];
var eventStatusDate;
var eventStatus;

var fplpink = "#FF1751";
var fpldarkred = "#80072D";
var fplgreen = "#01FC7A";
var fplyellow = "#d8bd14";
var fplblue = "#81bcff";

async function getStatus() {
  return (
    new Promise((reject) => {
      $.ajax({
        url: BASE_URL + "leagues-classic/314/standings/",
        type: "GET",
        error: function (error) {
          if (error.status == 503) {
            alert(error.responseText + " Please come back later");
          }
          reject(error);
          console.log(error);
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
      error: function (data) {
        alert(
          data.statusText + ": Something went wrong. Please try again later"
        );
        location.reload();
      },
    })
  );
}
getStatus();
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
      //console.log('Bootstrap Data...')
      //console.log(bootstrap)
      //console.log("Current Game Week is " + currentGw)
    },
    error: function (data) {
      console.log(
        data.statusText + ": Something went wrong. Please try again later"
      );
    },
  });
  setTimeout(function () {
    $.ajax({
      url: BASE_URL + "event/" + currentGw + "/live/",
      type: "GET",
      success: function (data) {
        gameweekLiveData = data;
        console.log('Gameweek Live Data...')
        console.log(gameweekLiveData)
      },
      error: function (data) {
        alert(
          data.statusText + ": Something went wrong. Please try again later"
        );
      },
    });
  }, 900);
}
getBootstrap();

async function submitTeamId() {
  teamId = document.getElementById("teamId").value;
  document.getElementById("login").innerHTML = "";
  loadTeam(teamId);
}

async function loadTeam(teamId) {
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
          location.reload();
        }
      },
    });
  }).then((team) => {
    $.ajax({
      url: BASE_URL + "/entry/" + teamId + "/",
      type: "GET",
      success: function (managerData) {
        //resolve(data)
        console.log("Manager data...");
        console.log(managerData);
        teamName = managerData.name;
        managerName = managerData.player_first_name;
        overallPoints = managerData.summary_overall_points;
        overallRank = managerData.summary_overall_rank;
        eventPoints = managerData.summary_event_points;
        eventRank = managerData.summary_event_rank;
        managerLeagues = managerData.leagues.classic;
      },
      error: function (error) {
        reject(error);
      },
    });
    //console.log("Team data...");
    //console.log(team);
    document.getElementById("table").innerHTML = ('<div class="w3-light-grey">' +
   '<div id="myBar" class="w3-container w3-center" style="width:20%; background-color:var(--fplblue)">20%</div></div>')
   leagueLoader();
    setTimeout(showLeagues, 2000);
  });
}

function showLeagues() {
  // CREATES TABLE WITH AVAILABLE LEAGUES
  var data = new google.visualization.DataTable();
  data.addColumn("number", "ID");
  data.addColumn("string", "League");
  for (var i = 0; i < managerLeagues.length; i++) {
    data.addRows([[managerLeagues[i].id, managerLeagues[i].name]]);
  }
  data.addRows([[00000, 'Log Out']]);
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
      hoverTableRow: "hoverTableRow",
    },
  };

  var table = new google.visualization.Table(document.getElementById("table"));

  google.visualization.events.addListener(table, "select", selectHandler);
  var view = new google.visualization.DataView(data);
  view.hideColumns([0]); // array of column indexes to hide
  table.draw(view, options);

  function selectHandler() {
    var selectedItem = table.getSelection()[0];
    if (selectedItem) {
      var selectedLeague = data.getValue(selectedItem.row, 0);
    }
    if(selectedLeague == 00000){
      location.reload();
    }else{
      submitLeague(selectedLeague);        
    }
  }
}

function submitLeague(selectedLeague) {
  //document.getElementById("table").innerHTML = "";
  hideMenu();
   document.getElementById("table").innerHTML = ('<div class="w3-light-grey">' +
   '<div id="myBar" class="w3-container w3-center" style="width:20%; background-color:var(--fplblue);">0%</div></div>')
   leagueLoader();
  //setTimeout(function() {document.getElementById('view2').innerHTML='';},1000);
  league = [];
  leagueInfo = [];
  //setTimeout(function(){ clearLeagueViews(); }, 1000);
  //document.getElementById('enter_button').innerHTML='';

  createLeague(selectedLeague)
    .then((data) => {
      //addGameWeeksPoints();
      addChips();
      //addPreviousSeasons();
      setTimeout(function () {
        addCurrentWeekData();
      }, 500);
      //addTransferHistory();
      //addGameWeeksTransfers();
      //addGameWeeksBenchPoints();
      //addGameWeeksTransfersCost();
      //setTimeout(function () {
      //  addAllGw();
      //}, 600);
      console.log("League information...");
      console.log(leagueInfo);
      leagueName = leagueInfo[0].name;
      console.log("League details...");
      console.log(league);
    })
    .catch((error) => {
      console.log(error);
      if (error.status == 503) {
        alert(error.responseText + " Please come back later");
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
        console.log(league_data);
        if (league_data.standings.has_next == true || league_data.standings.results.length > 50) {
          alert(
            "League too big to compare, please try another league with fewer teams"
          );
          showLeagues(teamId);
          return;
        } else {
          leagueInfo.push(league_data.league);
          for (var i = 0; i < league_data.standings.results.length; i++) {
            league.push(league_data.standings.results[i]);
          }    

            document.getElementById("username").innerHTML = "<p>Welcome, " + managerName + "!</p>";
            document.getElementById("league-name").innerHTML ="<p>" + league_data.league.name + "</p>";
            
            setTimeout(function(){ createMenu(); }, 5000);
        }
      },
      error: function (error) {
        reject(error);
      },
    });
  });
}

function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}
function hideMenu() {
  document.getElementById("table").innerHTML = "";

  
  document.getElementById("league-table").innerHTML ='';
  document.getElementById("m-league-table").innerHTML ='';

  document.getElementById("gameweek-activity").innerHTML ='';
  document.getElementById("m-gameweek-activity").innerHTML ='';

  document.getElementById("chip-usage").innerHTML ='';
  document.getElementById("m-chip-usage").innerHTML ='';

  document.getElementById("change-league").innerHTML ='';
  document.getElementById("m-change-league").innerHTML ='';
}
function createMenu() {
  document.getElementById("table").innerHTML = "";

  
  document.getElementById("league-table").innerHTML ='<p onclick="leagueTable()">League Table</p>';
  document.getElementById("m-league-table").innerHTML ='<p onclick="leagueTable()">League Table</p>';

  document.getElementById("gameweek-activity").innerHTML ='<p onclick="gameweekActivty()">Gameweek Activty</p>';
  document.getElementById("m-gameweek-activity").innerHTML ='<p onclick="gameweekActivty()">Gameweek Activty</p>';

  document.getElementById("chip-usage").innerHTML ='<p onclick="chipUsage()">Chip Usage</p>';
  document.getElementById("m-chip-usage").innerHTML ='<p onclick="chipUsage()">Chip Usage</p>';

  document.getElementById("change-league").innerHTML ='<p onclick="showLeagues()">Change League</p>';
  document.getElementById("m-change-league").innerHTML ='<p onclick="showLeagues()">Change League</p>';
  
  document.getElementById("logout").innerHTML ='<p onclick="location.reload()">Log Out</p>';
  document.getElementById("m-logout").innerHTML ='<p onclick="location.reload()">Log Out</p>';


  document.getElementById("score").innerHTML =('<div class="score center">' +
  '<d class="center"><p>' + gWAverageScore + '</p><p>Avg.</p></d>' +
  '<d class="center"><p>' + eventPoints + '</p><p>Points</p></d>' +
  '<d class="center"><p>' + gwHighestScore + '</p><p>Highest</p></d></div>');

}

const average = (array) => array.reduce((a, b) => a + b) / array.length;

const mostFrequent = (arr) =>
  Object.entries(
    arr.reduce((a, v) => {
      a[v] = a[v] ? a[v] + 1 : 1;
      return a;
    }, {})
  ).reduce((a, v) => (v[1] >= a[1] ? v : a), [null, 0])[0];

  function leagueLoader() {
    var elem = document.getElementById("myBar");   
    var width = 0;
    var id = setInterval(frame, 100);
    function frame() {
      if (width >= 100) {
        clearInterval(id);        
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }

  }
  