// frontend/src/app/auth/login/login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  loginMessage: string = '';
  loginClicked: boolean = false;

  constructor(private authService: AuthService, private formBuilder: FormBuilder,private router:Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      this.authService.login( username, password ).subscribe(
        (response) => {
          console.log(response);
          console.log("Form---------->",this.loginForm);
          this.loginMessage = 'Login successful';
setTimeout(() => {
  this.router.navigate(['/viewquiz']);
}, 2000);

          // Handle successful login (redirect, etc.)
        },
        (error) => {
          console.error(error);
          this.loginMessage = 'Login failed. Please check your credentials and try again.';
        }
      );
    }
  }
  // logindemo()
  // {
  //   if(this.username && this.password)
  //   {
  //     this.authService.login1(this.username,this.password).subscribe(
  //       {
  //         next:(data)=>
  //         {
  //           this.loginMessage='login succes'
  //           setTimeout(()=>{ this.router.navigate(['/viewquiz'])

  //           },2000
  //           )
  //           console.log(data)
  //         },
  //         error(err) {
  //             console.log(err)
  //         },
  //       }
  //     )
  //   }
  //   else{
  //     console
  //   }
  // }
}
