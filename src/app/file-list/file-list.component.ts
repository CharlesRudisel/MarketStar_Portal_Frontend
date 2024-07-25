import { Component } from '@angular/core';
import { FileService } from '../services/filestack-service.service';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UploadButtonComponent } from '../upload-button/upload-button.component';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule, UploadButtonComponent], // Import UploadButtonComponent here
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent {
  files: any[] = [];
  clientId: number = 1; // Replace with actual client ID

  constructor(private fileService: FileService) {}

  ngOnInit(): void {
    this.onRetrieveFiles();
  }

  getFileUrls(clientId: number): void {
    this.fileService.getFileUrls(clientId).subscribe({
      next: (response) => {
        this.files = response;
        console.log('Files retrieved successfully', response);
      },
      error: (error) => {
        console.error('Error retrieving files', error);
      }
    });
  }

  onRetrieveFiles(): void {
    this.getFileUrls(this.clientId);
  }
}
