import { Component, OnInit } from '@angular/core';
import { Cart } from '../../model/cart.model';

@Component({
  selector: 'cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent implements OnInit{

  constructor(public cart:Cart){
    
  }
  ngOnInit() {
  }

}
