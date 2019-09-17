import { ShopService } from './shop.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CompareCartComponent } from './compare-cart/compare-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth-guard.service";
import { UserService } from "./user.service";
import { AdminAuthGuard } from "./admin-auth-guard.service";
import { ProductComponent } from './admin/product/product.component';
import { CategoryService } from "./category.service";
import { ProductService } from "./product.service";
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CompareCartService } from './compare-cart.service';



@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    CompareCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductComponent,
    ProductFilterComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,    
    NgbModule.forRoot(),
    RouterModule.forRoot([      
      { path: '', component: ProductsComponent},
      { path: 'products', component: ProductsComponent},
      { path: 'login', component: LoginComponent},
      { path: 'compare-cart', component: CompareCartComponent},

      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard]},      
      { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard]},
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard]},
            
      { 
        path: 'admin/orders', 
        component: AdminOrdersComponent, 
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      { 
        path: 'admin/products/new', 
        component: ProductComponent, 
        canActivate: [AuthGuard, AdminAuthGuard]
      },     
      { 
        // admin/products/-KyqzYpxMbVh3ixSPhoD
        path: 'admin/products/:id', 
        component: ProductComponent, 
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      { 
        path: 'admin/products', 
        component: AdminProductsComponent, 
        canActivate: [AuthGuard, AdminAuthGuard]
      }
    ])
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    UserService,
    CategoryService,
    ShopService,
    ProductService,
    CompareCartService   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
