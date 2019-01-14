import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Form } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  formLogin:FormGroup
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {}

  ngOnInit() {
    this.formLogin = new FormGroup({
      usuario: new FormControl("", Validators.required  ),
      senha: new FormControl("", Validators.required  )
    })
  }

  login(){
    this.navCtrl.push(TabsPage)
  }

}
