// src/app/components/file-list/file-list.component.ts
import { Component } from '@angular/core';
import { FileService } from '../services/filestack-service.service';
import { CommonModule, DatePipe } from '@angular/common';
import { NgFor } from '@angular/common';
//import { FileService } from '../../services/file.service';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule],
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
        //console.log('Files retrieved successfully', response);
      },
      error: (error) => {
        //console.error('Error retrieving files', error);
      }
    });
  }

  onRetrieveFiles(): void {
    this.getFileUrls(this.clientId);
  }
}
