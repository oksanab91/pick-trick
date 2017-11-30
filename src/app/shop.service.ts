import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ShopService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list('/stores', {
      query: {
        orderByChild: 'name'
      }
    });
  }

}
