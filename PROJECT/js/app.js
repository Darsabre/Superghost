var turn=1
var dictionary=["abe", "bear", "bead", "rabies", "babe", "abed"]
window.onload= function() {
  document.querySelector("#before").addEventListener("click", addLetterBefore);
  document.querySelector("#after").addEventListener("click", addLetterAfter);
  document.querySelector("#challenge").addEventListener("click", challenge);
  document.querySelector("#startButton").addEventListener("click", startNewGame)
}

var addLetterAfter = function(){
  var play = document.querySelector("#field").value
  if((play.length === 1)) {
    if (play.search(/\D+/i) != -1 ){
      (document.getElementById("chalkboard").innerHTML) += play
      checkWin()
    }
  }
}
var addLetterBefore = function(){
  var play = document.querySelector("#field").value
  if((play.length === 1)) {
    if (play.search(/\D+/i) != -1 ){
      (document.getElementById("chalkboard").innerHTML)= play + (document.getElementById("chalkboard").innerHTML)
      checkWin()
    }
  }
}

var challenge = function(){

}

var startNewGame = function () {

}
var checkWin = function(x) {
  var word = document.getElementById("chalkboard").innerHTML
  if (word.length>3 && (dictionary.indexOf((word)) !=-1)){
      alert ('you lose')
  }
}
