import { ModalController } from 'ionic-angular';
import { StockPage } from './../stock/stock';
import { ListaProduto } from './../../model/ListaProduto';
import { ModalProductPage } from './../modal-product/modal-product';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ProductStorageProvider } from '../../providers/product-storage/product-storage';
import { Produto } from '../../model/Produto';
import { EditProductPage } from '../edit-product/edit-product';



/**
 * Generated class for the RequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-request',
  templateUrl: 'request.html',
})
export class RequestPage {
  private Produto:Produto
  private idCategoria:number = 2;
  private nomeCategoria:string = 'Pedido';
  private arrProdutos:ListaProduto[]
  private arrRet:ListaProduto[]
  private tipo=""
  constructor(
    public modal: ModalController,public toast:ToastController,public navCtrl: NavController, public navParams: NavParams,public provider:ProductStorageProvider

    ) {
      this.tipo = 'F'

  }

  private isAvaible(){

  }

  ionViewDidEnter() {
    this.loadData(this.tipo);

  }

  onSegmentChange(value: any) {
    this.loadData(value);
  }


  addProduct(){
   const myModal = this.modal.create(ModalProductPage, {
      idCategoria: this.idCategoria ,
      nomeCategoria:this.nomeCategoria,
    })
    myModal.onDidDismiss(() => {
      this.loadData(this.tipo);
    });
    myModal.present();

  }

  loadData(value) {
    this.provider
      .getAll()
      .then(results => {
        this.arrRet = results;
        this.arrProdutos = results.filter(data => {
          return (data.produto.nome["TIPO"] == value && data.produto.categoriaProduto.nomeCategoria == 'Pedido');
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  editProduct(item: ListaProduto) {
    this.navCtrl.push(EditProductPage, {
      key: item.key,
      produto: item.produto,
      nomeCategoria: this.nomeCategoria,
    });
  }

  removeProduct(item: ListaProduto) {
    this.provider.remove(item.key).then(() => {
      let index = this.arrProdutos.indexOf(item);
      this.arrProdutos.splice(index, 1);
      this.loadData(this.tipo);
      this.toast
        .create({
          message: "Produto Removido",
          duration: 3000,
          position: "bottom"
        })
        .present();
    });
  }
}
