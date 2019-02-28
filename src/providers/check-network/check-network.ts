import { AlertController, Platform } from "ionic-angular";
import { Injectable } from "@angular/core";
import { Network } from '@ionic-native/network';

@Injectable()
export class CheckNetworkProvider {

  public statusNetwork: boolean = false;

  constructor(
    private network: Network,
    public alertCtrl: AlertController,
    public platform: Platform
  ) {
      let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
        console.log('network was disconnected :-(');
        this.statusNetwork = false;
      });

      // watch network for a connection
    let connectSubscription = this.network.onConnect().subscribe(() => {
      console.log('network connected!');
      // We just got a connection but we need to wait briefly
      // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as well.
      this.statusNetwork = true;
      setTimeout(() => {

        if (this.network.type === 'wifi') {
          console.log('we got a wifi connection, woohoo!');
          this.statusNetwork = true;
        }

        this.statusNetwork = true;
      }, 3000);
    });

  }

  //##################################################################
  // ## Função para verificar a conexão de internet do Usuário #######
  checkNetwork() {
    return true //this.statusNetwork;
  }
}
