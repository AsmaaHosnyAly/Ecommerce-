import { Component, OnInit } from '@angular/core';
import{FormGroup} from '@angular/forms'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  //  registerUser:FormGroup;
  constructor() { }

  ngOnInit(): void {
   
  }
 registerUserFun(){
  //  console.log(this.registerUser);
 }
}
