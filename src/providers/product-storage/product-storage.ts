import { DatePipe } from "@angular/common";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Storage } from "@ionic/storage";
import localForage from "localforage";
import { Produto } from "../../model/Produto";
import { ListaProduto } from "../../model/ListaProduto";
import { Usuario } from "../../model/Usuario";

@Injectable()
export class ProductStorageProvider {
  constructor(private storage: Storage, private datePipe: DatePipe) {}

  public insert(produto: any) {
    let key = this.datePipe.transform(new Date(), "ddMMyyyyHHmmss");
    return this.save(key, produto);
  }
  public save(key: string, produto: Produto) {
    return this.storage.set(key, produto);
  }
  public remove(key: string) {
    return this.storage.remove(key);
  }
  public update(key: string, produto: Produto) {
    return this.save(key, produto);
  }

  public get(key: string) {
    return this.storage.get(key);
  }

  public clear() {
    return this.storage.clear();
  }

  public insertUser(user:any){
    //let key = this.datePipe.transform(new Date(), "ddMMyyyyHHmmss");
    let key = 'Usuario'
    return this.saveUser(key, user)

  }

  public saveUser(key:string, user:Usuario){
    return this.storage.set(key, user)
  }

  public getAll(categoria:string) {
    let produtos: ListaProduto[] = [];
    let teste:ListaProduto[]=[];

    return this.storage
      .forEach((value: Produto, key: string, iterationNumber: Number) => {
        let produto = new ListaProduto();
        produto.key = key;
        produto.produto = value;
        produtos.push(produto);
      })


      .then(() => {
        teste = produtos.filter((value)=>{
          return value.produto.categoriaItem.nomeCategoria === categoria
        })

        return Promise.resolve(teste);
      })
      .catch(error => {
        return Promise.reject(teste);
      });
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
