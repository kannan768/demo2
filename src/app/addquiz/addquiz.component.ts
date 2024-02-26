import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { QuizService } from '../quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addquiz',
  templateUrl: './addquiz.component.html',
  styleUrls: ['./addquiz.component.scss']
})
export class AddquizComponent implements OnInit {
  quizForm: FormGroup;
  message: string | undefined;
  subjects: string[] = [];

  constructor(private formBuilder: FormBuilder, private quizService: QuizService, private router: Router) {
    this.quizForm = this.formBuilder.group({
      subject: ['', Validators.required],
      question: ['', Validators.required],
      options: this.formBuilder.array([]),
      correctanswer: ['', Validators.required]
    });

    // Initialize options with one empty option
    this.addOption();
  }

  ngOnInit() {
    // Fetch subjects from the backend when the component initializes
    this.quizService.getSubjects().subscribe(
      (subjects: any) => {
        this.subjects = subjects;
console.log(subjects)
      },
      (error) => {
        console.error('Error fetching subjects', error);
      }
    );
  }

  get optionsArray(): FormArray {
    return this.quizForm.get('options') as FormArray;
  }

  addOption() {
    if (this.optionsArray.length < 4) {
      this.optionsArray.push(this.formBuilder.group({
        value: ['', Validators.required]
      }));
    }
  }

  removeOption(index: number) {
    this.optionsArray.removeAt(index);
  }

  addQuiz() {
    const date = Date.now();
    const id = new Date(date);
    if (this.quizForm.valid) {
      // Extract option values from form controls
      const options = this.optionsArray.controls.map(control => control.value.value);

      const quizData = {
        id,
        subject: this.quizForm.value.subject,
        question: this.quizForm.value.question,
        options: options,
        correctanswer: this.quizForm.value.correctanswer
      };

      this.quizService.addQuiz(quizData).subscribe(
        (response) => {
          console.log('Quiz added successfully', response);
          this.message = 'added successfully';
          this.router.navigate(['/editquiz']);
        },
        (error) => {
          console.error('Error adding quiz', error);
        }
      );
    } else {
      // Handle form validation errors
    }
  }
}
