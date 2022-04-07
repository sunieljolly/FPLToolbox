// Fixtures
gw1 = 'a'
gw2 = 'b'
gw3 = 'c'
gw4 = 'd'
gw5 = 'e'
gw6 = 'f'
gw7 = 'g'
gw8 = 'h'
gw9 = 'i'
gw10 = 'j'
gw11 = 'k'
gw12 = 'l'
gw13 = 'm'
gw14 = 'n'
gw15 = 'o'
gw16 = 'p'
gw17 = 'q'
gw18 = 'r'
gw19 = 's'
gw20 = 't'
gw21 = 'u'
gw22 = 'v'
gw23 = 'w'
gw24 = 'x'
gw25 = 'y'
gw26 = 'z'
gw27 = 'aa'
gw28 = 'ab'
gw29 = 'ac'
gw30 = 'ad'
gw31 = 'ae'
gw32 = 'af'
gw33 = 'ag'
gw34 = 'ah'
gw35 = 'ai'
gw36 = 'aj'
gw37 = 'ak'
gw38 = 'al'
async function myTeam() {
  teamToast();
  console.log(team);
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Player");
  for (var i = 1; i < 39; i++) {
    data.addColumn("string", i);
  }

  for (var j = 0; j < team.picks.length; j++) {
    data.addRows([
      [
        getPlayerWebName(team.picks[j].element),
        gw1,
        gw2,
        gw3,
        gw4,
        gw5,
        gw6,
        gw7,
        gw8,
        gw9,
        gw10,
        gw11,
        gw12,
        gw13,
        gw14,
        gw15,
        gw16,
        gw17,
        gw18,
        gw19,
        gw20,
        gw21,
        gw22,
        gw23,
        gw24,
        gw25,
        gw26,
        gw27,
        gw28,
        gw29,
        gw30,
        gw31,
        gw32,
        gw33,
        gw34,
        gw35,
        gw36,
        gw37,
        gw38,
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
    frozenColumns: 0,
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
  var view = new google.visualization.DataView(data);
  for (var k = 1; k < currentGw; k++) {
    view.hideColumns([k]);
  }
  table.draw(view, options);
}
function teamToast() {
  document.getElementById("snackbar").innerHTML =
    "Fixtures for upcoming gameweeks";
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");
  // Add the "show" class to DIV
  x.className = "show";
  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
