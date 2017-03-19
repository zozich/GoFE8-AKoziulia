let testModule = {
    getSampleQuestionsAndAnswers: function () {
        return {
            title: 'Programming test',
            questions: [
                {
                    title: 'Which languages have strict types?',
                    answers: [
                        {id: 11, text: 'Javascript'},
                        {id: 12, text: 'Java', correct: true},
                        {id: 13, text: 'Python'},
                        {id: 14, text: 'C++', correct: true}
                    ]
                },
                {
                    title: 'Which types do not exist in Javascript?',
                    answers: [
                        {id: 21, text: 'short', correct: true},
                        {id: 22, text: 'integer'},
                        {id: 23, text: 'boolean'},
                        {id: 24, text: 'undefined'}
                    ]
                },
                {
                    title: 'Which of the tags existed before HTML5 specification?',
                    answers: [
                        {id: 31, text: 'header'},
                        {id: 32, text: 'footer'},
                        {id: 33, text: 'aside'},
                        {id: 34, text: 'div', correct: true}
                    ]
                }
            ],
            submitTitle: 'Test my results'
        };
    },

    getHeader: function (questionsAndAnswers) {
        let headerTemplate = _.template(document.getElementById('header_template').innerHTML);
        return headerTemplate(questionsAndAnswers);
    },

    getQuestions: function (questionsAndAnswers) {
        let questionTemplate = _.template(document.getElementById('question_template').innerHTML);
        return questionTemplate(questionsAndAnswers);
    },

    getSubmit: function (questionsAndAnswers) {
        let submitTemplate = _.template(document.getElementById('submit_template').innerHTML);
        return submitTemplate(questionsAndAnswers);
    }
};

try {
    module.exports = testModule;
} catch (e) {
}