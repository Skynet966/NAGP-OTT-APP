import { Router } from '@angular/router';
import { MoviesService } from './../../../../shared/services/movies.service';
import { SearchService } from './../../../../shared/services/search.service';
import { IMovie } from './../../../../media/movies/model/IMovie.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export class SearchComponent implements OnInit {
  searchedMovieResults: IMovie[] = [];
  constructor(
    public searchService: SearchService,
    public movieService: MoviesService,
    private router: Router
  ) {
    searchService.serachTextChanged.subscribe((searchText: string) => {
      this.searchedMovieResults = this.movieService.movies.filter(
        (movies) => movies.title.toLowerCase() === searchText.toLowerCase()
      );
    });
  }
  clearSearch(title: string) {
    this.searchedMovieResults = [];
    this.router.navigate(['/Movies/' + title]);
  }
  ngOnInit(): void {}
}
