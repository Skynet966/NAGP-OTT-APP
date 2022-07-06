import { Output, EventEmitter, Injectable } from '@angular/core';
import usersData from '../data/user.data.json';
export interface User {
  name: string;
  email: string;
  password: string;
  movies: {
    watched: string[];
    favorite: string[];
    watchLater: string[];
  };
  isPrime: boolean;
  isAdmin: boolean;
}
@Injectable()
export class UserService {
  @Output() useRegistred: EventEmitter<boolean> = new EventEmitter();
  @Output() userPrimeActivated: EventEmitter<boolean> = new EventEmitter();
  users: User[] = usersData;
  addUser(newUser: User) {
    this.users.push(newUser);
    this.useRegistred.emit(true);
  }
  togglePrimeMembership(email: string): boolean {
    let index = this.users.findIndex((x) => x.email === email);
    if (index > 0) {
      this.users[index].isPrime = !this.users[index].isPrime;
      this.userPrimeActivated.emit(true);
      return true;
    }
    this.userPrimeActivated.emit(false);
    return false;
  }
}
