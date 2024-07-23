import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AvailableAssignmentsService {
  private baseUrl = 'https://spring-app-20240712213542.wonderfulisland-fee7ef32.eastus2.azurecontainerapps.io/api/assignments/available';

  constructor(private http: HttpClient) {}

  getAllAssignments(): Observable<any> {
    return this.http.get(`${this.baseUrl}`).pipe(
      tap((response: any) => console.log('API Response:', response))
    );
  }
}
