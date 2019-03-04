//business logic
 var begin= {
  player1Score: 0,
  player2Score: 0,
  playerUp: 1,
  Score: 0,
};

function dieRoll () {
  die1 = Math.floor(Math.random()*6) +1;
  return die1;
}

var playerRoll = function() {
  var roll = dieRoll();
  if(roll ===1){
    begin.Score = 0;
    alertEndTurn();
    switchPlayer();
  } else {
    begin.Score +=roll;
    if (begin.playerUp === 1) {
      if (begin.Score + begin.player1Score >= 100) {
        alertWinner(1);
      }
    } else if (begin.Score + begin.player2Score >= 100) {
      alertWinner(2);
  }
  }
  return roll;
}

function holdThePig() {
  var currentPlayer = begin.playerUp;
  if (currentPlayer ===1) {
    begin.player1Score += begin.Score;
  } else {
    begin.player2Score += begin.Score;
  }
  begin.Score = 0;
  switchPlayer();
}

//user interface logic

function switchPlayer () {
  if (begin.playerUp === 1) {
    $("#player1Button").hide();
    $("#player2Button").show();
    begin.playerUp = 2;

  } else {
    $("#player2Button").hide();
    $("#player1Button").show();
    begin.playerUp = 1;

  }
}

function resetGame() {
  begin.player1Score = 0;
  begin.player2Score = 0;
  begin.playerUp = 1;
  begin.Score = 0;
}

function alertEndTurn(){
  alert("Sorry - you rolled a 1.  Your score remains the same and your turn is over.");
  $(".playerStatus").text(begin.playerUp);
}

function alertWinner(playerNumber) {
  alert("Player " + playerNumber + " is the BIG winner!!");
  resetGame();
  $(".gameStats").text(0);
}

$(document).ready(function() {

  $("form#pigForm").submit(function(event){
    var playerName1 = $("input#playerName1").val();
    var playerName2 = $("input#playerName2").val();
      $("span#playerName1").text(playerName1);
      $("span#playerName2").text(playerName2);
      $("#player2Button").hide();
      $("#player1Button").show();
      $(".playerStatus").text(begin.playerUp);
      event.preventDefault();

    var nameHolder = new Names(playerName1, playerName2);
  })


  $(".rollPig").click(function() {
    pigResult = playerRoll();
    $(".Result").text(pigResult);
    $(".Score").text(begin.Score);

  });

  $(".holdPig").click(function(){
    holdThePig();
    $("Result").text("");
    $(".player1Score").text(begin.player1Score);
    $(".player2Score").text(begin.player2Score);
    $(".playerStatus").text(begin.playerUp);
  });
});
