import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { GalleryPage } from '../pages/gallery/gallery';
import { PlacesPage } from '../pages/places/places';
import { MeteoPage } from '../pages/meteo/meteo';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import {GalleryService} from "../services/gallery.service";
import {DetailImgPage} from "../pages/detail-img/detail-img";

@NgModule({
  declarations: [
    MyApp,
    GalleryPage,
    PlacesPage,
    MeteoPage,
    HomePage,
    DetailImgPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GalleryPage,
    PlacesPage,
    MeteoPage,
    HomePage,
    DetailImgPage
  ],
  providers: [
    StatusBar, GalleryService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
