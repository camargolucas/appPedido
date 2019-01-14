import { CompleteServiceProvider } from "./../../providers/complete-service/complete-service";
import { ModalProductPage } from "./../modal-product/modal-product";
import { EditProductPage } from "./../edit-product/edit-product";
import {
  ProductStorageProvider
} from "./../../providers/product-storage/product-storage";
import { Component } from "@angular/core";
import {
  NavController,
  ToastController,
  ModalController,
  ViewController
} from "ionic-angular";
import { ListaProduto } from "../../model/ListaProduto";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  arrProdutos: ListaProduto[];
  constructor(
    public navCtrl: NavController,
    public provider: ProductStorageProvider,
    public toast: ToastController,
    public modal: ModalController,
    public completeService: CompleteServiceProvider,
    public view: ViewController
  ) {}

/* ionViewDidLoad(){
  this.provider.getAll()
  .then((results)=>{
    this.arrProdutos = results
  })
  .catch((error)=>{
    console.log(error)
  })

  console.log(this.arrProdutos)
} */

  addProduct() {
    const myModal = this.modal.create(ModalProductPage);

/*     myModal.onDidDismiss(() => {
      this.provider
        .getAll()
        .then(results => {
          this.arrProdutos = results;
        })
        .catch(error => {
          console.log(error);
        });
    });*/
    myModal.present();
  }

  editProduct(item: ListaProduto) {
    this.navCtrl.push(EditProductPage, {
      key: item.key,
      produto: item.produto
    });
    console.log(item.produto)


  }

  removeProduct(item: ListaProduto) {
    this.provider.remove(item.key).then(() => {
      let index = this.arrProdutos.indexOf(item);
      this.arrProdutos.splice(index, 1);
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
