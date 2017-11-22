import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { UserService } from "./user.service";
import { Observable } from "rxjs/Observable";
import { ActivatedRoute } from "@angular/router";
import { AppUser } from "./models/app-user";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import * as firebase from 'firebase';


@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private userService: UserService, private afAuth: AngularFireAuth, private route: ActivatedRoute) {
    this.user$ = afAuth.authState;
   }

  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());

    // this.afAuth.auth.getRedirectResult().then(function(result) {
    //   if (result.credential) {
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     var token = result.credential.accessToken;
    //     // ...
    //   }
    //   // The signed-in user info.
    //   var user = result.user;
    // }).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // The email of the user's account used.
    //   var email = error.email;
    //   // The firebase.auth.AuthCredential type that was used.
    //   var credential = error.credential;
    //   // ...
    // });

  }

  logout(){
    this.afAuth.auth.signOut();
  }

  get appUser$() : Observable<AppUser> {
    return this.user$
    .switchMap(user => {
      if(user) return this.userService.get(user.uid);

        return Observable.of(null);
      }
    )    
  }
}
