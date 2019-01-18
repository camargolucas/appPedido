import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TabsPage } from "./../tabs/tabs";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Form, MenuController, Menu } from "ionic-angular";

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
  formLogin: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu:MenuController) {
/*     let appEl = <HTMLElement>document.getElementsByTagName("ION-APP")[0],
      appElHeight = appEl.clientHeight;

    Keyboard.disableScroll(true);

    window.addEventListener("native.keyboardshow", e => {
      appEl.style.height = appElHeight - (<any>e).keyboardHeight + "px";
    });

    window.addEventListener("native.keyboardhide", () => {
      appEl.style.height = "100%";
    }); */

    this.menu.enable(false)

  }

  ionViewDidLoad() {

  }



  ngOnInit() {
    this.formLogin = new FormGroup({
      usuario: new FormControl("", Validators.required),
      senha: new FormControl("", Validators.required)
    });
  }

  login() {
    this.navCtrl.push(TabsPage);
    this.menu.enable(true)
  }
}
