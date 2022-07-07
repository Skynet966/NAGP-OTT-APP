import { SearchService } from './../../../shared/services/search.service';
import { AuthUser } from './../../../shared/services/auth.service';
import { User } from './../../../shared/services/user.service';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.sass'],
})
export class TopNavComponent implements OnInit, OnChanges {
  searchText: string = '';
  user: User | undefined;
  primeStatus: boolean = false;
  isDropdownOpen: boolean = false;
  constructor(public authUser: AuthUser, public searchService: SearchService) {
    this.user = authUser.user;
    if (this.authUser.user?.name) {
      this.primeStatus = this.authUser.user.isPrime;
    }
    this.authUser.loginStatus.subscribe(() => {
      this.user = this.authUser.user;
      this.isDropdownOpen = false;
    });
    this.authUser.membershipStatus.subscribe(
      () =>
        (this.primeStatus = this.authUser.user
          ? this.authUser.user.isPrime
          : false)
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.isDropdownOpen = false;
  }
  activatePrime(event: Event) {
    let isChecked = (event.target as HTMLInputElement).checked;
    this.authUser.togglePrimeMembership(isChecked);
    this.authUser.membershipStatus.subscribe((status) =>
      this.user ? (this.user.isPrime = status) : ''
    );
    this.isDropdownOpen = false;
  }
  onSearchChange() {
    this.searchService.serachTextChanged.emit(this.searchText);
  }
  onToggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  logoutUser() {
    this.authUser.logoutUser();
    this.isDropdownOpen = false;
    this.user = undefined;
  }
  ngOnInit(): void {}
}
