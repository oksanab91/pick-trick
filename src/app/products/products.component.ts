import { CompareCartService } from '../compare-cart.service';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from "@angular/router";
import { Product } from '../models/product';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { CompareCart } from '../models/compare-cart';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];  
  category: string;
  shop: string;
  //cart: any; //compare cart
  cart$: Observable<CompareCart>;
  //subscription: Subscription;
    
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private compareCartService: CompareCartService)
  {
    
    // productService
    //   .getAll()
    //   .switchMap(products => {
    //     this.products = products;
    //     return route.queryParamMap;
    //   })
    //   .subscribe(params => {
    //     this.category = params.get('category');
  
    //     this.filteredProducts = (this.category) ?
    //       this.products.filter(p => p.category == this.category) :
    //       this.products;      
    // });   

  }

  async ngOnInit(){
    console.log('stop2');
    this.cart$ = await this.compareCartService.getCart();
    this.populateProducts();
    // this.subscription = (await this.compareCartService.getCart())
    // .subscribe(cart => this.cart = cart);
  }

  private populateProducts(){
    this.productService
      .getAll()      
        .switchMap((products: Product[]) => {
          this.products = products;          
          return this.route.queryParamMap;
        })     
        .subscribe(params => {
          this.category = params.get('category');  
          this.applyFilter();     
      }      
      );
  }

   // .subscribe(products => {
      //   this.products = products;
      //   this.filteredProducts = this.products;
      //   return this.route.queryParamMap;
      // })

  private applyFilter(){
    this.filteredProducts = (this.category) ?
    this.products.filter(p => p.category == this.category) :
    this.products;
  }
  // ngOnDestroy(){
  //   this.subscription.unsubscribe();
  // } 
}
