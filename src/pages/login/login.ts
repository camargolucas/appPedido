//import { UniqueDeviceID } from "@ionic-native/unique-device-id";
import { Rules } from "./../../Rules/rules";
import { Utilitarios } from "./../../utilitarios/utilitarios";
import { CategoriaItem } from "./../../model/CategoriaItem";

import { UserProvider } from "./../../providers/user/user";
import { ProductStorageProvider } from "./../../providers/product-storage/product-storage";
import { SignupPage } from "./../signup/signup";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TabsPage } from "./../tabs/tabs";
import { Component, ViewChild, Injectable } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Form,
  MenuController,
  Menu,
  ToastController,
  ModalController
} from "ionic-angular";

import { Usuario } from "../../model/Usuario";
import { Device } from "@ionic-native/device";
import { CheckNetworkProvider } from "../../providers/check-network/check-network";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  // Variavel que indica qual campo do html possui esse id("usuario")
  @ViewChild("usuario") userLogin;

  // Variavel que indica qual campo do html possui esse id("senha")
  @ViewChild("senha") password;

  // Utilizada para montar o grupo de formulario
  public formLogin: FormGroup;

  // Objeto do tipo Usuario
  public model: Usuario;

  // Utilizada para distinguir no cache a qual categoria os dados armazenados pertencem quando armazenada
  private nomeCategoria: string;
  private idCategoria: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController,
    public toast: ToastController,
    public modal: ModalController,
    public storage: ProductStorageProvider,
    public userApi: UserProvider,
    public utilitarios: Utilitarios,
    public rules: Rules,
    private device: Device,
    public network: CheckNetworkProvider
  ) {
    // #########################################
    // ## Instâncio um novo objeto na memoria ##
    this.model = new Usuario();
    this.model.categoriaItem = new CategoriaItem();

    // ## Desativo o menu lateral;
    this.menu.enable(false);

    // ##########################################################################################
    // ## Preencho a variavel com o tipo de categoria correspondente ############################
    this.nomeCategoria = this.rules["categorias"]["usuario"]["categoriaItem"][
      "nomeCategoria"
    ];
    this.idCategoria = this.rules["categorias"]["usuario"]["categoriaItem"][
      "idCategoria"
    ];

    console.log(this.network.statusNetwork);

  }

  // ##################################################################
  // ## Quando iniciada a tela, carrego o formulário e suas validações
  ngOnInit() {
    this.formLogin = new FormGroup({
      usuario: new FormControl("", Validators.required), // Obriga o usuario a preencher o campo
      senha: new FormControl("", Validators.required)
    });
  }

  // #######################################################################################
  // ## Função utilizada para armazenar no cache todos os dados do Usuário que está logado
  /*   userData(ret: any) {
    this.model.nomeUsuario = ret[0]["nomeUsuario"];
    this.model.loja = ret[0]["loja"];
    this.model.email = ret[0]["email"];
    this.model.idCargo = ret[0]["idCargo"];
    this.model.idUsuario = ret[0]["idUsuario"];
    this.model.apelidoUsuario = ret[0]["apelidoUsuario"];
    this.model.categoriaItem.idCategoria = this.idCategoria;
    this.model.categoriaItem.nomeCategoria = this.nomeCategoria;

    // ## Insere no storage/cache os dados armazenados na model (Usuario)
    this.storage.insertUser(this.model);
  } */

  login() {
    console.log(this.network.statusNetwork);

    if(this.network.checkNetwork() === true){
      
        this.showToast('Device UUID is: ' + this.device.uuid);

        return this.userApi
          .loginAuthencation(this.userLogin.value, this.password.value)
          .then(ret => {
            // ## Se retornar vazio significa que o usuario não esta cadastrado
            if (ret == "") {
              this.showToast("Usuário Inválido");
            } else {
              // ## Redireciono o Usuario para a tela inicial
              this.navCtrl.push(TabsPage);

              // ## Ativo o menu lateral
              this.menu.enable(true);

              // ## Carrego os dados do Usuario no cache
              this.storage.insertUser(ret);
            }
          })
          .catch(err => {
            this.showToast("Não foi possivel acessar !");
          });

    }else{
      this.showToast("Você não tem conexão com a internet!");
    }
  }

  // ########################################################
  // ## Função para mostrar Toast's ('mensagens')
  private showToast(mensagem: string): void {
    let toast = this.toast.create({ duration: 3000, position: "botton" });
    toast.setMessage(mensagem);
    toast.present();
  }

  // ########################################################
  // ## Função para abrir a pagina de Cadastro de Usuário ###
  openSignUp() {
    // ## Redireciono para pagina de Cadastro
    this.navCtrl.push(SignupPage);
  }
}
