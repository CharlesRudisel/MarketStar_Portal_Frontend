import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = 'https://spring-app-20240712213542.wonderfulisland-fee7ef32.eastus2.azurecontainerapps.io/api/clients';

  constructor(private http: HttpClient) {}

  getClients(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}
