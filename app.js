// declare a new angular module called ticTacToeApp
//with no dependencies (thus the empty array)
angular.module('ticTacToeApp', []);

//declare a new angular controller that is attached to our ticTacToeApp module.
//at the very least, you need to pass in two modules for angular...
//line 7 depends on (can't exist w/out) line 3.
angular.module('ticTacToeApp')
.controller('ticTacToeCtrl', function() {
 console.log('ticTacToeCtrl is alive!');
 var vm = this;
 var emptyCell = '?';
 vm.board = [
   [ { value: emptyCell }, { value: emptyCell }, { value: emptyCell } ],
   [ { value: emptyCell }, { value: emptyCell }, { value: emptyCell } ],
   [ { value: emptyCell }, { value: emptyCell }, { value: emptyCell } ]
 ];

 vm.clearBoard = function() {
   vm.board.forEach(function(row) {
     row.forEach(function(cell) {
       cell.value = emptyCell;
     });
   });
 };
 vm.reset = function() {
   vm.currentPlayer = 'X';
   vm.winner = false;
   vm.draw = false;
   vm.clearBoard();
   };

 vm.isTaken = function(cell) {
   return cell.value !== emptyCell;
 };

 function checkForMatch(cell1, cell2, cell3) {
   return cell1.value === cell2.value &&
          cell1.value === cell3.value &&
          cell1.value !== emptyCell;
 }

 vm.isBoardFull = function() {
   for(var row=0; row<=2; row++) {
     for(var col=0; col<=2; col++) {
       if (vm.board[row][col].value === emptyCell) {
         return false;
       }
     }
   }
   return true;
 };

 vm.checkForEndOfGame = function() {
   var rowMatch = checkForMatch(vm.board[0][0], vm.board[0][1], vm.board[0][2]) ||
                  checkForMatch(vm.board[1][0], vm.board[1][1], vm.board[1][2]) ||
                  checkForMatch(vm.board[2][0], vm.board[2][1], vm.board[2][2]);
   var colMatch = checkForMatch(vm.board[0][0], vm.board[1][0], vm.board[2][0]) ||
                     checkForMatch(vm.board[0][1], vm.board[1][1], vm.board[2][1]) ||
                     checkForMatch(vm.board[0][2], vm.board[1][2], vm.board[2][2]);
   var diagMatch = checkForMatch(vm.board[0][0], vm.board[1][1], vm.board[2][2]) ||
                   checkForMatch(vm.board[0][2], vm.board[1][1], vm.board[2][0]);
   vm.winner = rowMatch || colMatch || diagMatch;
   vm.draw = !vm.winner && vm.isBoardFull();
   return vm.winner || vm.draw;
 }
 vm.move = function(cell) {
   cell.value = vm.currentPlayer;
   if (vm.checkForEndOfGame() === false) {
   vm.currentPlayer = vm.currentPlayer === 'X' ? 'O' : 'X';
   }
 };

 vm.reset();

});
