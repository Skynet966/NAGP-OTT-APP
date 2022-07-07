import {
  Injectable,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { User, UserService } from './user.service';

@Injectable()
export class AuthUser implements OnChanges {
  @Output() loginStatus: EventEmitter<boolean> = new EventEmitter();
  @Output() logoutStatus: EventEmitter<boolean> = new EventEmitter();
  @Output() membershipStatus: EventEmitter<boolean> = new EventEmitter();
  public user: User | undefined;

  constructor(public userService: UserService) {
    let loggedUser = sessionStorage.getItem('user');
    if (loggedUser) {
      this.user = this.userService.users.find(
        (user) => user.email === loggedUser
      );
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.user) this.userService.updateUser(this.user);
  }

  loginUser(email: string, password: string): boolean {
    this.user = this.userService.users.find(
      (user) => user.email === email && user.password === password
    );
    if (this.user) {
      sessionStorage.setItem('user', this.user.email);
    }
    this.loginStatus.emit(this.user !== undefined);
    return this.user !== undefined;
  }

  logoutUser() {
    this.user = undefined;
    this.logoutStatus.emit(true);
    sessionStorage.clear();
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

  togglePrimeMembership(status: boolean) {
    if (this.user) {
      this.user.isPrime = status;
    }
    this.membershipStatus.emit(status);
  }

  getAuthStatus() {
    return this.user?.email ? true : false;
  }
}
