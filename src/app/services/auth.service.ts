import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface User {
  username: string;
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
  private tokenKey = 'authToken';

  constructor(private http: HttpClient) { }

  register(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(credentials: Credentials): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials).pipe(
      tap((response: any) => {
        const token = response.token;
        this.setToken(token);
      })
    );
  }

  private setToken(token: string | null): void {
    if (token) {
      localStorage.setItem(this.tokenKey, token);
    } else {
      localStorage.removeItem(this.tokenKey);
    }
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  logout(): void {
    this.setToken(null);
  }
}
