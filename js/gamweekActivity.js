async function gameweekActivty() {
  gtag("event", managerDetails, {
    gameweek_activty_screen: "league: " + leagueName,
  });
  shareString = "Game Week Activity for " +  leagueName + ": \n" + "*Team   Chip   Captain* \n\n";
  showToast("Game week information at a glance.");
  // CREATES NEW TABLE
  var data = new google.visualization.DataTable();
  data.addColumn("string", "#");
  data.addColumn("string", "Team");
  data.addColumn("string", "Active" + "<br/>" + "Chip");
  data.addColumn("string", "Captain" + "<br/>" + "Name");
  data.addColumn("number", "Captain" + "<br/>" + "Points");
  data.addColumn("number", "GW");
  data.addColumn("number", "Total");
  data.addColumn("string", "Formation");
  data.addColumn("number", "Players" + "<br/>" + "Played");
  data.addColumn("number", "Benched" + "<br/>" + "Points");
  data.addColumn("number", "Minutes" + "<br/>" + "Played");
  data.addColumn("number", "Points" + "<br/>" + "Per Minute");
  data.addColumn("number", "GW" + "<br/>" + "Rank");

  for (var i = 0; i < league.length; i++) {
    if (league[i].entry == teamId) {
      var userIdRow = i;
    }
    if (league[i].rank == league[i].last_rank) rankMovement = "";
    if (league[i].rank < league[i].last_rank)
      rankMovement = '<p class="rank-up">▲</p>';
    if (league[i].rank > league[i].last_rank)
      rankMovement = '<p class="rank-down">▼</p>';

    var formationPicks = [];
    for (var j = 1; j < 11; j++) {
      formationPicks.push(
        getPlayerPosition(league[i].currentWeek[0].picks[j].element)
      );
    }
    const counts = {};
    for (const num of formationPicks) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    var formation = "" + counts[2] + "-" + counts[3] + "-" + counts[4];
    if (league[i].currentWeek[0].active_chip) {
      active_chip = convertChipName(league[i].currentWeek[0].active_chip);
    } else {
      active_chip = "❌";
    }
    if (league[i].currentWeek[0].picks[0].is_captain) {
      var captainChoice = getPlayerPhoto(
        league[i].currentWeek[0].picks[0].element
      ).slice(0, -3);
      var captainPoints =
        getLivePoints(league[i].currentWeek[0].picks[0].element) *
        league[i].currentWeek[0].picks[0].multiplier;
    } else if (league[i].currentWeek[0].picks[1].is_captain) {
      var captainChoice = getPlayerPhoto(
        league[i].currentWeek[0].picks[1].element
      ).slice(0, -3);
      var captainPoints =
        getLivePoints(league[i].currentWeek[0].picks[1].element) *
        league[i].currentWeek[0].picks[1].multiplier;
    } else if (league[i].currentWeek[0].picks[2].is_captain) {
      var captainChoice = getPlayerPhoto(
        league[i].currentWeek[0].picks[2].element
      ).slice(0, -3);
      var captainPoints =
        getLivePoints(league[i].currentWeek[0].picks[2].element) *
        league[i].currentWeek[0].picks[2].multiplier;
    } else if (league[i].currentWeek[0].picks[3].is_captain) {
      var captainChoice = getPlayerPhoto(
        league[i].currentWeek[0].picks[3].element
      ).slice(0, -3);
      var captainPoints =
        getLivePoints(league[i].currentWeek[0].picks[3].element) *
        league[i].currentWeek[0].picks[3].multiplier;
    } else if (league[i].currentWeek[0].picks[4].is_captain) {
      var captainChoice = getPlayerPhoto(
        league[i].currentWeek[0].picks[4].element
      ).slice(0, -3);
      var captainPoints =
        getLivePoints(league[i].currentWeek[0].picks[4].element) *
        league[i].currentWeek[0].picks[4].multiplier;
    } else if (league[i].currentWeek[0].picks[5].is_captain) {
      var captainChoice = getPlayerPhoto(
        league[i].currentWeek[0].picks[5].element
      ).slice(0, -3);
      var captainPoints =
        getLivePoints(league[i].currentWeek[0].picks[5].element) *
        league[i].currentWeek[0].picks[5].multiplier;
    } else if (league[i].currentWeek[0].picks[6].is_captain) {
      var captainChoice = getPlayerPhoto(
        league[i].currentWeek[0].picks[6].element
      ).slice(0, -3);
      var captainPoints =
        getLivePoints(league[i].currentWeek[0].picks[6].element) *
        league[i].currentWeek[0].picks[6].multiplier;
    } else if (league[i].currentWeek[0].picks[7].is_captain) {
      var captainChoice = getPlayerPhoto(
        league[i].currentWeek[0].picks[7].element
      ).slice(0, -3);
      var captainPoints =
        getLivePoints(league[i].currentWeek[0].picks[7].element) *
        league[i].currentWeek[0].picks[7].multiplier;
    } else if (league[i].currentWeek[0].picks[8].is_captain) {
      var captainChoice = getPlayerPhoto(
        league[i].currentWeek[0].picks[8].element
      ).slice(0, -3);
      var captainPoints =
        getLivePoints(league[i].currentWeek[0].picks[8].element) *
        league[i].currentWeek[0].picks[8].multiplier;
    } else if (league[i].currentWeek[0].picks[9].is_captain) {
      var captainChoice = getPlayerPhoto(
        league[i].currentWeek[0].picks[9].element
      ).slice(0, -3);
      var captainPoints =
        getLivePoints(league[i].currentWeek[0].picks[9].element) *
        league[i].currentWeek[0].picks[9].multiplier;
    } else if (league[i].currentWeek[0].picks[10].is_captain) {
      var captainChoice = getPlayerPhoto(
        league[i].currentWeek[0].picks[10].element
      ).slice(0, -3);
      var captainPoints =
        getLivePoints(league[i].currentWeek[0].picks[10].element) *
        league[i].currentWeek[0].picks[10].multiplier;
    } else if (league[i].currentWeek[0].picks[11].is_captain) {
      var captainChoice = getPlayerPhoto(
        league[i].currentWeek[0].picks[11].element
      ).slice(0, -3);
      var captainPoints =
        getLivePoints(league[i].currentWeek[0].picks[11].element) *
        league[i].currentWeek[0].picks[11].multiplier;
    } else if (league[i].currentWeek[0].picks[12].is_captain) {
      var captainChoice = getPlayerPhoto(
        league[i].currentWeek[0].picks[12].element
      ).slice(0, -3);
      var captainPoints =
        getLivePoints(league[i].currentWeek[0].picks[12].element) *
        league[i].currentWeek[0].picks[12].multiplier;
    } else if (league[i].currentWeek[0].picks[13].is_captain) {
      var captainChoice = getPlayerPhoto(
        league[i].currentWeek[0].picks[13].element
      ).slice(0, -3);
      var captainPoints =
        getLivePoints(league[i].currentWeek[0].picks[13].element) *
        league[i].currentWeek[0].picks[13].multiplier;
    } else if (league[i].currentWeek[0].picks[14].is_captain) {
      var captainChoice = getPlayerPhoto(
        league[i].currentWeek[0].picks[14].element
      ).slice(0, -3);
      var captainPoints =
        getLivePoints(league[i].currentWeek[0].picks[14].element) *
        league[i].currentWeek[0].picks[14].multiplier;
    } else if (league[i].currentWeek[0].picks[15].is_captain) {
      var captainChoice = getPlayerPhoto(
        league[i].currentWeek[0].picks[15].element
      ).slice(0, -3);
      var captainPoints =
        getLivePoints(league[i].currentWeek[0].picks[15].element) *
        league[i].currentWeek[0].picks[15].multiplier;
    } else {
      captainChoice = "";
      captainPoints = 0;
    }
    var minutesPlayed =
      getLiveMinutesPlayed(league[i].currentWeek[0].picks[0].element) +
      getLiveMinutesPlayed(league[i].currentWeek[0].picks[1].element) +
      getLiveMinutesPlayed(league[i].currentWeek[0].picks[2].element) +
      getLiveMinutesPlayed(league[i].currentWeek[0].picks[3].element) +
      getLiveMinutesPlayed(league[i].currentWeek[0].picks[4].element) +
      getLiveMinutesPlayed(league[i].currentWeek[0].picks[5].element) +
      getLiveMinutesPlayed(league[i].currentWeek[0].picks[6].element) +
      getLiveMinutesPlayed(league[i].currentWeek[0].picks[7].element) +
      getLiveMinutesPlayed(league[i].currentWeek[0].picks[8].element) +
      getLiveMinutesPlayed(league[i].currentWeek[0].picks[9].element) +
      getLiveMinutesPlayed(league[i].currentWeek[0].picks[10].element);

    if (isNaN(league[i].currentWeek[0].entry_history.points / minutesPlayed)) {
      pointsPerMinute = 0;
    } else {
      pointsPerMinute =
        league[i].currentWeek[0].entry_history.points / minutesPlayed;
    }
    var played = [];
    if (getLiveMinutesPlayed(league[i].currentWeek[0].picks[0].element) != 0) {
      played.push(league[i].currentWeek[0].picks[0].element);
    }
    if (getLiveMinutesPlayed(league[i].currentWeek[0].picks[1].element) != 0) {
      played.push(league[i].currentWeek[0].picks[1].element);
    }
    if (getLiveMinutesPlayed(league[i].currentWeek[0].picks[2].element) != 0) {
      played.push(league[i].currentWeek[0].picks[2].element);
    }
    if (getLiveMinutesPlayed(league[i].currentWeek[0].picks[3].element) != 0) {
      played.push(league[i].currentWeek[0].picks[3].element);
    }
    if (getLiveMinutesPlayed(league[i].currentWeek[0].picks[4].element) != 0) {
      played.push(league[i].currentWeek[0].picks[4].element);
    }
    if (getLiveMinutesPlayed(league[i].currentWeek[0].picks[5].element) != 0) {
      played.push(league[i].currentWeek[0].picks[5].element);
    }
    if (getLiveMinutesPlayed(league[i].currentWeek[0].picks[6].element) != 0) {
      played.push(league[i].currentWeek[0].picks[6].element);
    }
    if (getLiveMinutesPlayed(league[i].currentWeek[0].picks[7].element) != 0) {
      played.push(league[i].currentWeek[0].picks[7].element);
    }
    if (getLiveMinutesPlayed(league[i].currentWeek[0].picks[8].element) != 0) {
      played.push(league[i].currentWeek[0].picks[8].element);
    }
    if (getLiveMinutesPlayed(league[i].currentWeek[0].picks[9].element) != 0) {
      played.push(league[i].currentWeek[0].picks[9].element);
    }
    if (getLiveMinutesPlayed(league[i].currentWeek[0].picks[10].element) != 0) {
      played.push(league[i].currentWeek[0].picks[10].element);
    }
    
    shareString = shareString.concat(
      league[i].rank + "." +
      league[i].player_name.split(" ", 1) +
        " " +
        active_chip +
        " " +
        getPlayerWebName(league[i].captain) +
        "\n"
    );

    
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
        active_chip,
        getPlayerWebName(league[i].captain),
        captainPoints,
        league[i].currentWeek[0].entry_history.points,
        league[i].total,
        formation,
        played.length,
        league[i].currentWeek[0].entry_history.points_on_bench,
        minutesPlayed,
        pointsPerMinute,
        league[i].currentWeek[0].entry_history.rank,
      ],
    ]);
    
    var options = {
      alternatingRowStyle: true,
      showRowNumber: false,
      sortColumn: 6,
      sortAscending: false,
      width: "100%",
      height: "100%",
      title: "League Table",
      allowHtml: true,
      frozenColumns: 2,
      cssClassNames: cssClasses,
    };
    var formatter = new google.visualization.ColorFormat();
    formatter.addRange(0.1, 10.8, "black", fplpink);
    formatter.addRange(10.9, 11.1, "black", fplgreen);
    formatter.addRange("TC", "TC ", "white", fplpink);
    formatter.addRange("BB", "BB ", "black", fplblue);
    formatter.addRange("WC", "WC ", "white", fpldarkred);
    formatter.addRange("FH", "FH ", "black", fplyellow);
    formatter.format(data, 8);
    formatter.format(data, 2);
  }

  var table = new google.visualization.Table(document.getElementById("table"));
  table.draw(data, options);
  sharebutton = document.createElement("p");
  sharebutton.innerHTML = '<i id="gwshare" class="material-icons">share</i>';
  document.getElementById("table").appendChild(sharebutton);
  var userRow = document.getElementsByClassName(
    "google-visualization-table-table"
  )[0].children[1].rows[userIdRow];
  userRow.classList.add("user-row");
  sharebutton.addEventListener("click", function () {
    if (navigator.share) {
      navigator
        .share({
          title: "FPL Toolbox",
          text: shareString + '\n',
          url: "https://fpltoolbox.com",
        })
        .then(() => {
          gtag("event", managerDetails, {
            shared_gameweek_activity: "league: " + leagueName,
          });
        })
        .catch((err) => {
          // Handle errors, if occured
          console.log("Error while using Web share API:");
          console.log(err);
        });
    } else {
      // Alerts user if API not available
      alert("Browser doesn't support this API !");
    }
  });
}
