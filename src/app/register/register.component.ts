// frontend/src/app/auth/register/register.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  registerMessage: string = '';

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
  }

  //   register() {
  //     const date = Date.now();
  //     const id = new Date(date);
  //     if (this.registerForm.valid) {
  //       const { id,username, password, email, phone } = this.registerForm.value;

  //       this.authService.register(id,username, password, email, phone).subscribe(
  //         (response) => {
  //           console.log(response);
  //           this.registerMessage = 'Registration successful. Redirecting...';
  //           // Handle successful registration (redirect, etc.)
  //         },
  //         // (error) => {
  //         //   console.error(error);
  //         //   this.registerMessage = 'Registration failed. Please check your information and try again.';
  //         // }
  //       );
  //     }
  //   }
  // }

  register() {
    const date = Date.now();
    const id = new Date(date);

console.log("id",id);
console.log("Username:",this.registerForm.value.username);
console.log("password:",this.registerForm.value.password);
console.log("email:",this.registerForm.value.email);
console.log("phome:",this.registerForm.value.phone);
    if (this.registerForm.valid) {
      this.authService.register(
        id,
        this.registerForm.value.username,
        this.registerForm.value.password,
        this.registerForm.value.email,
        this.registerForm.value.phone
      ).subscribe((data) => {

      });
    }
  }
}
