import { CompareCartItem } from "./compare-cart-item";

export class CompareCart{    
    constructor(public items: CompareCartItem[]){}

    get productIds(){
        return Object.keys(this.items);
    }
    get totalItemsCount(){
        let count=0;
        for(let productId in this.items){         
          count +=1;
        }              
        return count;      
    }
}