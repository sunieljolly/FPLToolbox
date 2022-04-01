async function chipUsage() {
  chipToast();
  // CREATES NEW TABLE
  var data = new google.visualization.DataTable();
  data.addColumn("string", "#");
  data.addColumn("string", "Team");
  data.addColumn("string", "Chip");
  data.addColumn("string", "Chip");
  data.addColumn("string", "Chip");
  data.addColumn("string", "Chip");
  data.addColumn("string", "Chip");
  data.addColumn("string", "Chip");

  //POPULATES TABLE
  for (var i = 0; i < league.length; i++) {
    if (league[i].rank == league[i].last_rank) rankMovement = "";
    if (league[i].rank < league[i].last_rank)
      rankMovement = '<p class="rank-up">▲</p>';
    if (league[i].rank > league[i].last_rank)
      rankMovement = '<p class="rank-down">▼</p>';

    if (league[i].chips[0] === null) {
      chip1 = "";
    } else {
      chip1 = league[i].chips[0].name;
    }
    if (league[i].chips[1] === null) {
      chip2 = "";
    } else {
      chip2 = league[i].chips[1].name;
    }
    if (league[i].chips[2] === null) {
      chip3 = "";
    } else {
      chip3 = league[i].chips[2].name;
    }
    if (league[i].chips[3] === null) {
      chip4 = "";
    } else {
      chip4 = league[i].chips[3].name;
    }
    if (league[i].chips[4] === null) {
      chip5 = "";
    } else {
      chip5 = league[i].chips[4].name;
    }
    if (league[i].chips[5] === null) {
      chip6 = "";
    } else {
      chip6 = league[i].chips[5].name;
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
        convertChipName(chip1),
        convertChipName(chip2),
        convertChipName(chip3),
        convertChipName(chip4),
        convertChipName(chip5),
        convertChipName(chip6),
      ],
    ]);
  }
  var options = {
    alternatingRowStyle: true,
    showRowNumber: false,
    width: "100%",
    height: "100%",
    title: "chips",
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
  var formatter = new google.visualization.ColorFormat();
  formatter.addRange("TC", "TC ", "white", fplpink);
  formatter.addRange("BB", "BB ", "black", fplblue);
  formatter.addRange("WC", "WC ", "white", fpldarkred);
  formatter.addRange("FH", "FH ", "black", fplyellow);
  formatter.format(data, 2);
  formatter.format(data, 3);
  formatter.format(data, 4);
  formatter.format(data, 5);
  formatter.format(data, 6);
  formatter.format(data, 7);
  var table = new google.visualization.Table(document.getElementById("table"));
  table.draw(data, options);
}

function chipToast() {
  document.getElementById("snackbar").innerHTML =
"Chips used by every team in the league.";
// Get the snackbar DIV
var x = document.getElementById("snackbar");
// Add the "show" class to DIV
x.className = "show";
// After 3 seconds, remove the show class from DIV
setTimeout(function () {
x.className = x.className.replace("show", "");
}, 3000);
}
