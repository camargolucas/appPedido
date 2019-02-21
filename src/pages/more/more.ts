import { TabsPage } from './../tabs/tabs';
import { ProductStorageProvider } from './../../providers/product-storage/product-storage';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App } from 'ionic-angular';
import { SignupPage } from '../signup/signup';

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
  constructor(public navParams: NavParams,public viewCtrl:ViewController,public app:App) {
  }


  leave(){
      // ## Saída do sistema
      this.app.getRootNav().setRoot(LoginPage);
  }

}
