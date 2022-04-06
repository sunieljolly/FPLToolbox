//Empty arrays to hold players to compare
var teamA = [];
var teamB = [];

function compareTeam() {
  snackbar();
  createTeamA(); //Initialise logged in users squad for comparison
  var data = new google.visualization.DataTable(); //Creates new google visualization table.
  data.addColumn("string", "#");
  data.addColumn("string", "Team");
  data.addColumn("number", "GW");
  data.addColumn("number", "Total");
  data.addColumn("number", "ID");
  //Populates table
  for (var i = 0; i < league.length; i++) {
    if(league[i].entry == teamId) {
      var userIdRow = i;
    }
    //Sets icon for rank movement
    if (league[i].rank == league[i].last_rank) rankMovement = "";
    if (league[i].rank < league[i].last_rank)
      rankMovement = '<p class="rank-up">▲</p>';
    if (league[i].rank > league[i].last_rank)
      rankMovement = '<p class="rank-down">▼</p>';

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
        league[i].entry,
      ],
    ]);
  }
  // Configigures options for google visualisation table
  var options = {
    alternatingRowStyle: true,
    showRowNumber: false,
    width: "100%",
    height: "100%",
    title: "League Table",
    allowHtml: true,
    frozenColumns: 2,
    cssClassNames: {
      headerRow: "headerRow",
      tableRow: "tableRow",
      oddTableRow: "oddTableRow",
      tableCell: "tableCell",
      hoverTableRow: "hoverTableRow",
      selectedTableRow: "selectedTableRow",
    },
  };

  var table = new google.visualization.Table(document.getElementById("table"));
  google.visualization.events.addListener(table, "select", selectHandler);
  //Creates view to hide ID coloumns
  var view = new google.visualization.DataView(data);
  view.hideColumns([4]);
  //Displays table in div.
  table.draw(view, options);
  //Creates select handler to obtain team ID of team to compare with.
  function selectHandler() {
    var selectedItem = table.getSelection()[0];
    if (selectedItem) {
      var selectedTeam = data.getValue(selectedItem.row, 4);
      createTeamB(selectedTeam);
    }
  }
  var userRow = document.getElementsByClassName("google-visualization-table-table")[0].children[1].rows[userIdRow]
  userRow.classList.add("user-row");
}

async function createTeamA() {
  //Retrieve logged in players squad
  teamA = team.picks;
}

async function createTeamB(otherTeamId) {
  //Retrieve selected team's squad for comparison
  if (otherTeamId == teamId) return;
  for (var i = 0; i < league.length; i++) {
    if (otherTeamId == league[i].entry) {
      teamB = league[i].currentWeek[0].picks;
      teamBName = league[i].entry_name
      teamBManager = league[i].player_name
      teamBRank = league[i].rank
      setTimeout(findUnique, 200);
      gtag('event', managerDetails, {
        'compare_team_screen' : teamBManager + ": Rank " + teamBRank
    });
    
    }
  }
}

function findUnique() {
  //Compare two arrays

  //Display modal of two teams side by side with unique players only. Same players have been removed.
  document.getElementById("two-tables").innerHTML =
    ' <div class="compare-modal-content">' +
    '<div class="compare-modal-header">' +
    '<span class="compare-close">&times;</span><h2>Unique Players</h2></div>' +
    '<div id="compare-modal-body" class="compare-modal-body">' +
    '<div id="table-a" class="table-a"></div>' +
    '<div id="table-b" class="table-b"></div></div>' +
    '<div class="compare-modal-footer"><p>fpltoolbox.com</p></div></div>';

  // Get the modal
  var modal1 = document.getElementById("two-tables");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("compare-close")[0];

  const keysB = teamA.reduce(
    (acc, curr) => ((acc[curr.element] = true), acc),
    {}
  );
  const teamAExcludes = teamB.filter((item) => !keysB[item.element]);
  const keysA = teamB.reduce(
    (acc, curr) => ((acc[curr.element] = true), acc),
    {}
  );
  const teamBExcludes = teamA.filter((item) => !keysA[item.element]);

  //Creates new google visualization table for Team A
  var data1 = new google.visualization.DataTable();
  data1.addColumn("number", "Pos");
  data1.addColumn("string", "Your Team");
  data1.addColumn("number", "Pts");
  for (var i = 0; i < teamBExcludes.length; i++) {
    data1.addRows([
      [
        teamBExcludes[i].position,
        getPlayerWebName(teamBExcludes[i].element),
        getPlayerPoints(teamBExcludes[i].element) * teamBExcludes[i].multiplier,
      ],
    ]);
  }
  //Creates new google visualization table for Team B
  var data = new google.visualization.DataTable();
  data.addColumn("number", "Pts");
  data.addColumn("string", "Team B");
  data.addColumn("number", "Pos");
  for (var i = 0; i < teamAExcludes.length; i++) {
    data.addRows([
      [
        getPlayerPoints(teamAExcludes[i].element) * teamAExcludes[i].multiplier,
        getPlayerWebName(teamAExcludes[i].element),
        teamAExcludes[i].position,
      ],
    ]);
  }
  // Configures options for both google visualisation tables
  var options = {
    alternatingRowStyle: true,
    showRowNumber: false,
    width: "100%",
    height: "100%",
    title: "League Table",
    allowHtml: true,
    //frozenColumns: 2,
    cssClassNames: {
      headerRow: "headerRow",
      tableRow: "tableRowCompare",
      oddTableRow: "oddTableRowCompare",
      tableCell: "tableCell",
      hoverTableRow: "hoverTableRow",
      selectedTableRow: "selectedTableRow",
      rowNumberCell: "rowNumberCell",
    },
  };
  //Formats cell colours depending on player positions
  var formatter = new google.visualization.ColorFormat();
  formatter.addRange(0, 11.1, fplgreen, fplgreen);
  formatter.addRange(11.9, 15.1, fpldarkred, fpldarkred);
  formatter.format(data, 2);
  formatter.format(data1, 0);
  //Display both tables in modal popup
  var table = new google.visualization.Table(
    document.getElementById("table-b")
  );
  var table1 = new google.visualization.Table(
    document.getElementById("table-a")
  );

  var view = new google.visualization.DataView(data);
  var view1 = new google.visualization.DataView(data1);
  view.hideColumns([]);
  view1.hideColumns([]);
  table.draw(view, options);
  table1.draw(view1, options);

  modal1.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal1.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  };

}

function snackbar() {
  document.getElementById("snackbar").innerHTML =
    "Tap a team to compare squads.";
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");
  // Add the "show" class to DIV
  x.className = "show";
  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
