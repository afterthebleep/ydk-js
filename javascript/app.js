$('#start').on('click', function () {
  $('#start').remove();
  
  var api = "https://opentdb.com/api.php?amount=25&category=18&difficulty=easy"
  
  $.ajax({
    url: api,
    method: 'GET'
  }) 
  .then(function(questions){
    questions = questions.results

    for (var i = 0; i < questions.length; i++) {
      $('#sub-container').append('<h3>' + questions[i].question + '</h3>');
      var correctAnswer = questions[i].correct_answer
      var answersList = questions[i].incorrect_answersß
      answersList.push(correctAnswer)

      for (var j = 0; j < answersList.length; j++) {
        if (answersList[j] !== correctAnswer) {
          $('#sub-container').append("<input type = 'radio' name='question' " + [i] + " 'value=' " + answersList[j] + "' > " + answersList[j]);
        } else {
          $('#sub-container').append("<input type = 'radio' name='correctAnswer' " + [i] + " 'value=' " + answersList[j] + "' > " + answersList[j]);
        }
      }
    }
  }) 
});