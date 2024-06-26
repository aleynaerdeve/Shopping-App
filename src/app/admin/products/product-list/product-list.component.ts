import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../../../model/product.repository';
import { Product } from '../../../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productRepository: ProductRepository) { }

  ngOnInit() {
  }

  getProducts(): Product[] {
    return this.productRepository.getProducts() || []; // Provide a default empty array if undefined
  }

  deleteProduct(product: Product) {
    this.productRepository.deleteProduct(product)
  }
}
