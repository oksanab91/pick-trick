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

  constructor() { }  
}
