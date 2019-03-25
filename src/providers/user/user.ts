import { Injectable, ɵisPromise } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";
import { ApiData } from "./../../utilitarios/apiData";
import { Usuario } from "../../model/Usuario";
import { Storage } from "@ionic/storage";
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
  private rules: Rules;

  constructor(public http: Http, public storage: Storage) {
    super();

    this.rules = new Rules();
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
            console.log(result);
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

  loginAuthencation(login, password, UUID?: string) {
    // ## Objeto com os dados do usuário que está acessando o app
    let arrUser = {
      login: login,
      password: password,
      UUID: "UUID"
    };

    // ## função que resgata os dados do usuario no banco
    return this.getUser(arrUser).then(ret => {
      // ## Se o usuario foi autenticado com sucesso ele popula a model
      // ## com os dados resgatados no banco
      this.populateUserModel(ret["userData"]);
      return ret;
    });
  }

  // ##  Método que popula a model Usuario e insere no cache
  populateUserModel(ret) {
    console.log(ret);
    // ## populo a model com os dados do Usuário
    if (ret != "") {
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

      // ## Armazeno os dados do usuário logado no seu cache
      this.insertUser(this.usuario);
    }
  }

  // ## Função que chama o método saveUser para salvar os dados do usuario no cache
  public insertUser(user: any) {
    // Só é aceito um objeto Usuario armazenado no cache
    let key = "Usuario";
    return this.saveUser(key, user);
  }

  // #####################################################
  // ## Função que insere os dados do usuario no cache ###
  public saveUser(key: string, user: Usuario) {
    return this.storage.set(key, user);
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
