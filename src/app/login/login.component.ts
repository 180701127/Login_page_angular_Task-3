import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public email: string = '';
  public password: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.email && this.password) {
      // Assuming you have a valid authentication logic here
      const userName = this.email.split('@')[0];
      this.router.navigate(['/welcome', userName]);
    }
  }

}
