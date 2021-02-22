"use strict";

var getRandomNumber = function getRandomNumber() {
  var kleinerZahl = document.getElementById('kleiner').value;
  var grosserZahl = document.getElementById('grosser').value;
  var number = Math.floor(Math.random() * (grosserZahl - kleinerZahl + 1) + kleinerZahl) / 10 * 10;
  console.log(number);
  var myNumber;
  var isWinner;

  while (myNumber !== number) {
    myNumber = parseInt(prompt('Zgadniej, jaka to liczba'));
    console.log(myNumber);

    if (myNumber == null) {
      isWinner = false;
      myNumber = number;
    } else if (myNumber !== number) {
      isWinner = true;
    }
  }

  if (isWinner == true) {
    alert("Brawo, ta liczba to ".concat(number));
  } else {
    alert("Chodzi\u0142o o liczb\u0119 ".concat(number, ". /n Nast\u0119pnym razem uda Ci si\u0119 zgadn\u0105\u0107."));
  }
};

document.getElementById("startGame").addEventListener("click", getRandomNumber);
module.exports = {
  getRandomNumber: getRandomNumber
};