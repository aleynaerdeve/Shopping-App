import { Component, OnInit } from '@angular/core';
import { Category } from '../../../model/category.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute ,Router} from '@angular/router';
import { Product } from '../../../model/product.model';
import { ProductRepository } from '../../../model/product.repository';
import { CategoryRepository } from '../../../model/category.repository';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css'
})
export class CategoryFormComponent implements OnInit{

  editing: boolean = false;
  category: Category = new Category();

  constructor(private activeRoute: ActivatedRoute, private repository: CategoryRepository , private router:Router)  {
    this.editing = activeRoute.snapshot.params['mode'] === 'edit';
    if (this.editing) {
      const category = repository.getCategory(activeRoute.snapshot.params['id']);
      this.category = category || new Product();  // Provide a default Product if undefined
    }
  }

  save(form:NgForm){
    this.repository.saveCategory(this.category)
    this.router.navigateByUrl('/admin/main/categories')
  }
   
  ngOnInit() {
  }

}
