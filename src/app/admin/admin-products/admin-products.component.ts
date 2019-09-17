import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ProductService } from "../../product.service";
import { Subscription } from "rxjs/Subscription";
import { Product } from "../../models/product";


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminProductsComponent implements OnDestroy {
  products: Product[];
  filteredProducts: Product[];
  subscription: Subscription;  
  itemCount: number;

  constructor(private productService: ProductService) {    
    this.subscription = this.productService.getAll()
      .subscribe(products => {
        this.products = products;
        this.filteredProducts = products;      
      });
  }

  filter(query: string) {
    console.log("filter stop");
    this.filteredProducts = (query) ? 
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : 
      this.products;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
 
}
