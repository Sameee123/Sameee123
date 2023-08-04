var promptSync = require('prompt-sync');
var QuizApp = /** @class */ (function () {
    function QuizApp(questions, options, answers) {
        this.questions = questions;
        this.options = options;
        this.answers = answers;
        this.userAnswers = [];
    }
    QuizApp.prototype.displayQuestion = function (index) {
        console.log(this.questions[index]);
        this.options[index].forEach(function (option, i) {
            console.log("".concat(i + 1, ". ").concat(option));
        });
    };
    QuizApp.prototype.takeQuiz = function () {
        console.log('--- Quiz App ---');
        var prompt = promptSync();
        for (var i = 0; i < this.questions.length; i++) {
            this.displayQuestion(i);
            var userInput = prompt('Enter your answer (1, 2, 3, 4): ');
            var userAnswer = Number(userInput);
            if (isNaN(userAnswer) || userAnswer < 1 || userAnswer > 4) {
                console.log('Invalid input. Please enter a valid option (1, 2, 3, 4).');
                i--; // Repeat the current question
            }
            else {
                this.userAnswers.push(userAnswer);
            }
        }
    };
    QuizApp.prototype.calculateScore = function () {
        var score = 0;
        for (var i = 0; i < this.userAnswers.length; i++) {
            if (this.userAnswers[i] === this.answers[i]) {
                score++;
            }
        }
        return score;
    };
    QuizApp.prototype.showResult = function () {
        console.log('--- Quiz Result ---');
        var score = this.calculateScore();
        console.log("Your score: ".concat(score, " out of ").concat(this.questions.length));
    };
    return QuizApp;
}());
// Example usage
var questions = [
    'What is the capital of France?',
    'What is 2 + 2?',
    'Who wrote the play "Romeo and Juliet"?',
    'what is the capital of pakistan'
];
var options = [
    ['London', 'Paris', 'Berlin', 'Madrid'],
    ['3', '4', '5', '6'],
    ['William Shakespeare', 'Jane Austen', 'Charles Dickens', 'George Orwell'],
    ['Islamabad', 'Karachi', 'Lahore'],
];
var answers = [2, 2, 1, 1];
var quiz = new QuizApp(questions, options, answers);
quiz.takeQuiz();
quiz.showResult();
