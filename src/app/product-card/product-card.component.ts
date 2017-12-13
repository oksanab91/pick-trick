import { CompareCartService } from '../compare-cart.service';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductCardComponent {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('compare-cart') compareCart;

  constructor(private compareService: CompareCartService) { }

  addToCompare(){
    this.compareService.addToCompare(this.product);    
  }

  removeFromCompare(){
    this.compareService.removeFromCompare(this.product); 
  }
  
  getInCompare(){
    if(!this.compareCart) return 0;
    let item = this.compareCart.items[this.product.$key];
    return item ? 1 : 0;
  }
}
