import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CompletedAssignmentsService } from '../services/completed-assignments.service';
import { CommonModule, DatePipe } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-completed-assignments',
  standalone: true,
  imports: [RouterModule, HttpClientModule, CommonModule],
  templateUrl: './completed-assignments.component.html',
  styleUrl: './completed-assignments.component.css',
  providers: [DatePipe]
})
export class CompletedAssignmentsComponent implements OnInit {
  assignments: any[] = [];
  completedAssignments: any[] = [];
  userId: string | null = null;

  constructor(private completedAssignmentsService: CompletedAssignmentsService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadAssignments();

    this.userId = this.authService.getUserId();
    console.log('Logged-in User ID:', this.userId);
  }

  loadAssignments(): void {
    this.completedAssignmentsService.getCompletedAssignments().subscribe(
      data => {
        console.log('Raw Data:', data);
        this.assignments = data;
        this.filterAvailableAssignments();
        console.log('Filtered Assignments:', this.completedAssignments);
      },
      error => {
        console.error('Error loading assignments:', error);
      }
    );
  }

  filterAvailableAssignments(): void {
    this.completedAssignments = this.assignments.filter(assignment => assignment.status === 'Completed');
  }
}
