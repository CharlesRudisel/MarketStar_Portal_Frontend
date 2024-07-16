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

  private baseUrl = 'https://spring-app-20240712213542.wonderfulisland-fee7ef32.eastus2.azurecontainerapps.io/auth';
  private tokenKey = 'authToken';

  constructor(private http: HttpClient) { }

  register(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(credentials: Credentials): Observable<any> {
    return this.http.post(`${this.baseUrl}/authenticate`, credentials).pipe(
      tap((response: any) => {
        console.log('Response from backend:', response);
        const token = response.accessToken;
        console.log('Received token:', token); // Debugging line
        this.setToken(token);
      })
    );
  }

  private setToken(token: string | null): void {
  if (token) {
    console.log('Storing token:', token); // Debugging line
    localStorage.setItem(this.tokenKey, token);
  } else {
    console.error('No token to store');
    localStorage.removeItem(this.tokenKey);
  }
}

  getToken(): string | null {
    console.log("Get token function activated: " + this.tokenKey)
    return localStorage.getItem(this.tokenKey);
  }

  logout(): void {
    this.setToken(null);
  }
}
