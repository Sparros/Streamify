import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../service/user.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginValid = true;  
  public username: string = ''; 
  public password: string = ''; 

  constructor(private router: Router, private userserv: UsersService) {}

  /**
   * When the user clicks on the login button, validate the credentials.
   * If valid, redirect to the home page. Otherwise, display an error message.
   */
  public onSubmit(): void {
    if (!this.username || !this.password) {
      this.loginValid = false;
      return;
    }

    this.userserv.getUserByUsername(this.username).subscribe({
      next: (users: any[]) => {
        const user = users[0];
        if (user && user.password === this.password) {
          localStorage.setItem('username', this.username);
          this.router.navigate(['/home']);
        } else {
          this.loginValid = false;
        }
      },
      error: () => {
        this.loginValid = false;
      }
    });
  }
}
