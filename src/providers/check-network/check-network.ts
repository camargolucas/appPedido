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
    let connected = this.network.onConnect;

    if(!connected){
      return false;
    }else{
      return true;
    }
  }
}