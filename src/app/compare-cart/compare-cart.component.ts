import { CompareCartService } from '../compare-cart.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-compare-cart',
  templateUrl: './compare-cart.component.html',
  styleUrls: ['./compare-cart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CompareCartComponent implements OnInit {
  cart$;

  constructor(private compareCartSrevice: CompareCartService) { }

  async ngOnInit() {
    this.cart$ = await this.compareCartSrevice.getCart();
  }

}
