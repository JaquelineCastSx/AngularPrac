import { Component } from '@angular/core';
import { FireBaseService } from './services/fire-base.service';
import { IQuestion } from './interfaces/question.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  questions: IQuestion[] = [];
  correctAnswers = 0;
  questionIndex = 0;
  status: 'playing' | 'loading' | 'finished' | 'waiting' = 'waiting';
  showOptionResult = false;

  get currentQuestion() {
    return this.questions[this.questionIndex];
  }

  constructor(private firebaseService: FireBaseService) {}

  async nextQuestion(answerIndex: number){
    if(answerIndex === this.currentQuestion.correctAnswerIndex){
      this.correctAnswers++;
    }
    this.showOptionResult = true;
    setTimeout( () => {
      if(this.questionIndex === this.questions.length - 1){
        this.status = 'finished';
        this.questionIndex = 0;
        this.questions = [];
        this.showOptionResult = false;
        return;
      }

      this.questionIndex++;
      this.showOptionResult = false;
    }, 1500);
  }

  async start() {
    this.status = 'loading';
    this.correctAnswers = 0;
    this.questions = await this.firebaseService.shuffleQuestions(10);
    this.status = 'playing';
  }

  async import() {
    console.log('Importing data...');
    await this.firebaseService.importData(); //Manda llamar la funcion del servicio para subir los datos
    console.log('Data uploaded');
  }

  async getData() {
    const questions = await this.firebaseService.getAllQuestions();
    console.log(questions);
  }
}
