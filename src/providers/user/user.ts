import { Injectable, ɵisPromise } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";
import { ApiData } from "./../../utilitarios/apiData";
import { Usuario } from "../../model/Usuario";
import { ProductStorageProvider } from "../product-storage/product-storage";
import { storage } from "firebase";
import { CategoriaItem } from "../../model/CategoriaItem";
import { Rules } from "../../Rules/rules";

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider extends ApiData {
  usuario: Usuario;
  private nomeCategoria: string;
  private idCategoria: number;
  private rules:Rules

  constructor(public http: Http) {
    super();

    this.rules = new Rules()
    this.usuario = new Usuario();
    this.usuario.categoriaItem = new CategoriaItem();

    this.nomeCategoria = this.rules["categorias"]["usuario"]["categoriaItem"][
      "nomeCategoria"
    ];
    this.idCategoria = this.rules["categorias"]["usuario"]["categoriaItem"][
      "idCategoria"
    ];
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

  loginAuthencation(login, password) {

    // ## Objeto com os dados do usuário que está acessando o app
    let arrUser = {
      login: login,
      password: password
    };

    // ## função que resgata os dados do usuario no banco
    return this.getUser(arrUser).then(ret => {
      if (ret == "") {
        return ret
      } else {
        // Se não estiver vazio ele popula a model com os dados resgatados no banco
       return this.populateUserModel(ret)
      }
    });
  }

  populateUserModel(ret) {

    // ## populo a model com os dados do Usuário
    this.usuario.nomeUsuario = ret[0]["nomeUsuario"];
    this.usuario.loja = ret[0]["loja"];
    this.usuario.email = ret[0]["email"];
    this.usuario.idCargo = ret[0]["idCargo"];
    this.usuario.idUsuario = ret[0]["idUsuario"];
    this.usuario.apelidoUsuario = ret[0]["apelidoUsuario"];
    this.usuario.categoriaItem.idCategoria = this.idCategoria;
    this.usuario.categoriaItem.nomeCategoria = this.nomeCategoria;
    this.usuario.token = ret[0]["token"];
    this.usuario.logado = ret[0]["logado"];
    return this.usuario
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
