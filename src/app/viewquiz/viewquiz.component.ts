import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-viewquiz',
  templateUrl: './viewquiz.component.html',
  styleUrls: ['./viewquiz.component.scss']
})
export class ViewquizComponent implements OnInit {
  subjects: string[] = [];
  selectedSubject: string = '';
  questions: string[] = [];

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.loadSubjects();
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

  getQuestions(): void {
    if (this.selectedSubject) {
      this.quizService.getQuestionsBySubject(this.selectedSubject).subscribe(
        data => {
          this.questions = data;
console.log("c++ questions",this.questions,this.selectedSubject);


        },
        error => {
          console.error(`Error fetching questions for ${this.selectedSubject}`, error);
        }
      );
    }
  }
  
  time = new Observable<string>((observer: Subscriber<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
});
}
