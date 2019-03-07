import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { ApiData } from "../../utilitarios/apiData";
import { Produto } from "../../model/Produto";
import { Observable } from "rxjs";

@Injectable()
export class ProductProvider extends ApiData {
  constructor(public http: Http) {
    super();
  }

  // ################################################
  // ## Função que insere o Estoque no banco ########
  insert(product: any) {
    // Transformo o JSON em String para enviar na URL
    let productData = JSON.stringify(product);

    return this.http.post(
      this.API_URL +
        "products/insertEstoque/" + encodeURIComponent(productData) +
        "",
      this.requestOptions
    );
  }

  // ################################################
  // ## Função que insere o Pedido no banco ########
  insertRequest(product: any) {
    // Transformo o JSON em String para enviar na URL
    let productData = JSON.stringify(product);

    return this.http.post(
      this.API_URL +
        "products/insertPedido/" + encodeURIComponent(productData) +"",
      this.requestOptions
    );
  }

  // #####################################################
  // ## Resgato todos os produtos da tabela de Produtos
  getAllProducts() {
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + "products/getAll").subscribe(ret => {
        resolve(ret.json());
      });
    });
  }




}
