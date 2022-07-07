import { SearchService } from './../../shared/services/search.service';
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

  constructor(public searchService: SearchService) {}
  ngOnInit(): void {}
}
