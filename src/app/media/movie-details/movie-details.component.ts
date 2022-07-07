import { SearchService } from './../../shared/services/search.service';
import { AuthUser } from './../../shared/services/auth.service';
import { MoviesService } from './../../shared/services/movies.service';
import { IMovie, IReview } from './../movies/model/IMovie.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.sass'],
})
export class MovieDetailsComponent implements OnInit {
  selectedMovie: IMovie | undefined;
  watchedLater: boolean = false;
  favMovie: boolean = false;
  watched: boolean = false;
  review: string = '';
  constructor(
    private route: ActivatedRoute,
    public movieService: MoviesService,
    public authUser: AuthUser,
    private router: Router,
    public searchService: SearchService
  ) {
    if (authUser.user?.name && this.selectedMovie?.title) {
      this.watched = authUser.user.movies.watched.includes(
        this.selectedMovie.title
      );
      this.watchedLater = authUser.user.movies.watchLater.includes(
        this.selectedMovie.title
      );
      this.favMovie = authUser.user.movies.favorite.includes(
        this.selectedMovie.title
      );
    }
  }

  ngOnInit(): void {
    let selectedMovieTitle = this.route.snapshot.paramMap.get('title');
    this.selectedMovie = this.movieService.movies.find(
      (movie) => movie.title === selectedMovieTitle
    );
    this.refreshView();
  }

  onWatchLater() {
    if (this.authUser.user?.name && this.selectedMovie) {
      let index = this.authUser.user.movies.watchLater.findIndex(
        (value) => value === this.selectedMovie?.title
      );
      if (index > -1) {
        this.authUser.user.movies.watchLater.splice(index);
      } else {
        this.authUser.user.movies.watchLater.push(this.selectedMovie.title);
      }
    } else if (!this.authUser.user?.name && this.selectedMovie) {
      this.router.navigate(['/login']);
    }
    this.refreshView();
  }
  onFavMovie() {
    if (this.authUser.user?.name && this.selectedMovie) {
      let index = this.authUser.user.movies.favorite.findIndex(
        (value) => value === this.selectedMovie?.title
      );
      if (index > -1) {
        this.authUser.user.movies.favorite.splice(index);
      } else {
        this.authUser.user.movies.favorite.push(this.selectedMovie.title);
      }
    } else if (!this.authUser.user?.name && this.selectedMovie) {
      this.router.navigate(['/login']);
    }
    this.refreshView();
  }
  onWatched() {
    if (this.authUser.user?.isPrime && this.selectedMovie?.title) {
      if (
        !this.authUser.user.movies.watched.includes(this.selectedMovie.title)
      ) {
        this.authUser.user.movies.watched.push(this.selectedMovie.title);
      }
      let index = this.authUser.user.movies.watchLater.findIndex(
        (value) => value === this.selectedMovie?.title
      );
      if (index > -1) {
        this.authUser.user.movies.watchLater.splice(index);
      }
      this.refreshView();
    } else if (!this.authUser.user?.name && this.selectedMovie) {
      this.router.navigate(['/login']);
    } else if (!this.authUser.user?.isPrime) {
      alert('Please opt prime membership to watch this movie');
    }
  }
  refreshView() {
    if (this.authUser.user?.name && this.selectedMovie?.title) {
      this.watched = this.authUser.user.movies.watched.includes(
        this.selectedMovie.title
      );
      this.watchedLater = this.authUser.user.movies.watchLater.includes(
        this.selectedMovie.title
      );
      this.favMovie = this.authUser.user.movies.favorite.includes(
        this.selectedMovie.title
      );
    }
  }

  addReview() {
    if (this.review && this.authUser.user?.email && this.selectedMovie?.title) {
      let newReview: IReview = {
        name: this.authUser.user?.name,
        email: this.authUser.user?.email,
        message: this.review,
      };
      this.movieService.addMovieReview(newReview, this.selectedMovie.title);
      let selectedMovieTitle = this.route.snapshot.paramMap.get('title');
      this.selectedMovie = this.movieService.movies.find(
        (movie) => movie.title === selectedMovieTitle
      );
      this.refreshView();
    }
  }
}
