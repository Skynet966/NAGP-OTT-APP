import { Genre } from './../../../shared/enums/genre.enum';
import { Language } from 'src/app/shared/enums/language.enum';
import { IMovie } from './IMovie.interface';
export class Movie {
  constructor(
    public name: string,
    public title: string,
    public description: string,
    public imdbRatings: number,
    public language: string[],
    public genre: string[],
    public image: string = 'https://progression-studios.com/skrn/images/demo/listing-6.jpg'
  ) {
    this.name = name;
    this.title = title;
    this.description = description;
    this.imdbRatings = imdbRatings % 10;
    this.language = language;
    this.genre = genre;
    this.image = image;
  }
}
