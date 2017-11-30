import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CategoryService } from "../../category.service";
import { ProductService } from "../../product.service";
import { Router, ActivatedRoute } from "@angular/router";
import 'rxjs/add/operator/take';
import { ShopService } from '../../shop.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {
  categories$;
  shops$;
  product = {};
  id;

  constructor(
    private router: Router,
    private productService: ProductService, 
    private categoryService: CategoryService,
    private shopService: ShopService,
    private route: ActivatedRoute) {
    this.categories$ = categoryService.getAll();
    this.shops$ = shopService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) this.productService.get(this.id).take(1).subscribe(p => this.product = p);
   }  

  save(product) {
    // console.log(product);
    if(this.id) {
      this.productService.update(this.id, product);
    }else{
      this.productService.create(product);
    }   
    this.router.navigate(['/admin/products']);
  }
  
  delete() {
    if (!confirm('Are you sure you want to delete this product?')) return;
      
    this.productService.delete(this.id);      
    this.router.navigate(['/admin/products']);      
  }

  ngOnInit() {
  }
}
