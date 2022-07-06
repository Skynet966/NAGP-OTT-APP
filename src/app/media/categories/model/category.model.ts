import { Genre } from 'src/app/shared/enums/genre.enum';
import { ICategory } from './category.interface';
export class Category implements ICategory {
  constructor(public title: Genre, public image: string) {
    this.title = title;
    this.image = image;
  }
}
