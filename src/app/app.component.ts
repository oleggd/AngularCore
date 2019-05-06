import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyC5QvH1GZk4h7DPNTYpPQ1I3kt2MNoQ_Gs",
      authDomain: "my-app-1abd1.firebaseapp.com",

    });
  }

  onNavigate(feature: string) {
    //console.log('feature :' + feature);
    this.loadedFeature = feature;
    //console.log('loadedFeature :' + this.loadedFeature);
  }
}
