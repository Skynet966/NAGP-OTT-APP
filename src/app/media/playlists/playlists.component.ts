import { Router } from '@angular/router';
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
  watchLaterMovies: IMovie[] = [];
  watchedMovies: IMovie[] = [];
  favoritesMovies: IMovie[] = [];

  constructor(
    public authUser: AuthUser,
    public moviesServices: MoviesService,
    private router: Router
  ) {
    authUser.logoutStatus.subscribe((value) =>
      this.router.navigate(['/show_alunos'])
    );
    if (authUser.user && authUser.user.movies) {
      if (authUser.user.movies.favorite.length) {
        authUser.user.movies.favorite.forEach((title) => {
          let movie = moviesServices.movies.find((x) => x.title === title);
          if (movie) {
            this.favoritesMovies.push(movie);
          }
        });
      }
      if (authUser.user.movies.watchLater.length) {
        authUser.user.movies.watchLater.forEach((title) => {
          let movie = moviesServices.movies.find((x) => x.title === title);
          if (movie) {
            this.watchLaterMovies.push(movie);
          }
        });
      }
      if (authUser.user.movies.watched.length) {
        authUser.user.movies.watched.forEach((title) => {
          let movie = moviesServices.movies.find((x) => x.title === title);
          if (movie) {
            this.watchedMovies.push(movie);
          }
        });
      }
    }
  }
  ngOnInit(): void {
    console.log(this.authUser.user?.movies);
  }
}
