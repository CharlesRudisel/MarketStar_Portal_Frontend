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

interface AuthResponse {
  id: string;
  username: string;
  email: string;
  accessToken: string;
  userId: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //private baseUrl = 'http://spring-app-20240712213542.wonderfulisland-fee7ef32.eastus2.azurecontainerapps.io/auth';
  //private baseUrl = 'https://localhost:8080/auth'
    //private baseUrl = 'https://upwork-backend-8-33e3fb0de941.herokuapp.com/auth'
    baseUrl= 'https://localhost:8443/auth'

  private tokenKey = 'authToken';
  private userKey = 'authUser';

  constructor(private http: HttpClient) { }

  register(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(credentials: Credentials): Observable<any> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/authenticate`, credentials).pipe(
      tap((response: AuthResponse) => {
        console.log('Response from backend:', response);
        const token = response.accessToken;
        console.log('Received token:', token); // Debugging line
        this.setToken(token);
        this.setUser(response);
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

  private setUser(user: AuthResponse): void {
    if (user) {
      console.log('Storing user:', user); // Debugging line
      localStorage.setItem(this.userKey, JSON.stringify(user));
    } else {
      console.error('No user to store');
      localStorage.removeItem(this.userKey);
    }
  }

  getToken(): string | null {
    console.log("Get token function activated: " + this.tokenKey)
    return localStorage.getItem(this.tokenKey);
  }

  getUserId(): string | null {
    const user = this.getUser();
    // console.log("==========" + user?.userId);
    return user ? user.id : null;
  }

  getUser(): AuthResponse | null {
    const userJson = localStorage.getItem(this.userKey);
    console.log("++++++++++++" + userJson )
    return userJson ? JSON.parse(userJson) : null;
  }

  logout(): void {
    this.setToken(null);
    //this.setUser(null);
  }
}
