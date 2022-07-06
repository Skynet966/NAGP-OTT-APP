import { MoviesService } from './../../shared/services/movies.service';
import { IMovie } from './../movies/model/IMovie.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.sass'],
})
export class MovieDetailsComponent implements OnInit {
  selectedMovie: IMovie | undefined;
  constructor(
    private route: ActivatedRoute,
    public movieService: MoviesService
  ) {}

  ngOnInit(): void {
    let selectedMovieTitle = this.route.snapshot.paramMap.get('title');
    this.selectedMovie = this.movieService.movies.find(
      (movie) => movie.title === selectedMovieTitle
    );
  }
}
