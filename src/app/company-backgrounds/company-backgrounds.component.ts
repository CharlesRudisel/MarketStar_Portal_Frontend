import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-company-backgrounds',
  standalone: true,
  imports: [RouterModule, HttpClientModule, CommonModule],
  templateUrl: './company-backgrounds.component.html',
  styleUrls: ['./company-backgrounds.component.css']
})
export class CompanyBackgroundsComponent implements OnInit {
  clients: any[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe(
      data => {
        this.clients = data;
      },
      error => {
        console.error('Error retrieving clients:', error);
      }
    );
  }
}
