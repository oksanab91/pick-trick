import { CompareCartService } from '../compare-cart.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from "@angular/router";
import { Product } from '../models/product';
import 'rxjs/add/operator/switchMap';
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
  cart$: Observable<CompareCart>;
      
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private compareCartService: CompareCartService)
  { 
  }

  async ngOnInit(){    
    this.cart$ = await this.compareCartService.getCart();
    this.populateProducts();    
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

  private applyFilter(){
    this.filteredProducts = (this.category) ?
    this.products.filter(p => p.category == this.category) :
    this.products;
  }   
}
