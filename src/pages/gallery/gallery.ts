import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import "rxjs/add/operator/map";
import {GalleryService} from "../../services/gallery.service";
import {DetailImgPage} from "../detail-img/detail-img";

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
  images: any = {hits:[]};
  size:number = 10;
  currentPage:number = 1;
  totalPages:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public galleryService:GalleryService, public loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  onSearch() {
    this.images.hits = [];
    this.doSearch();
  }


  doSearch() {
    // this.http.get("https://pixabay.com/api?key=6839936-b4bbae23df6f86d7fc5f5cc54&q=" + this.motClee + "&per_page=10&page=1")
    // .map(resp => resp.json())
    // .subscribe(data => {
    //   this.images = data;
    // }, err => console.log("err"));

    let loading = this.loadingCtrl.create({
      content: "Loading..."
    });
    loading.present();

    this.galleryService.chercher(this.motClee, this.size, this.currentPage)
      .subscribe(data => {
        //this.images = data;
        this.totalPages = data.totalHits / this.size;
        data.hits.forEach(h => {
          this.images.hits.push(h);
        });
        loading.dismiss();
      }, error => {
        console.log(error);
        loading.dismiss();
      });

  }


  doInfinite(infinite) {
    if (this.currentPage < this.totalPages) {
      ++this.currentPage;
      this.doSearch();
      if (this.totalPages % this.size != 0) { ++this.totalPages; }
      console.log(this.currentPage + " / " + this.totalPages);
    }
    infinite.complete();
  }

  onDetailImg(img) {
    this.navCtrl.push(DetailImgPage, {image: img});
  }

}
