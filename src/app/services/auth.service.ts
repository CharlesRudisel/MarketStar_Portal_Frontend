import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

interface User {
  name: string;
  email: string;
  password: string;
}

interface Credentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/auth';
  private username: string = '';

  constructor(private http: HttpClient) {
  }

  register(user: User) : Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(credentials: Credentials): Observable<any> {
    this.username = credentials.username;
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  getUsername(): string {
    return this.username;
  }
}
