import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemList:any=[];
  private productList=new BehaviorSubject<any>([]);

  constructor() { }
  getProduct(){
    return this.productList;

  }
  setProduct(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
  }
}
