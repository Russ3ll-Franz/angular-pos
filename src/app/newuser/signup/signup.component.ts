import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  email: string;
  password: string;
  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.email = this.signupForm.value.email;
    this.password = this.signupForm.value.password;
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .catch(
        error => console.log(error)
      )
  }
}
