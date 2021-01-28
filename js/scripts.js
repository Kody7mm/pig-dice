//Business Logic for Games -------

function Games() {
  this.users = {};
  this.currentId = 0;
}
Games.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
Games.prototype.addUser = function(user) {
  user.id = this.assignId();
  this.users[user.id] = user;
}

//Business Logic for Users -------

function User(userName) {
  this.userName = userName;
  this.cumulativeScore = 0;
}

//Business Logic for pig-dice game
function roll() {
  return Math.floor((Math.random() * 6) + 1);
};

function tally() {
  let randoCalrissian = roll();
  let totalScore;
  if (randoCalrissian = 1) {
    totalscore = 0
  } else {
    toltalscore + randoCalrissian
  }
  return totalScore
}

// $(document).ready(function{
//   let randoCalrissian = roll();
// })