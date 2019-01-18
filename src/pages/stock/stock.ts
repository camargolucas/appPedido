
import { ProductStorageProvider } from "./../../providers/product-storage/product-storage";
import { Component, ɵConsole, Optional } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  ModalController,
  AlertController
} from "ionic-angular";
import { EditProductPage } from "../edit-product/edit-product";
import { ModalProductPage } from "../modal-product/modal-product";
import { ListaProduto } from "../../model/ListaProduto";

/**
 * Generated class for the StockPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-stock",
  templateUrl: "stock.html"
})
export class StockPage {
  private arrRet: ListaProduto[];
  private arrProdutos: ListaProduto[];
  private tipo = "";
  private editar: boolean = true;
  private idCategoria: number = 1;

  public nomeCategoria = "Estoque";

  constructor(
     public navCtrl: NavController ,
    public navParams: NavParams,
    public provider: ProductStorageProvider,
    public toast: ToastController,
    public modal: ModalController,
    public alertCtrl: AlertController
  ) {
    this.tipo = 'F'
  }



  ionViewDidEnter() {

    this.loadData(this.tipo);
  }

  onSegmentChange(value: any) {
    this.loadData(value);
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

  loadData(value) {
    this.provider
      .getAll()
      .then(results => {
        this.arrRet = results;

        this.arrProdutos = results.filter(data => {
          return (data.produto.nome["TIPO"] == value && data.produto.categoriaProduto.nomeCategoria == 'Estoque');
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  addProduct() {
    const myModal = this.modal.create(ModalProductPage, {
      tipoProduto: this.tipo,
      idCategoria:this.idCategoria,
      nomeCategoria:this.nomeCategoria,
    } );

    myModal.onDidDismiss(() => {
      this.loadData(this.tipo);
    });
    myModal.present();
  }

 public isAvaible() {
    return this.editar;
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: "Deseja enviar o estoque? ",
      message: "Lembre-se se voce enviar, o estoque não poderá ser alterado",
      buttons: [
        {
          text: "Não",
          handler: () => {
            this.editar = true;
          }
        },
        {
          text: "Sim",
          handler: () => {
            this.editar = false;
          }
        }
      ]
    });
    confirm.present();
  }
}
