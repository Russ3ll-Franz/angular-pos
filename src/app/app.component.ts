import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'POS Platform';
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAp4sDGHlbjAZXYho4tD7VeM3sVBwCjXzA',
      authDomain: 'pos-angular-vipin.firebaseapp.com'
    });
  }
}
