import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { QuizService } from '../quiz.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editquiz',
  templateUrl: './editquiz.component.html',
  styleUrls: ['./editquiz.component.scss']
})
export class EditquizComponent implements OnInit {
  quizForm: FormGroup;
  quizId: string | null = null;
  message: string | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private quizService: QuizService,
    private route: ActivatedRoute,
    private router: Router
  ) {
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
    this.route.paramMap.subscribe(params => {
      this.quizId = params.get('id');
      if (this.quizId) {
        this.loadQuizDetails(this.quizId);
      }
    });
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

  loadQuizDetails(quizId: string): void {
    this.quizService.getQuizById(quizId).subscribe(
      (quiz: any) => {
        this.quizForm.patchValue({
          subject: quiz.subject,
          question: quiz.question,
          correctanswer: quiz.correctanswer
        });

        // Clear existing options
        while (this.optionsArray.length !== 0) {
          this.optionsArray.removeAt(0);
        }

        // Add options from the quiz to the form
        quiz.options.forEach((option: string) => {
          this.optionsArray.push(this.formBuilder.group({
            value: [option, Validators.required]
          }));
        });
      },
      (error) => {
        console.error('Error fetching quiz details', error);
      }
    );
  }

  updateQuiz() {
    if (this.quizForm.valid && this.quizId) {
      const options = this.optionsArray.controls.map(control => control.value.value);

      const quizData = {
        id: this.quizId,
        subject: this.quizForm.value.subject,
        question: this.quizForm.value.question,
        options: options,
        correctanswer: this.quizForm.value.correctanswer
      };

      this.quizService.updateQuiz(this.quizId, quizData).subscribe(
        (response) => {
          console.log('Quiz updated successfully', response);
          this.message = 'Updated successfully';
          this.router.navigate(['/viewquiz']);
        },
        (error) => {
          console.error('Error updating quiz', error);
        }
      );
    } else {
      // Handle form validation errors
    }
  }
}
