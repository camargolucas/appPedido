import { TabsPage } from "./../tabs/tabs";
import { Usuario } from "./../../model/Usuario";
import { ProductProvider } from "./../../providers/product/product";

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
import { UserProvider } from "../../providers/user/user";
import { Rules } from "../../Rules/rules";
import { TabStateProvider } from "../../providers/tab-state/tab-state";

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
  public editar: boolean;
  public date: string = new Date().toLocaleDateString();
  private idCategoria: number;
  private nomeCategoria: string;
  public idUsuario: number;
  public usuario: Usuario;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public provider: ProductStorageProvider,
    public toast: ToastController,
    public modal: ModalController,
    public alertCtrl: AlertController,
    public storage: ProductStorageProvider,
    public apiProduct: ProductProvider,
    public userApi: UserProvider,
    public rules: Rules,
    public tabState: TabStateProvider
  ) {
    this.nomeCategoria = this.rules["categorias"]["estoque"]["categoriaItem"][
      "nomeCategoria"
    ];
    this.idCategoria = this.rules["categorias"]["estoque"]["categoriaItem"][
      "idCategoria"
    ];

    this.tipo = "F";
    //this.tabState.setState("tabRequest", true)
  }
  async ionViewDidEnter() {
    this.loadData(this.tipo);

    await this.provider.get("Usuario").then(value => {
      this.idUsuario = value["idUsuario"];
    });

    this.verifyToEnableTab();
  }

  onSegmentChange(value: any) {
    this.loadData(value);
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

  loadData(value) {
    this.provider
      .getAll(this.nomeCategoria)
      .then(results => {
        this.arrRet = results;
        this.arrProdutos = results.filter(data => {
          return data.produto.nome["TIPO"] == value; //&& data.produto.categoriaItem.nomeCategoria == this.nomeCategoria
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  addProduct() {
    const myModal = this.modal.create(ModalProductPage, {
      tipoProduto: this.tipo,
      idCategoria: this.idCategoria,
      nomeCategoria: this.nomeCategoria
    });

    myModal.onDidDismiss(() => {
      this.loadData(this.tipo);
    });
    myModal.present();
  }

  public isAvaible() {
    return this.editar;
  }

  public enableTab(tab: string, status: boolean) {
    console.log(status);
    this.tabState.setState(tab, status);
  }

  async verifyToEnableTab() {
    await this.verifyStock().then(ret => {
      if (ret == true) {
        this.enableTab("tabRequest", false);
      } else this.enableTab("tabRequest", true);
    });
  }

  async verifyStock() {
    let id = this.idUsuario;
    let date = this.date;
    let ENVIOS: any;
    let tabEnabled: boolean;

    let arrUser = {
      idUsuario: id,
      data: date
    };

    await this.userApi.getSentStock(arrUser).then(result => {
      ENVIOS = result[0]["ENVIOS"];

      if (ENVIOS < this.rules.ENVIOS) {
        this.editar = true;
      } else {
        this.editar = false;
      }
    });

    return this.editar;
  }

  public insertDataBase() {
    let idUsuario = this.idUsuario;
    let dataEnvio = this.date;

    let Produtos = {
      arrProduto: this.arrRet,
      idUsuario: idUsuario,
      dataEnvio: dataEnvio
    };

    this.apiProduct.insert(Produtos);
    this.enableTab("tabRequest", true);
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: "Deseja enviar o estoque? ",
      message: "Lembre-se se voce enviar, o estoque não poderá ser alterado",
      buttons: [
        {
          text: "Não",
          handler: () => {}
        },
        {
          text: "Sim",
          handler: () => {
            this.verifyStock().then(ret => {
              if (ret == true) {
                this.editar = false;
                this.insertDataBase();
              } else {
                console.log("Ja foi enviado");
              }
            });
          }
        }
      ]
    });
    confirm.present();
  }
}
