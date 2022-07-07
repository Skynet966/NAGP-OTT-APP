import { AuthUser } from './../shared/services/auth.service';
import { UserService } from './../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  constructor(public authUser: AuthUser, private router: Router) {}

  loginUser() {
    if (this.username && this.password) {
      if (this.authUser.loginUser(this.username, this.password)) {
        console.log('user logged in');
        this.router.navigate(['/']);
      } else {
        console.log('user and password might not correct!!');
      }
    }
  }
  ngOnInit(): void {}
}
