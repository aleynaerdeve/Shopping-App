import { Component, OnInit } from '@angular/core';
import { Cart } from '../../model/cart.model';

@Component({
  selector: 'cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  constructor(public cart: Cart) { }

  ngOnInit() {
  }

  // Örnek olarak, cart değişkeninin null olup olmadığını kontrol eden bir metot
  isCartNull(): boolean {
    return this.cart === null;
  }

  onQuantityChange(event: any, item: any) {
    const value = event.target.value;
    this.cart.updateQuantity(item.product, value || 0);
  }
}
