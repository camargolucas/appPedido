import { CategoriaItem } from "./../../model/CategoriaItem";
import { DatePipe } from "@angular/common";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Storage } from "@ionic/storage";
import localForage from "localforage";
import { Produto } from "../../model/Produto";
import { ListaProduto } from "../../model/ListaProduto";
import { Usuario } from "../../model/Usuario";
import { ProductProvider } from "../product/product";
import { Rules } from "../../Rules/rules";

@Injectable()
export class ProductStorageProvider {
  categoria: CategoriaItem;
  constructor(
    private storage: Storage,
    private datePipe: DatePipe,
    public produtoProv: ProductProvider,
    public rules: Rules
  ) {
    // Instância
    this.categoria = new CategoriaItem();
  }

  // ######################################################
  // ## Função de chamada para a função de inserção #######
  public insert(produto: any) {

    // ## Geração da key, feita com a data hora minuto e segundo
    let key = this.datePipe.transform(new Date(), "ddMMyyyyHHmmss");
    return this.save(key, produto);
  }
  // ######################################################
  // ## Função que insere produtos no storage/cache #######
  public save(key: string, produto: Produto) {
    return this.storage.set(key, produto);
  }

  // ###################################
  // ## Remoção de produtos do cache ###
  public remove(key: string) {
    return this.storage.remove(key);
  }

  // ####################################
  // Atualização dos dados ##############
  public update(key: string, produto: Produto) {
    return this.save(key, produto);
  }

  // ##########################################
  // ## Resgata um objeto pela chave(key) #####
  public get(key: string) {
    return this.storage.get(key);
  }

  // #######################################
  // Função que limpa todo o Storage #######
  public clear() {
    return this.storage.clear();
  }

  // ##################################################
  // Função que chama a inserção de dados do usuario ##
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
  // #############################################################################
  // ## Carrega todos os dados da categoria passada por parâmentro ##############
  public getAll(categoria: string) {
    let produtos: ListaProduto[] = [];
    let arrProduto: ListaProduto[] = [];

    return this.storage
      .forEach((value: Produto, key: string, iterationNumber: Number) => {
        let produto = new ListaProduto();
        produto.key = key;
        produto.produto = value;
        produtos.push(produto);
      })

      .then(() => {
        // ## Filtro dos produto pela categoria passada no parametro
        arrProduto = produtos.filter(value => {
          return value.produto.categoriaItem.nomeCategoria === categoria;
        });

        return Promise.resolve(arrProduto);
      })
      .catch(error => {
        return Promise.reject(arrProduto);
      });
  }

  // ############################################################
  // ## Insere no cache todos os Produtos do Banco de Dados #####
  public insertDatabaseProducts() {
    this.produtoProv.getAllProducts().then(products => {
      let key = "ProductsDb";

      // ## Seto o tipo da categoria do produto
      this.categoria.idCategoria = this.rules["categorias"]["productsDb"][
        "categoriaItem"
      ]["idCategoria"];
      this.categoria.nomeCategoria = this.rules["categorias"]["productsDb"][
        "categoriaItem"
      ]["nomeCategoria"];

      // Objeto com os dados do Produto e a Categoria do Objeto
      let arrProdutos = {
        categoriaItem: this.categoria,
        Produtos: products
      };

      // Chamada para salvar no cache
      return this.saveProductsDataBase(key, arrProdutos);
    });
  }

  // ###################################################
  // ## Método para salvar os dados no cache ###########
  public saveProductsDataBase(key: string, products: any) {
    return this.storage.set(key, products);
  }
}

/* export class Produto{
  id:number
  nome:string
  qtd:number
  unidade:string
  tipo:string
}

export class ListaProduto{
  key:string
  produto:Produto
}
 */
