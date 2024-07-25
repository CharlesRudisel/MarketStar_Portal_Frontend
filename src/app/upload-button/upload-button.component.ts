// src/app/components/upload-button/upload-button.component.ts
import { Component } from '@angular/core';
import { FileService } from '../services/filestack-service.service';


@Component({
  selector: 'app-upload-button',
  templateUrl: './upload-button.component.html',
  styleUrls: ['./upload-button.component.css']
})
export class UploadButtonComponent {

  constructor(
    private filestackService: FileService,
    private fileService: FileService
  ) {}

  upload(clientId: number, uploadedBy: string) {
    this.filestackService.openPicker().then((result:any) => {
      if (result && result.filesUploaded && result.filesUploaded.length > 0) {
        const fileUrl = this.filestackService.getUploadedFileUrl(result);
        const fileName = result.filesUploaded[0].filename;
        alert(`File uploaded: ${fileUrl}`); // Test alert
        this.saveFileUrl(clientId, fileUrl, fileName);
      } else {
        alert('No files uploaded'); // Test alert
      }
    }).catch(error => {
      console.error('Error during file upload:', error);
      alert('Error during file upload'); // Test alert
    });
  }

  saveFileUrl(clientId: number, fileUrl: string, fileName: string) {
    this.fileService.saveFileUrl(clientId, fileUrl, fileName).subscribe({
      next: (response) => {
        console.log('File URL saved successfully', response);
        alert('File URL saved successfully'); // Test alert
      },
      error: (error) => {
        console.error('Error saving file URL', error);
        alert('Error saving file URL'); // Test alert
      }
    });
  }
}
