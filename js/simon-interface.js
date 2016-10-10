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
