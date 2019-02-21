import { ProductStorageProvider } from './../providers/product-storage/product-storage';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { CheckNetworkProvider } from './../providers/check-network/check-network';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title:string, component:any, openTab?:any}>;
  //rootPage = '';
  //rootPage:any = LoginPage

  constructor(
    public network: CheckNetworkProvider,
    platform: Platform,
    statusBar: StatusBar,
    
    splashScreen: SplashScreen,
    public product:ProductStorageProvider) {
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

    this.checkUserTokenExists();

  }


  openPage(page){
     this.nav.setRoot(page.component, {openTab: page.openTab})
  }



  checkUserTokenExists(){

    this.product.get("Usuario").then((ret)=>{
      if (ret != null) {

        if(ret.logado == 1){

          console.log("Logged User : " + ret.apelidoUsuario);

          this.nav.push(TabsPage);
          //this.menu.enable(true);
          
        }else{
          this.nav.push(LoginPage);
        }
      }else{
        console.log("User not logged");
        this.nav.push(LoginPage);
      }
      console.log("ret:  " + ret);

    });



  }

}
