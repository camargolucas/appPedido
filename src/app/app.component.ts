import { Utilitarios } from "./../utilitarios/utilitarios";
import { ProductStorageProvider } from "./../providers/product-storage/product-storage";
import { Component, ViewChild } from "@angular/core";
import { Platform, NavController, Nav } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { TabsPage } from "../pages/tabs/tabs";
import { LoginPage } from "../pages/login/login";
import { HomePage } from "../pages/home/home";

import { CheckNetworkProvider } from "./../providers/check-network/check-network";
import { TabStateProvider } from "../providers/tab-state/tab-state";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  pages: Array<{ title: string; component: any; openTab?: any }>;
  //rootPage = '';
  //rootPage: any = LoginPage;
  public navCtrl: NavController;

  constructor(
    public network: CheckNetworkProvider,
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public product: ProductStorageProvider,
    public tabPage: TabStateProvider
  ) {
    // ###########################################################################
    // ## Todo novo menu que for adicionado deve ser colocado nesse array ###########
    // ## utilizado no método openPage para nevageção no menu lateral ###############
    this.pages = [{ title: "Estoque / Pedido", component: TabsPage }];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      //##########################################################################################
      //## Quando o aplicativo é aberto, carrego os produtos do banco de dados no Cache do Usuario
      //## sendo assim ele pode pesquisar prdutos offline ########################################
      product.insertDatabaseProducts();
    });

    this.network.checkNetwork()

    this.checkUserTokenExists();
  }
  //#################################################################
  //## Método para redirecionar as páginas do Menu lateral ##########
  openPage(page) {
    this.nav.setRoot(page.component, { openTab: page.openTab });
  }

  //####################################################################
  //Função para verificar se usuário já esta logado
  checkUserTokenExists() {
    //Obtendo dados do usuário
    this.product.get("Usuario").then(ret => {
      //Se o usuário é nulo
      if (ret != null) {
        //Se o logado é 1 significa que o usuário esta logado
        //e redireciona para a página de Estoque
        if (ret.logado == 1) {
          //Redireciona para a página de Stok
          this.nav.push(TabsPage);
        } else {
          //Se não esta logado o usuário é redirecionado para a página de login.
          this.nav.push(LoginPage);
        }
      } else {
        //Se os dados são Nulos o usuário é redirecionado para a página de login.
        this.nav.push(LoginPage);
      }
    });
  }
  //####################################################################
}
