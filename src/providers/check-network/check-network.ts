import { AlertController, Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';

@Injectable()
export class CheckNetworkProvider {

  constructor(
    public network: Network,
    public alertCtrl: AlertController,
    public platform: Platform) {}

  checkNetwork() {
    let conectado = this.network.onConnect;

    if(!conectado){
      return false;
    }else{
      return true;
    }
  }
}
