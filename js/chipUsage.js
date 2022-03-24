async function chipUsage() {
  // CREATES NEW TABLE
  var data = new google.visualization.DataTable();
  data.addColumn("number", "#");
  data.addColumn("string", "Team");
  data.addColumn("string", "Chip");
  data.addColumn("string", "Chip");
  data.addColumn("string", "Chip");
  data.addColumn("string", "Chip");
  data.addColumn("string", "Chip");
  data.addColumn("string", "Chip");

  //POPULATES TABLE
  for (var i = 0; i < league.length; i++) {
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
        league[i].rank,
        league[i].player_name,
        chip1,
        chip2,
        chip3,
        chip4,
        chip5,
        chip6,
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
      selectedTableRow: "selectedTableRow"
    },
  };
  var formatter = new google.visualization.ColorFormat();
  //formatter.addRange("", " ", "black", fplgreen);
  formatter.addRange("3xc", "3xc ", "white", fplpink);
  formatter.addRange("bboost", "bboost ", "black", fplblue);
  formatter.addRange("wildcard", "wildcard ", "white", fpldarkred);
  formatter.addRange("freehit", "freehit ", "black", fplyellow);
  formatter.format(data, 2);
  formatter.format(data, 3);
  formatter.format(data, 4);
  formatter.format(data, 5);
  formatter.format(data, 6); // Apply formatter to 7th column
  formatter.format(data, 7);

  var table = new google.visualization.Table(document.getElementById("table"));

  table.draw(data, options);
  addCaptureButton();
}
