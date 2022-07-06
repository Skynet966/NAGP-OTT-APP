import { CategoriesService } from './../../shared/services/categories.service';
import { Genre } from 'src/app/shared/enums/genre.enum';
import { Category } from './model/category.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass'],
})
export class CategoriesComponent implements OnInit {
  @ViewChild('widgetsContent', { read: ElementRef })
  public widgetsContent!: ElementRef<any>;
  categories: string[] = [];
  selectedCategory: number = 0;

  constructor(public categoryService: CategoriesService) {
    this.categories = categoryService.categories;
  }

  ngOnInit(): void {}

  public onCategorySelect(index: number = 0) {
    this.selectedCategory = index;
    this.categoryService.changeSelectedCategory(index);
  }

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft + 150,
      behavior: 'smooth',
    });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft - 150,
      behavior: 'smooth',
    });
  }
}
