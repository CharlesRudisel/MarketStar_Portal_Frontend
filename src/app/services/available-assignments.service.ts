import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AvailableAssignmentsService {
  private baseUrl = 'http://localhost:8080/api/assignments';

  constructor(private http: HttpClient) {}

  getAllAssignments(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
