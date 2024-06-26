import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { Product } from '../../../model/product.model';
import { ProductRepository } from '../../../model/product.repository';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  editing: boolean = false;
  product: Product = new Product();

  constructor(private activeRoute: ActivatedRoute, private repository: ProductRepository , private router:Router)  {
    this.editing = activeRoute.snapshot.params['mode'] === 'edit';
    if (this.editing) {
      const product = repository.getProduct(activeRoute.snapshot.params['id']);
      this.product = product || new Product();  // Provide a default Product if undefined
    }
  }

  save(form:NgForm){
    this.repository.saveProduct(this.product)
    this.router.navigateByUrl('/admin/main/products')
  }

  ngOnInit() {
  }

}
