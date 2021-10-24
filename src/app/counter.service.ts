import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
private counter=new BehaviorSubject(0);
  constructor() { }
  getCounter(){
    return this.counter;
  }
  
  setCounter(newCounter:any){
    this.counter.next(newCounter);
  }
}
