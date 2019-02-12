import { AlertController, Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class CheckNetworkProvider {

  constructor(
    public alert: AlertController,
    public platform: Platform) {}

  checkNetwork() {

    // Verifica se está sem conexão com a internet
    window.addEventListener ('offline', () => { 
      let alert = this.alert.create({
        title:    'Atenção',
        message:  'Sem conexão com o servidor',
        buttons:  ['OK']
      });
      alert.present();
      console.log('Sem internet!');

    let connected = this.network.onConnect;

    if(!connected){
      return false;
    });
  }
}
