import { Http } from "@angular/http";
import { Usuario } from "./../../model/Usuario";
import { FormControl, Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";

import { ApiData } from "../../utilitarios/apiData";
import { UserProvider } from "../../providers/user/user";
import { extend } from "@mobiscroll/angular/src/js/core/core";

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

  // Variaveis utilizadas para resgatar o valor do input
  @ViewChild("email") email;
  @ViewChild("senha") password;
  @ViewChild("usuario") user;
  @ViewChild("loja") loja;
  @ViewChild("login") login;
  constructor(
    http: Http,
    public navCtrl: NavController,
    public navParams: NavParams,
    public toast: ToastController,

  ) {
    super(http);

    // Instância do objeto Usuario
    this.usuario = new Usuario();
  }

  //#################################################
  // ## Função ativada quando a tela é iniciada #####
  ngOnInit() {

    // Validação dos formulários
    let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.formSignUp = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.pattern(EMAILPATTERN)]),
      usuario: new FormControl("", [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9_ ]+$'), Validators.minLength(3), Validators.maxLength(16)]),
      login: new FormControl("", [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$'), Validators.minLength(5), Validators.maxLength(16)] ),
      senha: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(16)]),
      loja: new FormControl("", [Validators.required, Validators.pattern('^[a-zA-Z0-9_]*$')])
    });
  }

  //############################################################
  // ## Funçao para inserir o usuario no banco de dados ########
  insertUser() {

      // Populo a modal de Usuario com os dados do campo
      this.usuario.nomeUsuario = this.user.value;
      this.usuario.senha = this.password.value;
      this.usuario.loja = this.loja.value;
      this.usuario.email = this.email.value;
      this.usuario.apelidoUsuario = this.login.value;

      // ## Chamada da API para inserção no banco de dados
      this.insert(this.usuario)
      .toPromise()
      .then(()=>{
        this.showToast('Cadastrado com sucesso')
        this.navCtrl.pop();
      })

      .catch((err)=>{
        console.log(err);
      })

}
  //############################################################
  // ## Função para mostrar mensagens na tela do Usuário #######
  private showToast(mensagem: string): void {
    let toast = this.toast.create({ duration: 3000, position: "botton" });
    toast.setMessage(mensagem);
    toast.present();
  }
}
