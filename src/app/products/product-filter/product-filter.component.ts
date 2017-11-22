import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductFilterComponent implements OnInit {
  categories$;
  @Input('category') category;

  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getAll();   
   }

   ngOnInit() {

   }
}
