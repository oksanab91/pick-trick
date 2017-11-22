import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from "../auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {

  constructor(private auth: AuthService) {    
   }
  
  login(){
    this.auth.login();
  }
}
