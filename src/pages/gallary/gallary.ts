import { Component } from "@angular/core";

import { NavController, NavParams } from 'ionic-angular';

import { PreviewImagePage } from "../preview-image/preview-image";

@Component({
  selector: 'page_gallary',
  templateUrl: 'gallary.html'
})

export class GallaryPage {
  images: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.images = ['1', '2', '3', '4', '5', '6','7'];
  }

  imageTapped(event, image) {
    this.navCtrl.push(PreviewImagePage, {
      image: image
    });
  }
}
