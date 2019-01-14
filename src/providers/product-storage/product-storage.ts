import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage'
import localForage from "localforage";
import { Produto } from '../../model/Produto';
import { ListaProduto } from '../../model/ListaProduto';

@Injectable()
export class ProductStorageProvider {

  constructor(private storage:Storage, private datePipe:DatePipe) {

  }

  public insert(produto:Produto){
    let key = this.datePipe.transform(new Date(),'ddMMyyyyHHmmss')
    return this.save(key,produto)
  }
  public save(key:string, produto:Produto){
   return this.storage.set(key,produto)
  }
  public remove(key:string){
    return this.storage.remove(key)
  }
  public update(key:string,produto:Produto){
    return this.save(key,produto)
  }

  public get(key:string){
    return this.storage.get(key)
  }

  public getAll(){
    let produtos: ListaProduto[] = [];

    return this.storage.forEach((value: Produto, key: string, iterationNumber: Number) => {
      let produto = new ListaProduto();
      produto.key = key;
      produto.produto = value;
      produtos.push(produto);
    })
      .then(() => {
        return Promise.resolve(produtos);
      })
      .catch((error) => {
        return Promise.reject(error);
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
