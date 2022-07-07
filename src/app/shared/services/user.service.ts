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
  users: User[] = usersData;
  addUser(name: string, email: string, password: string) {
    let newUser: User = {
      name: name,
      email: email,
      password: password,
      movies: {
        watched: [],
        favorite: [],
        watchLater: [],
      },
      isPrime: false,
      isAdmin: false,
    };
    this.users.push(newUser);
    this.useRegistred.emit(true);
  }
  updateUser(user: User) {
    let index = this.users.findIndex((x) => x.email === user.email);
    if (index > -1) {
      this.users[index] = user;
    }
  }
}
