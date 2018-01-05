import { Observable } from 'rxjs/Rx';
import { async } from '@angular/core/testing';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { CompareCart } from './models/compare-cart';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@Injectable()
export class CompareCartService {

  constructor(private db: AngularFireDatabase) { }

private create(){
  return this.db.list('/compare-carts').push({
    dateCreated:new Date().getTime()
  });
}

async getCart():Promise<Observable<CompareCart>>{
  console.log('stop');
  let cartId = await this.getOrCreateCartId();
    
  return this.db.object('/compare-carts/' + cartId)
  .map(x => new CompareCart(x.items));
}
private async getOrCreateCartId(): Promise<string>
{  
  let cartId = localStorage.getItem('cartId');
  if(cartId) return cartId;
  
  let result = await this.create();
  localStorage.setItem('cartId', result.key);
  return result.key;  
}

private getItem(cartId: string, productId: string){
  return this.db.object('/compare-carts/' + cartId + '/items/' + productId);
}
async addToCompare(product: Product){
  let cartId = await this.getOrCreateCartId();
  let item$ = this.getItem(cartId, product.$key);
  item$.take(1).subscribe(item => {    
    if(!item.$exists()) item$.set({ product: product});
  });
}
async removeFromCompare(product: Product){
  let cartId = localStorage.getItem('cartId');
  if(cartId){      
    let item$ = this.getItem(cartId, product.$key); 
    item$.take(1).subscribe(item => {     
      if(item.$exists()) item$.remove();
    });
  }
}

}
