console.log("linked")

var board = [pod1, pod2, pod3, pod4, pod5, pod6,
            pod7, pod8, pod9, pod10, pod11, pod12];

var gameBegin = function() {
  for (var i = 0; i < board.length; i++) {
    board[i].innerHTML = "4";
  }
}

gameBegin();
// var gameEnd = function() {
//   if
// }
