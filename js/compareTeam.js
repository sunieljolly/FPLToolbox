var teamA = [];
var teamB = [];

function compareTeam() {
  createTeamA();
  console.log(league);
  var data = new google.visualization.DataTable();
  data.addColumn("string", "#");
  data.addColumn("string", "Team");
  data.addColumn("number", "GW");
  data.addColumn("number", "Total");
  data.addColumn("number", "ID");
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
  var view = new google.visualization.DataView(data);
  view.hideColumns([4]);

  table.draw(view, options);

  function selectHandler() {
    var selectedItem = table.getSelection()[0];
    if (selectedItem) {
      var selectedTeam = data.getValue(selectedItem.row, 4);
      createTeamB(selectedTeam);
    }
  }
}

async function createTeamA() {
  teamA = team.picks;
}
async function createTeamB(otherTeamId) {
  if (otherTeamId == teamId) return;
  for (var i = 0; i < league.length; i++) {
    if (otherTeamId == league[i].entry) {
      teamB = league[i].currentWeek[0].picks;
      setTimeout(findUnique, 200);
    }
  }
}

function findUnique() {
  document.getElementById("two-tables").innerHTML =
 ' <div class="compare-modal-content">' +  
  '<div class="compare-modal-header">' +
    '<span class="close">&times;</span><h2>Unique Players</h2></div>' +
    '<div id="compare-modal-body" class="compare-modal-body">' +
    '<div id="table-a" class="table-a"></div>' +
    '<div id="table-b" class="table-b"></div></div>' +
    '<div class="compare-modal-footer"><p>fpltoolbox.com</p></div></div>'

  // Get the modal
  var modal1 = document.getElementById("two-tables");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

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

  //TABLE 1
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
      tableRow: "tableRow",
      oddTableRow: "oddTableRow",
      tableCell: "tableCell",
      hoverTableRow: "hoverTableRow",
      selectedTableRow: "selectedTableRow",
    },
  };

  var formatter = new google.visualization.ColorFormat();
  
  formatter.addRange(0, 11.1, fplgreen, fplgreen);
  formatter.addRange(11.9, 15.1, fpldarkred, fpldarkred);

  
  formatter.format(data, 2);
  formatter.format(data1, 0);

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
