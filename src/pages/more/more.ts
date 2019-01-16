import { ProductStorageProvider } from './../../providers/product-storage/product-storage';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App } from 'ionic-angular';

/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider:ProductStorageProvider
    ,public viewCtrl:ViewController,public app:App) {
  }


  leave(){
      this.app.getRootNav().setRoot(LoginPage);
  }

  clear(){
    this.provider.clear();
  }

}
