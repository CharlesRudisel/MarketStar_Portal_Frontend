import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user: any = {};

  constructor(private authService: AuthService, private router:Router) {
  }

  onRegister() {

    this.authService.register(this.user).subscribe(() => {
      this.router.navigate(['/login']);
    }, error => {
      console.error('Registration error:', error);
    })
  }
}
