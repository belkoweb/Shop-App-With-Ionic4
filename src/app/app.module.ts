import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {CartPageModule} from "./pages/cart/cart.module";
import {IonicStorageModule} from "@ionic/storage";
import {MethodService} from "./method.service";
import {HttpClientModule} from "@angular/common/http";
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import {ImagesViewComponent} from "./components/images-view/images-view.component";
import {ImagesViewServiceService} from "./services/images-view-service.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent,ImagesViewComponent],
  entryComponents: [ImagesViewComponent],
  imports: [
      BrowserAnimationsModule,
      BrowserModule,
      IonicStorageModule.forRoot(),
      IonicModule.forRoot(),
      AppRoutingModule,
      CartPageModule,
      HttpClientModule
  ],
  providers: [
        HttpClientModule,
      ImagesViewServiceService,
         ImagePicker,
        MethodService,
      StatusBar,
      SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
