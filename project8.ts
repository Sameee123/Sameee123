 var promptSync= require('prompt-sync');

class QuizApp {
  questions: string[];
  options: string[][];
  answers: number[];
  userAnswers: number[];

  constructor(questions: string[], options: string[][], answers: number[]) {
    this.questions = questions;
    this.options = options;
    this.answers = answers;
    this.userAnswers = [];
  }

  displayQuestion(index: number): void {
    console.log(this.questions[index]);
    this.options[index].forEach((option, i) => {
      console.log(`${i + 1}. ${option}`);
    });
  }

  takeQuiz(): void {
    console.log('--- Quiz App ---');
    const prompt = promptSync();

    for (let i = 0; i < this.questions.length; i++) {
      this.displayQuestion(i);
      const userInput = prompt('Enter your answer (1, 2, 3, 4): ');
      const userAnswer = Number(userInput);

      if (isNaN(userAnswer) || userAnswer < 1 || userAnswer > 4) {
        console.log('Invalid input. Please enter a valid option (1, 2, 3, 4).');
        i--; // Repeat the current question
      } else {
        this.userAnswers.push(userAnswer);
      }
    }
  }

  calculateScore(): number {
    let score = 0;
    for (let i = 0; i < this.userAnswers.length; i++) {
      if (this.userAnswers[i] === this.answers[i]) {
        score++;
      }
    }
    return score;
  }

  showResult(): void {
    console.log('--- Quiz Result ---');
    const score = this.calculateScore();
    console.log(`Your score: ${score} out of ${this.questions.length}`);
  }
}

// Example usage
const questions = [
  'What is the capital of France?',
  'What is 2 + 2?',
  'Who wrote the play "Romeo and Juliet"?',
  'what is the capital of pakistan'
];

const options = [
  ['London', 'Paris', 'Berlin', 'Madrid'],
  ['3', '4', '5', '6'],
  ['William Shakespeare', 'Jane Austen', 'Charles Dickens', 'George Orwell'],
  ['Islamabad', 'Karachi', 'Lahore'  ],
];

const answers = [2, 2, 1,1]; 

const quiz = new QuizApp(questions, options, answers);
quiz.takeQuiz();
quiz.showResult();
