console.log("linked")

var Pod = function(value) {
  this.value = value;
}


// how to create for loop??
// var pod + i = new Pod(4) --> invalid '+'
pod1 = new Pod(4);
pod2 = new Pod(4);
pod3 = new Pod(4);
pod4 = new Pod(4);
pod5 = new Pod(4);
pod6 = new Pod(4);
pod7 = new Pod(4);
pod8 = new Pod(4);
pod9 = new Pod(4);
pod10 = new Pod(4);
pod11 = new Pod(7);
pod12 = new Pod(4);


//populate board with pod value of 4
var board = [];

board[0] = pod1;
board[1] = pod2;
board[2] = pod3;
board[3] = pod4;
board[4] = pod5;
board[5] = pod6;
board[6] = pod7;
board[7] = pod8;
board[8] = pod9;
board[9] = pod10;
board[10] = pod11;
board[11] = pod12;

//create jQ var


var $pod1 = $('#pod1');
var $pod2 = $('#pod2');
var $pod3 = $('#pod3');
var $pod4 = $('#pod4');
var $pod5 = $('#pod5');
var $pod6 = $('#pod6');
var $pod7 = $('#pod7');
var $pod8 = $('#pod8');
var $pod9 = $('#pod9');
var $pod10 = $('#pod10');
var $pod11 = $('#pod11');
var $pod12 = $('#pod12');


var win = false

/*var gameBegin = function() {
  for (var i = 0; i < board.length; i++) {
    board[i].value = 4;
  }
}
*/
// var gameEnd = function() {
//   if (for (var i = 0; i < 6; i++) {
//     board[i].innerHTML = "0";
//   }) ||
//   (for (var i = 11; i > 5; i--) {
//     board[i].innerHTML = "0";
//   }) {
//     return win = true;
//   }
// }

// var gameWinner = function() {
//   if ()
// }


// if event listener click's (eventlistenenr (click, function())) {
var countMove = 0;
var iterator =0;
var chooseastart = function(jk) {
  countMove = board[jk].value;
  iterator = countMove;
  board[jk].value = 0;
  for (var i = 1; i <= countMove; i++){
    if (jk + i > 11 && iterator != 1) {
      board[jk + i - 12].value++;
      iterator--;
    } else if (iterator!=1) {
      board[jk + i].value++;
      iterator--;
    }
  }
}


