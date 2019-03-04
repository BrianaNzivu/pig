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
