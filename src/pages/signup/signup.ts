import { TabsPage } from "./../tabs/tabs";
import { LoginPage } from "./../login/login";
import { Http } from "@angular/http";
import { Usuario } from "./../../model/Usuario";
import { FormControl, Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  MenuController
} from "ionic-angular";

import { ApiData } from "../../utilitarios/apiData";
import { UserProvider } from "../../providers/user/user";
import { extend } from "@mobiscroll/angular/src/js/core/core";
import { CategoriaItem } from "../../model/CategoriaItem";
import { ProductStorageProvider } from "../../providers/product-storage/product-storage";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-signup",
  templateUrl: "signup.html"
})
export class SignupPage extends UserProvider {
  // Variavel utilizada para criar um grupo de formulários
  formSignUp: FormGroup;

  // Objeto do tipo Usuario
  usuario: Usuario;

  public isButtonVisible = true;

  // Variavel utilizada para habilitar e desabilitar o botao de cadastro
  public status: boolean = true;

  // Variaveis utilizadas para resgatar o valor do input
  @ViewChild("email") email;
  @ViewChild("senha") password;
  @ViewChild("usuario") user;
  @ViewChild("loja") loja;
  //@ViewChild("login") login;
  constructor(
    http: Http,
    public navCtrl: NavController,
    public navParams: NavParams,
    public toast: ToastController,
    public storage: ProductStorageProvider,
    public menu:MenuController,
  ) {
    super(http);
    // Instância do objeto Usuario
    this.usuario = new Usuario();
    this.usuario.categoriaItem = new CategoriaItem();

    this.setStatus(true);

    this.menu.enable(false);
  }

  //#################################################
  // ## Função ativada quando a tela é iniciada #####
  ngOnInit() {
    // Validação dos formulários
    let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.formSignUp = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(EMAILPATTERN)
      ]),
      usuario: new FormControl("", [
        Validators.required,
        Validators.pattern("^(?=.*[a-zA-Z])[a-zA-Z0-9_ ]+$"),
        Validators.minLength(2),
        Validators.maxLength(16)
      ]),
      /* login: new FormControl("", [
        Validators.required,
        Validators.pattern("^(?=.*[a-zA-Z])[a-zA-Z0-9]+$"),
        Validators.minLength(2),
        Validators.maxLength(16)
      ]), */
      senha: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(16)
      ]),
      loja: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_]*$")
      ])
    });
  }

  //############################################################
  // ## Funçao para inserir o usuario no banco de dados ########
  insertUser() {
    // Seto o valor da variavel falso para desabilitar o botao
    this.setStatus(false);

    // Populo a modal de Usuario com os dados do campo
    this.usuario.nomeUsuario = this.user.value;
    this.usuario.senha = this.password.value;
    this.usuario.loja = this.loja.value;
    this.usuario.email = this.email.value;
    this.usuario.apelidoUsuario = this.email.value; // ## Alteração solicitada para não existir mais apelido do Funcionario
                                                    // ## para evitar disperdicio foi mantido o campo e trocado pelo email

    // ## Chamada da API para inserção no banco de dados
    this.insert(this.usuario)
      .toPromise()
      .then(ret => {
        var obj = ret.json();
        let returnCheckEmail = obj[0]["email"];
        let returnCheckLogin = obj[0]["apelido"];

        if (returnCheckEmail == "0" && returnCheckLogin == "0") {
          this.showToast("Cadastrado com sucesso");


          this.loginAuthencation(this.email.value, this.password.value).then(ret => {
            // ## Redireciono o Usuario para a tela inicial
            this.navCtrl.push(TabsPage);

            // ## ativo o menu lateral
            this.menu.enable(true);

            // ## Carrego os dados do Usuario no cache
            this.storage.insertUser(ret);
          });
        } else {
          this.showToast("Já existe um usuário cadastrado");
          this.setStatus(true);
        }
      })

      .catch(err => {
        this.setStatus(true);
        console.log(err)
        this.showToast("Não foi possivel cadastrar !");
      });
  }

  //############################################################
  // ## Função para mostrar mensagens na tela do Usuário #######
  private showToast(mensagem: string): void {
    let toast = this.toast.create({ duration: 3000, position: "botton" });
    toast.setMessage(mensagem);
    toast.present();
  }

  //########################################################################################################################
  // ## Função utilizada para popular a variavel utilizada para habilitar e desabilitar o botão
  setStatus(status: boolean) {
    this.status = status;
  }

  //########################################################################################################################
  // ## Função utilizada para habiltar e desabilitar o botão de cadastro
  enableButton() {
    return this.status;
  }
}
