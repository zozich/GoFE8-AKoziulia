'use strict;'

$(function () {
    let questionsAndAnswers = {
        title: 'Programming test',
        questions: [
            {
                title: 'Which languages have strict types?',
                answers: [
                    {
                        id: 11,
                        text: 'Javascript',
                        correct: false
                    },
                    {
                        id: 12,
                        text: 'Java',
                        correct: true
                    },
                    {
                        id: 13,
                        text: 'Python',
                        correct: false
                    },
                    {
                        id: 14,
                        text: 'C++',
                        correct: true
                    }
                ]
            },
            {
                title: 'Which types do not exist in Javascript?',
                answers: [
                    {
                        id: 21,
                        text: 'short',
                        correct: true
                    },
                    {
                        id: 22,
                        text: 'integer',
                        correct: false
                    },
                    {
                        id: 23,
                        text: 'boolean',
                        correct: false
                    },
                    {
                        id: 24,
                        text: 'undefined',
                        correct: false
                    }
                ]
            },
            {
                title: 'Which of the tags existed before HTML5 specification?',
                answers: [
                    {
                        id: 31,
                        text: 'header',
                        correct: false
                    },
                    {
                        id: 32,
                        text: 'footer',
                        correct: false
                    },
                    {
                        id: 33,
                        text: 'aside',
                        correct: false
                    },
                    {
                        id: 34,
                        text: 'div',
                        correct: true
                    }
                ]
            }
        ],
        submitTitle: 'Test my results'
    };

    localStorage.setItem('questionsAndAnswers', JSON.stringify(questionsAndAnswers));
    let persistedTestObject = JSON.parse(localStorage.getItem('questionsAndAnswers'));

    let headerTemplate = _.template(document.getElementById('header_template').innerHTML);
    let header = headerTemplate(persistedTestObject);

    let questionTemplate = _.template(document.getElementById('question_template').innerHTML);
    let questions = questionTemplate(persistedTestObject);

    let submitTemplate = _.template(document.getElementById('submit_template').innerHTML);
    let submit = submitTemplate(persistedTestObject);

    let wrapper = $('.wrapper');
    wrapper.append(header).append(questions).append(submit);

    let $submitButton = $('#submit');
    $submitButton.on('click', function () {
        let maxResult = persistedTestObject.questions.length;
        let userResult = 0;
        persistedTestObject.questions.forEach(function (question) {
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

})