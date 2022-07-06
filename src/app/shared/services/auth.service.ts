import { Injectable, Output, EventEmitter } from '@angular/core';
import { User, UserService } from './user.service';

@Injectable()
export class AuthUser {
  @Output() loginStatus: EventEmitter<boolean> = new EventEmitter();
  @Output() logoutStatus: EventEmitter<boolean> = new EventEmitter();
  public user: User | undefined;

  constructor(public userService: UserService) {}

  loginUser(email: string, password: string): boolean {
    this.user = this.userService.users.find(
      (user) => user.email === email && user.password === password
    );
    this.loginStatus.emit(this.user !== undefined);
    return this.user !== undefined;
  }

  logoutUser() {
    this.user = undefined;
    this.logoutStatus.emit(this.user === undefined);
  }

  addWatchLater(title: string) {
    if (this.user?.isPrime) {
      this.user.movies.watchLater.push(title);
      return true;
    }
    return false;
  }

  addFavorite(title: string) {
    if (this.user?.email) {
      this.user.movies.favorite.push(title);
      return true;
    }
    return false;
  }

  addWatched(title: string) {
    if (this.user?.email) {
      this.user.movies.watched.push(title);
      return true;
    }
    return false;
  }
}
