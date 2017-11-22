import { Injectable } from '@angular/core';
import { AuthService } from "./auth.service";
import { Router, CanActivate, RouterStateSnapshot } from "@angular/router";
import 'rxjs/add/operator/map';
import { UserService } from "./user.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private userService: UserService, private auth: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.auth.appUser$      
      .map(appUser => appUser.isAdmin);
  }
}
