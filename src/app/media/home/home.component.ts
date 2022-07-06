import { CategoriesService } from './../../shared/services/categories.service';
import { MoviesService } from './../../shared/services/movies.service';
import { IMovie } from './../movies/model/IMovie.interface';
import { Component, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  movies: IMovie[] = [];
  category: string = '';

  constructor(
    public moviesService: MoviesService,
    categoryService: CategoriesService
  ) {
    this.movies = moviesService.movies.filter(
      (movie) => movie.genre.indexOf(categoryService.selected) > 0
    );
    this.category = categoryService.selected;
    categoryService.selectedCategoryChanged.subscribe(() => {
      this.category = categoryService.selected;
      this.updateMovies();
    });
  }

  updateMovies() {
    this.movies = this.moviesService.movies.filter(
      (movie) => movie.genre.indexOf(this.category) > 0
    );
  }

  ngOnInit(): void {}
}
