import { Component, OnInit } from '@angular/core';
import { counter } from '@fortawesome/fontawesome-svg-core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor(private counterService:CounterService) { }

  ngOnInit(): void {
    console.log(this.counterService.getCounter().subscribe((counter)=>console.log(counter))) 
  }

}
