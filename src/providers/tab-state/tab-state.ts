import { HttpClient } from "@angular/common/http";
import { Injectable, NgZone } from "@angular/core";

/*
  Generated class for the TabStateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TabStateProvider {
  // ## Objeto para setar as abas
  public states: {
    [s: string]: any;
  } = {};

  constructor(public zone: NgZone) {}

  // ###############################################
  // ## Função que seta o estado da aba ############
  setState(tab: string, enabled: boolean) {
    this.zone.run(() => {
      this.states[tab] = enabled;
    });
  }
}
