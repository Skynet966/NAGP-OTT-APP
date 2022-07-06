import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable()
export class CategoriesService {
  categories: string[] = [
    'Comedy',
    'Fantasy',
    'Drama',
    'Adventure',
    'Thriller',
    'Animation',
    'Action',
    'Romance',
    'Sci-Fi',
    'Western',
    'Horror',
    'Family',
    'Mystery',
    'Biography',
    'History',
    'War',
    'Crime',
    'Film-Noir',
    'Musical',
    'Music',
    'Sport',
  ];
  @Output() selectedCategoryChanged: EventEmitter<any> = new EventEmitter();
  selected: string = this.categories[0];

  changeSelectedCategory(index: number = 0) {
    this.selected = this.categories[index];
    this.selectedCategoryChanged.emit();
  }
}
