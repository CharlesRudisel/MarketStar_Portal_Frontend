import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap ,catchError  } from 'rxjs';
import { AuthService } from './auth.service'; // Adjust the import path as necessary
import {throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AvailableAssignmentsService {
  //private baseUrl = 'https://spring-app-20240712213542.wonderfulisland-fee7ef32.eastus2.azurecontainerapps.io/api/assignments/available';
  //private baseUrl = 'http://localhost:8080/api/assignments/available'
  // private baseUrl = 'https://upwork-backend-8-33e3fb0de941.herokuapp.com/api/assignments/available'
  private baseUrl = "https://localhost:8443/api/assignments/available";
  

  constructor(private http: HttpClient, private authService: AuthService) {}

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something bad happened; please try again later.'));
}

  getAllAssignments(): Observable<any> {

    const user = this.authService.getUser();
    console.log(user);
    
    // Safely accessing the userId using optional chaining
    const userId = user?.userId;
    console.log('User ID:', userId);
    
    if (!userId) {
      return throwError(() => new Error("User is not logged in!"));
    }

    return this.http.get(`${this.baseUrl}`).pipe(
      tap((response: any) => console.log('API Response:', response)),
      catchError(this.handleError)
    );
  }

  updateAssignmentStatus(assignmentId: number, status: string): Observable<any> {

    //alert(userId)
    const user = this.authService.getUser();
    console.log(user);
    
    // Safely accessing the userId using optional chaining
    const userId2 = user?.userId;
    console.log('User ID:', userId2);
    
    
    if (!userId2) {
      return throwError(() => new Error("User is not logged in!"));
    }
    return this.http.put<any>(`${this.baseUrl}/${assignmentId}/status/${status}/${userId2}`, { status, userId2 } , {responseType : 'text' as 'json'});
  }
}
