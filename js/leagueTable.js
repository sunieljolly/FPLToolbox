async function leagueTable() {
  showToast(" " + eventStatusDate + " " + eventStatus)
  
  var data = new google.visualization.DataTable();

  data.addColumn("string", "#");
  data.addColumn("string", "Team");
  data.addColumn("number", "GW");
  data.addColumn("number", "Total");
  data.addColumn("string", "To First");
  data.addColumn("string", "OR");
  data.addColumn("number", "Seasons" + "<br/>" + "Managed");
  data.addColumn("string", "Managing" + "<br/>" + "Since");
  for (var i = 0; i < league.length; i++) {
    if (league[i].entry == teamId) {
      var userIdRow = i;
    }

    var firstPlace = league[0].total;
    var difference = (firstPlace - league[i].total).toString();
    if (difference == 0) difference = "⭐";
    if (league[i].rank == league[i].last_rank) rankMovement = "";
    if (league[i].rank < league[i].last_rank)
      rankMovement = '<p class="rank-up">▲</p>';
    if (league[i].rank > league[i].last_rank)
      rankMovement = '<p class="rank-down">▼</p>';

    if (league[i].currentWeek[0].entry_history.overall_rank == league[i].previousRank) overallRankMovement = "";
    if (league[i].currentWeek[0].entry_history.overall_rank < league[i].previousRank)
    overallRankMovement = '<p class="rank-up">▲</p>';
    if (league[i].currentWeek[0].entry_history.overall_rank > league[i].previousRank)
    overallRankMovement = '<p class="rank-down">▼</p>';
    data.addRows([
      [
        league[i].rank + rankMovement,
        '<p class="entry-name">' +
          league[i].entry_name +
          "</p>" +
          "\n" +
          '<p class="player-name">' +
          league[i].player_name +
          "</p>",
        league[i].event_total,
        league[i].total,
        difference,
        league[i].currentWeek[0].entry_history.overall_rank + overallRankMovement,
        league[i].seasons,
        league[i].seasons_managed,
      ],
    ]);
  }

  var options = {
    alternatingRowStyle: true,
    showRowNumber: false,
    width: "100%",
    height: "100%",
    title: "League Table",
    allowHtml: true,
    frozenColumns: 2,
    cssClassNames: cssClasses,
  };

  var formatter = new google.visualization.ColorFormat();
  formatter.addRange("NEW", "NEW ", "black", fplgreen);
  formatter.format(data, 5);

  var table = new google.visualization.Table(document.getElementById("table"));
  table.draw(data, options);

  var userRow = document.getElementsByClassName(
    "google-visualization-table-table"
  )[0].children[1].rows[userIdRow];
  userRow.classList.add("user-row");
}
