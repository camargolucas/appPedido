import { RequestPage } from "./../request/request";
import { MorePage } from "./../more/more";
import { Component, ViewChild, NgZone } from "@angular/core";

import { ContactPage } from "../contact/contact";
import { HomePage } from "../home/home";
import { StockPage } from "../stock/stock";
import { Nav } from "ionic-angular";
import { TabStateProvider } from "../../providers/tab-state/tab-state";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {

  //tabHome = HomePage;
  tabEstoque = StockPage;
  tabRequest = RequestPage;
  tabMais = MorePage;

  //tab3Root = ContactPage;

  constructor( public tabState:TabStateProvider) {
  }



}
