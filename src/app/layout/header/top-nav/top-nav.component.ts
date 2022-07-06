import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.sass'],
})
export class TopNavComponent implements OnInit {
  @Output() searchText: EventEmitter<string> = new EventEmitter();
  constructor() {}
  onSearchChange(event: Event) {
    this.searchText.emit((event.target as HTMLInputElement).value);
  }

  ngOnInit(): void {}
}
