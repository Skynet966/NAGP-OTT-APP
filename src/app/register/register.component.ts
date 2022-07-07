import { Router } from '@angular/router';
import { UserService } from './../shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';
  constructor(public userService: UserService, private router: Router) {}
  registerUser() {
    if (this.name && this.email && this.password) {
      this.userService.addUser(this.name, this.email, this.password);
      this.router.navigate(['/login']);
    }
  }
  ngOnInit(): void {}
}
