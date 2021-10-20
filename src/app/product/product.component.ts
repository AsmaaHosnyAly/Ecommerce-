import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core'



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() productItem:any;
   @Output()sendInfo=new EventEmitter();


  constructor() { }

  ngOnInit(): void {
   
  }

  addCart(){
    console.log(this.productItem)
   this.sendInfo.emit(this.productItem)
  }
  

}
