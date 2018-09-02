import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  signupSelected: boolean;
  constructor() {
    this.signupSelected = false;
   }

  ngOnInit() {
  }
  selectSignup(test: string) {
    console.log(test);
    this.signupSelected = true;
  }
}
