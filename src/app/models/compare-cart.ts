import { CompareCartItem } from "./compare-cart-item";
import { Product} from './product'

export class CompareCart{    
    constructor(public items: CompareCartItem[]){}

    get totalItemsCount(){
        let count=0;
        for(let productId in this.items){         
          count +=1;
        }
        // if(!this.items) return 0;
        // let count = this.items.length;
        // console.log(count);       
        return count;      
    }
}