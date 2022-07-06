import { MoviesService } from './../../shared/services/movies.service';
import { IMovie } from './../movies/model/IMovie.interface';
import { Movie } from './../movies/model/movie.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.sass'],
})
export class NewArrivalsComponent implements OnInit {
  movies: IMovie[];
  constructor(public movieService: MoviesService) {
    this.movies = movieService.movies.slice(1).slice(-12).reverse();
  }

  ngOnInit(): void {}
}
