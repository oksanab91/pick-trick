import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from "../auth.service";
import { AppUser } from "../models/app-user";

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BsNavbarComponent {
  appUser: AppUser;
  constructor(private auth: AuthService) {  
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }
    
  logout(){
    this.auth.logout();
  }
}
