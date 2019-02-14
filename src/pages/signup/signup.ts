import { Http } from "@angular/http";
import { Usuario } from "./../../model/Usuario";
import { AngularFireAuth } from "angularfire2/auth";
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
  formSignUp: FormGroup;
  usuario: Usuario;
  /* userApi:UserProvider */

  @ViewChild("email") email;
  @ViewChild("senha") password;
  @ViewChild("usuario") user;
  @ViewChild("loja") loja;
  @ViewChild("login") login;
  constructor(
    http: Http,
    public navCtrl: NavController,
    public navParams: NavParams,
    public firebaseauth: AngularFireAuth,
    public toast: ToastController,

  ) {
    super(http);

    this.usuario = new Usuario();
  }

  ngOnInit() {
    let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.formSignUp = new FormGroup({
      email:   new FormControl("", [Validators.required, Validators.pattern(EMAILPATTERN)]),
      usuario: new FormControl("", [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$'), Validators.minLength(3), Validators.maxLength(16)]),
      login:   new FormControl("", [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$'), Validators.minLength(5), Validators.maxLength(16)] ),
      senha:   new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(16)]),
      loja:    new FormControl("", [Validators.required])
    });
  }

  insertUserFb(): void {
    this.firebaseauth.auth
      .createUserWithEmailAndPassword(this.email.value, this.password.value)
      .then(ret => {

      })
      .catch((erro: any) => {
        console.log(erro);
      });
  }

  insertUser() {
      this.usuario.nomeUsuario    = this.user.value;
      this.usuario.senha          = this.password.value;
      this.usuario.loja           = this.loja.value;
      this.usuario.email          = this.email.value;
      this.usuario.apelidoUsuario = this.login.value;
      this.insert(this.usuario)
      .toPromise()
      .then(ret => {
        var obj              = ret.json();
        let returnCheckEmail = obj[0]['email'];
        let returnCheckLogin = obj[0]['apelido'];

        if (returnCheckEmail == '0' && returnCheckLogin == '0') {
          this.showToast('Cadastrado com sucesso')
          this.navCtrl.pop();
        } else {
          this.showToast('Já existe um usuário cadastrado')
        }

      })

      .catch((err)=>{
        console.log(err);
      })
}
  private showToast(mensagem: string): void {
    let toast = this.toast.create({ duration: 3000, position: "botton" });
    toast.setMessage(mensagem);
    toast.present();
  }
}
