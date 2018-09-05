import { Component } from "@angular/core";
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-preview-image',
  templateUrl: 'preview-image.html'
})

export class PreviewImagePage {

  image: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.image = navParams.get('image');
  }
}
