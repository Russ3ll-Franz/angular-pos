import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';

import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
   
  username: string;
  password: string;

  @Output('signupEvent') signupClicked = new EventEmitter<{ test: string }>();

  loginForm: FormGroup;
  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
  }
  onSubmit() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    firebase.auth().signInWithEmailAndPassword(this.username, this.password)
    .then(
      response => console.log(response)
    )
    .catch(
      error => {
        console.log(error)
      }
    )
  }
  signupClick() {
    this.signupClicked.emit({ test: 'Ha!' });
    console.log('helll0');
  }
}
