let testModule = require('../src/js/test_module.js');

describe("Jasmine tests for testModule.getSampleQuestionAndAnswers()", function() {
    var questionsAndAnswers = null;

    beforeEach(function () {
        questionsAndAnswers = testModule.getSampleQuestionsAndAnswers();
    });

    it("Title should be correct", function() {
        expect(questionsAndAnswers.title).toEqual("Programming test");
    });

    it("There should be 3 questions", function() {
        expect(questionsAndAnswers.questions.length).toBe(3);
    });

    it("At least one of questions should have 3 correct answers", function() {
        let questionWith2CorrectAnswersFound = false;

        questionsAndAnswers.questions.forEach(function (question) {
            questionWith2CorrectAnswersFound |= question.answers.filter(function(answer){
                return answer.correct;
            }).length == 2;
        });

        expect(questionWith2CorrectAnswersFound).toBeTruthy();
    });
});