import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";
import { ApiData } from "./../../utilitarios/apiData";
import { Usuario } from "../../model/Usuario";

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider extends ApiData {
  constructor(public http: Http) {
    super();
  }



  insert(usuario: Usuario) {
    const strUsuario = JSON.stringify(usuario);
    let URL_API = URL + "/users/insert/" + encodeURIComponent(strUsuario) + "";

    return new Promise(() => {
      this.http.post(URL_API, this.requestOptions).subscribe(
        value => {
          console.log(value);
        },
        error => {
          console.log(error);
        }
      );
    });
  }


}
