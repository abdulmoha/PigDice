//business logic

//pick random number
var dice = function () {
  return Math.floor(Math.random()*6 + 1);
}

function User(turn) {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.gamer;
}

User.prototype.firstroll = function(){
  If(this.roll===1){
    this.tempscore=0;
    alert("Your turn is over,sorry!");
  }else{
    this.tempscore += this.roll
  }
}

User.prototype.hold = function(){
  this.totalscore += this.tempscore;
  this.tempscre = 0;
  alert(this.gamer + "Let the other user play,your turn is up")
}

//check winner

User.prototype.winner = function(){
  if(this.totalscore >= 100){
    alert(this.gamer + "has won the game!");  
  }
}


//User-Interface
$(document).ready(function(){

})
