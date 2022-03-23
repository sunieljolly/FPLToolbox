async function leagueTable() {
  var data = new google.visualization.DataTable();
  data.addColumn("string", "#");
  data.addColumn("string", "Team");
  data.addColumn("number", "GW");
  data.addColumn("number", "Total");
  for (var i = 0; i < league.length; i++) {
    if (league[i].rank < league[i].last_rank) {
      rankMovement = '<p class="rank-up">▲</p>';
    } else if (league[i].rank > league[i].last_rank) {
      rankMovement = '<p class="rank-down">▼</p>';
    } else {
      rankMovement = " ";
    }
    data.addRows([
      [
        league[i].rank + rankMovement,
        '<p class="entry-name">' + league[i].entry_name + '</p>' + '\n' +
        '<p class="player-name">' + league[i].player_name + '</p>' ,
        league[i].event_total,
        league[i].total,
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
      headerRow: "headerRow",
      tableRow: "tableRow",
      oddTableRow: "oddTableRow",
      tableCell: "tableCell",
      hoverTableRow: "hoverTableRow",
    },
  }
  var table = new google.visualization.Table(document.getElementById('table'));
  table.draw(data, options);
}
