import { TabsPage } from './../tabs/tabs';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title:string, component:string, openTab?:any}>;
  rootPage = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.pages = [
    { title: 'Tab 1', component: 'TabsPage', openTab: 'Tab1Page' },
    { title: 'Tab 2', component: 'TabsPage', openTab: 'Tab2Page' },
    { title: 'Special', component: 'SpecialPage', openTab: 'shuffle' },
  ];

  }

  openPage(page){
    this.nav.setRoot(page.component, {openTab: page.openTab})
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
