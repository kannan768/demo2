// frontend/src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private apiUrl = 'http://localhost:3000/api'; // Update with your backend API URL
  private apiUrl =
    'https://37mt533t3b.execute-api.us-east-1.amazonaws.com/stage1';
  constructor(private http: HttpClient) {}

  // login1(credentials: { username: string; password: string }) {
  //   return this.http.post(`${this.apiUrl}/loginres`, credentials);
  // }

  login(
    username: string,
    password: string
  ): Observable<any> {
    const headers = new HttpHeaders({ 'content-Type': 'application/json' });
    const body = { username: username, password: password };
    console.log('bodey', body);
    return this.http.post<any>(
      'https://ckrm9avj14.execute-api.us-east-1.amazonaws.com/stage1/loginin',
      body,
      {
        headers,
      }
    );
    // return this.http.post<any>(this.skillsUrl + '/authenticate', body, {
    //   headers,
    // });
  }


  // register(user: { id:Date,username: string; password: string,email:string,phone:number}) {
  //   return this.http.post(`${this.apiUrl}/signin`, user);
  // }
  register(
    id: Date,
    username: String,
    password: String,
    email: string,
    phone: number | null
  ): Observable<any> {
    const headers = new HttpHeaders({ 'content-Type': 'application/json' });
    const body = {
      id: id,
      username: username,
      password: password,
      email: email,
      phone: phone,
    };

console.log("Service Body: ",body)
    return this.http.post<any>(
      'https://37mt533t3b.execute-api.us-east-1.amazonaws.com/stage1/signin',
      body,
      {
        headers,
      }
    );
    // return this.http.post<any>(this.skillsUrl + '/postsignup', body, {
    //   headers,
    // });
  }
}
