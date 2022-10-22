import { getAuth } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import leagueTable from "../Pages/LeagueTable.js";
const auth = getAuth();
const BASE_URL =
  "https://myfpl-proxy.herokuapp.com/http://fantasy.premierleague.com/api/";

export let team = [];
export let managerData = {};
export let leagueData
export let league = [];
export let bootstrap;
export let leagueID
export let leagueName
export let currentGw;
export let nextGw;
export let mostCaptained;
export let mostViceCaptained;
export let mostSelected;
export let gameweekLiveData;
export let gWAverageScore;
export let gwHighestScore;

let footballer = {};




var leagueInfo = [];


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
        }
        if (bootstrap.events[i].is_next === true) {
          nextGw = bootstrap.events[i].id;
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
            ": Something went wrong. Please try again later"
        );
      },
    });
  }, 2000);
}
getBootstrap();

//Add each teams chip usage for the whole season.
var chipLooper = [];
function addChips() {
  function makeFunction(i) {
    return function () {
      $.ajax({
        url: BASE_URL + "entry/" + league[i].entry + "/history/",
        type: "GET",
        success: function (team_data) {
          league[i].chips = [];
          league[i].seasons = team_data.past.length;
          league[i].previousRank = '';
          if (team_data.past[0]) {
            league[i].seasons_managed = team_data.past[0].season_name;
          } else {
            league[i].seasons_managed = "NEW";
          }
          //CHIP 1
          if (team_data.chips[0]) {
            league[i].chips.push({
              name: team_data.chips[0].name,
              time: team_data.chips[0].time,
              gw: team_data.chips[0].event,
            });
          } else {
            league[i].chips.push(null);
          }
          //CHIP 2
          if (team_data.chips[1]) {
            league[i].chips.push({
              name: team_data.chips[1].name,
              time: team_data.chips[1].time,
              gw: team_data.chips[1].event,
            });
          } else {
            league[i].chips.push(null);
          }
          //CHIP 3
          if (team_data.chips[2]) {
            league[i].chips.push({
              name: team_data.chips[2].name,
              time: team_data.chips[2].time,
              gw: team_data.chips[2].event,
            });
          } else {
            league[i].chips.push(null);
          }
          //CHIP 4
          if (team_data.chips[3]) {
            league[i].chips.push({
              name: team_data.chips[3].name,
              time: team_data.chips[3].time,
              gw: team_data.chips[3].event,
            });
          } else {
            league[i].chips.push(null);
          }
          //CHIP 5
          if (team_data.chips[4]) {
            league[i].chips.push({
              name: team_data.chips[4].name,
              time: team_data.chips[4].time,
              gw: team_data.chips[4].event,
            });
          } else {
            league[i].chips.push(null);
          }
          //CHIP 6
          if (team_data.chips[5]) {
            league[i].chips.push({
              name: team_data.chips[5].name,
              time: team_data.chips[5].time,
              gw: team_data.chips[5].event,
            });
          } else {
            league[i].chips.push(null);
          }
          league[i].previousRank = team_data.current[(team_data.current.length - 2)].overall_rank

        },
      });
    };
  }
  //Create as many functions as the number of entries in the league
  for (var i = 0; i < league.length; i++) {
    chipLooper[i] = makeFunction(i);
  }
  for (var j = 0; j < league.length; j++) {
    chipLooper[j](); // Run each function
  }
}
//Add each teams data for current week.
var currentWeeklyLooper = [];
function addCurrentWeekData() {
  function makeFunction(i) {
    return function () {
      $.ajax({
        url:
          BASE_URL +
          "entry/" +
          league[i].entry +
          "/event/" +
          currentGw +
          "/picks/",
        type: "GET",
        success: function (team_picks) {
          if (team_picks) {
            league[i].currentWeek = [];
            league[i].currentWeek.push(team_picks);
          }
        },
      });
    };
  }
  //Create as many functions as the number of entries in the league
  for (var i = 0; i < league.length; i++) {
    currentWeeklyLooper[i] = makeFunction(i);
  }
  for (var j = 0; j < league.length; j++) {
    currentWeeklyLooper[j](); // Run each function
  }
}
export async function createLeague(leagueID) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: BASE_URL + "leagues-classic/" + leagueID + "/standings/",
      type: "GET",
      success: function (league_data) {
        resolve(league_data);

          leagueInfo.push(league_data.league);
          for (var i = 0; i < league_data.standings.results.length; i++) {
            league.push(league_data.standings.results[i]);
          

        }
        gtag('event', 'User: ' + managerData.id, {
          'Clicked': 'Created League ' + leagueID,
        });
      },
      error: function (error) {
        reject(error);
      },
    }).then(()=> { 
      addChips()
    }).then(()=>{
      addCurrentWeekData()
    }).then(()=>{
      leagueTable()
    })
    
})}

//Getters for information on football players
export function getFootballerObject(playerId) {
  for (var i = 0; i < bootstrap.elements.length; i++) {
    if (bootstrap.elements[i].id == playerId) {
      footballer.web_name = bootstrap.elements[i].web_name;
      footballer.first_name = bootstrap.elements[i].first_name;
      footballer.second_name = bootstrap.elements[i].second_name;
      footballer.event_points = bootstrap.elements[i].event_points;
      footballer.dreamteam = bootstrap.elements[i].in_dreamteam;
      footballer.points_per_game = bootstrap.elements[i].points_per_game;
      var footballer_team_id = bootstrap.elements[i].team;
      footballer.transfers_in = bootstrap.elements[i].transfers_in;
      footballer.transfers_in_event = bootstrap.elements[i].transfers_in_event;
      footballer.transfers_out = bootstrap.elements[i].transfers_out;
      footballer.transfers_out_event =
        bootstrap.elements[i].transfers_out_event;
      footballer.price_change = bootstrap.elements[i].cost_change_event;
      footballer.news = bootstrap.elements[i].news;
      footballer.team_code = bootstrap.elements[i].team_code;
      footballer.element_type = bootstrap.elements[i].element_type;
    }
  }
  for (var i = 0; i < bootstrap.teams.length; i++) {
    if (bootstrap.teams[i].id == footballer_team_id) {
      footballer.team = bootstrap.teams[i].name;
    }
  }
}
export function getPlayerWebName(playerId) {
  getFootballerObject(playerId);
  return footballer.web_name;
}
export function getPlayerTeam(playerId) {
  getFootballerObject(playerId);
  return footballer.team;
}


export default async function callFPL(teamID) {
  gtag('event', 'User: ' + teamID);
  return new Promise((resolve, reject) => {
    $.ajax({
      url: BASE_URL + "/entry/" + teamID + "/event/" + currentGw + "/picks/",
      type: "GET",
      success: function (data) {
        resolve(data);
        team = data;
      },
      error: function (error) {
        reject(error);
        if ((error.statusText = "error")) {
          alert("Team ID incorrect - try refreshing or changing team ID in settings");
        }
      },
    });
  }).then(() => {
    
 
    $.ajax({
        url: BASE_URL + "/entry/" + teamID + "/",
        type: "GET",
        success: function (data) {
          managerData = data;
          if(!localStorage.getItem("currentLeagueID")){
            localStorage.setItem("currentLeagueID", managerData.leagues.classic[0].id);
            localStorage.setItem("currentLeagueName", managerData.leagues.classic[0].name);
          }          
          createLeague(localStorage.getItem("currentLeagueID")).then(()=> {
          })
        },
        error: function (error) {
          console.log(error)
          alert(error.responseText + " Please come back later")
        },
      });
  });
}

