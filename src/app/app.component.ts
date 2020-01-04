import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
      private router:Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    const config = {
      apiKey: "AIzaSyAv0EfCKcJ-PLmUO94TGhD8sSSTzOBRe_0",
      authDomain: "book-87bb4.firebaseapp.com",
      databaseURL: "https://book-87bb4.firebaseio.com",
      projectId: "book-87bb4",
      storageBucket: "book-87bb4.appspot.com",
      messagingSenderId: "201029765837",
      appId: "1:201029765837:web:5fff39ee4335ac01"
    };
    firebase.initializeApp(config);
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
