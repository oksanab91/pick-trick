import { CompareCartService } from '../compare-cart.service';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Product } from '../models/product';
import { CompareCart } from '../models/compare-cart';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductCardComponent {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('compare-cart') compareCart: CompareCart;
  compareCart$: Observable<CompareCart> = of(this.compareCart);

  constructor(private compareService: CompareCartService) { }

  async addToCompare(){
    this.compareCart$ = await this.compareService.addToCompare(this.product);
    this.compareCart$.map(cart => this.compareCart = cart);  
  }

  async removeFromCompare(){
    this.compareCart$ = await this.compareService.removeFromCompare(this.product);
    this.compareCart$.map(cart => this.compareCart = cart); 
  }
  
  getInCompare(){    
    if(!this.compareCart) return 0;
    if(!this.compareCart.items) return 0;
    let item = this.compareCart.items[this.product.$key];
    return item ? 1 : 0;
  }
}
