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
  } else {
    this.turnScore = this.turnScore + randomNumber;
  }
  return this.turnScore;
};

// newUser.tally();

//Business Logic for pig-dice game
function roll() {
  return Math.floor((Math.random() * 6) + 1);
};