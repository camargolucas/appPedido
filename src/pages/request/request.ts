import { ModalController, AlertController } from "ionic-angular";
import { StockPage } from "./../stock/stock";
import { ListaProduto } from "./../../model/ListaProduto";
import { ModalProductPage } from "./../modal-product/modal-product";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";
import { ProductStorageProvider } from "../../providers/product-storage/product-storage";
import { Produto } from "../../model/Produto";
import { EditProductPage } from "../edit-product/edit-product";
import { ProductProvider } from "../../providers/product/product";
import { Rules } from "../../Rules/rules";
import { UserProvider } from "../../providers/user/user";

/**
 * Generated class for the RequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-request",
  templateUrl: "request.html"
})
export class RequestPage {
  private Produto: Produto;
  private idCategoria: number;
  private nomeCategoria: string;
  private arrProdutos: ListaProduto[];
  private arrRet: ListaProduto[];
  private tipo = "";
  private add: boolean;
  private send: boolean;
  public date: string = new Date().toLocaleDateString();
  public idUsuario: number;

  constructor(
    public modal: ModalController,
    public toast: ToastController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public provider: ProductStorageProvider,
    public alertCtrl: AlertController,
    public productApi: ProductProvider,
    public rules: Rules,
    public userApi: UserProvider
  ) {
    this.nomeCategoria = this.rules["categorias"]["pedido"]["categoriaItem"][
      "nomeCategoria"
    ];
    this.idCategoria = this.rules["categorias"]["pedido"]["categoriaItem"][
      "idCategoria"
    ];
    this.tipo = "F";
  }



  async ionViewDidEnter() {
    await this.provider.get("Usuario").then(value => {
      this.idUsuario = value["idUsuario"];
    });

    //this.verifyStock(this.idUsuario, this.date);
    this.verifyRequest(this.idUsuario, this.date)

    this.loadData(this.tipo);
  }

  onSegmentChange(value: any) {
    this.loadData(value);
  }

  addProduct() {
    const myModal = this.modal.create(ModalProductPage, {
      idCategoria: this.idCategoria,
      nomeCategoria: this.nomeCategoria
    });
    myModal.onDidDismiss(() => {
      this.loadData(this.tipo);
    });
    myModal.present();
  }


  public isAvaibleSend() {
    return this.send;
  }

  async verifyRequest(idUser: number, dateNow: string) {
    let id = idUser;
    let date = dateNow;
    let ENVIOS: any;

    let arrUser = {
      idUsuario: id,
      data: date
    };

    //Verifico quantos pedidos ja foram lançados no dia atual.
    await this.userApi.getSentRequest(arrUser).then(result => {
      ENVIOS = result[0]["ENVIOS"];

      if (ENVIOS < this.rules.ENVIOS) {
        this.send = true;
      } else {
        this.send = false;
      }
    });
    return this.send;

  }

  /* async verifyStock(idUser: number, dateNow: string) {
    let id = idUser;
    let date = dateNow;
    let ENVIOS: any;

    let arrUser = {
      idUsuario: id,
      data: date
    };

    await this.userApi.getSentStock(arrUser).then(result => {
      ENVIOS = result[0]["ENVIOS"];

      if (ENVIOS >= this.rules.ENVIOS) {
        this.add = true;
      } else {
        this.add = false;
      }
    });

    return this.add;
  } */

  loadData(value) {
    this.provider
      .getAll(this.nomeCategoria)
      .then(results => {
        this.arrRet = results;
        this.arrProdutos = results.filter(data => {
          return data.produto.nome["TIPO"] == value; // && data.produto.categoriaItem.nomeCategoria == this.nomeCategoria
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
      nomeCategoria: this.nomeCategoria
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

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: "Deseja finalizar o Pedido?",
      message:
        "Lembre-se, se voce finalizar o pedido, ele não poderá ser alterado !",
      buttons: [
        {
          text: "Cancelar",
          handler: () => {}
        },
        {
          text: "Confirmar",
          handler: () => {
            this.verifyRequest(this.idUsuario, this.date).then(ret => {
              if (ret == true) {
                this.send = false;
                this.add = false;
                this.insertDatabase();
              } else {
                console.log("NÃO PODE ENVIAR");
              }
            });
          }
        }
      ]
    });
    confirm.present();
  }

  insertDatabase() {
    // this.provider.get("Usuario").then(ret => {
    let idUsuario = this.idUsuario;

    let Produtos = {
      arrProduto: this.arrRet,
      idUsuario: idUsuario,
      dataEnvio: this.date
    };
    this.productApi.insertRequest(Produtos);
    // });
  }
}
