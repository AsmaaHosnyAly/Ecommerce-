import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core'
import { CartService } from '../cart.service';
import { CounterService } from '../counter.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() productItem:any;
  
   @Output()sendInfo=new EventEmitter();

counter:any
number:any
  constructor(private counterService:CounterService,private cart:CartService) { }

  ngOnInit(): void {
    this.number=this.productItem.id;
    console.log(this.number)
   this.counterService.getCounter().subscribe((counter)=>this.counter=counter) 
   
  }

  addCart(){
  console.log(this.number)
   this.counterService.setCounter(this.counter+1)
   this.cart.setProduct(this.number)
   this.cart.getProduct().subscribe((priduct:any)=>console.log(priduct))
  
  }
  viewDetails(){
    this.sendInfo.emit(this.productItem)
  }
  

}
