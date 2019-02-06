import { CompleteServiceProvider } from './../../providers/complete-service/complete-service';
import {
  ProductStorageProvider
} from "./../../providers/product-storage/product-storage";
import { Component, OnInit, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  FabButton,
  ViewController
} from "ionic-angular";
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms'
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
import { Utilitarios } from '../../utilitarios/utilitarios';
import { AutoCompleteComponent } from 'ionic2-auto-complete';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Produto } from '../../model/Produto';



@IonicPage()
@Component({
  selector: "page-edit-product",
  templateUrl: "edit-product.html"
})
export class  EditProductPage {
  @ViewChild('searchbar')
  searchbar: AutoCompleteComponent;

  private model: Produto;
  private key: string;
  private myForm: FormGroup;
  private arrUnidade:any;
  private arrTipo:any;
  private products:any;
  private nomeProd = "";
  private nomeCategoria = "";
  private classCssImg:string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: ProductStorageProvider,
    public toast: ToastController,
    public completeService:CompleteServiceProvider,
    public utilitarios:Utilitarios,
    public view:ViewController
  ) {
    if (this.navParams.data.produto && this.navParams.data.key) {
      this.model = this.navParams.data.produto;
      this.key = this.navParams.data.key;
    } else {
      this.model = new Produto();
    }

    this.arrTipo = this.utilitarios.getArrayTipo()
    this.arrUnidade = this.utilitarios.getArrayUnidade()
    this.nomeProd = this.model.nome

    // verifico em qual tela ele esta querendo editar para colocar a imagem de fundo correspondente ;
    this.nomeCategoria = navParams.data.nomeCategoria;
    if (this.nomeCategoria === 'Estoque') this.classCssImg = 'Estoque-Background'
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
        qtd: new FormControl('',Validators.required),
        products: new FormControl('',Validators.required),
     //   tipo: new FormControl('',Validators.required),
        und: new FormControl('',Validators.required),
    })
    this.searchbar.setFocus()
  }

  save() {
    this.saveProduct()
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
            position: "botton",
          })
          .present();
      })
}

  private saveProduct() {
      this.model.nome = this.nomeProd
      console.log('todo')
      return this.storage.update(this.key, this.model);
  }
  closeModal() {
    this.view.dismiss();
  }
}
