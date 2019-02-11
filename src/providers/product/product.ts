import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { ApiData } from "../../utilitarios/apiData";
import { Produto } from "../../model/Produto";

@Injectable()
export class ProductProvider extends ApiData {
  constructor(public http: Http) {
    super();
  }

  insert(product: any) {
    let productData = JSON.stringify(product);
    console.log(productData);

    this.http
      .post(
        this.API_URL +
          "products/insertEstoque/" +
          encodeURIComponent(productData) +
          "",
        this.requestOptions
      )
      .subscribe(ret => {
        console.log(ret);
      });
  }

  insertRequest(product: any) {
    let productData = JSON.stringify(product);

    this.http
      .post(
        this.API_URL +
          "products/insertPedido/" +
          encodeURIComponent(productData) +
          "",
        this.requestOptions
      )
      .subscribe(ret => {
        console.log(ret);
      });
  }

  getAllProducts() {
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + "products/getAll").subscribe(ret => {
        resolve(ret.json());
      });
    });
  }
}
