import { MoviesService } from './../../shared/services/movies.service';
import { IMovie } from './../movies/model/IMovie.interface';
import { AuthUser } from './../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.sass'],
})
export class AddMovieComponent implements OnInit {
  name: string = 'The Test Movie';
  title: string = 'The Test Moive';
  description: string =
    'A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant';
  imdbRatings: number = 5.8;
  language: string[] = ['english,hindi'];
  genre: string[] = ['action'];
  image: string = 'assets/images/generic_movie_poster.jpg';

  constructor(
    private router: Router,
    public authUser: AuthUser,
    public movieService: MoviesService
  ) {
    authUser.logoutStatus.subscribe(() => this.router.navigate(['/']));
  }

  addNewMovie() {
    if ((this.name, this.description, this.imdbRatings)) {
      let newMovie = {
        name: this.name,
        title: this.title,
        description: this.description,
        imdbRatings: Math.round((this.imdbRatings % 10) * 10) / 10,
        language: this.language,
        genre: this.genre,
        image: this.image,
        reviews: [
          {
            name: 'satish',
            email: 'satish@gmail.com',
            message: 'This is the test review',
          },
        ],
      };
      this.movieService.movies.push(newMovie);
      this.router.navigate(['/New-Arrivals']);
    }
  }

  ngOnInit(): void {}
}
