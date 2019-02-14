import { ProductStorageProvider } from './../providers/product-storage/product-storage';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

import { CheckNetworkProvider } from './../providers/check-network/check-network';
import { TabStateProvider } from '../providers/tab-state/tab-state';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title:string, component:any, openTab?:any}>;
  //rootPage = '';
  rootPage:any = LoginPage
  public navCtrl: NavController;

  constructor(public network: CheckNetworkProvider, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, product:ProductStorageProvider,public tabPage:TabStateProvider,) {

    this.pages = [
      { title: 'Estoque / Pedido', component: TabsPage },
    ];


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      product.insertDatabaseProducts();
    });

    this.network.checkNetwork();

  }


  openPage(page){
     this.nav.setRoot(page.component, {openTab: page.openTab})
  }

}
