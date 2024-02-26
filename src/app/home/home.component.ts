import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quizzes: any[] = [];
  quizResult: string = '';
  subjects: string[] = [];
  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
 this.loadSubjects();
    this.fetchQuizzes();
  }
  loadSubjects(): void {
    this.quizService.getSubjects().subscribe(
      data => {
        this.subjects = data;
      },
      error => {
        console.error('Error fetching subjects', error);
      }
    );
  }

  checkAnswer(option: any, quiz: any): void {
    if (option == quiz.correctanswer) {
    //  quiz.showAnswer = true;
      quiz.showCorrectanswer = true;
    }
  }

  fetchQuizzes(): void {
    this.quizService.getQuizzes().subscribe(
      {
        next: (data) => (this.quizzes = data),
        error: (e) => console.log('error'),
      }
    );
  }

  showAnswer(quiz: any): void {
    quiz.showCorrectanswer = !quiz.showCorrectanswer;
  }
}
