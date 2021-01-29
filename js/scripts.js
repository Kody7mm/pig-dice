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

Games.prototype.tally = function() {
  let randomNumber = roll();
  let result = this.users[this.round].tally(randomNumber);
  if (result == 0) this.round = 3 - this.round;
  // f(1) = 2
  // f(2) = 1;
  // f(x) = 3 - x;
};

Games.prototype.switchPlayers = function() {
  this.users[this.round].hold();
  this.round = 3 - this.round;
  return this.winner();
}

// game = {
//   user: {
//     game : {
//       round: 2
//     }
//   }
// }
Games.prototype.winner = function() {
  if (game.user[this.round].gameScore >= 100) {
    console.log("Player one wins!")
    return 1;
  } else if (game.user[this.round].gameScore >= 100) {
    console.log("Player two wins!")
    return 2;
  } else {
    return false
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

User.prototype.tally = function(randomNumber) {
  
  if (randomNumber === 1) {
    this.turnScore = 0;
  } else {
    this.turnScore = this.turnScore + randomNumber;
  }
  // return this.turnScore; // move to UI logic
};

User.prototype.hold = function() {
  this.gameScore = this.gameScore + this.turnScore;
  this.turnScore = 0;
  // return this.gameScore, this.turnScore; // move to UI logic
};

// newUser.tally();

//Business Logic for pig-dice game
function roll() {
  return Math.floor((Math.random() * 6) + 1);
};

/*

$(doc)ready(() => {
  const game = new game();
  $(newplayer) {
    game.users[1] = new player(name, game)
  }
  $(hold).click(() => {
    let winner = game.switchPlayers();
    if (winner) {
      $(output).text("winner: player " + winner);
    }
  })

})

*/