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
    // ################################################################################################
    // ## Verifico se existem dados vindo de outra tela, caso sim ele carrega duas variaveis com os
    // ## dados da outra tela, caso não tenha dado, instancio um novo objeto para abrir uma tela vazia
    if (this.navParams.data.produto && this.navParams.data.key) {
      this.model = this.navParams.data.produto;
      this.key = this.navParams.data.key;
    } else {
      this.model = new Produto();
    }

    // ###################################################################
    // ## Carrego o array de Tipo da Fruta para ser utilizado no combobox
    this.arrTipo = this.utilitarios.getArrayTipo()
    // ## Carrego o array do tipo Unidade de medida ###
    this.arrUnidade = this.utilitarios.getArrayUnidade()
    // ## Populo a variavel nomeProd com o valor que esta no campo nome
    this.nomeProd = this.model.nome

    // ###############################################################################################
    // ## Verifico em qual tela ele esta querendo editar para colocar a imagem de fundo correspondente ;
    this.nomeCategoria = navParams.data.nomeCategoria;
    if (this.nomeCategoria === 'Estoque') this.classCssImg = 'Estoque-Background'
    else this.classCssImg = 'Pedido-Background'

  }

  // ################################################
  // ## Método é chamado quando a View é carregada ##
  ionViewDidLoad(){
    // ## Método para troca a imagem de fundo do APP
    this.changeBackground();
  }

  // ## Método para troca a imagem de fundo do APP
  changeBackground(){
    document.getElementById('content').className = this.classCssImg;
  }

  // ## Método ativado quando a tela é aberta e carrega o formulário com as validações
  ngOnInit(): void {
    this.myForm = new FormGroup({
        qtd: new FormControl('',Validators.required),
        products: new FormControl('',Validators.required),
     //   tipo: new FormControl('',Validators.required),
        und: new FormControl('',Validators.required),
    })
    this.searchbar.setFocus()
  }

  // ##############################################################
  // ## Método que chama a função que salva o produto no cache ####
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
      // ####################################################################################
      // ## Atualizo a variavel do objeto Produto com o nome que o Usuário digitou no campo ####
      this.model.nome = this.nomeProd

      // ## Atualizo o cache do Usuário com o novo produto
      return this.storage.update(this.key, this.model);
  }

  // ## Método que destrói a modal
  closeModal() {
    this.view.dismiss();
  }
}
