//GLOBAL variables
var win //= false;
var winner //= "";
var currentPlayer //= "Player 1";

var Pod = function(value) {
  this.value = value;
}

// intializing board

var mancala1;
var mancala2;

var pod1;
var pod2;
var pod3;
var pod4;
var pod5;
var pod6;
var pod7;
var pod8;
var pod9;
var pod10;
var pod11;


var board;

var startGame = function() {
  win = false;
  winner = "";
  currentPlayer = "Player 1";

  mancala1 = new Pod(0);
  mancala2 = new Pod(0);

  pod0 = new Pod(4);
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
  pod11 = new Pod(4);

  board = [pod0, pod1, pod2, pod3, pod4, pod5,
           pod6, pod7, pod8, pod9, pod10, pod11];

  updateMoveCSS();
  setUpBoard.play();
  render();
  $('#winner').remove();
}

// start click event
clickOn();


// initializing game
var countMove = 0;
var iterator = 0;
var seedsInHand = 0;


var move = function (index) {
  // utilize value from clicked pod
  seedsInHand = board[index].value;
  countMove = board[index].value;
  board[index].value = 0;

  // loop through value of clicked pod
  for (var i = countMove; i >= 0; i--) {

    // loop for player 1
    if (currentPlayer === "Player 1" && seedsInHand === 1 && index === 11) {
      mancala1.value++;
      mancalaSound.play();
      fadeInRight();
      seedsInHand = -1;
    } else if (currentPlayer === "Player 1" && seedsInHand > 1 && index === 11) {
        mancala1.value++;
        mancalaPlus.play();
        fadeInRight();
        index = 0;
        board[index].value++;
        seedsInHand -= 2;
    } else if (currentPlayer === "Player 1" && seedsInHand > 0) {
        index++;
        board[index].value++;
        plusOne.play();
        seedsInHand--;
    } else if (currentPlayer === "Player 1" && seedsInHand === 0
              && board[index].value === 1 && ((6 <= index) && (index <= 11))
              && board[11-index].value > 0) {
      eatOpp(index);
    }

    // loop for player 2
    if (currentPlayer === "Player 2" && seedsInHand === 1 && index === 5) {
      mancala2.value++;
      mancalaSound.play();
      fadeInLeft();
      seedsInHand = -1;
    } else if (currentPlayer === "Player 2" && seedsInHand > 1 && index === 5) {
        mancala2.value++;
        mancalaPlus.play();
        fadeInLeft();
        index++;
        board[index].value++;
        seedsInHand -=2;
    } else if (currentPlayer === "Player 2" && seedsInHand > 0) {
        if (index === 11) {
          index = 0;
          board[index].value++;
          plusOne.play();
          seedsInHand--;
        }
        index++;
        board[index].value++;
        plusOne.play();
        seedsInHand--;
    } else if (currentPlayer === "Player 2" && seedsInHand === 0
              && board[index].value === 1 && ((0 <= index) && (index <= 5))
              && board[11-index].value > 0) {
        eatOpp(index);
    }
  }
  gameEnd();
  gameWinner();
  changePlayer(index);
  render();
}

function invalid (index) {
  if ((currentPlayer === "Player 1" && index >= 6) && board[index].value != 0) {
    move(index);
  } else if ((currentPlayer === "Player 2" && index <= 5) && board[index].value != 0) {
    move(index);
  } else if ((currentPlayer === "Player 1" && (index < 6))
    || (currentPlayer === "Player 2" && (index > 5))
    || board[index].value === 0) {
    invalidSound.play()
  };
}

function changePlayer(index) {
  if (currentPlayer === "Player 1") {
    if (seedsInHand === -1 && index === 11) {
      console.log("player goes again");
      currentPlayer = "Player 1";
    } else {
      currentPlayer = "Player 2";
      console.log("I am supposed to change players");
    }
  } else if (currentPlayer === "Player 2") {
    if (seedsInHand === -1 && index === 5) {
      console.log("player goes again");
      currentPlayer = "Player 2";
    } else {
      currentPlayer = "Player 1";
      console.log("I am supposed to change players");
    }
  }
  updateMoveCSS();
}

function fadeInLeft() {
  $(".left").text("+1").fadeIn("slow").fadeOut("slow");
}

function fadeInRight() {
  $(".right").text("+1").fadeIn("slow").fadeOut("slow");

}

function updateMoveCSS() {
  if (currentPlayer === "Player 1") {
    $(".player1").removeClass("lock");
    $(".player2").addClass("lock");
    $("#playerOne").addClass("currentPlayer");
    $("#playerTwo").removeClass("currentPlayer");
  } else {
    $(".player2").removeClass("lock");
    $(".player1").addClass("lock");
    $("#playerTwo").addClass("currentPlayer");
    $("#playerOne").removeClass("currentPlayer");

  }
}

var eatOpp = function (index) {
  if (currentPlayer === "Player 1") {
    mancala1.value += board[index].value + board[11-index].value;
    $(".right").text("+" + (board[index].value + board[11-index].value)).fadeIn("slow").fadeOut("slow");
    capture.play();
  } else {
    mancala2.value += board[index].value + board[11-index].value;
    $(".left").text("+" + (board[index].value + board[11-index].value)).fadeIn("slow").fadeOut("slow");
    capture.play();
  }
  board[11-index].value = 0;
  board[index].value = 0;
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
    } $('body').append($('<div id="winner">').text("The winner is " + winner + "!!").fadeIn("slow"));
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
    var index = parseInt(event.target.id.slice(3));
    invalid(index);
  });
}

// sounds
var plusOne = new Audio("./assets/plusOne.wav");
var mancalaPlus = new Audio("./assets/mancalaPlus.wav");
var capture = new Audio("./assets/capture.wav");
var invalidSound = new Audio("./assets/invalid.wav");
var mancalaSound = new Audio("./assets/mancala.wav");
var setUpBoard = new Audio("./assets/setUpBoard.wav");

startGame();

$("#restart").on("click", startGame);

