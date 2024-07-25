import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from './auth.service'; // Adjust the import path as necessary


@Injectable({
  providedIn: 'root'
})
export class AvailableAssignmentsService {
  private baseUrl = 'https://spring-app-20240712213542.wonderfulisland-fee7ef32.eastus2.azurecontainerapps.io/api/assignments/available';
  //private baseUrl = 'http://localhost:8080'

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAllAssignments(): Observable<any> {

    const user = this.authService.getUser();
    console.log(user);
    
    // Safely accessing the userId using optional chaining
    const userId = user?.userId;
    console.log('User ID:', userId);
    
    if (!userId) {
      throw new Error('User is not logged in');
    }

    return this.http.get(`${this.baseUrl}`).pipe(
      tap((response: any) => console.log('API Response:', response))
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
      throw new Error('User is not logged in');
    }
    return this.http.put<any>(`http://localhost:8080/api/assignments/available/${assignmentId}/status/${status}/${userId2}`, { status, userId2 });
  }
}
