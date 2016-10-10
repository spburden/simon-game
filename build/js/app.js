(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Simon() {
  this.roundNumber = 1;
  this.randomNumbers = [];
  this.guessedNumbers = [];
}

Simon.prototype.newRound = function(roundNumber) {
  for (var i = 0; i < roundNumber; i++) {
    var random = Math.floor(Math.random() * 4) + 1;
    this.randomNumbers.push(random);
  }
  return this.randomNumbers;
};

Simon.prototype.checkCorrect = function(guessedNumbers, randomNumbers) {
  if (guessedNumbers.length === randomNumbers.length) {
    if (guessedNumber === randomNumbers) {
      this.roundNumber += 1;
      this.randomNumbers = [];
      this.guessedNumbers = [];
    } else {
      this.roundNumber = 1;
      this.randomNumbers = [];
      this.guessedNumbers = [];
    }
  } else {
    return;
  }
};

Simon.prototype.oneGuess = function(number) {
  this.guessedNumbers.push(number);
};

exports.simonModule = Simon;

},{}],2:[function(require,module,exports){
var Simon = require ('./../js/simon.js').simonModule;

$(document).ready(function(){
  $("#new-game").click(function(){
    var newGame = new Simon();
    var roundNumber = newGame.roundNumber;
    newGame.newRound(roundNumber);
    var randomNumbers = newGame.randomNumbers;
    var i = 1;
    randomNumbers.forEach(function(number) {
      //debugger;
      var boxNumber = number;
      setTimeout(function() {
        $('#' + boxNumber).children().show();
        setTimeout(function() {
        $('#' + boxNumber).children().hide();
        },1000);
      },1100*i);
      i++;
    });
  });



  $(".col-md-4").click(function(){
    var guess = $(this).attr("id");
    newGame.guess(guess);
  });
});

},{"./../js/simon.js":1}]},{},[2]);
