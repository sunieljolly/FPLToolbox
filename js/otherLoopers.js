///////////////////////ADD EACH MANAGERS ALL OTHER DATA TO MANAGER DATA//////////////////////////////////
var currentWeeklyLooper = [];
function addCurrentWeekData(){
	function makeFunction(i){		
		return function(){
			$.ajax({
				url: BASE_URL + "entry/" + league[i].entry + "/event/" + currentGw + "/picks/",
				type: "GET",
				success: function (team_picks){
					if(team_picks){
						
						league[i].currentWeek = [];
						league[i].currentWeek.push(team_picks);	
					}
				}
			
			})
		}
	}
	//CREATE AS MANY FUNCTIONS AS NUMBER OF ENTRIES IN LEAGUE	
	for (var i = 0; i < league.length; i++){
		currentWeeklyLooper[i] = makeFunction(i);
	}
	for (var j = 0; j < league.length; j++){
		currentWeeklyLooper[j](); // and now let's run each one to see
	}
}

var gameWeeksPointsLooper = [];
function addGameWeeksPoints(){	
	function makeFunction(i){
		return function(){
			$.ajax({
				url: BASE_URL + "entry/" + league[i].entry + "/history/",
				type: "GET",
				success: function (team_data){
					
					league[i].gameweeksPoints = [];
					league[i].gameweeksRanks = [];
					if (1 <= currentGw){league[i].gameweeksPoints.push(team_data.current[0].total_points)};
					if (2 <= currentGw){league[i].gameweeksPoints.push(team_data.current[1].total_points)};
					if (3 <= currentGw){league[i].gameweeksPoints.push(team_data.current[2].total_points)};
					if (4 <= currentGw){league[i].gameweeksPoints.push(team_data.current[3].total_points)};
					if (5 <= currentGw){league[i].gameweeksPoints.push(team_data.current[4].total_points)};
					if (6 <= currentGw){league[i].gameweeksPoints.push(team_data.current[5].total_points)};
					if (7 <= currentGw){league[i].gameweeksPoints.push(team_data.current[6].total_points)};
					if (8 <= currentGw){league[i].gameweeksPoints.push(team_data.current[7].total_points)};
					if (9 <= currentGw){league[i].gameweeksPoints.push(team_data.current[8].total_points)};
					if (10 <= currentGw){league[i].gameweeksPoints.push(team_data.current[9].total_points)};
					if (11 <= currentGw){league[i].gameweeksPoints.push(team_data.current[10].total_points)};
					if (12 <= currentGw){league[i].gameweeksPoints.push(team_data.current[11].total_points)};
					if (13 <= currentGw){league[i].gameweeksPoints.push(team_data.current[12].total_points)};
					if (14 <= currentGw){league[i].gameweeksPoints.push(team_data.current[13].total_points)};
					if (15 <= currentGw){league[i].gameweeksPoints.push(team_data.current[14].total_points)};
					if (16 <= currentGw){league[i].gameweeksPoints.push(team_data.current[15].total_points)};
					if (17 <= currentGw){league[i].gameweeksPoints.push(team_data.current[16].total_points)};
					if (18 <= currentGw){league[i].gameweeksPoints.push(team_data.current[17].total_points)};
					if (19 <= currentGw){league[i].gameweeksPoints.push(team_data.current[18].total_points)};
					if (20 <= currentGw){league[i].gameweeksPoints.push(team_data.current[19].total_points)};
					if (21 <= currentGw){league[i].gameweeksPoints.push(team_data.current[20].total_points)};
					if (22 <= currentGw){league[i].gameweeksPoints.push(team_data.current[21].total_points)};
					if (23 <= currentGw){league[i].gameweeksPoints.push(team_data.current[22].total_points)};
					if (24 <= currentGw){league[i].gameweeksPoints.push(team_data.current[23].total_points)};
					if (25 <= currentGw){league[i].gameweeksPoints.push(team_data.current[24].total_points)};
					if (26 <= currentGw){league[i].gameweeksPoints.push(team_data.current[25].total_points)};
					if (27 <= currentGw){league[i].gameweeksPoints.push(team_data.current[26].total_points)};
					if (28 <= currentGw){league[i].gameweeksPoints.push(team_data.current[27].total_points)};
					if (29 <= currentGw){league[i].gameweeksPoints.push(team_data.current[28].total_points)};
					if (30 <= currentGw){league[i].gameweeksPoints.push(team_data.current[29].total_points)};
					if (31 <= currentGw){league[i].gameweeksPoints.push(team_data.current[30].total_points)};
					if (32 <= currentGw){league[i].gameweeksPoints.push(team_data.current[31].total_points)};
					if (33 <= currentGw){league[i].gameweeksPoints.push(team_data.current[32].total_points)};
					if (34 <= currentGw){league[i].gameweeksPoints.push(team_data.current[33].total_points)};
					if (35 <= currentGw){league[i].gameweeksPoints.push(team_data.current[34].total_points)};
					if (36 <= currentGw){league[i].gameweeksPoints.push(team_data.current[35].total_points)};
					if (37 <= currentGw){league[i].gameweeksPoints.push(team_data.current[36].total_points)};
					if (38 <= currentGw){league[i].gameweeksPoints.push(team_data.current[37].total_points)};
					
					if (1 <= currentGw){league[i].gameweeksRanks.push(team_data.current[0].overall_rank)};
					if (2 <= currentGw){league[i].gameweeksRanks.push(team_data.current[1].overall_rank)};
					if (3 <= currentGw){league[i].gameweeksRanks.push(team_data.current[2].overall_rank)};
					if (4 <= currentGw){league[i].gameweeksRanks.push(team_data.current[3].overall_rank)};
					if (5 <= currentGw){league[i].gameweeksRanks.push(team_data.current[4].overall_rank)};
					if (6 <= currentGw){league[i].gameweeksRanks.push(team_data.current[5].overall_rank)};
					if (7 <= currentGw){league[i].gameweeksRanks.push(team_data.current[6].overall_rank)};
					if (8 <= currentGw){league[i].gameweeksRanks.push(team_data.current[7].overall_rank)};
					if (9 <= currentGw){league[i].gameweeksRanks.push(team_data.current[8].overall_rank)};
					if (10 <= currentGw){league[i].gameweeksRanks.push(team_data.current[9].overall_rank)};
					if (11 <= currentGw){league[i].gameweeksRanks.push(team_data.current[10].overall_rank)};
					if (12 <= currentGw){league[i].gameweeksRanks.push(team_data.current[11].overall_rank)};
					if (13 <= currentGw){league[i].gameweeksRanks.push(team_data.current[12].overall_rank)};
					if (14 <= currentGw){league[i].gameweeksRanks.push(team_data.current[13].overall_rank)};
					if (15 <= currentGw){league[i].gameweeksRanks.push(team_data.current[14].overall_rank)};
					if (16 <= currentGw){league[i].gameweeksRanks.push(team_data.current[15].overall_rank)};
					if (17 <= currentGw){league[i].gameweeksRanks.push(team_data.current[16].overall_rank)};
					if (18 <= currentGw){league[i].gameweeksRanks.push(team_data.current[17].overall_rank)};
					if (19 <= currentGw){league[i].gameweeksRanks.push(team_data.current[18].overall_rank)};
					if (20 <= currentGw){league[i].gameweeksRanks.push(team_data.current[19].overall_rank)};
					if (21 <= currentGw){league[i].gameweeksRanks.push(team_data.current[20].overall_rank)};
					if (22 <= currentGw){league[i].gameweeksRanks.push(team_data.current[21].overall_rank)};
					if (23 <= currentGw){league[i].gameweeksRanks.push(team_data.current[22].overall_rank)};
					if (24 <= currentGw){league[i].gameweeksRanks.push(team_data.current[23].overall_rank)};
					if (25 <= currentGw){league[i].gameweeksRanks.push(team_data.current[24].overall_rank)};
					if (26 <= currentGw){league[i].gameweeksRanks.push(team_data.current[25].overall_rank)};
					if (27 <= currentGw){league[i].gameweeksRanks.push(team_data.current[26].overall_rank)};
					if (28 <= currentGw){league[i].gameweeksRanks.push(team_data.current[27].overall_rank)};
					if (29 <= currentGw){league[i].gameweeksRanks.push(team_data.current[28].overall_rank)};
					if (30 <= currentGw){league[i].gameweeksRanks.push(team_data.current[29].overall_rank)};
					if (31 <= currentGw){league[i].gameweeksRanks.push(team_data.current[30].overall_rank)};
					if (32 <= currentGw){league[i].gameweeksRanks.push(team_data.current[31].overall_rank)};
					if (33 <= currentGw){league[i].gameweeksRanks.push(team_data.current[32].overall_rank)};
					if (34 <= currentGw){league[i].gameweeksRanks.push(team_data.current[33].overall_rank)};
					if (35 <= currentGw){league[i].gameweeksRanks.push(team_data.current[34].overall_rank)};
					if (36 <= currentGw){league[i].gameweeksRanks.push(team_data.current[35].overall_rank)};
					if (37 <= currentGw){league[i].gameweeksRanks.push(team_data.current[36].overall_rank)};
					if (38 <= currentGw){league[i].gameweeksRanks.push(team_data.current[37].overall_rank)};




				}	
			})
		}
	}
	//CREATE AS MANY FUNCTIONS AS NUMBER OF ENTRIES IN LEAGUE
	for (var i = 0; i < league.length; i++){
		gameWeeksPointsLooper[i] = makeFunction(i);
	}
	for (var j = 0; j < league.length; j++){
		gameWeeksPointsLooper[j]();
	}
}

var chipLooper = [];
function addChips(){
	function makeFunction(i){		
		return function(){
			$.ajax({
				url: BASE_URL + "entry/" + league[i].entry + "/history/",
				type: "GET",
				success: function (team_data){
					league[i].chips = [];
					if(team_data.chips[0]){
						league[i].chips.push({name: team_data.chips[0].name, time: team_data.chips[0].time, gw: team_data.chips[0].event});
					}else{
						league[i].chips.push(null);	
					}
					///////////
					if(team_data.chips[1]){
						league[i].chips.push({name: team_data.chips[1].name, time: team_data.chips[1].time, gw: team_data.chips[1].event});			
					}else{
						league[i].chips.push(null);		
					}
					///////////
					if(team_data.chips[2]){
						league[i].chips.push({name: team_data.chips[2].name, time: team_data.chips[2].time, gw: team_data.chips[2].event});	
					}else{
						league[i].chips.push(null);				
					}
					///////////
					if(team_data.chips[3]){
						league[i].chips.push({name: team_data.chips[3].name, time: team_data.chips[3].time, gw: team_data.chips[3].event});
					}else{
						league[i].chips.push(null);	
					}
					//////////
					if (team_data.chips[4]){
						league[i].chips.push({name: team_data.chips[4].name, time: team_data.chips[4].time, gw: team_data.chips[4].event});	
					}else{
						league[i].chips.push(null);	
					}				
				}
			})
		}
	}
	//CREATE AS MANY FUNCTIONS AS NUMBER OF ENTRIES IN LEAGUE
	for (var i = 0; i < league.length; i++){
		chipLooper[i] = makeFunction(i);		
	}	
	for (var j = 0; j < league.length; j++){
		chipLooper[j](); // and now let's run each one to see
	}
}

var previousSeasonsLooper = [];
function addPreviousSeasons(){	
	function makeFunction(i){		
		return function(){
			$.ajax({
				url: BASE_URL + "entry/" + league[i].entry + "/history/",
				type: "GET",
				success: function (team_data){
					
					league[i].previousScores = [];
					league[i].previousRanks = [];
					league[i].previousSeasons = [];
					league[i].yearsManaging = team_data.past.length;		
					

					if(team_data.past[team_data.past.length - 1]){
						league[i].previousSeasons.push({season_name: team_data.past[team_data.past.length - 1].season_name, total_points: team_data.past[team_data.past.length - 1].total_points, rank: team_data.past[team_data.past.length - 1].rank});
						league[i].previousScores.push(team_data.past[team_data.past.length - 1].total_points)
						league[i].previousRanks.push(team_data.past[team_data.past.length - 1].rank)
					}else{
						league[i].previousSeasons.push(null);
					}						
					if(team_data.past[team_data.past.length - 2]){
						league[i].previousSeasons.push({season_name: team_data.past[team_data.past.length - 2].season_name, total_points: team_data.past[team_data.past.length - 2].total_points, rank: team_data.past[team_data.past.length - 2].rank});
						league[i].previousScores.push(team_data.past[team_data.past.length - 2].total_points)
						league[i].previousRanks.push(team_data.past[team_data.past.length - 2].rank)
					}else{
						league[i].previousSeasons.push(null);
					}			
					if(team_data.past[team_data.past.length - 3]){
						league[i].previousSeasons.push({season_name: team_data.past[team_data.past.length - 3].season_name, total_points: team_data.past[team_data.past.length - 3].total_points, rank: team_data.past[team_data.past.length - 3].rank});
						league[i].previousScores.push(team_data.past[team_data.past.length - 3].total_points)
						league[i].previousRanks.push(team_data.past[team_data.past.length - 3].rank)
					}else{
						league[i].previousSeasons.push(null);
					}
					if(team_data.past[team_data.past.length - 4]){
						league[i].previousSeasons.push({season_name: team_data.past[team_data.past.length - 4].season_name, total_points: team_data.past[team_data.past.length - 4].total_points, rank: team_data.past[team_data.past.length - 4].rank});
						league[i].previousScores.push(team_data.past[team_data.past.length - 4].total_points)
						league[i].previousRanks.push(team_data.past[team_data.past.length - 4].rank)
					}else{
						league[i].previousSeasons.push(null);	
					}
					if(team_data.past[team_data.past.length - 5]){
						league[i].previousSeasons.push({season_name: team_data.past[team_data.past.length - 5].season_name, total_points: team_data.past[team_data.past.length - 5].total_points, rank: team_data.past[team_data.past.length - 5].rank});
						league[i].previousScores.push(team_data.past[team_data.past.length - 5].total_points)
						league[i].previousRanks.push(team_data.past[team_data.past.length - 5].rank)
					}else{
						league[i].previousSeasons.push(null);	
					}
					if(team_data.past[team_data.past.length - 6]){
						league[i].previousSeasons.push({season_name: team_data.past[team_data.past.length - 6].season_name, total_points: team_data.past[team_data.past.length - 6].total_points, rank: team_data.past[team_data.past.length - 6].rank});
						league[i].previousScores.push(team_data.past[team_data.past.length - 6].total_points)
						league[i].previousRanks.push(team_data.past[team_data.past.length - 6].rank)
					}else{
						league[i].previousSeasons.push(null);	
					}			
				}
			})
		}
	}
	//CREATE AS MANY FUNCTIONS AS NUMBER OF ENTRIES IN LEAGUE
	for (var i = 0; i < league.length; i++){
		chipLooper[i] = makeFunction(i);
	}
	for (var j = 0; j < league.length; j++){
		chipLooper[j]();
	}
}

var transferHistoryLooper = [];
function addTransferHistory(){	
	function makeFunction(i){		
		return function(){
			$.ajax({
			url: BASE_URL + "entry/" + league[i].entry + "/transfers/",
			type: "GET",
			success: function (team_transfers){
				league[i].transferHistory = [];
				league[i].transferHistory.push(team_transfers)
				}
			})
		}
	}
	//CREATE AS MANY FUNCTIONS AS NUMBER OF ENTRIES IN LEAGUE
	for (var i = 0; i < league.length; i++){
		chipLooper[i] = makeFunction(i);
	}
	for (var j = 0; j < league.length; j++){
		chipLooper[j]();
	}
}

var gameWeeksTransfersLooper = [];
function addGameWeeksTransfers(){	
	function makeFunction(i){
		return function(){
			$.ajax({
				url: BASE_URL + "entry/" + league[i].entry + "/history/",
				type: "GET",
				success: function (team_data){
					//console.log(team_data)
					league[i].gameweeksTransfers = [];
					if (1 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[0].event_transfers)};
					if (2 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[2].event_transfers)};
					if (3 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[3].event_transfers)};
					if (4 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[1].event_transfers)};
					if (5 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[4].event_transfers)};
					if (6 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[5].event_transfers)};
					if (7 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[6].event_transfers)};
					if (8 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[7].event_transfers)};
					if (9 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[8].event_transfers)};
					if (10 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[9].event_transfers)};
					if (11 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[10].event_transfers)};
					if (12 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[11].event_transfers)};
					if (13 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[12].event_transfers)};
					if (14 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[13].event_transfers)};
					if (15 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[14].event_transfers)};
					if (16 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[15].event_transfers)};
					if (17 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[16].event_transfers)};
					if (18 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[17].event_transfers)};
					if (19 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[18].event_transfers)};
					if (20 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[19].event_transfers)};
					if (21 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[20].event_transfers)};
					if (22 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[21].event_transfers)};
					if (23 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[22].event_transfers)};
					if (24 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[23].event_transfers)};
					if (25 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[24].event_transfers)};
					if (26 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[25].event_transfers)};
					if (27 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[26].event_transfers)};
					if (28 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[27].event_transfers)};
					if (29 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[28].event_transfers)};
					if (30 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[29].event_transfers)};
					if (31 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[30].event_transfers)};
					if (32 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[31].event_transfers)};
					if (33 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[32].event_transfers)};
					if (34 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[33].event_transfers)};
					if (35 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[34].event_transfers)};
					if (36 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[35].event_transfers)};
					if (37 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[36].event_transfers)};
					if (38 <= currentGw){league[i].gameweeksTransfers.push(team_data.current[37].event_transfers)};

				}	
			})
		}
	}
	//CREATE AS MANY FUNCTIONS AS NUMBER OF ENTRIES IN LEAGUE
	for (var i = 0; i < league.length; i++){
		chipLooper[i] = makeFunction(i);
	}
	for (var j = 0; j < league.length; j++){
		chipLooper[j]();
	}
}

var gameWeeksTransfersCostLooper = [];
function addGameWeeksTransfersCost(){	
	function makeFunction(i){
		return function(){
			$.ajax({
				url: BASE_URL + "entry/" + league[i].entry + "/history/",
				type: "GET",
				success: function (team_data){
					//console.log(team_data)
					league[i].gameweeksTransfersCost = [];
					if (1 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[0].event_transfers_cost)};
					if (2 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[1].event_transfers_cost)};
					if (3 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[2].event_transfers_cost)};
					if (4 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[3].event_transfers_cost)};
					if (5 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[4].event_transfers_cost)};
					if (6 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[5].event_transfers_cost)};
					if (7 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[6].event_transfers_cost)};
					if (8 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[7].event_transfers_cost)};
					if (9 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[8].event_transfers_cost)};
					if (10 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[9].event_transfers_cost)};
					if (11 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[10].event_transfers_cost)};
					if (12 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[11].event_transfers_cost)};
					if (13 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[12].event_transfers_cost)};
					if (14 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[13].event_transfers_cost)};
					if (15 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[14].event_transfers_cost)};
					if (16 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[15].event_transfers_cost)};
					if (17 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[16].event_transfers_cost)};
					if (18 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[17].event_transfers_cost)};
					if (19 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[18].event_transfers_cost)};
					if (20 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[19].event_transfers_cost)};
					if (21 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[20].event_transfers_cost)};
					if (22 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[21].event_transfers_cost)};
					if (23 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[22].event_transfers_cost)};
					if (24 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[23].event_transfers_cost)};
					if (25 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[24].event_transfers_cost)};
					if (26 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[25].event_transfers_cost)};
					if (27 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[26].event_transfers_cost)};
					if (28 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[27].event_transfers_cost)};
					if (29 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[28].event_transfers_cost)};
					if (30 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[29].event_transfers_cost)};
					if (31 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[30].event_transfers_cost)};
					if (32 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[31].event_transfers_cost)};
					if (33 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[32].event_transfers_cost)};
					if (34 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[33].event_transfers_cost)};
					if (35 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[34].event_transfers_cost)};
					if (36 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[35].event_transfers_cost)};
					if (37 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[36].event_transfers_cost)};
					if (38 <= currentGw){league[i].gameweeksTransfersCost.push(team_data.current[37].event_transfers_cost)};

				}	
			})
		}
	}
	//CREATE AS MANY FUNCTIONS AS NUMBER OF ENTRIES IN LEAGUE
	for (var i = 0; i < league.length; i++){
		chipLooper[i] = makeFunction(i);
	}
	for (var j = 0; j < league.length; j++){
		chipLooper[j]();
	}
}

var gameWeeksBenchPointsLooper = [];
function addGameWeeksBenchPoints(){	
	function makeFunction(i){
		return function(){
			$.ajax({
				url: BASE_URL + "entry/" + league[i].entry + "/history/",
				type: "GET",
				success: function (team_data){
					//console.log(team_data)
					league[i].gameweeksBenchPoints = [];
					if (1 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[0].points_on_bench)};
					if (2 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[1].points_on_bench)};
					if (3 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[2].points_on_bench)};
					if (4 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[3].points_on_bench)};
					if (5 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[4].points_on_bench)};
					if (6 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[5].points_on_bench)};
					if (7 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[6].points_on_bench)};
					if (8 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[7].points_on_bench)};
					if (9 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[8].points_on_bench)};
					if (10 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[9].points_on_bench)};
					if (11 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[10].points_on_bench)};
					if (12 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[11].points_on_bench)};
					if (13 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[12].points_on_bench)};
					if (14 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[13].points_on_bench)};
					if (15 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[14].points_on_bench)};
					if (16 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[15].points_on_bench)};
					if (17 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[16].points_on_bench)};
					if (18 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[17].points_on_bench)};
					if (19 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[18].points_on_bench)};
					if (20 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[19].points_on_bench)};
					if (21 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[20].points_on_bench)};
					if (22 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[21].points_on_bench)};
					if (23 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[22].points_on_bench)};
					if (24 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[23].points_on_bench)};
					if (25 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[24].points_on_bench)};
					if (26 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[25].points_on_bench)};
					if (27 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[26].points_on_bench)};
					if (28 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[27].points_on_bench)};
					if (29 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[28].points_on_bench)};
					if (30 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[29].points_on_bench)};
					if (31 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[30].points_on_bench)};
					if (32 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[31].points_on_bench)};
					if (33 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[32].points_on_bench)};
					if (34 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[33].points_on_bench)};
					if (35 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[34].points_on_bench)};
					if (36 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[35].points_on_bench)};
					if (37 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[36].points_on_bench)};
					if (38 <= currentGw){league[i].gameweeksBenchPoints.push(team_data.current[37].points_on_bench)};

				}	
			})
		}
	}
	//CREATE AS MANY FUNCTIONS AS NUMBER OF ENTRIES IN LEAGUE
	for (var i = 0; i < league.length; i++){
		chipLooper[i] = makeFunction(i);
	}
	for (var j = 0; j < league.length; j++){
		chipLooper[j]();
	}
}




/////////////////////////////////////////////////////////////////////////////////////////////////////////