import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from "../auth.service";
import { AppUser } from "../models/app-user";
import { CompareCartService } from '../compare-cart.service';
import { Observable } from 'rxjs/Observable';
import { CompareCart } from '../models/compare-cart';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BsNavbarComponent implements OnInit{
  appUser: AppUser;
  cart$: Observable<CompareCart>;
  isCollapsed$;
  totalItemsCount: number;

  constructor(private auth: AuthService, private compareCartService: CompareCartService) {}

  async ngOnInit(){    
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    this.cart$ = await this.compareCartService.getCart();
    this.cart$.subscribe(cart => this.totalItemsCount = cart.totalItemsCount);   
    this.isCollapsed$ = true;
  }

  logout(){
    this.auth.logout();
  }
}
