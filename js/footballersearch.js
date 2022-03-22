//# FPLToolbox

///////////////////////FOOTBALLER SEARCH //////////////////////////////////////////////////////
var fixture1 = {};
var fixture2 = {};



/* function submitFootballer(){
	document.getElementById("goalkeepers").innerHTML = '<div class="loader"></div>';
		
	setTimeout(function(){  
	document.getElementById("goalkeepers_button").innerHTML = ('<button class="button2" onclick="showKeepers()">Keepers</button><br>');
	document.getElementById("defenders_button").innerHTML = ('<button class="button2" onclick="showDefenders()">Defenders</button><br>');
	document.getElementById("midfielders_button").innerHTML = ('<button class="button2" onclick="showMidfielders()">Midfielders</button><br>');
	document.getElementById("forwards_button").innerHTML = ('<button class="button2" onclick="showForwards()">Forwards</button><br>');
	showKeepers();
	showDefenders();
	showMidfielders();
	showForwards();
	}, 2000);
} */

function showKeepers(){
	
	var x = document.getElementById("goalkeepers");

	if (x.style.display === "none") {
		x.style.display = "block";	
		
		var data = new google.visualization.DataTable(); // CREATES NEW TABLE
		data.addColumn('string', 'Name');
		data.addColumn('string', '');		
		data.addColumn('string', 'Team');		
		data.addColumn('number', 'GW');
		data.addColumn('number', 'Total');
		data.addColumn('number', 'Price');
		data.addColumn('number', 'Points/Game');
		data.addColumn('number', 'Points/£m');
		data.addColumn('number', 'Points/Mins');
		data.addColumn('number', 'Minutes');
		data.addColumn('number', 'Bonus P');
		data.addColumn('number', 'BPS');
		data.addColumn('number', 'Playing </br> Chance GW' + currentGw);
		data.addColumn('number', 'Playing </br> Chance GW' + nextGw);
		data.addColumn('string', 'In Dreamteam </br> (Season Count)');
		data.addColumn('number', 'Price Change');
		data.addColumn('number', 'Price</br>Change Start');
		data.addColumn('number', 'Selected');
		data.addColumn('number', 'Trfs In');
		data.addColumn('number', 'Trfs Out');
		data.addColumn('number', 'GW Trfs In');
		data.addColumn('number', 'GW Trfs Out');
		data.addColumn('number', 'Net Trfs');
		data.addColumn('number', 'Goals');
		data.addColumn('number', 'Assists');
		data.addColumn('number', 'Conceded');
		data.addColumn('number', 'Clean Sheets');
		data.addColumn('number', 'Own Goals');
		data.addColumn('number', 'Penalities</br>Missed');
		data.addColumn('number', 'Penalities</br>Order');
		data.addColumn('number', 'Saves');
		data.addColumn('number', 'Penalities</br>Saved');
		data.addColumn('number', 'Yellow</br>Cards');
		data.addColumn('number', 'Red</br>Cards');
		data.addColumn('number', 'Value</br>Form');
		data.addColumn('number', 'Value</br>Season');
		data.addColumn('string', 'News');
		data.addColumn('string', 'News</br>Added');
		
		for (var i = 0; i < bootstrap.elements.length; i++){
		if(bootstrap.elements[i].element_type === 1){			
		data.addRows([[
		bootstrap.elements[i].first_name + "</br> " + bootstrap.elements[i].second_name,
		('<img src=' + IMAGE_URL + (bootstrap.elements[i].photo).slice(0, -3) + 'png width="33" height="42">'),
		
		getFootballerTeamPhoto(bootstrap.elements[i].team_code),
		bootstrap.elements[i].event_points,
		bootstrap.elements[i].total_points,
		((bootstrap.elements[i].now_cost)/10),
		Number(bootstrap.elements[i].points_per_game),
		Number(bootstrap.elements[i].total_points/((bootstrap.elements[i].now_cost)/10)),
		Number(bootstrap.elements[i].total_points)/(bootstrap.elements[i].minutes),
		bootstrap.elements[i].minutes,
		bootstrap.elements[i].bonus,
		bootstrap.elements[i].bps,
		bootstrap.elements[i].chance_of_playing_this_round,
		bootstrap.elements[i].chance_of_playing_next_round,
		bootstrap.elements[i].in_dreamteam + '<br>' + bootstrap.elements[i].dreamteam_count,
		
		((bootstrap.elements[i].cost_change_event)/10),
		((bootstrap.elements[i].cost_change_start)/10),
		Number(bootstrap.elements[i].selected_by_percent),
		bootstrap.elements[i].transfers_in,		
		bootstrap.elements[i].transfers_out,
		bootstrap.elements[i].transfers_in_event,
		bootstrap.elements[i].transfers_out_event,
		(bootstrap.elements[i].transfers_in_event - bootstrap.elements[i].transfers_out_event),
		bootstrap.elements[i].goals_scored,
		bootstrap.elements[i].assists,
		bootstrap.elements[i].goals_conceded,
		bootstrap.elements[i].clean_sheets,
		bootstrap.elements[i].own_goals,
		bootstrap.elements[i].penalties_missed,
		bootstrap.elements[i].penalties_order,
		bootstrap.elements[i].saves,
		bootstrap.elements[i].penalties_saved,
		bootstrap.elements[i].yellow_cards,
		bootstrap.elements[i].red_cards,
		Number(bootstrap.elements[i].value_form),
		Number(bootstrap.elements[i].value_season),
		bootstrap.elements[i].news,
		bootstrap.elements[i].news_added,		
		]]);
		}
		}
		var options =  {
	alternatingRowStyle: true,
	sortColumn: 3,
	sortAscending: false,
	allowHtml: true,	
	width: '100%', 
	height: '100%',
	title: '',
	frozenColumns: 1,
	}
	


		//formatter.format(data, 0); // Apply formatter to first column
		var formatter1 = new google.visualization.ColorFormat();
		formatter1.addRange(1, 8000000, 'black', '#00FF87'); //green
		formatter1.addRange(-8000000, 0, 'white', '#e90052'); //red
		formatter1.format(data, 22); // Apply formatter to first column


	
	var table = new google.visualization.Table(document.getElementById('goalkeepers'));
    document.getElementById("goalkeepers").innerHTML = '<div class="loader"></div>';
	
	setTimeout(function(){table.draw(data, options)
	}, 1000);
	}
	else {
    x.style.display = "none";
  } 
		
}

function showDefenders(){
	var x = document.getElementById("defenders");

	if (x.style.display === "none") {
		x.style.display = "block";
		
		var data = new google.visualization.DataTable(); // CREATES NEW TABLE
		data.addColumn('string', 'Name');
		data.addColumn('string', '');		
		data.addColumn('string', 'Team');		
		data.addColumn('number', 'GW');
		data.addColumn('number', 'Total');
		data.addColumn('number', 'Price');
		data.addColumn('number', 'Points/Game');
		data.addColumn('number', 'Points/£m');
		data.addColumn('number', 'Points/Mins');
		data.addColumn('number', 'Minutes');
		data.addColumn('number', 'Bonus P');
		data.addColumn('number', 'BPS');
		data.addColumn('number', 'Playing </br> Chance GW' + currentGw);
		data.addColumn('number', 'Playing </br> Chance GW' + nextGw);
		data.addColumn('string', 'In Dreamteam </br> (Season Count)');
		data.addColumn('number', 'Price Change');
		data.addColumn('number', 'Price</br>Change Start');
		data.addColumn('number', 'Selected');
		data.addColumn('number', 'Trfs In');
		data.addColumn('number', 'Trfs Out');
		data.addColumn('number', 'GW Trfs In');
		data.addColumn('number', 'GW Trfs Out');
		data.addColumn('number', 'Net Trfs');
		data.addColumn('number', 'Goals');
		data.addColumn('number', 'Assists');
		data.addColumn('number', 'Conceded');
		data.addColumn('number', 'Clean Sheets');
		data.addColumn('number', 'Own Goals');
		data.addColumn('number', 'Penalities</br>Missed');
		data.addColumn('number', 'Penalities</br>Order');
		data.addColumn('number', 'Saves');
		data.addColumn('number', 'Penalities</br>Saved');
		data.addColumn('number', 'Yellow</br>Cards');
		data.addColumn('number', 'Red</br>Cards');
		data.addColumn('number', 'Value</br>Form');
		data.addColumn('number', 'Value</br>Season');
		data.addColumn('string', 'News');
		data.addColumn('string', 'News</br>Added');
		
		for (var i = 0; i < bootstrap.elements.length; i++){
		if(bootstrap.elements[i].element_type === 2){
		data.addRows([[
		bootstrap.elements[i].first_name + " </br>" + bootstrap.elements[i].second_name,
		('<img src=' + IMAGE_URL + (bootstrap.elements[i].photo).slice(0, -3) + 'png width="33" height="42">'),
		
		getFootballerTeamPhoto(bootstrap.elements[i].team_code),
		bootstrap.elements[i].event_points,
		bootstrap.elements[i].total_points,
		((bootstrap.elements[i].now_cost)/10),

		Number(bootstrap.elements[i].points_per_game),
		Number(bootstrap.elements[i].points_per_game/((bootstrap.elements[i].now_cost)/10)),
				Number(bootstrap.elements[i].total_points)/(bootstrap.elements[i].minutes),
		bootstrap.elements[i].minutes,
		bootstrap.elements[i].bonus,
		bootstrap.elements[i].bps,
		bootstrap.elements[i].chance_of_playing_this_round,
		bootstrap.elements[i].chance_of_playing_next_round,
		bootstrap.elements[i].in_dreamteam + '<br>' + bootstrap.elements[i].dreamteam_count,

		((bootstrap.elements[i].cost_change_event)/10),
		((bootstrap.elements[i].cost_change_start)/10),
		Number(bootstrap.elements[i].selected_by_percent),
		bootstrap.elements[i].transfers_in,		
		bootstrap.elements[i].transfers_out,
		bootstrap.elements[i].transfers_in_event,
		bootstrap.elements[i].transfers_out_event,
		(bootstrap.elements[i].transfers_in_event - bootstrap.elements[i].transfers_out_event),
		bootstrap.elements[i].goals_scored,
		bootstrap.elements[i].assists,
		bootstrap.elements[i].goals_conceded,
		bootstrap.elements[i].clean_sheets,
		bootstrap.elements[i].own_goals,
		bootstrap.elements[i].penalties_missed,
		bootstrap.elements[i].penalties_order,
		bootstrap.elements[i].saves,
		bootstrap.elements[i].penalties_saved,
		bootstrap.elements[i].yellow_cards,
		bootstrap.elements[i].red_cards,
		Number(bootstrap.elements[i].value_form),
		Number(bootstrap.elements[i].value_season),
		bootstrap.elements[i].news,
		bootstrap.elements[i].news_added,		
		]]);
		}
		}
		var options =  {
	alternatingRowStyle: true,
	sortColumn: 3,
	sortAscending: false,
	allowHtml: true,	
	width: '100%', 
	height: '100%',
	title: '',
	frozenColumns: 1,
	}
	
		//formatter.format(data, 0); // Apply formatter to first column
		var formatter1 = new google.visualization.ColorFormat();
		formatter1.addRange(1, 8000000, 'black', '#00FF87'); //green
		formatter1.addRange(-8000000, 0, 'white', '#e90052'); //red
		formatter1.format(data, 22); // Apply formatter to first column



	
	var table = new google.visualization.Table(document.getElementById('defenders'));
    
    document.getElementById("defenders").innerHTML = '<div class="loader"></div>';
	
	setTimeout(function(){table.draw(data, options)
	}, 1000);
	}
	else {
    x.style.display = "none";
  } 
		
}

function showMidfielders(){
	var x = document.getElementById("midfielders");

	if (x.style.display === "none") {
		x.style.display = "block";	
		var data = new google.visualization.DataTable(); // CREATES NEW TABLE
		data.addColumn('string', 'Name');
		data.addColumn('string', '');		
		data.addColumn('string', 'Team');		
		data.addColumn('number', 'GW');
		data.addColumn('number', 'Total');
		data.addColumn('number', 'Price');
		data.addColumn('number', 'Points/Game');
		data.addColumn('number', 'Points/£m');
		data.addColumn('number', 'Points/Mins');
		data.addColumn('number', 'Minutes');
		data.addColumn('number', 'Bonus P');
		data.addColumn('number', 'BPS');
		data.addColumn('number', 'Playing </br> Chance GW' + currentGw);
		data.addColumn('number', 'Playing </br> Chance GW' + nextGw);
		data.addColumn('string', 'In Dreamteam </br> (Season Count)');
		data.addColumn('number', 'Price Change');
		data.addColumn('number', 'Price</br>Change Start');
		data.addColumn('number', 'Selected');
		data.addColumn('number', 'Trfs In');
		data.addColumn('number', 'Trfs Out');
		data.addColumn('number', 'GW Trfs In');
		data.addColumn('number', 'GW Trfs Out');
		data.addColumn('number', 'Net Trfs');
		data.addColumn('number', 'Goals');
		data.addColumn('number', 'Assists');
		data.addColumn('number', 'Conceded');
		data.addColumn('number', 'Clean Sheets');
		data.addColumn('number', 'Own Goals');
		data.addColumn('number', 'Penalities</br>Missed');
		data.addColumn('number', 'Penalities</br>Order');
		data.addColumn('number', 'Saves');
		data.addColumn('number', 'Penalities</br>Saved');
		data.addColumn('number', 'Yellow</br>Cards');
		data.addColumn('number', 'Red</br>Cards');
		data.addColumn('number', 'Value</br>Form');
		data.addColumn('number', 'Value</br>Season');
		data.addColumn('string', 'News');
		data.addColumn('string', 'News</br>Added');
		
		for (var i = 0; i < bootstrap.elements.length; i++){
		if(bootstrap.elements[i].element_type === 3){
		data.addRows([[
		bootstrap.elements[i].first_name + " </br>" + bootstrap.elements[i].second_name,
		('<img src=' + IMAGE_URL + (bootstrap.elements[i].photo).slice(0, -3) + 'png width="33" height="42">'),
		
		getFootballerTeamPhoto(bootstrap.elements[i].team_code),
		bootstrap.elements[i].event_points,
		bootstrap.elements[i].total_points,
		((bootstrap.elements[i].now_cost)/10),
		Number(bootstrap.elements[i].points_per_game),
		Number(bootstrap.elements[i].points_per_game/((bootstrap.elements[i].now_cost)/10)),
				Number(bootstrap.elements[i].total_points)/(bootstrap.elements[i].minutes),
		bootstrap.elements[i].minutes,
		bootstrap.elements[i].bonus,
		bootstrap.elements[i].bps,
		bootstrap.elements[i].chance_of_playing_this_round,
		bootstrap.elements[i].chance_of_playing_next_round,
		bootstrap.elements[i].in_dreamteam + '<br>' + bootstrap.elements[i].dreamteam_count,

		((bootstrap.elements[i].cost_change_event)/10),
		((bootstrap.elements[i].cost_change_start)/10),
		Number(bootstrap.elements[i].selected_by_percent),
		bootstrap.elements[i].transfers_in,		
		bootstrap.elements[i].transfers_out,
		bootstrap.elements[i].transfers_in_event,
		bootstrap.elements[i].transfers_out_event,
		(bootstrap.elements[i].transfers_in_event - bootstrap.elements[i].transfers_out_event),
		bootstrap.elements[i].goals_scored,
		bootstrap.elements[i].assists,
		bootstrap.elements[i].goals_conceded,
		bootstrap.elements[i].clean_sheets,
		bootstrap.elements[i].own_goals,
		bootstrap.elements[i].penalties_missed,
		bootstrap.elements[i].penalties_order,
		bootstrap.elements[i].saves,
		bootstrap.elements[i].penalties_saved,
		bootstrap.elements[i].yellow_cards,
		bootstrap.elements[i].red_cards,
		Number(bootstrap.elements[i].value_form),
		Number(bootstrap.elements[i].value_season),
		bootstrap.elements[i].news,
		bootstrap.elements[i].news_added,		
		]]);
		}
		}
		var options =  {
	alternatingRowStyle: true,
	sortColumn: 3,
	sortAscending: false,
	allowHtml: true,	
	width: '100%', 
	height: '100%',
	title: '',
	frozenColumns: 1,
	}
	
		//formatter.format(data, 0); // Apply formatter to first column
		var formatter1 = new google.visualization.ColorFormat();
		formatter1.addRange(1, 8000000, 'black', '#00FF87'); //green
		formatter1.addRange(-8000000, 0, 'white', '#e90052'); //red
		formatter1.format(data, 22); // Apply formatter to first column



	
	var table = new google.visualization.Table(document.getElementById('midfielders'));
    document.getElementById("midfielders").innerHTML = '<div class="loader"></div>';
	
	setTimeout(function(){table.draw(data, options)
	}, 1000);
	}
	else {
    x.style.display = "none";
  } 
		
}

function showForwards(){
	var x = document.getElementById("forwards");

	if (x.style.display === "none") {
		x.style.display = "block";	
		var data = new google.visualization.DataTable(); // CREATES NEW TABLE
		data.addColumn('string', 'Name');
		data.addColumn('string', '');		
		data.addColumn('string', 'Team');		
		data.addColumn('number', 'GW');
		data.addColumn('number', 'Total');
		data.addColumn('number', 'Price');
		data.addColumn('number', 'Points/Game');
		data.addColumn('number', 'Points/£m');
		data.addColumn('number', 'Points/Mins');
		data.addColumn('number', 'Minutes');
		data.addColumn('number', 'Bonus P');
		data.addColumn('number', 'BPS');
		data.addColumn('number', 'Playing </br> Chance GW' + currentGw);
		data.addColumn('number', 'Playing </br> Chance GW' + nextGw);
		data.addColumn('string', 'In Dreamteam </br> (Season Count)');
		data.addColumn('number', 'Price Change');
		data.addColumn('number', 'Price</br>Change Start');
		data.addColumn('number', 'Selected');
		data.addColumn('number', 'Trfs In');
		data.addColumn('number', 'Trfs Out');
		data.addColumn('number', 'GW Trfs In');
		data.addColumn('number', 'GW Trfs Out');
		data.addColumn('number', 'Net Trfs');
		data.addColumn('number', 'Goals');
		data.addColumn('number', 'Assists');
		data.addColumn('number', 'Conceded');
		data.addColumn('number', 'Clean Sheets');
		data.addColumn('number', 'Own Goals');
		data.addColumn('number', 'Penalities</br>Missed');
		data.addColumn('number', 'Penalities</br>Order');
		data.addColumn('number', 'Saves');
		data.addColumn('number', 'Penalities</br>Saved');
		data.addColumn('number', 'Yellow</br>Cards');
		data.addColumn('number', 'Red</br>Cards');
		data.addColumn('number', 'Value</br>Form');
		data.addColumn('number', 'Value</br>Season');
		data.addColumn('string', 'News');
		data.addColumn('string', 'News</br>Added');
		
		for (var i = 0; i < bootstrap.elements.length; i++){
		if(bootstrap.elements[i].element_type === 4){
		data.addRows([[
		bootstrap.elements[i].first_name + "</br> " + bootstrap.elements[i].second_name,
		('<img src=' + IMAGE_URL + (bootstrap.elements[i].photo).slice(0, -3) + 'png width="33" height="42">'),
		
		getFootballerTeamPhoto(bootstrap.elements[i].team_code),
		bootstrap.elements[i].event_points,
		bootstrap.elements[i].total_points,
		((bootstrap.elements[i].now_cost)/10),
		Number(bootstrap.elements[i].points_per_game),
		Number(bootstrap.elements[i].points_per_game/((bootstrap.elements[i].now_cost)/10)),
				Number(bootstrap.elements[i].total_points)/(bootstrap.elements[i].minutes),
		bootstrap.elements[i].minutes,
		bootstrap.elements[i].bonus,
		bootstrap.elements[i].bps,
		bootstrap.elements[i].chance_of_playing_this_round,
		bootstrap.elements[i].chance_of_playing_next_round,
		bootstrap.elements[i].in_dreamteam + '<br>' + bootstrap.elements[i].dreamteam_count,

		((bootstrap.elements[i].cost_change_event)/10),
		((bootstrap.elements[i].cost_change_start)/10),
		Number(bootstrap.elements[i].selected_by_percent),
		bootstrap.elements[i].transfers_in,		
		bootstrap.elements[i].transfers_out,
		bootstrap.elements[i].transfers_in_event,
		bootstrap.elements[i].transfers_out_event,
		(bootstrap.elements[i].transfers_in_event - bootstrap.elements[i].transfers_out_event),
		bootstrap.elements[i].goals_scored,
		bootstrap.elements[i].assists,
		bootstrap.elements[i].goals_conceded,
		bootstrap.elements[i].clean_sheets,
		bootstrap.elements[i].own_goals,
		bootstrap.elements[i].penalties_missed,
		bootstrap.elements[i].penalties_order,
		bootstrap.elements[i].saves,
		bootstrap.elements[i].penalties_saved,
		bootstrap.elements[i].yellow_cards,
		bootstrap.elements[i].red_cards,
		Number(bootstrap.elements[i].value_form),
		Number(bootstrap.elements[i].value_season),
		bootstrap.elements[i].news,
		bootstrap.elements[i].news_added,		
		]]);
		}
		}
		var options =  {
	alternatingRowStyle: true,
	sortColumn: 3,
	sortAscending: false,
	allowHtml: true,	
	width: '100%', 
	height: '100%',
	title: '',
	frozenColumns: 1,
	}
	
		//formatter.format(data, 0); // Apply formatter to first column
		var formatter1 = new google.visualization.ColorFormat();
		formatter1.addRange(1, 8000000, 'black', '#00FF87'); //green
		formatter1.addRange(-8000000, 0, 'white', '#e90052'); //red
		formatter1.format(data, 22); // Apply formatter to first column



	
	var table = new google.visualization.Table(document.getElementById('forwards'));
    document.getElementById("forwards").innerHTML = '<div class="loader"></div>';
	
	setTimeout(function(){table.draw(data, options)
	}, 1000);
	}
	else {
    x.style.display = "none";
  } 
		
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
function getFootballerTeam(playerId){
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

function getFootballerTeamPhoto(teamCode){
	for (var i = 0; i < bootstrap.elements.length; i++){
		if(bootstrap.elements[i].id === teamCode){
		return '<img src="https://resources.premierleague.com/premierleague/badges/50/t' + teamCode + '.png" style="width:50%" "height:50%">'
		}
	}
}




///////////////////////GETTERS FOR FOOTBALLER DATA //////////////////////////////////////////////////////
function getFootballerObject(playerId){
	for (var i = 0; i < bootstrap.elements.length; i++){						
		if (bootstrap.elements[i].id == playerId){
			
			footballer.web_name = bootstrap.elements[i].web_name;
			footballer.first_name = bootstrap.elements[i].first_name;
			footballer.second_name = bootstrap.elements[i].second_name;
			footballer.event_points = bootstrap.elements[i].event_points;
			footballer.dreamteam = bootstrap.elements[i].in_dreamteam;
			footballer.points_per_game = bootstrap.elements[i].points_per_game;
			footballer.photo = IMAGE_URL + bootstrap.elements[i].photo.slice(0, -3) + "png";
			var footballer_team_id = bootstrap.elements[i].team;
			footballer.transfers_in = bootstrap.elements[i].transfers_in;
			footballer.transfers_in_event = bootstrap.elements[i].transfers_in_event;
			footballer.transfers_out = bootstrap.elements[i].transfers_out;
			footballer.transfers_out_event = bootstrap.elements[i].transfers_out_event;
			footballer.price_change = bootstrap.elements[i].cost_change_event;
			footballer.news = bootstrap.elements[i].news;
			footballer.team_code = bootstrap.elements[i].team_code;
			footballer.element_type = bootstrap.elements[i].element_type;
		}
	}
	for (var i = 0; i < bootstrap.teams.length; i++){
		if (bootstrap.teams[i].id == footballer_team_id){
			footballer.team = bootstrap.teams[i].name;
		}
	}
}

function getPlayerName(playerId){
	getFootballerObject(playerId);
	return footballer.first_name + " " + footballer.second_name; 
}

function getPlayerWebName(playerId){
	getFootballerObject(playerId);
	return footballer.web_name; 
}

function getPlayerPhoto(playerId){
	getFootballerObject(playerId);
	return footballer.photo;
}

function getPlayerPoints(playerId){
	getFootballerObject(playerId);
	return footballer.event_points;
}

function getPlayerTeam(playerId){
	getFootballerObject(playerId);
	return footballer.team;
}

function getPlayerAvg(playerId){
	getFootballerObject(playerId)
	return footballer.points_per_game;
}

function getPlayerNews(playerId){
	getFootballerObject(playerId)
	return footballer.news;
}

function getPlayerPriceChange(playerId){
	getFootballerObject(playerId)
	return footballer.price_change;
}

function getPlayerNetTransfers(playerId){
	getFootballerObject(playerId)
	footballer.netTransfers = (footballer.transfers_in_event - footballer.transfers_out_event);
	return footballer.netTransfers;
}

function hasPlayerPlayed(playerId){
	getPlayerTeam(playerId)
	return footballer.team
	console.log(footbaler.team)
}

function getPlayerTeamCode(playerId){
	getFootballerObject(playerId)
	return footballer.team_code
}

function getPlayerPosition(playerId){
	getFootballerObject(playerId)
	return footballer.element_type
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////GETTERS FOR LIVE FOOTBALLER DATA /////////////////////

function getLiveFootballerObject(playerId){
	for (var i = 0; i < gameweekLiveData.elements.length; i++){	
		if(gameweekLiveData.elements[i].id === playerId){			
			liveFootballer.id = gameweekLiveData.elements[i].id;
			liveFootballer.points = gameweekLiveData.elements[i].stats.total_points;
			liveFootballer.goals = gameweekLiveData.elements[i].stats.goals_scored;
			liveFootballer.clean_sheets = gameweekLiveData.elements[i].stats.clean_sheets;
			liveFootballer.conceded = gameweekLiveData.elements[i].stats.goals_conceded;
			liveFootballer.own_goals = gameweekLiveData.elements[i].stats.own_goals;
			liveFootballer.minutes = gameweekLiveData.elements[i].stats.minutes;
			liveFootballer.red_cards = gameweekLiveData.elements[i].stats.red_cards;
			liveFootballer.yellow_cards = gameweekLiveData.elements[i].stats.yellow_cards;
			
		}
	}
	
}


function getLiveScore(playerId){
	getLiveFootballerObject(playerId)
	return liveFootballer.points
}

function getLiveGoals(playerId){
	getLiveFootballerObject(playerId)
	
	return liveFootballer.goals
}

function getLivePoints(playerId){
	getLiveFootballerObject(playerId)
	return liveFootballer.points
}

function getLiveCleanSheets(playerId){
	getLiveFootballerObject(playerId)
	return liveFootballer.clean_sheets
}

function getLiveGoalsConceeded(playerId){
	getLiveFootballerObject(playerId)
	return liveFootballer.conceded
}

function getLiveMinutesPlayed(playerId){
	getLiveFootballerObject(playerId)
	return liveFootballer.minutes
}

///////////////////////GETTERS FOR PREMIER LEAGUE TEAM //////////////////////////////////////////////////////
function getPlTeamObject(plTeamId){
	for (var i = 0; i < bootstrap.teams.length; i++){						
		if (bootstrap.teams[i].id == plTeamId){		
			plTeam.name = bootstrap.teams[i].name;
			
		}
	}
	
}

function getPlTeamName(plTeamId){
	getPlTeamObject(plTeamId);
	
	return plTeam.name; 
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////


