//Business Logic for Games -------

function Games() {
  this.users = {};
  this.currentId = 0;
  this.round = 1;
}

Games.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
Games.prototype.addUser = function(user) {
  user.id = this.assignId();
  this.users[user.id] = user;
}

Games.prototype.switchPlayers = function() {
  if (this.round % 2 === 0) {
    game.users[2].this.gameScore = this.turnScore = 0 + this.gameScore;
  } else {
    game.users[1].this.gameScore = this.turnScore = 0 + this.gameScore;
  }
}


//Business Logic for Users -------

function User(userName) {
  this.userName = userName;
  this.gameScore = 0;
  this.turnScore = 0;
}

// roll();
// let newUser = new User;
// let turnScore = 0;

User.prototype.tally = function() {
  let randomNumber = roll();
  if (randomNumber === 1) {
    this.turnScore = 0;
    game.round = game.round + 1;
  } else {
    this.turnScore = this.turnScore + randomNumber;
  }
  return this.turnScore;
};

User.prototype.hold = function() {
  this.gameScore = this.gameScore + this.turnScore;
  this.turnScore = 0;
  game.round = game.round + 1;
  return this.gameScore, this.turnScore;
};


// newUser.tally();

//Business Logic for pig-dice game
function roll() {
  return Math.floor((Math.random() * 6) + 1);
};