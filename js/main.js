console.log("linked")

var Pod = function(value) {
  this.value = value;
}


// how to create for loop??
// var pod + i = new Pod(4) --> invalid '+'
var pod1 = new Pod(4);
var pod2 = new Pod(4);
var pod3 = new Pod(4);
var pod4 = new Pod(4);
var pod5 = new Pod(4);
var pod6 = new Pod(4);
var pod7 = new Pod(4);
var pod8 = new Pod(4);
var pod9 = new Pod(4);
var pod10 = new Pod(4);
var pod11 = new Pod(4);
var pod12 = new Pod(4);


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

// var board = [
//               [],
//               []
//             ];

// // Loop for creating board
// function startGame() {
//   for (var i = 0; i < 2; i += 1) {
//     for(var k = 0; k < 7; k += 1) {
//       if (k === 6) {
//         board[i][k] = 0;
//       } else {
//         board[i][k] = 4;
//       }
//     }
//   }
// }


//GLOBAL variables
var win = false;
var currentPlayer = "Player 1";
var $mancala1 = $('#mancala1');
var $mancala2 = $('#mancala2');

var Mancala = function(value) {
  this.value = value;
};

var mancala1 = new Mancala(0);
var mancala2 = new Mancala(0);

var gameEnd = function() {
  for (var i = 0; i < 6; i++) {
    if (board[i].value === 0) {
      return win = true;
    }
  }
  for (var i = 6; i < 12; i++) {
    if (board[i].value === 0) {
      return win=true;
    }
  }
}

var gameWinner = function() {
  if (win = true) {
    if (mancala1.value > mancala2.value) {
      winner = "Player 1";
    } else winner = "Player 2";
  }
}


// if event listener click's (eventlistenenr (click, function())) {

var countMove = 0;
var iterator = 0;
var seedsInHand = 0;

var move = function (jk) {
  seedsInHand = board[jk].value;
  countMove = board[jk].value;
  board[jk].value = 0;

  for (var i = countMove; i > 0; i--) {

  //player 1
    if (currentPlayer === "Player 1" && seedsInHand === 1 && jk === 11) {
      mancala1.value++;
      seedsInHand--;
      currentPlayer = "Player 2";
    } else if (currentPlayer === "Player 1" && seedsInHand > 1 && jk === 11) {
        mancala1.value++;
        jk = 0;
        board[jk].value++;
        seedsInHand -= 2;
    } else if (currentPlayer === "Player 1" && seedsInHand > 0) {
        jk++;
        board[jk].value++;
        seedsInHand--;
    } else if (currentPlayer === "Player 1" && seedsInHand === 0 && board[jk].value === 1 && ((6 <= jk) && (jk <= 11))) {
      console.log(jk);
      eatOpp(jk);
    }

  //player 2
    if (currentPlayer === "Player 2" && seedsInHand === 1 && jk === 5) {
      console.log("1");
      mancala2.value++;
      seedsInHand--;
      currentPlayer = "Player 1";
    } else if (currentPlayer === "Player 2" && seedsInHand > 1 && jk === 5) {
        console.log("2");
        mancala2.value++;
        jk++;
        board[jk].value++;
        seedsInHand -=2;
    } else if (currentPlayer === "Player 2" && seedsInHand > 0) {
        console.log("3");
        if (jk === 11) {
          jk = 0;
          board[jk].value++;
          seedsInHand--;
        }
        jk++;
        board[jk].value++;
        seedsInHand--;
    } else if (currentPlayer === "Player 2" && seedsInHand === 0 && board[jk].value === 1 && ((0 <= jk) && (jk <= 5))) {
        console.log(jk);
        eatOpp(jk);
    }
  }
  changePlayer();
  render();
}


var changePlayer = function() {
  if (currentPlayer === "Player 1") {
    currentPlayer = "Player 2";
  } else if (currentPlayer === "Player 2") {
    currentPlayer = "Player 1";
  }
}


var eatOpp = function (jk) {
  if (currentPlayer === "Player 1") {
    mancala1.value += board[jk].value + board[11-jk].value;
  } else {
    mancala2.value += board[jk].value + board[11-jk].value;
  }
  board[11-jk].value = 0;
  board[jk].value = 0;
}

  // for (var i = 0; boardp1.length; i++) {
  //   for (var j = 11; boardp2.length; j--) {
  //       mancala1.value += board[i].value + board[j].value;
  //       board[i].value = 0;
  //       board[j].value = 0;
  //   }
  // }board[jk]
// }

function render() {
  $('#currentPlayer').text("Current Player: "+ currentPlayer);
  for (var i = 0; i < board.length; i += 1) {
      $('#pod' + (i + 1)).text(board[i].value)
    }
  $('#mancala1').text(mancala1.value);
  $('#mancala2').text(mancala2.value);
}

render();


