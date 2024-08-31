import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AvailableAssignmentsService } from '../services/available-assignments.service';
import { CommonModule, DatePipe } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { ReusableCardComponent } from '../components/reusable-card/reusable-card.component'; 
import { TopNavComponent } from '../components/top-nav/top-nav.component';

@Component({
  selector: 'app-available-assignments',
  standalone: true,
  imports: [RouterModule, HttpClientModule, CommonModule,ReusableCardComponent , TopNavComponent],
  templateUrl: './available-assignments.component.html',
  styleUrls: ['./available-assignments.component.css'],
  providers: [DatePipe]
})
export class AvailableAssignmentsComponent implements OnInit {
  assignments: any[] = [];
  availableAssignments: any[] = [];
  userId: string | null = null;
  loading : boolean = false;
  successMessage : string = '';

  constructor(private availableAssignmentsService: AvailableAssignmentsService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadAssignments();

    this.userId = this.authService.getUserId();
    console.log('Logged-in User ID:', this.userId);
  }

  loadAssignments(): void {
    this.availableAssignmentsService.getAllAssignments().subscribe(
      data => {
        console.log('Raw Data:', data);
        this.assignments = data;
        this.filterAvailableAssignments();
        console.log('Filtered Assignments:', this.availableAssignments);
      },
      error => {
        console.error('Error loading assignments:', error);
      }
    );
  }

  filterAvailableAssignments(): void {
    this.availableAssignments = this.assignments.filter(assignment => assignment.status === 'Available');
  }

  claimAssignment(assignmentId: number): void {
    this.loading = true;
    this.successMessage = '';

    this.availableAssignmentsService.updateAssignmentStatus(assignmentId, 'In Progress').subscribe(
        response => {
            console.log('Assignment status updated successfully', response);
            this.loading = false;
            this.successMessage = "Assignment Claimed Successfully!";
            // Optionally, refresh the list of assignments
            this.loadAssignments();
            this.clearSuccessMessage();
        },
        error => {
            console.error('Error updating assignment status', error);
            this.loading = false;
            this.successMessage = "Something went wrong!";
        }
    );
}

  clearSuccessMessage() : void{
    setTimeout(() => {
      this.successMessage = '';
    },3000);
  }
}
