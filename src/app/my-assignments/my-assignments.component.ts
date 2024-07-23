import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CompletedAssignmentsService } from '../services/completed-assignments.service';
import { CommonModule, DatePipe } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { MyAssignmentsService } from '../services/my-assignments.service';

@Component({
  selector: 'app-my-assignments',
  standalone: true,
  imports: [RouterModule, HttpClientModule, CommonModule],
  templateUrl: './my-assignments.component.html',
  styleUrl: './my-assignments.component.css',
  providers: [DatePipe]
})
export class MyAssignmentsComponent implements OnInit{
  assignments: any[] = [];
  myAssignments: any[] = [];
  userId: string | null = null;

  constructor(private myAssignmentsService: MyAssignmentsService , private authService: AuthService) {}

  ngOnInit(): void {
    this.loadAssignments();

    this.userId = this.authService.getUserId();
    console.log('Logged-in User ID:', this.userId);
  }

  loadAssignments(): void {
    this.myAssignmentsService.getCompletedAssignments().subscribe(
      data => {
        console.log('Raw Data:', data);
        this.assignments = data;
        this.filterAvailableAssignments();
        console.log('Filtered Assignments:', this.myAssignments);
      },
      error => {
        console.error('Error loading assignments:', error);
      }
    );
  }

  filterAvailableAssignments(): void {
    //this.myAssignments = this.assignments.filter(assignment => assignment.status == '');
  }
}
