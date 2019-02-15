
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
  // ##############################################################################
  // #### IMPORTANTE ##############################################################
  // #### Variavel que indica qual será o campo de valor de retorno do formulario,
  // #### NAME = (nome do campo no JSON)  #
  // ###  Indica qual campo será usado para o filtro no JSON
  labelAttribute = "NAME";
  //###############################################################################
  formValueAttribute = "";
  constructor(public http: Http, public product: ProductStorageProvider) {
    super();
  }

  // ## Função utilizada para auto complete nos formulários de pesquisa de Produto
  getResults(keyword: string) {
    let arrProdutos: ListaProduto[] = [];

    //Pesquisa os dados do produto que está armazenado em cache
    return this.product.get("ProductsDb").then(v => {
      return (arrProdutos = v.Produtos.filter(value => {
        //  Filtra pelo NAME (nome do produto)
        return value.NAME.toLowerCase().startsWith(keyword.toLowerCase());
      }));
    });
  }
}
