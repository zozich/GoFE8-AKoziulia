$(function () {

    let questionsAndAnswers = testModule.getSampleQuestionsAndAnswers();
    let header = testModule.getHeader(questionsAndAnswers);
    let questions = testModule.getQuestions(questionsAndAnswers);
    let submit = testModule.getSubmit(questionsAndAnswers);

    let wrapper = $('.wrapper');
    wrapper.append(header).append(questions).append(submit);

    let $submitButton = $('#submit');
    $submitButton.on('click', function () {
        let maxResult = questionsAndAnswers.questions.length;
        let userResult = 0;
        questionsAndAnswers.questions.forEach(function (question) {
            let correctAnswer = true;
            question.answers.forEach(function (answer) {
                let answerCheckbox = $('#' + answer.id)[0];
                correctAnswer &= ((answer.correct && answerCheckbox.checked) || (!answer.correct && !answerCheckbox.checked));
            });
            if (correctAnswer) {
                userResult++;
            }
        });

        alert('You have scored ' + userResult + ' out of ' + maxResult);

        $('[type=checkbox]').prop('checked', false);
    });

});