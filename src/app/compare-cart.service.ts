import { async } from '@angular/core/testing';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Product } from './models/product';
import 'rxjs/add/operator/take';

@Injectable()
export class CompareCartService {

  constructor(private db: AngularFireDatabase) { }

private create(){
  return this.db.list('/compare-carts').push({
    dateCreated:new Date().getTime()
  });
}

getCartId(){
  //return this.db.object('/compare-carts' + cartId);
  let cartId = localStorage.getItem('cartId');
  return cartId;
}
async getCart(){
  let cartId = await this.getOrCreateCartId();
  return this.db.object('/compare-carts/' + cartId);
}
private async getOrCreateCartId(): Promise<string>
{
  //console.log('stop');  
  let cartId = this.getCartId();
  if(cartId) return cartId;
  
  return await this.createCartId();
}
private async createCartId(): Promise<string>
{  
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
  let cartId = this.getCartId();
  if(cartId){      
    let item$ = this.getItem(cartId, product.$key); 
    item$.take(1).subscribe(item => {     
      if(item.$exists()) item$.remove();
    });
  }
}

}
