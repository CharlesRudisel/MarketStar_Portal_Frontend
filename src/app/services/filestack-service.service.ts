// src/app/services/file.service.ts
import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import * as filestack from 'filestack-js';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private apiUrl = '/api/documents'; // Adjust the URL if needed
  //private baseUrl = 'https://spring-app-20240712213542.wonderfulisland-fee7ef32.eastus2.azurecontainerapps.io';
  private baseUrl = 'http://localhost:8080'
  private client = filestack.init('Ai1tHENWgRYeArXn9HJrNz');

  constructor(private http: HttpClient) {}

  openPicker() {
    //alert("TEST")
    return new Promise((resolve, reject) => {
      this.client.picker({
        onUploadDone: (result) => {
          resolve(result);
          //alert("TEST 2")
        }
      }).open();
    });
  }

  getUploadedFileUrl(result:any): string {
    //alert("TEST 3")
    return result.filesUploaded[0].url;
    
  }

  saveFileUrl(clientId: number, fileUrl: string, fileName: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = { clientId, fileUrl, fileName};

      console.log('Request Body:', body); // Log the request body

    return this.http.post(`http://localhost:8080/api/documents/upload-url/1`, JSON.stringify(body), { headers });
  }

  getFileUrls(clientId: number): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/api/documents/client/1`);
  }
}
