import { Component, OnInit } from '@angular/core';
import { CategoryRepository } from '../../../model/category.repository';
import { Category } from '../../../model/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit{

  constructor(private repository:CategoryRepository){}
  ngOnInit(){

  }

  getCategories(): Category[] {
    return this.repository.getCategories() || []; // Provide a default empty array if undefined
  }

  deleteCategory(category: Category) {
    this.repository.deleteCategory(category)
  }


}
