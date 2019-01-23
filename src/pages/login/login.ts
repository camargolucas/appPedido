import { SignupPage } from './../signup/signup';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TabsPage } from "./../tabs/tabs";
import { Component, ViewChild } from "@angular/core";
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
import { AngularFireAuth } from "angularfire2/auth";

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
  @ViewChild("usuario") email;
  @ViewChild("senha") password;
  formLogin: FormGroup;
  public user: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController,
    public firebaseAuth: AngularFireAuth,
    public toast:ToastController,
    public modal:ModalController
  ) {
    this.menu.enable(false);
    this.firebaseAuth.user.subscribe(data => {
      this.user = data;
    });
  }

  ionViewDidLoad() {}

  ngOnInit() {
    this.formLogin = new FormGroup({
      usuario: new FormControl("", Validators.required),
      senha: new FormControl("", Validators.required)
    });
  }



  loginWithEmail(): void {
    this.firebaseAuth.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
    .then((result)=>{
      console.log(result)
      this.navCtrl.push(TabsPage);
      this.menu.enable(true);
    })
    .catch((erro:any)=>{
      this.showToast(erro)
    })
  }




  private showToast(mensagem: string): void {
    let toast = this.toast.create({duration: 3000,
                                      position: 'botton'});
    toast.setMessage(mensagem);
    toast.present();
  }


  openSignUp(){
    const myModal = this.modal.create(SignupPage)
    myModal.present();
  }
}
