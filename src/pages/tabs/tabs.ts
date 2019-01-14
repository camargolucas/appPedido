import { RequestPage } from './../request/request';
import { MorePage } from './../more/more';
import { Component } from '@angular/core';


import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { StockPage } from '../stock/stock';

@Component({

  templateUrl: 'tabs.html'
})
export class TabsPage {

  //tabHome = HomePage;
  tabEstoque = StockPage
  tabRequest = RequestPage
  tabMais = MorePage

  //tab3Root = ContactPage;

  constructor() {

  }
}
