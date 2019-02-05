import { Injectable, ɵisPromise } from "@angular/core";
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
    let usuarioData = JSON.stringify(usuario);

    return this.http.post(
      this.API_URL + "users/insert/" + encodeURIComponent(usuarioData) + "",
      this.requestOptions
    );
  }

  public getUser(usuario: any) {
    let usuarioData = JSON.stringify(usuario);

    return new Promise((resolve, reject) => {
      this.http
        .get(this.API_URL + "users/get/" + encodeURIComponent(usuarioData))
        .subscribe(
          result => {
            resolve(result.json());
          },
          error => {
            reject(error.json);
          }
        );
    });
  }

  getByName(usuario:Usuario){
    let usuarioData = JSON.stringify(usuario)
    this.http.get(this.API_URL + "users/getByName/" + usuarioData + "")


  }

  /*  insert(usuario: Usuario) {
    const strUsuario = JSON.stringify(usuario);
    let URL_API = URL + "/users/insert/" + encodeURIComponent(strUsuario) + "";
    this.http.post(URL_API +  'insert/' + strUsuario + '', {"title": "something"} , this.requestOptions)
    .subscribe(data => {
      console.log(data['_body']);
     }, error => {
      console.log(error);
    });
  } */
}
