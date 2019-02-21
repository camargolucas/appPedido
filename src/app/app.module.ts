import { MenuPage } from './../pages/menu/menu';
import { RequestPage } from './../pages/request/request';
import { StockPage } from './../pages/stock/stock';
import { Utilitarios } from './../utilitarios/utilitarios';
import { ModalProductPage } from './../pages/modal-product/modal-product';
import { MbscModule } from '@mobiscroll/angular';
import { EditProductPage } from './../pages/edit-product/edit-product';
import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DatePipe } from '@angular/common';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductStorageProvider } from '../providers/product-storage/product-storage';
import { IonicStorageModule } from '@ionic/storage';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'ionic2-auto-complete';
import { CompleteServiceProvider } from '../providers/complete-service/complete-service';
import { HttpModule } from '@angular/http';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { MorePage } from '../pages/more/more';
/* import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'; */
import { UserProvider } from '../providers/user/user';
import { ProductProvider } from '../providers/product/product';
import { Network } from '@ionic-native/network/ngx';
import { CheckNetworkProvider } from '../providers/check-network/check-network';
import { Rules } from '../Rules/rules';
import { TabStateProvider } from '../providers/tab-state/tab-state';


@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    EditProductPage,
    ModalProductPage,
    LoginPage,
    SignupPage,
    MorePage,
    StockPage,
    RequestPage,
    MenuPage

  ],
  imports: [
    MbscModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    FormsModule,
    AutoCompleteModule,
    HttpModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    EditProductPage,
    ModalProductPage,
    LoginPage,
    SignupPage,
    MorePage,
    StockPage,
    RequestPage,
    MenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatePipe,
    ProductStorageProvider,
    CompleteServiceProvider,
    Utilitarios,
    Rules,
    UserProvider,
    ProductProvider,
    CheckNetworkProvider,
    TabStateProvider,
  ]
})
export class AppModule {}
