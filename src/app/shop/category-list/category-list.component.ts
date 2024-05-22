// import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
// import { Category } from '../../model/category.model';
// import { CategoryRepository } from '../../model/category.repository';

// @Component({
//   selector: 'category-list',
//   templateUrl: './category-list.component.html',
//   styleUrls: ['./category-list.component.css']
// })
// export class CategoryListComponent implements OnInit {

//   public selectedCategory: Category | null = null;

//   @Input() category: Category | null = null;
//   @Output() categoryChange: EventEmitter<Category> = new EventEmitter<Category>();
  
  
//   // @Output() category = new EventEmitter<Category | null>();

//   constructor(private categoryRepository: CategoryRepository) { }

//   ngOnInit() {
//   }

//   get categories(): Category[] {
//     return this.categoryRepository.getCategories();
//   }

//   // changeCategory(newCategory: Category | null = null) {
//   //   this.selectedCategory = newCategory;
//   //   this.category.emit(newCategory);
//   // }

//   changeCategory(category: Category) {
//     this.categoryChange.emit(category);
//   }
// }


import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../model/category.model';


@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html'
})
export class CategoryListComponent {
  public selectedCategory: Category | null = null;
  @Input() category: Category | null | undefined = null;
  @Output() categoryChange: EventEmitter<Category> = new EventEmitter<Category>();
  categories: Category[] = []; // Assuming categories are fetched or passed as input

  changeCategory(category: Category) {
    this.categoryChange.emit(category);
  }
}
