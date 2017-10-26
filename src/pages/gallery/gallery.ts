import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

  motClee: string = '';
  images: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  onSearch() {
    this.http.get("https://pixabay.com/api?key=6839936-b4bbae23df6f86d7fc5f5cc54&q=" + this.motClee + "&per_page=10&page=1")
    .map(resp => resp.json())
    .subscribe(data => {
      this.images = data;
    }, err => console.log("err"));
  }

}
