import { Rules } from './../../Rules/rules';
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
  @ViewChild("usuario") userLogin;
  @ViewChild("senha") password;
  formLogin: FormGroup;
  public user: any;
  public model: Usuario;
  private nomeCategoria = "Usuario";
  private idCategoria = 3;
  private arrProduto = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController,
    public toast: ToastController,
    public modal: ModalController,
    public storage: ProductStorageProvider,
    public userApi: UserProvider,
    public utilitarios: Utilitarios,
    public rules:Rules
  ) {
    this.model = new Usuario();
    this.menu.enable(false);

    this.nomeCategoria = this.rules.categorias.usuario.categoriaItem.nomeCategoria
    this.idCategoria = this.rules.categorias.usuario.categoriaItem.idCategoria
  }

  ngOnInit() {
    this.formLogin = new FormGroup({
      usuario: new FormControl("", Validators.required),
      senha: new FormControl("", Validators.required)
    });
  }

  userData(ret:any) {

      this.model.nomeUsuario = ret[0]["nomeUsuario"];
      this.model.loja = ret[0]["loja"];
      this.model.email = ret[0]["email"];
      this.model.idCargo = ret[0]["idCargo"];
      this.model.idUsuario = ret[0]["idUsuario"];
      this.model.apelidoUsuario = ret[0]["apelidoUsuario"];
      this.model.categoriaItem.idCategoria = this.idCategoria;
      this.model.categoriaItem.nomeCategoria = this.nomeCategoria;

      this.storage.insertUser(this.model);

  }

  login() {
    let arrUser = {
      login: this.userLogin.value,
      password: this.password.value
    };

    this.userApi
      .getUser(arrUser)
      .then(ret => {
        if (ret == "") {
          this.showToast("Usuário Inválido");
        } else {
          this.navCtrl.push(TabsPage);
          this.menu.enable(true);
          this.userData(ret)
        }
      })
      .catch(err => {
        this.showToast('Não foi possivel acessar !')
      });
  }

  private showToast(mensagem: string): void {
    let toast = this.toast.create({ duration: 3000, position: "botton" });
    toast.setMessage(mensagem);
    toast.present();
  }

  openSignUp() {
    const myModal = this.modal.create(SignupPage);
    myModal.present();
  }
}
