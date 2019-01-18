import { Utilitarios } from "./../../utilitarios/utilitarios";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  Img
} from "ionic-angular";
import { ModalController, ViewController } from "ionic-angular";
import { CompleteServiceProvider } from "../../providers/complete-service/complete-service";
import { ProductStorageProvider } from "../../providers/product-storage/product-storage";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Produto } from "../../model/Produto";
import { CategoriaProduto } from "./../../model/CategoriaProduto";

/**
 * Generated class for the ModalProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-modal-product",
  templateUrl: "modal-product.html"
})
export class ModalProductPage {
  private model: Produto;
  private key: string;
  private myForm: FormGroup;
  private arrUnidade: any;
  private arrTipo: any;
  private classCssImg:string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public completeService: CompleteServiceProvider,
    public storage: ProductStorageProvider,
    public toast: ToastController,
    public utilitarios: Utilitarios,
    public view: ViewController
  ) {
    this.model = new Produto();
    this.model.categoriaProduto = new CategoriaProduto();

    this.arrTipo = this.utilitarios.getArrayTipo();
    this.arrUnidade = this.utilitarios.getArrayUnidade();

    // Carrego variaveis com a caategoria do produto para separar Produtos de Estoque e Produtos de Pedido
    let idCategoria = navParams.data["idCategoria"];
    let nomeCategoria = navParams.data["nomeCategoria"];
    this.model.categoriaProduto.idCategoria = idCategoria;
    this.model.categoriaProduto.nomeCategoria = nomeCategoria;


    this.model.unidade = "KILO";

    // Verifico em qual tela esta sendo aberto a inclusao para indicar ao css qual imagem de fundo ele deve utilizar
    if (nomeCategoria === 'Estoque') this.classCssImg = 'Estoque-Background'
    else this.classCssImg = 'Pedido-Background'
  }

  ionViewDidLoad(){
    this.changeBackground();
  }

  changeBackground(){
    document.getElementById('content').className = this.classCssImg;
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      qtd: new FormControl("", Validators.required),
      products: new FormControl("", Validators.required),
      und: new FormControl("", Validators.required)
    });
  }

  closeModal() {
    this.view.dismiss();
  }

  save() {
    this.insertProduct()
      .then(() => {
        this.toast
          .create({
            message: "Produto Salvo",
            duration: 2000,
            position: "botton"
          })
          .present();
        this.navCtrl.pop();
      })
      .catch(() => {
        this.toast
          .create({
            message: "Erro ao Salvar Produto",
            duration: 3000,
            position: "botton"
          })
          .present();
      });
  }

  insertProduct() {
    return this.storage.insert(this.model);
  }
}
