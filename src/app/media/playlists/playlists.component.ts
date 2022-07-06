import { MoviesService } from './../../shared/services/movies.service';
import { AuthUser } from './../../shared/services/auth.service';
import { IMovie } from './../movies/model/IMovie.interface';
import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.sass'],
})
@Injectable()
export class PlaylistsComponent implements OnInit {
  watchLaterMovies: IMovie[] | undefined;
  watchedMovies: IMovie[] | undefined;
  favoritesMovies: IMovie[] | undefined;

  constructor(public authUser: AuthUser, public moviesServices: MoviesService) {
    authUser.user?.movies.watchLater.forEach((movieTitle) => {
      let findedMovie = moviesServices.movies.find(
        (movie) => movie.title === movieTitle
      );
      if (findedMovie) this.watchLaterMovies?.push(findedMovie);
    });
    authUser.user?.movies.watched.forEach((movieTitle) => {
      let findedMovie = moviesServices.movies.find(
        (movie) => movie.title === movieTitle
      );
      if (findedMovie) this.watchedMovies?.push(findedMovie);
    });
    authUser.user?.movies.favorite.forEach((movieTitle) => {
      let findedMovie = moviesServices.movies.find(
        (movie) => movie.title === movieTitle
      );
      if (findedMovie) this.favoritesMovies?.push(findedMovie);
    });
  }

  ngOnInit(): void {}
}
