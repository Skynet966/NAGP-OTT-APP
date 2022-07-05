import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [
    {
      name: 'Wall-e',
      description:
        'It is a movie about a robot that has been abandandent by humna civilization.',
      genre: 'action',
      imdbRatings: 7,
      language: 'english',
      title: 'movie',
      image: 'https://progression-studios.com/skrn/images/demo/listing-11.jpg',
    },
    {
      name: 'Hungama',
      description: 'm nhi dasha gaa!',
      genre: 'comdey',
      imdbRatings: 5,
      language: 'hindi',
      title: 'movie',
      image: 'https://progression-studios.com/skrn/images/demo/listing-11.jpg',
    },
    {
      name: 'Khiladi',
      description: 'm nhi dasha gaa!',
      genre: 'romantic',
      imdbRatings: 3,
      language: 'hindi',
      title: 'movie',
      image: 'https://progression-studios.com/skrn/images/demo/listing-11.jpg',
    },
    {
      name: 'Double Dhammal',
      description: 'm nhi dasha gaa!',
      genre: 'comdey',
      imdbRatings: 9,
      language: 'hindi',
      title: 'movie',
      image: 'https://progression-studios.com/skrn/images/demo/listing-11.jpg',
    },
    {
      name: 'PK',
      description: 'm nhi dasha gaa!',
      genre: 'comdey, action',
      imdbRatings: 6.5,
      language: 'hindi',
      title: 'movie',
      image: 'https://progression-studios.com/skrn/images/demo/listing-11.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
