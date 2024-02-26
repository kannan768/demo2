import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private apiUrl = 'http://localhost:3000/api'; // Update with your backend API URL

  constructor(private http: HttpClient) {}

  getQuizzes(): Observable<any> {
    return this.http.get <any>(this.apiUrl+'/getquiz').pipe(
      map((response: any[]) => {
        return response.filter(quiz => quiz.subject.toLowerCase() === 'c');
      })
    );;
  }
  addQuiz(quizData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/postquiz`, quizData);
  }

  getQuestions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getquestion`);
  }
  getSubjects(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getsubject`);
  }
  getQuestionsBySubject(subject: string): Observable<string[]> {
    const url = `${this.apiUrl}/getquestionbysubject?subject=${subject}`;
    return this.http.get<string[]>(url);
  }
  getAllSubject(subject: string): Observable<string[]> {
    const url = `${this.apiUrl}/getallsubject?subject=${subject}`;
    return this.http.get<string[]>(url);
}
getQuizById(quizId: string): Observable<any> {
  const url = `${this.apiUrl}/getbyid/${quizId}`;
  return this.http.get(url);
}
updateQuiz(quizId: string, quizData: any): Observable<any> {
  const url = `${this.apiUrl}/edit_quiz`;
  return this.http.put(url, quizData);
}
}
