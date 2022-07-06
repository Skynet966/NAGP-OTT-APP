import { CategoriesService } from './../../shared/services/categories.service';
import { IMovie } from './model/IMovie.interface';
import { MoviesService } from './../../shared/services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass'],
})
export class MoviesComponent implements OnInit {
  movies: IMovie[] = [];
  categories: string[];
  constructor(
    moviesService: MoviesService,
    categoriesService: CategoriesService
  ) {
    this.movies = moviesService.movies;
    this.categories = categoriesService.categories;
  }
  ngOnInit(): void {}
}
