                        Tic Tac Toe

LINKS TO:

User Stories:
[Trello Board for Tic Tac Toe Project](https://trello.com/b/gu5jngTs/tic-tac-toe)

Game url:
[Tic Tac Toe Game](http://angular-tictactoe.bitballoon.com/)

Introduction

 * Objective / User Stories
 * Design
 * Installation / Configuration

OBJECTIVE/USER STORIES:

* This game will allow the user to play a game of Tic Tac Toe on his/her
computer.
* The user can play as many games as they please without having to
refresh the page.
*Players will be able to click on a square and place a "X" or "O" as their
game piece.
* If a player forms a row, column or diagonal with
their pieces, they win the game. Essentially getting three of their pieces
in order horizontally, vertically, or diagonally.
* Each player should try to win in the lowest possible number of moves.
* However, if the grid is full with no more cell/blocks to fill, the game ends
in a draw. Players can choose to start a new game from scratch.


DESIGN:


HTML - Created a game board using the section, article, div and tags in the body.

CSS - find a background from google that makes the game theme more attractive.
Use CSS to shape the game board. Lastly, use CSS to position the title, game
board and reset button.


INSTALLATION / CONFIGURATION:


Angular / HTML -  Start off by linking the stylesheet, angular version, javascript (app.js) and jquery library to the index.html in the head. Create an angular application using the ng-app directive in the section tag. A div tag containing a ng-repeat directive for a row is used to complete the game board. Each row contains three cells, forming a 3 x 3 grid for tic tac toe. Lastly, we create a button class called "reset" for restarting an existent game or starting a new game.

Angular / JavaScript- Declare a new angular controller that is attached to our ticTacToeApp module. Use functions to: detect when a button is clicked, when a
cell is clicked to collect all the moves, determine if a list of moves matches
a winning combo, and display the winner to the users.
