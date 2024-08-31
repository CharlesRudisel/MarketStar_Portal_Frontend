import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";
import { RouterModule } from '@angular/router';
import { TopNavComponent } from '../components/top-nav/top-nav.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule,TopNavComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  username: string = '';

  constructor(private authService: AuthService) {
   // this.username = this.authService.getUsername() || ''; // Provide a default value if null
  }
}
