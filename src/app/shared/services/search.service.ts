import { IMovie } from './../../media/movies/model/IMovie.interface';
import moviesData from '../data/movies.data.json';
import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class SearchService {
  @Output() serachTextChanged: EventEmitter<string> = new EventEmitter();
  @Output() clearSearchBar: EventEmitter<any> = new EventEmitter();
  constructor() {}
}
