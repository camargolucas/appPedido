import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ApiData } from '../../utilitarios/apiData';
import { Produto } from '../../model/Produto';



@Injectable()
export class ProductProvider extends ApiData{

  constructor(public http: Http) {
    super()

  }



  insert(product:any){
    let productData = JSON.stringify(product)


    this.http.post(this.API_URL + '/products/insertEstoque/' + productData  , this.requestOptions)
    .subscribe((ret)=>{
      console.log(ret)
    })

  }

}