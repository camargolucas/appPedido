
import { ApiData } from "./../../utilitarios/apiData";
import { AutoCompleteService } from "ionic2-auto-complete";
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { map } from "rxjs/operator/map";
import { ProductStorageProvider } from "../product-storage/product-storage";
import { ListaProduto } from "../../model/ListaProduto";

@Injectable()
export class CompleteServiceProvider extends ApiData
  implements AutoCompleteService {
  labelAttribute = "NAME";
  formValueAttribute = "";
  constructor(public http: Http, public product: ProductStorageProvider) {
    super();
  }

  getResults(keyword: string) {
    let arrProdutos: ListaProduto[] = [];
    /* return this.http.get(this.API_URL + 'products/search/name/' + keyword)
      .map(
        result =>
        {
          return result.json()
            .filter(item => item.NAME.toLowerCase().startsWith(keyword.toLowerCase()) )
        }); */

    //Pesquisa os dados do produto que está armazenado em cache
    return this.product.get("ProductsDb").then(v => {
      return (arrProdutos = v.Produtos.filter(value => {
        return value.NAME.toLowerCase().startsWith(keyword.toLowerCase());
      }));
    });
  }
}
