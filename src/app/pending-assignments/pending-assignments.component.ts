import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PendingAssignmentsService } from '../services/pending-assignments.service';
import { CommonModule, DatePipe } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-pending-assignments',
  standalone: true,
  imports: [RouterModule, HttpClientModule, CommonModule],
  templateUrl: './pending-assignments.component.html',
  styleUrl: './pending-assignments.component.css',
  providers: [DatePipe]
})
export class PendingAssignmentsComponent implements OnInit {
  assignments: any[] = [];
  pendingAssignments: any[] = [];
  userId: string | null = null;
  usernames: string[] = []; // Array to store usernames

  constructor(private pendingAssignmentsService: PendingAssignmentsService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadAssignments();

    this.userId = this.authService.getUserId();
    console.log('Logged-in User ID:', this.userId);
  }

  loadAssignments(): void {
    this.pendingAssignmentsService.getPendingAssignments().subscribe(
      data => {
        console.log('Raw Data:', data);
        this.assignments = data;
        this.filterAvailableAssignments();
        //this.extractUsernames();
        console.log('Filtered Assignments:', this.pendingAssignments);
        console.log('Usernames:', this.usernames);
      },
      error => {
        console.error('Error loading assignments:', error);
      }
    );
  }

  filterAvailableAssignments(): void {
    this.pendingAssignments = this.assignments.filter(assignment => assignment.status === 'Pending');
  }

  extractUsernames(): void {
    this.usernames = this.assignments.map(assignment => assignment.user.username);
  }
}
