//GLOBAL variables
var win = false;
var winner = "";
var currentPlayer = "Player 1";

var Pod = function(value) {
  this.value = value;
}

var mancala1 = new Pod(0);
var mancala2 = new Pod(0);

// how to create for loop??
var pod0 = new Pod(4);
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


//populate board with pod value of 4
var board = [pod0, pod1, pod2, pod3, pod4, pod5,
            pod6, pod7, pod8, pod9, pod10, pod11];

var startGame = function() {
  var board = [pod0, pod1, pod2, pod3, pod4, pod5,
               pod6, pod7, pod8, pod9, pod10, pod11];


  var mancala1 = new Pod(0);
  var mancala2 = new Pod(0);

  var pod0 = new Pod(4);
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

  clickOn();
  render();
}

// // Loop for creating board
// function startGame() {
//   for (var i = 0; i < 12; i += 1) {
//     board.push(board[i].value = 4);
//   }
// }


var countMove = 0;
var iterator = 0;
var seedsInHand = 0;

  //player 1

var move = function (jk) {
  seedsInHand = board[jk].value;
  countMove = board[jk].value;
  board[jk].value = 0;

  for (var i = countMove; i >= 0; i--) {

    if (currentPlayer === "Player 1" && seedsInHand === 1 && jk === 11) {
      // console.log("1");
      mancala1.value++;
      seedsInHand = -1;
    } else if (currentPlayer === "Player 1" && seedsInHand > 1 && jk === 11) {
        // console.log("2");
        mancala1.value++;
        jk = 0;
        board[jk].value++;
        seedsInHand -= 2;
    } else if (currentPlayer === "Player 1" && seedsInHand > 0) {
        // console.log("3");
        jk++;
        board[jk].value++;
        seedsInHand--;
    } else if (currentPlayer === "Player 1" && seedsInHand === 0
              && board[jk].value === 1 && ((6 <= jk) && (jk <= 11))
              && board[11-jk].value > 0) {
      eatOpp(jk);
    }

    if (currentPlayer === "Player 2" && seedsInHand === 1 && jk === 5) {
      // console.log("1");
      mancala2.value++;
      seedsInHand = -1;
    } else if (currentPlayer === "Player 2" && seedsInHand > 1 && jk === 5) {
        // console.log("2");
        mancala2.value++;
        jk++;
        board[jk].value++;
        seedsInHand -=2;
    } else if (currentPlayer === "Player 2" && seedsInHand > 0) {
        // console.log("3");
        if (jk === 11) {
          jk = 0;
          board[jk].value++;
          seedsInHand--;
        }
        jk++;
        board[jk].value++;
        seedsInHand--;
    } else if (currentPlayer === "Player 2" && seedsInHand === 0
              && board[jk].value === 1 && ((0 <= jk) && (jk <= 5))
              && board[11-jk].value > 0) {
        eatOpp(jk);
    }
  }
  changePlayer(jk);
}


function changePlayer(jk) {
  if (currentPlayer === "Player 1") {
    if (seedsInHand === -1 && jk === 11) {
      console.log("player goes again");
      currentPlayer = "Player 1";
      // $(".player2").off();
    } else {
      currentPlayer = "Player 2";
      console.log("I am supposed to change players");
      // $(".player1").off();
    }
  } else if (currentPlayer === "Player 2") {
    if (seedsInHand === -1 && jk === 5) {
      console.log("player goes again");
      currentPlayer = "Player 2";
      // $(".player1").off();
    } else {
      currentPlayer = "Player 1";
      console.log("I am supposed to change players");
      // $(".player2").off();
  }
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




function gameEnd() {
  if ((board[0].value === 0 &&
       board[1].value === 0 &&
       board[2].value === 0 &&
       board[3].value === 0 &&
       board[4].value === 0 &&
       board[5].value === 0)
    ||
      (board[6].value === 0 &&
       board[7].value === 0 &&
       board[8].value === 0 &&
       board[9].value === 0 &&
       board[10].value === 0 &&
       board[11].value === 0)) {
    win = true;
    $(".pod").off();

    for (var i = 0; i <= 5; i++) {
      mancala2.value += board[i].value;
      board[i].value = 0;
    }

    for (var i = 6; i <=11; i++) {
      mancala1.value += board[i].value;
      board[i].value = 0;
    }
  }
}

function gameWinner() {
  if (win === true) {
    if (mancala1.value > mancala2.value) {
      winner = "Player 1";
    } else if (mancala2.value > mancala1.value) {
      winner = "Player 2";
    } else { winner = "It's a TIE!!"
    } $('body').append($('<div id="winner">').text("The winner is " + winner + "!!"));
  }
}


function render() {
  $('#currentPlayer').text("Current Player: "+ currentPlayer);
  for (var i = 0; i < board.length; i += 1) {
      $('#pod' + i).text(board[i].value)
    }
  $('#mancala1').text(mancala1.value);
  $('#mancala2').text(mancala2.value);
}

// event listeners
function clickOn() {
  $('.pod').on('click', function(event) {
    event.preventDefault();
    var jk = parseInt(event.target.id.slice(3));
    move(jk);
    gameEnd();
    gameWinner();
    render();
  });
}

// document.getElementById("button").addEventListener("click", console.log("hi"))

render();
clickOn();
// $(".player2").off();

// proper startGame()
// restart button
// changing players with turning off event listeners for other player OR
// not allowing event listeners if currentPlayer = "fawefa"
// my signature is odd position after adding button
