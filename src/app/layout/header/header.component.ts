import { IMovie } from './../../media/movies/model/IMovie.interface';
import { MoviesService } from './../../shared/services/movies.service';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit, OnChanges {
  searchText: string = '';
  movies: IMovie[];
  constructor(public moviesService: MoviesService) {
    this.movies = moviesService.movies;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.searchText);
  }

  ngOnInit(): void {}
}
