import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movies/model/movie.model';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.sass'],
})
export class MediaCardComponent implements OnInit {
  @Input()
  movie!: Movie;

  constructor() {}

  ngOnInit(): void {}
}
