async function leagueTable() {
  var data = new google.visualization.DataTable();
  data.addColumn("string", "#");
  data.addColumn("string", "Team");
  data.addColumn("number", "GW");
  data.addColumn("number", "Total");
  //data.addColumn("number", "Total" + "<br/>" + "£");
  //data.addColumn("number", "Change" + "<br/>" + "£");
  //data.addColumn("string", "Most" + "<br/>" + "Picked (C)");
 
  //POPULATES TABLE
  for (var i = 0; i < league.length; i++) {
    if (league[i].rank < league[i].last_rank) {
      rankMovement = '<p class="rank-up">▲</p>';
    } else if (league[i].rank > league[i].last_rank) {
      rankMovement = '<p class="rank-down">▼</p>';
    } else {
      rankMovement = " ";
    }
    //var teamValue =
    //  league[i].gameweeks[league[i].gameweeks.length - 1].entry_history.value /
    //  10;
    //var lastWeekValue =
    //  league[i].gameweeks[league[i].gameweeks.length - 2].entry_history.value /
    //  10;

    data.addRows([
      [
        league[i].rank + rankMovement,
        '<p class="entry-name">' + league[i].entry_name + '</p>' + '\n' +
        '<p class="player-name">' + league[i].player_name + '</p>' ,
        
        league[i].event_total,
        league[i].total,
        //teamValue,
        //(lastWeekValue - teamValue),
        //getPlayerWebName(parseInt(mostFrequent(league[i].weeklyCaptains))),
      ],
    ]);
  }
  var options =  {
    alternatingRowStyle: true,
    showRowNumber: false, 
    width: '100%', 
    height: '100%',
    title: 'League Table',
    allowHtml: true,
    frozenColumns: 2,
    cssClassNames : {
      headerRow :'headerRow',
      tableRow: 'tableRow',
      oddTableRow: 'oddTableRow'
    },
  }
  /*var formatter = new google.visualization.ColorFormat();
  formatter.addRange(100, 8000000, 'black', fplgreen);
  formatter.addRange(-8000000, 100, 'white', fplpink);
  formatter.format(data,4);

  var formatter1 = new google.visualization.ColorFormat();
  formatter1.addRange(0.01, 1000, 'black', fplgreen);
  formatter1.addRange(-1000, -0.02, 'white', fplpink);
  formatter1.addRange(-0.001, 0.0001, 'black', fplyellow);
  formatter1.format(data,5);*/

  var table = new google.visualization.Table(document.getElementById('table'));
  table.draw(data, options);


    
  

}
