import { CompareCartService } from '../compare-cart.service';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from "@angular/router";
import { Product } from '../models/product';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit, OnDestroy{
  products: Product[] = [];
  filteredProducts: Product[] = [];  
  category: string;
  shop: string;
  cart: any; //compare cart
  subscription: Subscription;
    
  constructor(
    route: ActivatedRoute,
    productService: ProductService,
    private compareCartService: CompareCartService)
  {
    
    productService
      .getAll()
      .switchMap(products => {
        this.products = products;
        return route.queryParamMap;
      })
      .subscribe(params => {
        this.category = params.get('category');
  
        this.filteredProducts = (this.category) ?
          this.products.filter(p => p.category == this.category) :
          this.products;      
    });   

  }

  async ngOnInit(){
    console.log('stop2');
    this.subscription = (await this.compareCartService.getCart())
    .subscribe(cart => this.cart = cart);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  } 
}
