//Getters for information on football players
function getFootballerObject(playerId) {
  for (var i = 0; i < bootstrap.elements.length; i++) {
    if (bootstrap.elements[i].id == playerId) {
      footballer.web_name = bootstrap.elements[i].web_name;
      footballer.first_name = bootstrap.elements[i].first_name;
      footballer.second_name = bootstrap.elements[i].second_name;
      footballer.event_points = bootstrap.elements[i].event_points;
      footballer.dreamteam = bootstrap.elements[i].in_dreamteam;
      footballer.points_per_game = bootstrap.elements[i].points_per_game;
      footballer.photo =
        IMAGE_URL + bootstrap.elements[i].photo.slice(0, -3) + "png";
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
function getPlayerWebName(playerId) {
  getFootballerObject(playerId);
  return footballer.web_name;
}
function getPlayerPhoto(playerId) {
  getFootballerObject(playerId);
  return footballer.photo;
}
function getPlayerPoints(playerId) {
  getFootballerObject(playerId);
  return footballer.event_points;
}
function getPlayerPosition(playerId) {
  getFootballerObject(playerId);
  return footballer.element_type;
}
function getLiveFootballerObject(playerId) {
  for (var i = 0; i < gameweekLiveData.elements.length; i++) {
    if (gameweekLiveData.elements[i].id === playerId) {
      liveFootballer.id = gameweekLiveData.elements[i].id;
      liveFootballer.points = gameweekLiveData.elements[i].stats.total_points;
      liveFootballer.goals = gameweekLiveData.elements[i].stats.goals_scored;
      liveFootballer.clean_sheets =
        gameweekLiveData.elements[i].stats.clean_sheets;
      liveFootballer.conceded =
        gameweekLiveData.elements[i].stats.goals_conceded;
      liveFootballer.own_goals = gameweekLiveData.elements[i].stats.own_goals;
      liveFootballer.minutes = gameweekLiveData.elements[i].stats.minutes;
      liveFootballer.red_cards = gameweekLiveData.elements[i].stats.red_cards;
      liveFootballer.yellow_cards =
        gameweekLiveData.elements[i].stats.yellow_cards;
    }
  }
}
function getLivePoints(playerId) {
  getLiveFootballerObject(playerId);
  return liveFootballer.points;
}
function getLiveMinutesPlayed(playerId) {
  getLiveFootballerObject(playerId);
  return liveFootballer.minutes;
}


function getFootballerFixture(teamCode, gameweek){

	for (var i = 0; i < plFixtures.length; i++){
		if ((gameweek == plFixtures[i].event) & (teamCode == plFixtures[i].team_a ^ teamCode == plFixtures[i].team_h)){
			if (teamCode == plFixtures[i].team_a){	
				return getFootballerTeamName(plFixtures[i].team_a);
			} else {
				return getFootballerTeamName(plFixtures[i].team_h);
		}
		}
		
}
		
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////
function getFootballerTeamCode(playerId){
	for (var i = 0; i < bootstrap.teams.length; i++){
		if(bootstrap.teams[i].id === playerId){
		return bootstrap.teams[i].id
		}
	}
}

function getFootballerTeamName(teamId){
	for (var i = 0; i < bootstrap.teams.length; i++){
		if(bootstrap.teams[i].id === teamId){
		return bootstrap.teams[i].name
		}
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

function exit() {
  modal.style.display = "none";
}
function checkTheme() {
  x = localStorage.getItem("theme-choice");
  if (x === null || x === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }
}
checkTheme();

function switchTheme() {
  x = document.documentElement.getAttribute("data-theme");
  if (x === null || x === "light") {
    localStorage.setItem("theme-choice", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    localStorage.setItem("theme-choice", "light");
    document.documentElement.setAttribute("data-theme", "light");
  }
}
function convertChipName(chip) {
  //Convert FPL chip name to user friendly chip names
  if (chip == "wildcard") return "WC";
  if (chip == "freehit") return "FH";
  if (chip == "bboost") return "BB";
  if (chip == "3xc") return "TC";  
}
function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

const average = (array) => array.reduce((a, b) => a + b) / array.length;

const mostFrequent = (arr) =>
  Object.entries(
    arr.reduce((a, v) => {
      a[v] = a[v] ? a[v] + 1 : 1;
      return a;
    }, {})
  ).reduce((a, v) => (v[1] >= a[1] ? v : a), [null, 0])[0];

  function logout(){
	localStorage.removeItem("existing-user");
	location.reload()
}
function leagueLoader() {
	var elem = document.getElementById("myBar");
	var width = 0;
	var id = setInterval(frame, 80);
	function frame() {
	  if (width >= 100) {
		clearInterval(id);
	  } else {
		width++;
		elem.style.width = width + "%";
		elem.innerHTML = width * 1 + "%";
	  }
	}
}




// if("serviceWorker" in navigator){
// navigator.serviceWorker.register("sw.js").then(registration => {
//   //console.log("SW Registered!");
//   //console.log(registration);
// }).catch(error => {
//   console.log("SW Registered Failed!");
//   //console.log(error);
// });
// }