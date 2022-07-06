import { AuthUser } from './../../shared/services/auth.service';
import { User } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.sass'],
})
export class SideNavComponent implements OnInit {
  user: User | undefined;
  constructor(public authUser: AuthUser) {
    this.user = authUser.user;
  }

  ngOnInit(): void {}
}
