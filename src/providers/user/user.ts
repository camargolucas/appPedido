import { Injectable, ɵisPromise } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";
import { ApiData } from "./../../utilitarios/apiData";
import { Usuario } from "../../model/Usuario";
import { ProductStorageProvider } from "../product-storage/product-storage";
import { storage } from "firebase";

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

  // ######################################################
  // ## Insere o usuario no banco de dado  ################
  insert(usuario: Usuario) {
    // Objeto usuario transformado em string para ser enviado na URL
    let usuarioData = JSON.stringify(usuario);

    return this.http.post(
      this.API_URL + "users/insert/" + encodeURIComponent(usuarioData) + "",
      this.requestOptions
    );
  }

  // ###################################################################
  // ## Resgata os dados do usuario que está logando no sistema ########
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

  getByName(usuario: Usuario) {
    let usuarioData = JSON.stringify(usuario);
    this.http.get(this.API_URL + "users/getByName/" + usuarioData + "");
  }

  // ############################################
  // ## Resgata o estoque enviado  #########
  getSentStock(data: any) {
    let strData = JSON.stringify(data);

    return new Promise((resolve, reject) => {
      this.http
        .get(
          this.API_URL +
            "users/getSentStock/" +
            encodeURIComponent(strData) +
            ""
        )
        .subscribe(
          result => {
            resolve(result.json());
          },
          error => {
            console.log(error.json());
          }
        );
    });
  }

  // ############################################
  // ## Resgata os pedidos eviados  #############
  getSentRequest(data: any) {
    let strData = JSON.stringify(data);

    return new Promise((resolve, reject) => {
      this.http
        .get(
          this.API_URL +
            "users/getSentRequest/" +
            encodeURIComponent(strData) +
            ""
        )
        .subscribe(
          result => {
            resolve(result.json());
          },
          error => {
            console.log(error.json());
          }
        );
    });
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
