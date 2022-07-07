import { UtilityHelper } from './../helpers/utility.helpers';
import { IMovie, IReview } from './../../media/movies/model/IMovie.interface';
import moviesData from '../data/movies.data.json';
import { Injectable } from '@angular/core';

interface MovieData {
  id: number;
  title: string;
  year: string;
  runtime: string;
  genres: string[];
  director: string;
  actors: string;
  plot: string;
  posterUrl: string;
}

@Injectable()
export class MoviesService {
  movies: IMovie[] = [];
  constructor(public utility: UtilityHelper) {
    this.movies = moviesData.map(
      (m: MovieData): IMovie => ({
        name: m.title,
        description: m.plot,
        genre: m.genres,
        image: m.posterUrl,
        imdbRatings: utility.getRandomFloat(1, 10, 1),
        language: ['english'],
        title: m.title,
        reviews: [],
      })
    );
  }
  addMovieReview(review: IReview, title: string) {
    let index = this.movies.findIndex((x) => x.title === title);
    if (index > -1) {
      this.movies[index].reviews.push(review);
    }
  }
}
