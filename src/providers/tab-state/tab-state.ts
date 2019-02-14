import { HttpClient } from "@angular/common/http";
import { Injectable, NgZone } from "@angular/core";

/*
  Generated class for the TabStateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TabStateProvider {
  public states: { [s: string]: any } = {};

  constructor(public zone:NgZone){

  }
  setState(tab: string, enabled: boolean) {

    this.zone.run(()=>{
      console.log(enabled)
      this.states[tab] = enabled;
    })
}



}
