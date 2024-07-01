import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]  // Add FormsModule here
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister(): void {
    this.authService.register({ username: this.username, email: this.email, password: this.password }).subscribe(
      () => {
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Registration failed', error);
      }
    );
  }
}
