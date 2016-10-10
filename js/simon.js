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
