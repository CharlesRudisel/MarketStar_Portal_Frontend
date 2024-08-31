import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CompletedAssignmentsService } from '../services/completed-assignments.service';
import { CommonModule, DatePipe } from '@angular/common';
import { AuthService } from '../services/auth.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-completed-assignments',
  standalone: true,
  imports: [RouterModule, HttpClientModule, CommonModule , FormsModule],
  templateUrl: './completed-assignments.component.html',
  styleUrl: './completed-assignments.component.css',
  providers: [DatePipe]
})
export class CompletedAssignmentsComponent implements OnInit {
  assignments: any[] = [];
  completedAssignments: any[] = [];
  userId: string | null = null;
  uniqueClients : any[] = [];
  uniqueAuthors : any[] = [];

  //filter variable
  searchQuery : string = "";
  clientQuery: string = "";
  authorQuery : string = "";
  private searchTimeout : any;

  constructor(private completedAssignmentsService: CompletedAssignmentsService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadAssignments();
    this.loadClients();

    this.userId = this.authService.getUserId();
    console.log('Logged-in User ID:', this.userId);
  }

  loadAssignments(): void {
    this.completedAssignmentsService.getCompletedAssignments().subscribe(
      data => {
        console.log('Raw Data:', data);
        this.assignments = data;
        this.filterAvailableAssignments();
        this.filterAvailableClients();
        this.filterAvailableAuthors();
        console.log('Filtered Assignments:', this.completedAssignments);
      },
      error => {
        console.error('Error loading assignments:', error);
      }
    );
  }

  loadClients() : void {
    this.completedAssignmentsService.getClients().subscribe(
      data => {
        this.uniqueClients = data;
      },
      error  => {
        console.error("Error Loading Data of All the clients : ",error);
      }
    );
  }

  onSearchQueryChange() : void{
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.filterAvailableAssignments();
    },300);
  }

  filterAvailableAssignments(): void {
    console.log("inside filter avialble" , this.assignments , this.searchQuery);
    this.completedAssignments = this.assignments.filter(assignment => assignment.status === 'Completed'  &&
                              (!this.searchQuery || assignment.blogTopic.toLowerCase().includes(this.searchQuery.toLowerCase()))
                                )

    
    
                              
  }

  filterAvailableClients() : void{
    
  }

  filterAvailableAuthors() : void{

  }


  // &&
  // assignment.clientName.toLowerCase().includes(this.clientQuery.toLowerCase()) &&
  // assignment.authorName.toLowerCase().includes(this.authorQuery.toLowerCase())
}
