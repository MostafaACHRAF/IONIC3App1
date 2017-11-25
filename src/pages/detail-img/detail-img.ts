import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailImgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-img',
  templateUrl: 'detail-img.html',
})
export class DetailImgPage {

  image:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.image = this.navParams.data.image;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailImgPage');
  }

}
