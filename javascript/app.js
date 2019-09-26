$('#start').on('click', function () {
  $('#start').remove();
  for (var i = 0; i < questions.length; i++) {
    $('#sub-container').append('<h3>' + questions[i].question + '</h3>');
    for (var j = 0; j < questions[i].answers.length; j++) {
      $('#sub-container').append("<input type = 'radio' name='question' " + [i] + " 'value=' " + questions[i].correctAnswer[j] + "' > " + questions[i].answers[j]);
    }
  }
});

var questions = [{
  question: "In any programming language, what is the most common way to iterate through an array?",
      correctAnswer: "For loops",
      answers: [
        "If Statements",
        "For Loops",
        "Do-While Loops",
        "While Loops"
      ]
    }];