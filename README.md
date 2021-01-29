# _This project is not in a complete or portfolio ready state, and should not be considered representational of professional work._

# _Pig Dice_

#### _A web-based application for two users to play the game pig-dice._

#### By _**Morgan Bradford, Kody Gordon, and Jessica R. Williams**_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap Library_
* _JavaScript_
* _jQuery Library_

## Description

_This is a practice project for Epicodus. The lesson may be found [here](https://www.learnhowtoprogram.com/intermediate-javascript/object-oriented-javascript/game-of-choice-two-day-project)_

## Setup/Installation Requirements

* _Open the terminal on your local machine_
* _Navigate to the directory inside of which you wish to house this project_
* _Clone this project with the following git command `$ git clone <https://github.com/jessicarubinwilliams/pig-dice>`_
* _Navigate to the top level of the repository with the command `$ cd pig-dice`_
* _Open index.html in the browser of your choice with the command `$ open index.html`_.

_Alternatively,_

* _Direct your browser to a [live version on GitHub Pages.] (jessicarubinwilliams.github.io/pig-dice/index.html)_

## Tests

Describe: Games; 
Test-1: "It will create an object to serve as a blueprint for creating game instances"
Expect: (new Game()).toEqual(new game instance)

Test-2: "It will create a prototype to be called on Game objects to add an id property"
Expect: (game.assignId).toEqual(game = {id: 1};)

Test-3: "It will create a prototype to be called on a Game object to assign to the key-value pair (users: User)"
Expect: (game.addUser(newPlayer)).toEqual(undefined)
Expect: (game.users[1]).toEqual(User {userName: "FreddieMercury", gameScore: 0, id: 1})

Test-4: "It will amend methods to be shared by all Games instances for incrementing round property value"
Expect: (game.users[2].tally();).toEqual(game = {round: +1})
Expect: (game.users[2].hold();).toEqual(game = {round: +1})

Test-5: "It will determine which player's score to increase based off of the current round number"
Expect: (game.switchPlayers())toEqual(round: odd number; playerOne.gameScore: 8)
Expect: (game.switchPlayers())toEqual(round: even number; playerTwo.gameScore: 25)

Test-6: "It will determine the winner when a user game score is greater than or equal to 100"
Expect: (game.users[1].gameScore >= 100).toEqual(Display.player(winner))

Test-6: "

Test-6: "

Test-6: "

Test-6: "

Describe: User;
Test-1: "It will create an object to serve as a blueprint for creating a user instances"
Expect: (new User(FreddieMercury))toEqual(newPlayer = {Name: "FreddieMercury"; Score = 0;})

Test-2: "It will create a method to be shared by all User instances for adding consecutive roll() results together"
Expect: (game.users[1].tally()).toEqual(53)

Test-3: "It will create a method to be shared by all User instances for adding turnScore to gameScore"
Expect: (game.users[1].hold()).toEqual(78)

Describe: roll();
Test-1: "It will generate a random number between 1 and 6"
Expect: (roll()).toEqual(4)

## Known Bugs

* _This is a work in progress and not yet functional_

## License
*[MIT](https://choosealicense.com/licenses/mit/)*
Copyright (c) **_2021 Morgan Bradford, Jessica R. Williams_**

## Contact Information
**_Morgan Bradford [mailto](mailto:morganjbradford95@gmail.com)_**
**_Kody Gordon [mailto](mailto:gordon.km89@gmail.com)_**
**_Jessica R. Williams [mailto](mailto:jessicarubinwilliams@gmail.com)_**