import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service'; // Adjust the import path as necessary

@Injectable({
  providedIn: 'root'
})
export class MyAssignmentsService {
  private baseUrl = 'https://spring-app-20240712213542.wonderfulisland-fee7ef32.eastus2.azurecontainerapps.io/api/assignments/user';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getCompletedAssignments(): Observable<any> {
    const user = this.authService.getUser();
    console.log(user);
    
    // Safely accessing the userId using optional chaining
    const userId = user?.userId;
    console.log('User ID:', userId);
    
    if (!userId) {
      throw new Error('User is not logged in');
    }

    // Assuming you need to append 'completed' to the URL for completed assignments
    const url = `${this.baseUrl}/${userId}`; 
    console.log(url)
    return this.http.get(url).pipe(
      tap((response: any) => console.log('API Response:', response))
    );
  }
}
