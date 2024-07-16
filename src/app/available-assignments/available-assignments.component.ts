import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AvailableAssignmentsService } from '../services/available-assignments.service';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-available-assignments',
  standalone: true,
  imports: [RouterModule, HttpClientModule, CommonModule],
  templateUrl: './available-assignments.component.html',
  styleUrls: ['./available-assignments.component.css'],
  providers: [DatePipe]
})
export class AvailableAssignmentsComponent implements OnInit {
  assignments: any[] = [];
  availableAssignments: any[] = [];

  constructor(private availableAssignmentsService: AvailableAssignmentsService) {}

  ngOnInit(): void {
    this.loadAssignments();
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
    this.availableAssignments = this.assignments.filter(assignment => assignment.status == 'Available');
  }
}
