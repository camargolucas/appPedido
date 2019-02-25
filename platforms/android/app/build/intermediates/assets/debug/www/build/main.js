webpackJsonp([8],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Rules_rules__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilitarios_utilitarios__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_CategoriaItem__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_product_storage_product_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_tabs__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__model_Usuario__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_device__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { UniqueDeviceID } from "@ionic-native/unique-device-id";












/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, menu, toast, modal, storage, userApi, utilitarios, rules, device) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.toast = toast;
        this.modal = modal;
        this.storage = storage;
        this.userApi = userApi;
        this.utilitarios = utilitarios;
        this.rules = rules;
        this.device = device;
        // #########################################
        // ## Instâncio um novo objeto na memoria ##
        this.model = new __WEBPACK_IMPORTED_MODULE_10__model_Usuario__["a" /* Usuario */]();
        this.model.categoriaItem = new __WEBPACK_IMPORTED_MODULE_2__model_CategoriaItem__["a" /* CategoriaItem */]();
        // ## Desativo o menu lateral;
        this.menu.enable(false);
        // ##########################################################################################
        // ## Preencho a variavel com o tipo de categoria correspondente ############################
        this.nomeCategoria = this.rules["categorias"]["usuario"]["categoriaItem"]["nomeCategoria"];
        this.idCategoria = this.rules["categorias"]["usuario"]["categoriaItem"]["idCategoria"];
    }
    // ##################################################################
    // ## Quando iniciada a tela, carrego o formulário e suas validações
    LoginPage.prototype.ngOnInit = function () {
        this.formLogin = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormGroup */]({
            usuario: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
            senha: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required)
        });
    };
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
    LoginPage.prototype.login = function () {
        /* this.uniqueDeviceID
        .get()
        .then((uuid: any)=>{
          this.showToast(uuid)
        })
        .catch((error: any) => console.log(error)); */
        var _this = this;
        this.showToast('Device UUID is: ' + this.device.uuid);
        return this.userApi
            .loginAuthencation(this.userLogin.value, this.password.value)
            .then(function (ret) {
            // ## Se retornar vazio significa que o usuario não esta cadastrado
            if (ret == "") {
                _this.showToast("Usuário Inválido");
            }
            else {
                // ## Redireciono o Usuario para a tela inicial
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__tabs_tabs__["a" /* TabsPage */]);
                // ## Ativo o menu lateral
                _this.menu.enable(true);
                // ## Carrego os dados do Usuario no cache
                _this.storage.insertUser(ret);
            }
        })
            .catch(function (err) {
            _this.showToast("Não foi possivel acessar !");
        });
    };
    // ########################################################
    // ## Função para mostrar Toast's ('mensagens')
    LoginPage.prototype.showToast = function (mensagem) {
        var toast = this.toast.create({ duration: 3000, position: "botton" });
        toast.setMessage(mensagem);
        toast.present();
    };
    // ########################################################
    // ## Função para abrir a pagina de Cadastro de Usuário ###
    LoginPage.prototype.openSignUp = function () {
        // ## Redireciono para pagina de Cadastro
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["_8" /* ViewChild */])("usuario"),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "userLogin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["_8" /* ViewChild */])("senha"),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "password", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["m" /* Component */])({
            selector: "page-login",template:/*ion-inline-start:"C:\Users\Frutamina\Documents\GitHub\prePedido\src\pages\login\login.html"*/'<ion-content padding>\n\n  <div class="div-components">\n\n    <form [formGroup]="formLogin">\n\n      <div class="title">\n\n        <ion-title>\n\n          <h1>Bem Vindo</h1>\n\n        </ion-title>\n\n      </div>\n\n      <ion-item class="ion-item" no-lines>\n\n        <ion-label stacked color="primary">\n\n          <ion-icon name="md-contact"></ion-icon>\n\n          Usuário / Email\n\n        </ion-label>\n\n        <ion-input type="text" formControlName="usuario" #usuario> </ion-input>\n\n        <hr>\n\n      </ion-item>\n\n      <ion-item class="ion-item" no-lines>\n\n        <ion-label stacked color="primary">\n\n          <ion-icon name="md-lock" left></ion-icon>\n\n          Senha\n\n        </ion-label>\n\n        <ion-input type="password" formControlName="senha" #senha> </ion-input>\n\n        <hr>\n\n      </ion-item>\n\n      <div padding>\n\n        <button ion-button block (click)="login()" round [disabled]="formLogin.invalid">Entrar</button>\n\n      </div>\n\n      <div padding>\n\n        <button ion-button (click)="openSignUp()" round clear>Cadastre-se</button>\n\n      </div>\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Frutamina\Documents\GitHub\prePedido\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_product_storage_product_storage__["a" /* ProductStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1__utilitarios_utilitarios__["a" /* Utilitarios */],
            __WEBPACK_IMPORTED_MODULE_0__Rules_rules__["a" /* Rules */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_device__["a" /* Device */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(46);

var ApiData = /** @class */ (function () {
    function ApiData() {
        // ## URL da API
        this.API_URL = "http://apprequestapi.kinghost.net:21093/";
        //this.API_URL = "http://localhost:21093/"; // TESTE API LOCAL
        // ## Configuração do Header da API
        // ## Padrão de transição de dados
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.headers.append("Accept", "application/json");
        this.headers.append("Content-Type", "application/json");
        this.headers.append("Access-Control-Allow-Origin", "*");
        this.requestOptions = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    return ApiData;
}());

//# sourceMappingURL=apiData.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Usuario__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_user__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_CategoriaItem__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_product_storage_product_storage__ = __webpack_require__(27);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function (_super) {
    __extends(SignupPage, _super);
    //@ViewChild("login") login;
    function SignupPage(http, navCtrl, navParams, toast, storage, menu) {
        var _this = _super.call(this, http) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.toast = toast;
        _this.storage = storage;
        _this.menu = menu;
        _this.isButtonVisible = true;
        // Variavel utilizada para habilitar e desabilitar o botao de cadastro
        _this.status = true;
        // Instância do objeto Usuario
        _this.usuario = new __WEBPACK_IMPORTED_MODULE_2__model_Usuario__["a" /* Usuario */]();
        _this.usuario.categoriaItem = new __WEBPACK_IMPORTED_MODULE_7__model_CategoriaItem__["a" /* CategoriaItem */]();
        _this.setStatus(true);
        _this.menu.enable(false);
        return _this;
    }
    //#################################################
    // ## Função ativada quando a tela é iniciada #####
    SignupPage.prototype.ngOnInit = function () {
        // Validação dos formulários
        var EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.formSignUp = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]("", [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].pattern(EMAILPATTERN)
            ]),
            usuario: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]("", [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].pattern("^(?=.*[a-zA-Z])[a-zA-Z0-9_ ]+$"),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(2),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].maxLength(16)
            ]),
            /* login: new FormControl("", [
              Validators.required,
              Validators.pattern("^(?=.*[a-zA-Z])[a-zA-Z0-9]+$"),
              Validators.minLength(2),
              Validators.maxLength(16)
            ]), */
            senha: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]("", [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(5),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].maxLength(16)
            ]),
            loja: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]("", [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].pattern("^[a-zA-Z0-9_]*$")
            ])
        });
    };
    //############################################################
    // ## Funçao para inserir o usuario no banco de dados ########
    SignupPage.prototype.insertUser = function () {
        var _this = this;
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
            .then(function (ret) {
            var obj = ret.json();
            var returnCheckEmail = obj[0]["email"];
            var returnCheckLogin = obj[0]["apelido"];
            if (returnCheckEmail == "0" && returnCheckLogin == "0") {
                _this.showToast("Cadastrado com sucesso");
                _this.loginAuthencation(_this.email.value, _this.password.value).then(function (ret) {
                    // ## Redireciono o Usuario para a tela inicial
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */]);
                    // ## ativo o menu lateral
                    _this.menu.enable(true);
                    // ## Carrego os dados do Usuario no cache
                    _this.storage.insertUser(ret);
                });
            }
            else {
                _this.showToast("Já existe um usuário cadastrado");
                _this.setStatus(true);
            }
        })
            .catch(function (err) {
            _this.setStatus(true);
            console.log(err);
            _this.showToast("Não foi possivel cadastrar !");
        });
    };
    //############################################################
    // ## Função para mostrar mensagens na tela do Usuário #######
    SignupPage.prototype.showToast = function (mensagem) {
        var toast = this.toast.create({ duration: 3000, position: "botton" });
        toast.setMessage(mensagem);
        toast.present();
    };
    //########################################################################################################################
    // ## Função utilizada para popular a variavel utilizada para habilitar e desabilitar o botão
    SignupPage.prototype.setStatus = function (status) {
        this.status = status;
    };
    //########################################################################################################################
    // ## Função utilizada para habiltar e desabilitar o botão de cadastro
    SignupPage.prototype.enableButton = function () {
        return this.status;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_8" /* ViewChild */])("email"),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_8" /* ViewChild */])("senha"),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "password", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_8" /* ViewChild */])("usuario"),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_8" /* ViewChild */])("loja"),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "loja", void 0);
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: "page-signup",template:/*ion-inline-start:"C:\Users\Frutamina\Documents\GitHub\prePedido\src\pages\signup\signup.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Cadastro</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="scroll-content" padding>\n\n  <div class="div-components">\n\n    <form [formGroup]="formSignUp">\n\n\n\n      <ion-title>\n\n        <h1>Cadastrar</h1>\n\n      </ion-title>\n\n      <div>\n\n        <ion-item class="ion-item" no-lines>\n\n          <ion-label>\n\n            <ion-icon name="md-people"></ion-icon>\n\n            Nome\n\n          </ion-label>\n\n          <ion-input type="text" formControlName="usuario" #usuario></ion-input>\n\n        </ion-item>\n\n        <div class="error" *ngIf="formSignUp.get(\'usuario\').hasError(\'minlength\') && formSignUp.get(\'usuario\').touched">\n\n          Mínimo 2 caracteres\n\n        </div>\n\n        <div class="error" *ngIf="formSignUp.get(\'usuario\').hasError(\'maxlength\') && formSignUp.get(\'usuario\').touched">\n\n          Máximo 16 caracteres\n\n        </div>\n\n      </div>\n\n<!--       <div>\n\n        <ion-item class="ion-item" no-lines>\n\n          <ion-label>\n\n            <ion-icon name="md-contact"></ion-icon>\n\n            Usuário\n\n          </ion-label>\n\n          <ion-input type="text" formControlName="login" #login></ion-input>\n\n        </ion-item>\n\n        <div class="error" *ngIf="formSignUp.get(\'login\').hasError(\'minlength\') && formSignUp.get(\'login\').touched">\n\n          Mínimo 2 caracteres\n\n        </div>\n\n        <div class="error" *ngIf="formSignUp.get(\'login\').hasError(\'maxlength\') && formSignUp.get(\'login\').touched">\n\n          Máximo 16 caracteres\n\n        </div>\n\n        <div class="error" *ngIf="formSignUp.get(\'login\').hasError(\'pattern\') && formSignUp.get(\'login\').touched">\n\n          Não é possivel carácteres especiais\n\n        </div>\n\n\n\n      </div> -->\n\n\n\n      <div>\n\n        <ion-item class="ion-item" no-lines>\n\n          <ion-label>\n\n            <ion-icon name="md-mail"></ion-icon>\n\n            Email\n\n          </ion-label>\n\n          <ion-input type="text" formControlName="email" #email></ion-input>\n\n        </ion-item>\n\n        <div class="error" *ngIf="formSignUp.get(\'email\').hasError(\'pattern\') && formSignUp.get(\'email\').touched">\n\n          Email inválido\n\n        </div>\n\n      </div>\n\n\n\n      <div class="div-senha">\n\n        <ion-item class="ion-item" no-lines>\n\n          <ion-label>\n\n            <ion-icon name="md-lock" left></ion-icon>\n\n            Senha\n\n          </ion-label>\n\n          <ion-input type="password" formControlName="senha" #senha></ion-input>\n\n        </ion-item>\n\n        <div class="error" *ngIf="formSignUp.get(\'senha\').hasError(\'minlength\') && formSignUp.get(\'senha\').touched">\n\n          Mínimo 5 caracteres\n\n        </div>\n\n        <div class="error" *ngIf="formSignUp.get(\'senha\').hasError(\'maxlength\') && formSignUp.get(\'senha\').touched">\n\n          Máximo 16 caracteres\n\n        </div>\n\n      </div>\n\n      <div class="div-loja">\n\n        <ion-item class="ion-item" no-lines>\n\n          <ion-label>\n\n            <ion-icon name="md-bookmark" left></ion-icon>\n\n            Loja\n\n          </ion-label>\n\n          <ion-input type="number" min="1" pattern="[0-9]*" formControlName="loja" #loja></ion-input>\n\n        </ion-item>\n\n      </div>\n\n        <button *ngIf="enableButton()" ion-button round [disabled]="formSignUp.invalid" (click)="insertUser()">Cadastrar</button>\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Frutamina\Documents\GitHub\prePedido\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_product_storage_product_storage__["a" /* ProductStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* MenuController */]])
    ], SignupPage);
    return SignupPage;
}(__WEBPACK_IMPORTED_MODULE_6__providers_user_user__["a" /* UserProvider */]));

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_product_modal_product__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_product_storage_product_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_product_edit_product__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_product_product__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Rules_rules__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_user__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sort_by_typescript__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sort_by_typescript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_sort_by_typescript__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










/**
 * Generated class for the RequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RequestPage = /** @class */ (function () {
    function RequestPage(modal, toast, navCtrl, navParams, provider, alertCtrl, productApi, rules, userApi) {
        this.modal = modal;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.alertCtrl = alertCtrl;
        this.productApi = productApi;
        this.rules = rules;
        this.userApi = userApi;
        // Variavel utilizada para distinguir o tipo do produto (FRUTA, VERDURA e LEGUME) e setar as abas
        this.tipo = "";
        // Resgata a data do dia
        this.date = new Date().toLocaleDateString();
        // ##########################################################################################
        // ## Preencho a variavel com o tipo de categoria correspondente ############################
        this.nomeCategoria = this.rules["categorias"]["pedido"]["categoriaItem"]["nomeCategoria"];
        this.idCategoria = this.rules["categorias"]["pedido"]["categoriaItem"]["idCategoria"];
        // ## Seto como F(Fruta) para iniciar na aba Fruta
        this.tipo = "F";
    }
    // ################################################
    // ## Função ativada quando a View é carregada ####
    RequestPage.prototype.ionViewDidEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Armazeno o id do Usuario logado na variavel idUsuario
                    return [4 /*yield*/, this.provider.get("Usuario").then(function (value) {
                            _this.idUsuario = value["idUsuario"];
                        })];
                    case 1:
                        // Armazeno o id do Usuario logado na variavel idUsuario
                        _a.sent();
                        // ## Verifico se já foi enviado algum pedido do Usuario logado
                        this.verifyRequest(this.idUsuario, this.date);
                        // ## Listagem dos produtos conforme seu tipo
                        this.loadData(this.tipo, this.idUsuario);
                        return [2 /*return*/];
                }
            });
        });
    };
    // ##############################################
    // ## Função ativada quando a aba é trocada #####
    RequestPage.prototype.onSegmentChange = function (value) {
        // Lista os produtos conforme seu tipo
        this.loadData(value, this.idUsuario);
    };
    // ###############################################################
    // ## Função utilizada para abrir a modal de adicionar Produtos ##
    RequestPage.prototype.addProduct = function () {
        var _this = this;
        // Criação da Modal
        var myModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_1__modal_product_modal_product__["a" /* ModalProductPage */], {
            idCategoria: this.idCategoria,
            nomeCategoria: this.nomeCategoria
        });
        // Quando a modal é finalizada é chamado novamente o metodo de listagem com os novos produtos
        myModal.onDidDismiss(function () {
            _this.loadData(_this.tipo, _this.idUsuario);
        });
        myModal.present();
    };
    // #######################################################################
    // ## Utilizada para verificar se há possibilidade de envio do Pedido ####
    RequestPage.prototype.isAvaibleSend = function () {
        return this.send;
    };
    // ###################################################################################################
    // ## Função para verificar no bano de dados se aquele usuario já enviou algum pedido no dia #########
    RequestPage.prototype.verifyRequest = function (idUser, dateNow) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var id, date, ENVIOS, arrUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = idUser;
                        date = dateNow;
                        arrUser = {
                            idUsuario: id,
                            data: date
                        };
                        // ## Verifico quantos pedidos ja foram lançados no dia atual.
                        return [4 /*yield*/, this.userApi.getSentRequest(arrUser).then(function (result) {
                                ENVIOS = result[0]["ENVIOS"];
                                // ## Se ainda não enviou nenhum pedido no dia ...
                                if (ENVIOS < _this.rules.ENVIOS) {
                                    _this.send = true;
                                }
                                else {
                                    _this.send = false;
                                }
                            })];
                    case 1:
                        // ## Verifico quantos pedidos ja foram lançados no dia atual.
                        _a.sent();
                        return [2 /*return*/, this.send];
                }
            });
        });
    };
    /* async verifyStock(idUser: number, dateNow: string) {
      let id = idUser;
      let date = dateNow;
      let ENVIOS: any;
  
      let arrUser = {
        idUsuario: id,
        data: date
      };
  
      await this.userApi.getSentStock(arrUser).then(result => {
        ENVIOS = result[0]["ENVIOS"];
  
        if (ENVIOS >= this.rules.ENVIOS) {
          this.add = true;
        } else {
          this.add = false;
        }
      });
  
      return this.add;
    } */
    // ########################################################################
    // ## Função que carrega e filtra os dados no cache do Usuario ############
    RequestPage.prototype.loadData = function (value, idUser) {
        var _this = this;
        this.provider
            .getAll(this.nomeCategoria)
            .then(function (results) {
            // Filtro todos os produtos lancados de todos os tipos pelo usuario logado
            _this.arrRet = results.filter(function (data) {
                return data.produto.usuario.idUsuario == idUser;
            });
            // Filtro os produtos por TIPO e por Usuario
            _this.arrProdutos = results.filter(function (data) {
                return (data.produto.nome["TIPO"] == value &&
                    data.produto.usuario.idUsuario == idUser); // && data.produto.categoriaItem.nomeCategoria == this.nomeCategoria
            });
            // ## Ordeno o array pelo nome em ordem alfabetica
            _this.arrProdutos.sort(Object(__WEBPACK_IMPORTED_MODULE_8_sort_by_typescript__["sortBy"])("produto.nome.NAME"));
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    // ###############################################################
    // ## Função para chamar a pagina de Edição de produtos ##########
    RequestPage.prototype.editProduct = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_product_edit_product__["a" /* EditProductPage */], {
            key: item.key,
            produto: item.produto,
            nomeCategoria: this.nomeCategoria
        });
    };
    // ######################################################
    // ## Função para remoção de produtos do Cache ##########
    RequestPage.prototype.removeProduct = function (item) {
        var _this = this;
        this.provider.remove(item.key).then(function () {
            var index = _this.arrProdutos.indexOf(item);
            _this.arrProdutos.splice(index, 1);
            _this.loadData(_this.tipo, _this.idUsuario);
            _this.toast
                .create({
                message: "Produto Removido",
                duration: 3000,
                position: "bottom"
            })
                .present();
        });
    };
    // ########################################################################
    // ## Função que mostra o pop up de confirmacção de Envio #################
    RequestPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: "Deseja finalizar o Pedido?",
            message: "Lembre-se, se voce finalizar o pedido, ele não poderá ser alterado !",
            buttons: [
                {
                    text: "Cancelar",
                    handler: function () { }
                },
                {
                    text: "Confirmar",
                    handler: function () {
                        // Verifico se já foi enviado Pedido deste usuário
                        _this.verifyRequest(_this.idUsuario, _this.date)
                            .then(function (ret) {
                            // Se for possivel o lancamento, seto a variavel de Send como falsa para impedir o
                            // usuário de enviar o pedido novamente. E insiro no Banco de Dados
                            if (ret == true) {
                                _this.send = false;
                                _this.insertDatabase();
                            }
                            else {
                                _this.toast
                                    .create({
                                    message: "Pedido já foi enviado hoje !",
                                    duration: 3000,
                                    position: "bottom"
                                })
                                    .present();
                            }
                        })
                            .catch(function () {
                            _this.toast
                                .create({
                                message: "Não foi possivel enviar o estoque !",
                                duration: 3000,
                                position: "bottom"
                            })
                                .present();
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    // ###############################################################
    // ## Função para inserir o Pedido no banco de dados ############
    RequestPage.prototype.insertDatabase = function () {
        var _this = this;
        // this.provider.get("Usuario").then(ret => {
        var idUsuario = this.idUsuario;
        // ## Monto um objeto com os dados de envio do Usuario, e os produtos adicionados
        var Produtos = {
            arrProduto: this.arrRet,
            idUsuario: idUsuario,
            dataEnvio: this.date
        };
        // ## Funcao da API que salva os dados no banco
        this.productApi
            .insertRequest(Produtos)
            .toPromise() // Caso tenha inserido com sucesso ...
            .then(function (ret) {
            _this.toast
                .create({
                message: "Pedido Enviado com sucesso",
                duration: 3000,
                position: "bottom"
            })
                .present();
        });
        // });
    };
    RequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: "page-request",template:/*ion-inline-start:"C:\Users\Frutamina\Documents\GitHub\prePedido\src\pages\request\request.html"*/'<!--\n\n  Generated template for the RequestPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title class="title"> Pedido </ion-title>\n\n    <button class="icon-cfg" ion-button menuToggle color="indigo">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n\n\n    <ion-buttons *ngIf="isAvaibleSend()"  end>\n\n      <button class="icon-cfg" ion-button color="indigo" (click)="addProduct()">\n\n        <ion-icon name="md-add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="background-img">\n\n\n\n  <div>\n\n    <ion-segment color="indigo" (ionChange)="onSegmentChange(tipo)" [(ngModel)]="tipo">\n\n      <ion-segment-button value="F"> Fruta </ion-segment-button>\n\n      <ion-segment-button value="V"> Verdura </ion-segment-button>\n\n      <ion-segment-button value="L"> Legume </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n\n\n  <div class="cfg-title" *ngIf="arrProdutos && arrProdutos.length">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col name="Produto" class="size-title" align-self-center col-8>\n\n          Produto\n\n        </ion-col>\n\n\n\n        <ion-col name="Qtd" align-self-center align="right"> Qtd </ion-col>\n\n        <ion-col name="Und" align="right"> Und </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <div *ngFor="let item of arrProdutos" class="card">\n\n    <ion-list>\n\n      <ion-item-sliding>\n\n        <ion-item class="item">\n\n          <ion-grid>\n\n            <div>\n\n              <ion-row>\n\n                <ion-col class="ion-col" align-self-start col-8>\n\n                  <h4>{{ item.produto.nome.NAME }}</h4>\n\n                </ion-col>\n\n                <ion-col align-self-center align="right">\n\n                  <h4>{{ item.produto.qtd }}</h4>\n\n                </ion-col>\n\n\n\n                <ion-col align="right">\n\n                  <h4>{{ item.produto.unidade }}</h4>\n\n                </ion-col>\n\n              </ion-row>\n\n            </div>\n\n          </ion-grid>\n\n        </ion-item>\n\n        <ion-item-options *ngIf="isAvaibleSend()" side="right" (ionSwipe)="removeProduct(item)">\n\n          <button ion-button expandable color="danger" (click)="removeProduct(item)">\n\n            <ion-icon name="trash"></ion-icon>Excluir\n\n          </button>\n\n        </ion-item-options>\n\n        <ion-item-options *ngIf="isAvaibleSend()" side="left" (ionSwipe)="editProduct(item)">\n\n          <button ion-button (click)="editProduct(item)">\n\n            <ion-icon name="create"></ion-icon>Editar\n\n          </button>\n\n\n\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n\n\n    </ion-list>\n\n\n\n  </div>\n\n   <div *ngIf="arrRet && arrRet.length && isAvaibleSend()" class="ion-fab">\n\n    <ion-fab bottom right mini>\n\n      <button ion-fab color="indigo" (click)="showConfirm()"  round small>\n\n        <ion-icon name="md-done-all"></ion-icon>\n\n      </button>\n\n    </ion-fab>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Frutamina\Documents\GitHub\prePedido\src\pages\request\request.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_product_storage_product_storage__["a" /* ProductStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_product_product__["a" /* ProductProvider */],
            __WEBPACK_IMPORTED_MODULE_6__Rules_rules__["a" /* Rules */],
            __WEBPACK_IMPORTED_MODULE_7__providers_user_user__["a" /* UserProvider */]])
    ], RequestPage);
    return RequestPage;
}());

//# sourceMappingURL=request.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_product_storage_product_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MorePage = /** @class */ (function () {
    function MorePage(navParams, viewCtrl, app, storage) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.app = app;
        this.storage = storage;
    }
    MorePage.prototype.leave = function () {
        var _this = this;
        // ## Saída do sistema
        this.storage.get("Usuario").then(function (ret) {
            // ## Seto a variavel para deslogado
            ret.logado = 0;
            // ## Atualizo o cache do storage com o novo valor do logado
            _this.storage.saveUser('Usuario', ret);
            // ## redireciono para a tela de Login
            _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginPage */]);
        });
    };
    MorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: "page-more",template:/*ion-inline-start:"C:\Users\Frutamina\Documents\GitHub\prePedido\src\pages\more\more.html"*/'<!--\n\n  Generated template for the MorePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle color="primary">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      <h1>Outros</h1>\n\n    </ion-card-header>\n\n\n\n    <ion-list>\n\n\n\n      <button ion-item (click)="leave()" clear>\n\n        <ion-icon name="md-walk" item-start clear color="primary"></ion-icon>\n\n        <h2>Sair</h2>\n\n      </button>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Frutamina\Documents\GitHub\prePedido\src\pages\more\more.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_0__providers_product_storage_product_storage__["a" /* ProductStorageProvider */]])
    ], MorePage);
    return MorePage;
}());

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_product_product__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_product_storage_product_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_product_edit_product__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_product_modal_product__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_user__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Rules_rules__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_tab_state_tab_state__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_sort_by_typescript__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_sort_by_typescript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_sort_by_typescript__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










/**
 * Generated class for the StockPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StockPage = /** @class */ (function () {
    function StockPage(navCtrl, navParams, provider, toast, modal, alertCtrl, storage, apiProduct, userApi, rules, tabState) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.toast = toast;
        this.modal = modal;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.apiProduct = apiProduct;
        this.userApi = userApi;
        this.rules = rules;
        this.tabState = tabState;
        // Variavel utilizada para distinguir o tipo do produto (FRUTA, VERDURA e LEGUME) e setar as abas
        this.tipo = "";
        // Data do dia
        this.date = new Date().toLocaleDateString();
        // ##########################################################################################
        // ## Preencho a variavel com o tipo de categoria correspondente ############################
        this.nomeCategoria = this.rules["categorias"]["estoque"]["categoriaItem"]["nomeCategoria"];
        this.idCategoria = this.rules["categorias"]["estoque"]["categoriaItem"]["idCategoria"];
        // ## Seto como F(Fruta) para iniciar na aba Fruta
        this.tipo = "F";
        //this.tabState.setState("tabRequest", true)
    }
    // ################################################
    // ## Função ativada quando a View é carregada ####
    StockPage.prototype.ionViewDidEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Armazeno o id do Usuario logado na variavel idUsuario
                    return [4 /*yield*/, this.provider.get("Usuario").then(function (value) {
                            _this.idUsuario = value["idUsuario"];
                        })];
                    case 1:
                        // Armazeno o id do Usuario logado na variavel idUsuario
                        _a.sent();
                        // ## Listagem dos produtos conforme seu tipo
                        this.loadData(this.tipo, this.idUsuario);
                        // Verifica a disponibilidade para liberar a aba de Pedido
                        this.verifyToEnableTab();
                        return [2 /*return*/];
                }
            });
        });
    };
    // ##############################################
    // ## Função ativada quando a aba é trocada #####
    StockPage.prototype.onSegmentChange = function (value) {
        // Lista os produtos conforme seu tipo
        this.loadData(value, this.idUsuario);
    };
    // ###############################################################
    // ## Função para chamar a pagina de Edição de produtos ##########
    StockPage.prototype.editProduct = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_product_edit_product__["a" /* EditProductPage */], {
            key: item.key,
            produto: item.produto,
            nomeCategoria: this.nomeCategoria
        });
    };
    // ######################################################
    // ## Função para remoção de produtos do Cache ##########
    StockPage.prototype.removeProduct = function (item) {
        var _this = this;
        this.provider.remove(item.key).then(function () {
            var index = _this.arrProdutos.indexOf(item);
            _this.arrProdutos.splice(index, 1);
            _this.loadData(_this.tipo, _this.idUsuario);
            _this.toast
                .create({
                message: "Produto Removido",
                duration: 3000,
                position: "bottom"
            })
                .present();
        });
    };
    // ########################################################################
    // ## Função que carrega e filtra os dados no cache do Usuario ############
    StockPage.prototype.loadData = function (value, idUser) {
        var _this = this;
        this.provider
            .getAll(this.nomeCategoria)
            .then(function (results) {
            // ## Filtro todos os produtos lancados de todos os tipos pelo usuario logado
            _this.arrRet = results.filter(function (data) {
                return data.produto.usuario.idUsuario == idUser;
            });
            // Filtro os produtos por TIPO e por Usuario
            _this.arrProdutos = results.filter(function (data) {
                // Listo pelo tipo do produto e pelo usuario que adicionou o produto
                return (data.produto.nome["TIPO"] == value &&
                    data.produto.usuario.idUsuario == idUser); //&& data.produto.categoriaItem.nomeCategoria == this.nomeCategoria
            });
            // ## Ordeno o array pelo nome em ordem alfabetica
            _this.arrProdutos.sort(Object(__WEBPACK_IMPORTED_MODULE_9_sort_by_typescript__["sortBy"])("produto.nome.NAME"));
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    // ###############################################################
    // ## Função utilizada para abrir a modal de adicionar Produtos ##
    StockPage.prototype.addProduct = function () {
        var _this = this;
        var myModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_5__modal_product_modal_product__["a" /* ModalProductPage */], {
            tipoProduto: this.tipo,
            idCategoria: this.idCategoria,
            nomeCategoria: this.nomeCategoria
        });
        myModal.onDidDismiss(function () {
            _this.loadData(_this.tipo, _this.idUsuario);
        });
        myModal.present();
    };
    // ################################################################################################
    // ## Função utilizada para verificar a disponibilidade de alteração e envio de Produtos ##########
    StockPage.prototype.isAvaible = function () {
        return this.editar;
    };
    // ######################################################################
    // ## Função utilizada para habilitar e desabilitar abas de navegação ###
    StockPage.prototype.enableTab = function (tab, status) {
        this.tabState.setState(tab, status);
    };
    // #################################################################################
    // ## Função para verificar a disponibilidade de liberação das abas de navegação ###
    StockPage.prototype.verifyToEnableTab = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.verifyStock().then(function (ret) {
                            if (ret == true) {
                                _this.enableTab("tabRequest", false);
                            }
                            else
                                _this.enableTab("tabRequest", true);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // ###############################################################
    // ## Verifica se foi lancado estoque e retorna um boolean dizendo se pode ou não enviar/editar os produots
    StockPage.prototype.verifyStock = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var id, date, ENVIOS, tabEnabled, arrUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = this.idUsuario;
                        date = this.date;
                        arrUser = {
                            idUsuario: id,
                            data: date
                        };
                        // ## Chamada da API para verificar quantos pedidos foram enviados no dia
                        return [4 /*yield*/, this.userApi.getSentStock(arrUser).then(function (result) {
                                ENVIOS = result[0]["ENVIOS"];
                                if (ENVIOS < _this.rules.ENVIOS) {
                                    _this.editar = true;
                                }
                                else {
                                    _this.editar = false;
                                }
                            })];
                    case 1:
                        // ## Chamada da API para verificar quantos pedidos foram enviados no dia
                        _a.sent();
                        return [2 /*return*/, this.editar];
                }
            });
        });
    };
    // ###############################################################
    // ## Função para inserir o Estoque no banco de dados
    StockPage.prototype.insertDataBase = function () {
        var _this = this;
        var idUsuario = this.idUsuario;
        var dataEnvio = this.date;
        // ## Monto um objeto com os dados de envio do Usuario, e os produtos adicionados
        var Produtos = {
            arrProduto: this.arrRet,
            idUsuario: idUsuario,
            dataEnvio: dataEnvio
        };
        // ## Funcao da API que salva os dados no banco
        this.apiProduct
            .insert(Produtos)
            .toPromise() // Caso tenha inserido com sucesso ...
            .then(function (ret) {
            _this.toast
                .create({
                message: "Estoque Enviado com sucesso",
                duration: 3000,
                position: "bottom"
            })
                .present();
        });
        this.enableTab("tabRequest", true); // Ao inserir o estoque, libera a aba de Pedido
    };
    // ########################################################################
    // ## Função que mostra o pop up de confirmacção de Envio #################
    StockPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: "Deseja enviar o estoque? ",
            message: "Lembre-se se voce enviar, o estoque não poderá ser alterado",
            buttons: [
                {
                    text: "Não",
                    handler: function () { }
                },
                {
                    text: "Sim",
                    handler: function () {
                        // Verifico se já foi enviado Estoque deste usuário
                        _this.verifyStock()
                            .then(function (ret) {
                            // Se for possivel o lancamento, seto a variavel de Editar como falsa para impedir o
                            // usuário de enviar o pedido novamente. E insiro no Banco de Dados
                            if (ret == true) {
                                _this.editar = false;
                                _this.insertDataBase();
                            }
                            else {
                                _this.toast
                                    .create({
                                    message: "Estoque já foi enviado hoje !",
                                    duration: 3000,
                                    position: "bottom"
                                })
                                    .present();
                            }
                        })
                            .catch(function () {
                            _this.toast
                                .create({
                                message: "Não foi possivel enviar o estoque !",
                                duration: 3000,
                                position: "bottom"
                            })
                                .present();
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    StockPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: "page-stock",template:/*ion-inline-start:"C:\Users\Frutamina\Documents\GitHub\prePedido\src\pages\stock\stock.html"*/'<!--\n\n  Generated template for the StockPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title class="title"> Estoque </ion-title>\n\n    <button class="icon-cfg" ion-button menuToggle color="primary">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n\n\n    <ion-buttons *ngIf="isAvaible() " end>\n\n      <button class="icon-cfg" ion-button color="primary" (click)="addProduct()">\n\n        <ion-icon name="md-add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n\n\n  </ion-toolbar>\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n\n\n<ion-content class="scroll-content">\n\n  <ion-segment (ionChange)="onSegmentChange(tipo)" [(ngModel)]="tipo">\n\n    <ion-segment-button value="F">\n\n      Fruta\n\n    </ion-segment-button>\n\n    <ion-segment-button value="V">\n\n      Verdura\n\n    </ion-segment-button>\n\n    <ion-segment-button value="L">\n\n      Legume\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n\n\n  <div class="cfg-title" *ngIf="arrProdutos && arrProdutos.length">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col name="Produto" class="size-title" align-self-center col-8>\n\n          Produto\n\n        </ion-col>\n\n\n\n        <ion-col name="Qtd" align-self-center align="right">\n\n          Qtd\n\n        </ion-col>\n\n        <ion-col name="Und" align="right">\n\n          Und\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <div *ngFor="let item of arrProdutos " class="card">\n\n    <ion-list>\n\n      <ion-item-sliding>\n\n        <ion-item class="item">\n\n          <ion-grid>\n\n            <div>\n\n              <ion-row>\n\n\n\n                <ion-col class="ion-col" align-self-start col-8>\n\n                  <h4>{{ item.produto.nome.NAME }}</h4>\n\n                </ion-col>\n\n                <ion-col align-self-center align="right">\n\n                  <h4> {{ item.produto.qtd }}</h4>\n\n                </ion-col>\n\n\n\n                <ion-col align="right">\n\n                  <h4>{{ item.produto.unidade }}</h4>\n\n                </ion-col>\n\n\n\n              </ion-row>\n\n            </div>\n\n\n\n          </ion-grid>\n\n        </ion-item>\n\n        <ion-item-options *ngIf="isAvaible()" side="right" (ionSwipe)="removeProduct(item)">\n\n          <button ion-button expandable color="danger" (click)="removeProduct(item)">\n\n            <ion-icon name="trash"></ion-icon>Excluir\n\n          </button>\n\n        </ion-item-options>\n\n        <ion-item-options *ngIf="isAvaible()" side="left" (ionSwipe)="editProduct(item)">\n\n          <button ion-button (click)="editProduct(item)">\n\n            <ion-icon name="create"></ion-icon>Editar\n\n          </button>\n\n\n\n        </ion-item-options>\n\n\n\n      </ion-item-sliding>\n\n    </ion-list>\n\n  </div>\n\n\n\n\n\n\n\n  <!--  <div *ngIf="isAvaible()" >\n\n    <ion-fab left bottom >\n\n      <button ion-fab color="primary"  (click)="addProduct()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-fab>\n\n  </div>\n\n  <div *ngIf="arrRet && arrRet.length">\n\n    <ion-fab right bottom>\n\n      <button ion-fab color="secondary" (click)="showConfirm()">\n\n        <ion-icon name="md-done-all"></ion-icon>\n\n      </button>\n\n    </ion-fab>\n\n  </div> -->\n\n\n\n  <ion-fab *ngIf="arrRet && arrRet.length && isAvaible()" bottom left clear>\n\n    <button ion-fab color="secondary" (click)="showConfirm()" clear>\n\n      <ion-icon name="md-done-all"> </ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Frutamina\Documents\GitHub\prePedido\src\pages\stock\stock.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_product_storage_product_storage__["a" /* ProductStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_product_storage_product_storage__["a" /* ProductStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_product_product__["a" /* ProductProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_7__Rules_rules__["a" /* Rules */],
            __WEBPACK_IMPORTED_MODULE_8__providers_tab_state_tab_state__["a" /* TabStateProvider */]])
    ], StockPage);
    return StockPage;
}());

//# sourceMappingURL=stock.js.map

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 178;

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/edit-product/edit-product.module": [
		703,
		7
	],
	"../pages/login/login.module": [
		704,
		6
	],
	"../pages/menu/menu.module": [
		705,
		5
	],
	"../pages/modal-product/modal-product.module": [
		706,
		4
	],
	"../pages/more/more.module": [
		707,
		3
	],
	"../pages/request/request.module": [
		709,
		2
	],
	"../pages/signup/signup.module": [
		708,
		1
	],
	"../pages/stock/stock.module": [
		710,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 223;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductStorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_CategoriaItem__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_ListaProduto__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_product__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Rules_rules__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProductStorageProvider = /** @class */ (function () {
    function ProductStorageProvider(storage, datePipe, produtoProv, rules) {
        this.storage = storage;
        this.datePipe = datePipe;
        this.produtoProv = produtoProv;
        this.rules = rules;
        // Instância
        this.categoria = new __WEBPACK_IMPORTED_MODULE_0__model_CategoriaItem__["a" /* CategoriaItem */]();
    }
    // ######################################################
    // ## Função de chamada para a função de inserção #######
    ProductStorageProvider.prototype.insert = function (produto) {
        // ## Geração da key, feita com a data hora minuto e segundo
        var key = this.datePipe.transform(new Date(), "ddMMyyyyHHmmss");
        return this.save(key, produto);
    };
    // ######################################################
    // ## Função que insere produtos no storage/cache #######
    ProductStorageProvider.prototype.save = function (key, produto) {
        return this.storage.set(key, produto);
    };
    // ###################################
    // ## Remoção de produtos do cache ###
    ProductStorageProvider.prototype.remove = function (key) {
        return this.storage.remove(key);
    };
    // ####################################
    // Atualização dos dados ##############
    ProductStorageProvider.prototype.update = function (key, produto) {
        return this.save(key, produto);
    };
    // ##########################################
    // ## Resgata um objeto pela chave(key) #####
    ProductStorageProvider.prototype.get = function (key) {
        return this.storage.get(key);
    };
    // #######################################
    // Função que limpa todo o Storage #######
    ProductStorageProvider.prototype.clear = function () {
        return this.storage.clear();
    };
    // ##################################################
    // Função que chama a inserção de dados do usuario ##
    ProductStorageProvider.prototype.insertUser = function (user) {
        // Só é aceito um objeto Usuario armazenado no cache
        var key = "Usuario";
        return this.saveUser(key, user);
    };
    // #####################################################
    // ## Função que insere os dados do usuario no cache ###
    ProductStorageProvider.prototype.saveUser = function (key, user) {
        return this.storage.set(key, user);
    };
    // #############################################################################
    // ## Carrega todos os dados da categoria passada por parâmentro ##############
    ProductStorageProvider.prototype.getAll = function (categoria) {
        var produtos = [];
        var arrProduto = [];
        return this.storage
            .forEach(function (value, key, iterationNumber) {
            var produto = new __WEBPACK_IMPORTED_MODULE_5__model_ListaProduto__["a" /* ListaProduto */]();
            produto.key = key;
            produto.produto = value;
            produtos.push(produto);
        })
            .then(function () {
            // ## Filtro dos produto pela categoria passada no parametro
            arrProduto = produtos.filter(function (value) {
                return value.produto.categoriaItem.nomeCategoria === categoria;
            });
            return Promise.resolve(arrProduto);
        })
            .catch(function (error) {
            return Promise.reject(arrProduto);
        });
    };
    // ############################################################
    // ## Insere no cache todos os Produtos do Banco de Dados #####
    ProductStorageProvider.prototype.insertDatabaseProducts = function () {
        var _this = this;
        this.produtoProv.getAllProducts().then(function (products) {
            var key = "ProductsDb";
            // ## Seto o tipo da categoria do produto
            _this.categoria.idCategoria = _this.rules["categorias"]["productsDb"]["categoriaItem"]["idCategoria"];
            _this.categoria.nomeCategoria = _this.rules["categorias"]["productsDb"]["categoriaItem"]["nomeCategoria"];
            // Objeto com os dados do Produto e a Categoria do Objeto
            var arrProdutos = {
                categoriaItem: _this.categoria,
                Produtos: products
            };
            // Chamada para salvar no cache
            return _this.saveProductsDataBase(key, arrProdutos);
        });
    };
    // ###################################################
    // ## Método para salvar os dados no cache ###########
    ProductStorageProvider.prototype.saveProductsDataBase = function (key, products) {
        return this.storage.set(key, products);
    };
    ProductStorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_6__product_product__["a" /* ProductProvider */],
            __WEBPACK_IMPORTED_MODULE_7__Rules_rules__["a" /* Rules */]])
    ], ProductStorageProvider);
    return ProductStorageProvider;
}());

/* export class Produto{
  id:number
  nome:string
  qtd:number
  unidade:string
  tipo:string
}

export class ListaProduto{
  key:string
  produto:Produto
}
 */
//# sourceMappingURL=product-storage.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Produto; });
var Produto = /** @class */ (function () {
    function Produto() {
    }
    return Produto;
}());

//# sourceMappingURL=Produto.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckNetworkProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network_ngx__ = __webpack_require__(367);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckNetworkProvider = /** @class */ (function () {
    function CheckNetworkProvider(network, alertCtrl, platform) {
        this.network = network;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
    }
    //##################################################################
    // ## Função para verificar a conexão de internet do Usuário #######
    CheckNetworkProvider.prototype.checkNetwork = function () {
        var connected = this.network.onConnect;
        if (!connected) {
            return false;
        }
        else {
            return true;
        }
    };
    CheckNetworkProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_network_ngx__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* Platform */]])
    ], CheckNetworkProvider);
    return CheckNetworkProvider;
}());

//# sourceMappingURL=check-network.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rootPage = '';
        this.pages = [
            { title: 'Tab 1', component: 'TabsPage', openTab: 'Tab1Page' },
            { title: 'Tab 2', component: 'TabsPage', openTab: 'Tab2Page' },
            { title: 'Special', component: 'SpecialPage', openTab: 'shuffle' },
        ];
    }
    MenuPage.prototype.openPage = function (page) {
        this.nav.setRoot(page.component, { openTab: page.openTab });
    };
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MenuPage.prototype, "nav", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\Users\Frutamina\Documents\GitHub\prePedido\src\pages\menu\menu.html"*/'<!--\n\n  Generated template for the MenuPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)">\n\n        <!--   <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon> -->\n\n        {{ p.title }}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<!-- main navigation -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Frutamina\Documents\GitHub\prePedido\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(375);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_menu_menu__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_request_request__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_stock_stock__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utilitarios_utilitarios__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_modal_product_modal_product__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mobiscroll_angular__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_edit_product_edit_product__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_product_storage_product_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_storage__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ionic2_auto_complete__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_complete_service_complete_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_login_login__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_signup_signup__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_more_more__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_user_user__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_product_product__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_network_ngx__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_check_network_check_network__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__Rules_rules__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_tab_state_tab_state__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_device__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























/* import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'; */






//import { UniqueDeviceID } from '@ionic-native/unique-device-id';

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_edit_product_edit_product__["a" /* EditProductPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_modal_product_modal_product__["a" /* ModalProductPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_more_more__["a" /* MorePage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_stock_stock__["a" /* StockPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_request_request__["a" /* RequestPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_menu_menu__["a" /* MenuPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__mobiscroll_angular__["a" /* MbscModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/edit-product/edit-product.module#EditProductPageModule', name: 'EditProductPage', segment: 'edit-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-product/modal-product.module#ModalProductPageModule', name: 'ModalProductPage', segment: 'modal-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/more/more.module#MorePageModule', name: 'MorePage', segment: 'more', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/request/request.module#RequestPageModule', name: 'RequestPage', segment: 'request', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stock/stock.module#StockPageModule', name: 'StockPage', segment: 'stock', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_18__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_19__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_20_ionic2_auto_complete__["b" /* AutoCompleteModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_edit_product_edit_product__["a" /* EditProductPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_modal_product_modal_product__["a" /* ModalProductPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_more_more__["a" /* MorePage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_stock_stock__["a" /* StockPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_request_request__["a" /* RequestPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_menu_menu__["a" /* MenuPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_network_ngx__["a" /* Network */],
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_17__providers_product_storage_product_storage__["a" /* ProductStorageProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_complete_service_complete_service__["a" /* CompleteServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_3__utilitarios_utilitarios__["a" /* Utilitarios */],
                __WEBPACK_IMPORTED_MODULE_30__Rules_rules__["a" /* Rules */],
                __WEBPACK_IMPORTED_MODULE_26__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_product_product__["a" /* ProductProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_check_network_check_network__["a" /* CheckNetworkProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_tab_state_tab_state__["a" /* TabStateProvider */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_device__["a" /* Device */]
                //UniqueDeviceID
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaProduto; });
var ListaProduto = /** @class */ (function () {
    function ListaProduto() {
    }
    return ListaProduto;
}());

//# sourceMappingURL=ListaProduto.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rules; });
// Classe utilizada para setar constantes de Regra de Negocio.
var Rules = /** @class */ (function () {
    function Rules() {
        this.categorias = {
            estoque: {
                categoriaItem: {
                    idCategoria: 1,
                    nomeCategoria: "Estoque"
                }
            },
            pedido: {
                categoriaItem: {
                    idCategoria: 2,
                    nomeCategoria: "Pedido"
                }
            },
            usuario: {
                categoriaItem: {
                    idCategoria: 3,
                    nomeCategoria: "Usuario"
                }
            },
            productsDb: {
                categoriaItem: {
                    idCategoria: 4,
                    nomeCategoria: "ProductsDb"
                }
            }
        };
        ////////////////////////////////////////////////////////////////////////////////////////////////
        /// VARIAVEIS PARA CONTROLE DE ENVIO DE PEDIDOS E ESTOQUE //////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////
        this.ENVIOS = 1; //Padrão de envio por Usuario per dia
        ////////////////////////////////////////////////////////////////////////////////////////////////
    }
    return Rules;
}());

//# sourceMappingURL=rules.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaItem; });
var CategoriaItem = /** @class */ (function () {
    function CategoriaItem() {
    }
    return CategoriaItem;
}());

//idCategoria 1 = 'Estoque'
//idCategoria 2 = 'Pedido'
//idCategoria 3 = 'Usuario'
//idCategoria 4 = 'ProdutosDb'
//# sourceMappingURL=CategoriaItem.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilitarios_apiData__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_Usuario__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_CategoriaItem__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Rules_rules__ = __webpack_require__(47);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = /** @class */ (function (_super) {
    __extends(UserProvider, _super);
    function UserProvider(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.rules = new __WEBPACK_IMPORTED_MODULE_5__Rules_rules__["a" /* Rules */]();
        _this.usuario = new __WEBPACK_IMPORTED_MODULE_3__model_Usuario__["a" /* Usuario */]();
        _this.usuario.categoriaItem = new __WEBPACK_IMPORTED_MODULE_4__model_CategoriaItem__["a" /* CategoriaItem */]();
        _this.nomeCategoria = _this.rules["categorias"]["usuario"]["categoriaItem"]["nomeCategoria"];
        _this.idCategoria = _this.rules["categorias"]["usuario"]["categoriaItem"]["idCategoria"];
        return _this;
    }
    // ######################################################
    // ## Insere o usuario no banco de dado  ################
    UserProvider.prototype.insert = function (usuario) {
        // Objeto usuario transformado em string para ser enviado na URL
        var usuarioData = JSON.stringify(usuario);
        return this.http.post(this.API_URL + "users/insert/" + encodeURIComponent(usuarioData) + "", this.requestOptions);
    };
    // ###################################################################
    // ## Resgata os dados do usuario que está logando no sistema ########
    UserProvider.prototype.getUser = function (usuario) {
        var _this = this;
        var usuarioData = JSON.stringify(usuario);
        return new Promise(function (resolve, reject) {
            _this.http
                .get(_this.API_URL + "users/get/" + encodeURIComponent(usuarioData))
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json);
            });
        });
    };
    UserProvider.prototype.getByName = function (usuario) {
        var usuarioData = JSON.stringify(usuario);
        this.http.get(this.API_URL + "users/getByName/" + usuarioData + "");
    };
    // ############################################
    // ## Resgata o estoque enviado  #########
    UserProvider.prototype.getSentStock = function (data) {
        var _this = this;
        var strData = JSON.stringify(data);
        return new Promise(function (resolve, reject) {
            _this.http
                .get(_this.API_URL +
                "users/getSentStock/" +
                encodeURIComponent(strData) +
                "")
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                console.log(error.json());
            });
        });
    };
    // ############################################
    // ## Resgata os pedidos eviados  #############
    UserProvider.prototype.getSentRequest = function (data) {
        var _this = this;
        var strData = JSON.stringify(data);
        return new Promise(function (resolve, reject) {
            _this.http
                .get(_this.API_URL +
                "users/getSentRequest/" +
                encodeURIComponent(strData) +
                "")
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                console.log(error.json());
            });
        });
    };
    UserProvider.prototype.loginAuthencation = function (login, password) {
        var _this = this;
        // ## Objeto com os dados do usuário que está acessando o app
        var arrUser = {
            login: login,
            password: password
        };
        // ## função que resgata os dados do usuario no banco
        return this.getUser(arrUser).then(function (ret) {
            if (ret == "") {
                return ret;
            }
            else {
                // Se não estiver vazio ele popula a model com os dados resgatados no banco
                return _this.populateUserModel(ret);
            }
        });
    };
    UserProvider.prototype.populateUserModel = function (ret) {
        // ## populo a model com os dados do Usuário
        this.usuario.nomeUsuario = ret[0]["nomeUsuario"];
        this.usuario.loja = ret[0]["loja"];
        this.usuario.email = ret[0]["email"];
        this.usuario.idCargo = ret[0]["idCargo"];
        this.usuario.idUsuario = ret[0]["idUsuario"];
        this.usuario.apelidoUsuario = ret[0]["apelidoUsuario"];
        this.usuario.categoriaItem.idCategoria = this.idCategoria;
        this.usuario.categoriaItem.nomeCategoria = this.nomeCategoria;
        this.usuario.token = ret[0]["token"];
        this.usuario.logado = ret[0]["logado"];
        return this.usuario;
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserProvider);
    return UserProvider;
}(__WEBPACK_IMPORTED_MODULE_2__utilitarios_apiData__["a" /* ApiData */]));

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_complete_service_complete_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_product_storage_product_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utilitarios_utilitarios__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic2_auto_complete__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_Produto__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditProductPage = /** @class */ (function () {
    function EditProductPage(navCtrl, navParams, storage, toast, completeService, utilitarios, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.toast = toast;
        this.completeService = completeService;
        this.utilitarios = utilitarios;
        this.view = view;
        this.nomeProd = "";
        this.nomeCategoria = "";
        // ################################################################################################
        // ## Verifico se existem dados vindo de outra tela, caso sim ele carrega duas variaveis com os
        // ## dados da outra tela, caso não tenha dado, instancio um novo objeto para abrir uma tela vazia
        if (this.navParams.data.produto && this.navParams.data.key) {
            this.model = this.navParams.data.produto;
            this.key = this.navParams.data.key;
        }
        else {
            this.model = new __WEBPACK_IMPORTED_MODULE_7__model_Produto__["a" /* Produto */]();
        }
        // ###################################################################
        // ## Carrego o array de Tipo da Fruta para ser utilizado no combobox
        this.arrTipo = this.utilitarios.getArrayTipo();
        // ## Carrego o array do tipo Unidade de medida ###
        this.arrUnidade = this.utilitarios.getArrayUnidade();
        // ## Populo a variavel nomeProd com o valor que esta no campo nome
        this.nomeProd = this.model.nome;
        // ###############################################################################################
        // ## Verifico em qual tela ele esta querendo editar para colocar a imagem de fundo correspondente ;
        this.nomeCategoria = navParams.data.nomeCategoria;
        if (this.nomeCategoria === "Estoque")
            this.classCssImg = "Estoque-Background";
        else
            this.classCssImg = "Pedido-Background";
    }
    // ################################################
    // ## Método é chamado quando a View é carregada ##
    EditProductPage.prototype.ionViewDidLoad = function () {
        // ## Método para troca a imagem de fundo do APP
        this.changeBackground();
    };
    // ## Método para troca a imagem de fundo do APP
    EditProductPage.prototype.changeBackground = function () {
        document.getElementById("content").className = this.classCssImg;
    };
    // ## Método ativado quando a tela é aberta e carrega o formulário com as validações
    EditProductPage.prototype.ngOnInit = function () {
        this.myForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            qtd: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required),
            products: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required),
            //   tipo: new FormControl('',Validators.required),
            und: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required)
        });
    };
    // ##############################################################
    // ## Método que chama a função que salva o produto no cache ####
    EditProductPage.prototype.save = function () {
        var _this = this;
        if (this.model.qtd > 0) {
            this.saveProduct()
                .then(function () {
                _this.toast
                    .create({
                    message: "Produto Salvo",
                    duration: 2000,
                    position: "botton"
                })
                    .present();
                _this.navCtrl.pop();
            })
                .catch(function () {
                _this.toast
                    .create({
                    message: "Erro ao Salvar Produto",
                    duration: 3000,
                    position: "botton"
                })
                    .present();
            });
        }
        else {
            this.toast
                .create({
                message: "Insira um valor válido !",
                duration: 3000,
                position: "botton"
            })
                .present();
        }
    };
    EditProductPage.prototype.saveProduct = function () {
        // ####################################################################################
        // ## Atualizo a variavel do objeto Produto com o nome que o Usuário digitou no campo ####
        this.model.nome = this.nomeProd;
        // ## Atualizo o cache do Usuário com o novo produto
        return this.storage.update(this.key, this.model);
    };
    // ## Método que destrói a modal
    EditProductPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])("searchbar"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic2_auto_complete__["a" /* AutoCompleteComponent */])
    ], EditProductPage.prototype, "searchbar", void 0);
    EditProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: "page-edit-product",template:/*ion-inline-start:"C:\Users\Frutamina\Documents\GitHub\prePedido\src\pages\edit-product\edit-product.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Editar\n\n    </ion-title>\n\n    <ion-buttons clear start>\n\n      <button ion-button (click)="closeModal()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <!--  <ion-icon name="md-close" ></ion-icon> -->\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content id=\'content\' class="Pedido-Background" padding>\n\n  <form [formGroup]="myForm" novalidate>\n\n    <div>\n\n      <ion-label class="label-product" stacked>Produto</ion-label>\n\n      <ion-auto-complete type="text" name="produto" [(ngModel)]="nomeProd" [dataProvider]="completeService"\n\n        formControlName="products" [options]="{ placeholder : \'Digite o Produto\' }" #searchbar formControlName="products"></ion-auto-complete>\n\n    </div>\n\n    <hr />\n\n\n\n    <!--  <ion-item>\n\n    <ion-label stacked>Produto</ion-label>\n\n    <ion-input type="text" name ="nome" [(ngModel)]="model.nome" placeholder="Digite o Produto"></ion-input>\n\n  </ion-item> -->\n\n\n\n    <ion-item>\n\n      <ion-label stacked>Quantidade</ion-label>\n\n      <ion-input id="qtd" type="number" name="qtd" [(ngModel)]="model.qtd" placeholder="Digite a quantidade"\n\n        formControlName="qtd" min="1" pattern="[0-9]*"></ion-input>\n\n    </ion-item>\n\n\n\n    <!--  <ion-item>\n\n      <ion-label stacked>Tipo</ion-label>\n\n      <ion-select\n\n        name="tipo"\n\n        [(ngModel)]="model.tipo"\n\n        placeholder="Escolha o Tipo"\n\n        formControlName="tipo"\n\n      >\n\n        <ion-option *ngFor="let item of arrTipo" value="{{ item.tipo }}">{{\n\n          item.tipo\n\n        }}</ion-option>\n\n      </ion-select>\n\n    </ion-item> -->\n\n\n\n    <ion-item>\n\n      <ion-label stacked>Und. Medida</ion-label>\n\n      <ion-select name="unidade" [(ngModel)]="model.unidade" placeholder="Escolha a Unidade" formControlName="und">\n\n        <ion-option *ngFor="let item of arrUnidade" value="{{ item.und }}">{{\n\n          item.und\n\n          }}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <button type="submit" ion-button block (click)="save()" [disabled]="myForm.invalid">Salvar</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Frutamina\Documents\GitHub\prePedido\src\pages\edit-product\edit-product.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_product_storage_product_storage__["a" /* ProductStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_complete_service_complete_service__["a" /* CompleteServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__utilitarios_utilitarios__["a" /* Utilitarios */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ViewController */]])
    ], EditProductPage);
    return EditProductPage;
}());

//# sourceMappingURL=edit-product.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilitarios_utilitarios__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_complete_service_complete_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_product_storage_product_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_Produto__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_CategoriaItem__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model_Usuario__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the ModalProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalProductPage = /** @class */ (function () {
    function ModalProductPage(navCtrl, navParams, completeService, storage, toast, utilitarios, view) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.completeService = completeService;
        this.storage = storage;
        this.toast = toast;
        this.utilitarios = utilitarios;
        this.view = view;
        // Instancia do Produto e do Tipo Categoria Item do Objeto Produto
        this.model = new __WEBPACK_IMPORTED_MODULE_6__model_Produto__["a" /* Produto */]();
        this.model.categoriaItem = new __WEBPACK_IMPORTED_MODULE_7__model_CategoriaItem__["a" /* CategoriaItem */]();
        this.model.usuario = new __WEBPACK_IMPORTED_MODULE_8__model_Usuario__["a" /* Usuario */]();
        // ## Carrego o arrTipo e arrUnidade com os dados da classe utilitarios
        this.arrTipo = this.utilitarios.getArrayTipo();
        this.arrUnidade = this.utilitarios.getArrayUnidade();
        // ## Pego os dados que são enviados da tela anterior e populo as variaveis
        this.idCategoria = navParams.data["idCategoria"];
        this.nomeCategoria = navParams.data["nomeCategoria"];
        // O valor do objeto já setado com os valores das categorias
        this.model.categoriaItem.idCategoria = this.idCategoria;
        this.model.categoriaItem.nomeCategoria = this.nomeCategoria;
        // ## setando o id do usuario logado na model produto
        this.storage.get("Usuario").then(function (ret) {
            _this.model.usuario.idUsuario = ret['idUsuario'];
        });
        // ## Carrego o combo de Unidade como padrão KILO
        this.model.unidade = "KILO";
        // Verifico em qual tela esta sendo aberto a inclusao para indicar ao css qual imagem de fundo ele deve utilizar
        if (this.nomeCategoria === "Estoque")
            this.classCssImg = "Estoque-Background";
        else if (this.nomeCategoria === "Pedido")
            this.classCssImg = "Pedido-Background";
    }
    // ##################################################
    // ## Método é chamado quando a View é carregada ##
    ModalProductPage.prototype.ionViewDidLoad = function () {
        // ## chamada do Método para troca a imagem de fundo do APP
        this.changeBackground();
    };
    // ## Método para troca a imagem de fundo do APP
    ModalProductPage.prototype.changeBackground = function () {
        document.getElementById("content").className = this.classCssImg;
    };
    // ## Método ativado quando a tela é aberta e carrega o formulário com as validações
    ModalProductPage.prototype.ngOnInit = function () {
        this.myForm = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormGroup */]({
            qtd: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required),
            products: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required),
            und: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required)
        });
    };
    ModalProductPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    // ##############################################################
    // ## Método que chama a função que salva o produto no cache ####
    ModalProductPage.prototype.save = function () {
        var _this = this;
        // ## Verifico se o usuário digitou um valor válido
        if (this.model.qtd > 0) {
            this.insertProduct()
                .then(function (ret) {
                _this.toast
                    .create({
                    message: "Produto Salvo",
                    duration: 2000,
                    position: "botton"
                })
                    .present();
                _this.navCtrl.pop();
            })
                .catch(function () {
                _this.toast
                    .create({
                    message: "Erro ao Salvar Produto",
                    duration: 3000,
                    position: "botton"
                })
                    .present();
            });
        }
        else {
            this.toast
                .create({
                message: "Insira um valor válido !",
                duration: 3000,
                position: "botton"
            })
                .present();
        }
    };
    // ## Função para inserir os produtos no CACHE do usuario
    ModalProductPage.prototype.insertProduct = function () {
        // ## Chamada da função para inserção
        return this.storage.insert(this.model);
    };
    ModalProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: "page-modal-product",template:/*ion-inline-start:"C:\Users\Frutamina\Documents\GitHub\prePedido\src\pages\modal-product\modal-product.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Inserir Produto\n\n    </ion-title>\n\n    <ion-buttons clear start>\n\n      <button ion-button (click)="closeModal()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <!--  <ion-icon name="md-close" ></ion-icon> -->\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content id=\'content\' class="Pedido-Background" padding>\n\n  <form [formGroup]="myForm">\n\n    <div>\n\n      <ion-label class="label-product" stacked>Produto</ion-label>\n\n      <ion-auto-complete type="text" name="produto" [(ngModel)]="model.nome" [dataProvider]="completeService"\n\n        formControlName="products" [options]="{ autocomplete  : \'on\' , placeholder : \'Digite o Produto\'}"></ion-auto-complete>\n\n    </div>\n\n    <hr>\n\n\n\n    <ion-item>\n\n      <ion-label stacked>Quantidade</ion-label>\n\n      <ion-input type="number" min="1" pattern="[0-9]*" name="qtd" [(ngModel)]="model.qtd" placeholder="Digite a quantidade" formControlName="qtd"></ion-input>\n\n    </ion-item>\n\n\n\n    <!--  <ion-item>\n\n        <ion-label stacked>Tipo</ion-label>\n\n        <ion-select name="tipo" [(ngModel)]="model.tipo" placeholder="Escolha o Tipo" formControlName="tipo">\n\n          <ion-option *ngFor="let item of arrTipo" value="{{ item.tipo }}">{{\n\n            item.tipo\n\n          }}</ion-option>\n\n        </ion-select>\n\n      </ion-item> -->\n\n\n\n    <ion-item>\n\n      <ion-label stacked>Und. Medida</ion-label>\n\n      <ion-select name="unidade" [(ngModel)]="model.unidade" placeholder="Escolha a Unidade" formControlName="und">\n\n        <ion-option *ngFor="let item of arrUnidade" value="{{ item.und }}"> {{\n\n          item.und\n\n          }}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <button type="submit" ion-button block (click)="save()" [disabled]="myForm.invalid">Salvar</button>\n\n\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Frutamina\Documents\GitHub\prePedido\src\pages\modal-product\modal-product.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_complete_service_complete_service__["a" /* CompleteServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_product_storage_product_storage__["a" /* ProductStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__utilitarios_utilitarios__["a" /* Utilitarios */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ViewController */]])
    ], ModalProductPage);
    return ModalProductPage;
}());

//# sourceMappingURL=modal-product.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_product_storage_product_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_check_network_check_network__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_tab_state_tab_state__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(network, platform, statusBar, splashScreen, product, tabPage) {
        this.network = network;
        this.product = product;
        this.tabPage = tabPage;
        // ###########################################################################
        // ## Todo novo menu que for adicionado deve ser colocado nesse array ###########
        // ## utilizado no método openPage para nevageção no menu lateral ###############
        this.pages = [{ title: "Estoque / Pedido", component: __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */] }];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            //##########################################################################################
            //## Quando o aplicativo é aberto, carrego os produtos do banco de dados no Cache do Usuario
            //## sendo assim ele pode pesquisar prdutos offline ##########################################
            product.insertDatabaseProducts();
        });
        this.network.checkNetwork();
        this.checkUserTokenExists();
        this.network.checkNetwork();
    }
    //#################################################################
    //## Método para redirecionar as páginas do Menu lateral ##########
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component, { openTab: page.openTab });
    };
    //####################################################################
    //Função para verificar se usuário já esta logado
    MyApp.prototype.checkUserTokenExists = function () {
        var _this = this;
        //Obtendo dados do usuário
        this.product.get("Usuario").then(function (ret) {
            //Se o usuário é nulo
            if (ret != null) {
                //Se o logado é 1 significa que o usuário esta logado 
                //e redireciona para a página de Estoque
                if (ret.logado == 1) {
                    //Redireciona para a página de Stok
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */]);
                }
                else {
                    //Se não esta logado o usuário é redirecionado para a página de login.
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
                }
            }
            else {
                //Se os dados são Nulos o usuário é redirecionado para a página de login.
                _this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Frutamina\Documents\GitHub\prePedido\src\app\app.html"*/'<ion-menu [content]="content">\n\n    <ion-header>\n\n      <ion-toolbar>\n\n        <ion-title>Menu</ion-title>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n\n\n    <ion-content>\n\n      <ion-list>\n\n        <button ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)">\n\n          <!--   <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon> -->\n\n          {{ p.title }}\n\n        </button>\n\n      </ion-list>\n\n    </ion-content>\n\n  </ion-menu>\n\n\n\n  <!-- main navigation -->\n\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n\n\n<!-- <ion-nav [root]="rootPage"></ion-nav>\n\n -->\n\n'/*ion-inline-end:"C:\Users\Frutamina\Documents\GitHub\prePedido\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_check_network_check_network__["a" /* CheckNetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_0__providers_product_storage_product_storage__["a" /* ProductStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_tab_state_tab_state__["a" /* TabStateProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Frutamina\Documents\GitHub\prePedido\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n<!--  <ion-list>\n\n    <ion-card>\n\n      <ion-card-content>\n\n\n\n        <ion-item>\n\n          <ion-label fixed>Produto</ion-label>\n\n          <ion-input\n\n            type="Text"\n\n            placeholder="Digite o Produto"\n\n            text-right\n\n          ></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label fixed>Quantidade</ion-label>\n\n            <ion-input\n\n              type="number"\n\n              placeholder="Digite a Qtd"\n\n              text-right\n\n              value = "1"\n\n            ></ion-input>\n\n          </ion-item>\n\n\n\n\n\n        <ion-item>\n\n          <ion-label >Tipo</ion-label>\n\n          <ion-select [(ngModel)]="arrTipo.toString" >\n\n              <ion-option *ngFor="let item of arrTipo" value="{{item.value}}">{{item.tipo}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>Und. Medida</ion-label>\n\n          <ion-select [(ngModel)]="arrUnidade.toString" >\n\n              <ion-option *ngFor="let item of arrUnidade" value="{{item.value}}">{{item.und}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-list> -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Frutamina\Documents\GitHub\prePedido\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_complete_service_complete_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_product_modal_product__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_product_edit_product__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_product_storage_product_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, provider, toast, modal, completeService, view) {
        this.navCtrl = navCtrl;
        this.provider = provider;
        this.toast = toast;
        this.modal = modal;
        this.completeService = completeService;
        this.view = view;
    }
    /* ionViewDidLoad(){
      this.provider.getAll()
      .then((results)=>{
        this.arrProdutos = results
      })
      .catch((error)=>{
        console.log(error)
      })
    
      console.log(this.arrProdutos)
    } */
    HomePage.prototype.addProduct = function () {
        var myModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_1__modal_product_modal_product__["a" /* ModalProductPage */]);
        /*     myModal.onDidDismiss(() => {
              this.provider
                .getAll()
                .then(results => {
                  this.arrProdutos = results;
                })
                .catch(error => {
                  console.log(error);
                });
            });*/
        myModal.present();
    };
    HomePage.prototype.editProduct = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_product_edit_product__["a" /* EditProductPage */], {
            key: item.key,
            produto: item.produto
        });
        console.log(item.produto);
    };
    HomePage.prototype.removeProduct = function (item) {
        var _this = this;
        this.provider.remove(item.key).then(function () {
            var index = _this.arrProdutos.indexOf(item);
            _this.arrProdutos.splice(index, 1);
            _this.toast
                .create({
                message: "Produto Removido",
                duration: 3000,
                position: "bottom"
            })
                .present();
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"C:\Users\Frutamina\Documents\GitHub\prePedido\src\pages\home\home.html"*/'<ion-header>\n\n\n\n    <ion-navbar> <ion-title></ion-title> </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-card *ngFor="let item of arrProdutos">\n\n      <ion-card-content color="primary">\n\n       <ion-grid>\n\n        <ion-row>\n\n          <ion-col align-self-start>\n\n            <h3>Produto:</h3>\n\n          </ion-col>\n\n          <ion-col justify-content-end>\n\n            <p align="right" *ngIf="item.produto.nome.name">{{ item.produto.nome.name}}</p>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n          <ion-col align-self-start>\n\n            <h3>Quantidade:</h3> </ion-col>\n\n          <ion-col align-self-end>\n\n            <p align="right" >{{ item.produto.qtd }}</p>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n       <!--  <ion-row>\n\n            <ion-col align-self-start> <h3>Tipo:</h3> </ion-col>\n\n            <ion-col align-self-end>\n\n              <p align="right">{{ item.produto.tipo }}</p>\n\n            </ion-col>\n\n          </ion-row>\n\n -->\n\n          <ion-row>\n\n              <ion-col align-self-start> <h3>Unidade:</h3> </ion-col>\n\n              <ion-col align-self-end>\n\n                <p align="right">{{ item.produto.unidade }}</p>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n      </ion-card-content>\n\n\n\n      <ion-row text-center>\n\n        <ion-col>\n\n          <button ion-button icon-left clear small (click)="editProduct(item)">\n\n            <ion-icon name="create"></ion-icon>\n\n            <div>Editar</div>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button\n\n            ion-button\n\n            icon-left\n\n            clear\n\n            small\n\n            (click)="removeProduct(item)"\n\n          >\n\n            <ion-icon name="trash"></ion-icon>\n\n            <div>Excluir</div>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card>\n\n  </ion-list>\n\n\n\n  <ion-fab right bottom>\n\n    <button ion-fab color="primary" (click)="addProduct()">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Frutamina\Documents\GitHub\prePedido\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_product_storage_product_storage__["a" /* ProductStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_complete_service_complete_service__["a" /* CompleteServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* ViewController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleteServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilitarios_apiData__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_storage_product_storage__ = __webpack_require__(27);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompleteServiceProvider = /** @class */ (function (_super) {
    __extends(CompleteServiceProvider, _super);
    function CompleteServiceProvider(http, product) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.product = product;
        // ##############################################################################
        // #### IMPORTANTE ##############################################################
        // #### Variavel que indica qual será o campo de valor de retorno do formulario,
        // #### NAME = (nome do campo no JSON)  #
        // ###  Indica qual campo será usado para o filtro no JSON
        _this.labelAttribute = "NAME";
        //###############################################################################
        _this.formValueAttribute = "";
        return _this;
    }
    // ## Função utilizada para auto complete nos formulários de pesquisa de Produto
    CompleteServiceProvider.prototype.getResults = function (keyword) {
        var arrProdutos = [];
        //Pesquisa os dados do produto que está armazenado em cache
        return this.product.get("ProductsDb").then(function (v) {
            return (arrProdutos = v.Produtos.filter(function (value) {
                //  Filtra pelo NAME (nome do produto)
                return value.NAME.toLowerCase().startsWith(keyword.toLowerCase());
            }));
        });
    };
    CompleteServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__product_storage_product_storage__["a" /* ProductStorageProvider */]])
    ], CompleteServiceProvider);
    return CompleteServiceProvider;
}(__WEBPACK_IMPORTED_MODULE_0__utilitarios_apiData__["a" /* ApiData */]));

//# sourceMappingURL=complete-service.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilitarios_apiData__ = __webpack_require__(127);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductProvider = /** @class */ (function (_super) {
    __extends(ProductProvider, _super);
    function ProductProvider(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    // ################################################
    // ## Função que insere o Estoque no banco ########
    ProductProvider.prototype.insert = function (product) {
        // Transformo o JSON em String para enviar na URL
        var productData = JSON.stringify(product);
        return this.http.post(this.API_URL +
            "products/insertEstoque/" +
            encodeURIComponent(productData) +
            "", this.requestOptions);
    };
    // ################################################
    // ## Função que insere o Pedido no banco ########
    ProductProvider.prototype.insertRequest = function (product) {
        // Transformo o JSON em String para enviar na URL
        var productData = JSON.stringify(product);
        return this.http.post(this.API_URL +
            "products/insertPedido/" +
            encodeURIComponent(productData) +
            "", this.requestOptions);
    };
    // #####################################################
    // ## Resgato todos os produtos da tabela de Produtos
    ProductProvider.prototype.getAllProducts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.API_URL + "products/getAll").subscribe(function (ret) {
                resolve(ret.json());
            });
        });
    };
    ProductProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], ProductProvider);
    return ProductProvider;
}(__WEBPACK_IMPORTED_MODULE_2__utilitarios_apiData__["a" /* ApiData */]));

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utilitarios; });
var Utilitarios = /** @class */ (function () {
    function Utilitarios() {
        // Array onde é armazenada as Unidades
        // Utilizado para carregar combo box na tela de inserção de produto (modalProduct)
        this.arrUnidade = [
            { und: "KILO", value: "kg" },
            { und: "BANDEJA", value: "bj" },
            { und: "CAIXA", value: "cx" },
            { und: "SACO", value: "sc" }
        ];
        // Array onde é armazenada os Tipos de produto
        this.arrTipo = [
            { tipo: "FRUTA", value: "fr" },
            { tipo: "LEGUME", value: "le" },
            { tipo: "VERDURA", value: "ve" }
        ];
    }
    // ## Função que retorna o array de Unidade
    Utilitarios.prototype.getArrayUnidade = function () {
        return this.arrUnidade;
    };
    // ## Função que retorna o array de Tipo
    Utilitarios.prototype.getArrayTipo = function () {
        return this.arrTipo;
    };
    // ## Função para mostrar mensagens
    Utilitarios.prototype.showToast = function (mensagem) {
        var toast = this.toast.create({ duration: 3000, position: "botton" });
        toast.setMessage(mensagem);
        toast.present();
    };
    return Utilitarios;
}());

//# sourceMappingURL=utilitarios.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());

//# sourceMappingURL=Usuario.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request_request__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__more_more__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stock_stock__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tab_state_tab_state__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    //tab3Root = ContactPage;
    function TabsPage(tabState) {
        this.tabState = tabState;
        //tabHome = HomePage;
        this.tabEstoque = __WEBPACK_IMPORTED_MODULE_3__stock_stock__["a" /* StockPage */];
        this.tabRequest = __WEBPACK_IMPORTED_MODULE_0__request_request__["a" /* RequestPage */];
        this.tabMais = __WEBPACK_IMPORTED_MODULE_1__more_more__["a" /* MorePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Frutamina\Documents\GitHub\prePedido\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n\n\n  <!--  <ion-tab [root]="tabHome" tabTitle="Inicio" tabIcon="home"></ion-tab> -->\n\n  <ion-tab [root]="tabEstoque" tabTitle="Estoque" tabIcon="ios-archive"></ion-tab>\n\n  <ion-tab [root]="tabRequest" [enabled]="tabState.states.tabRequest" tabTitle="Pedidos" tabIcon="ios-basket"> </ion-tab>\n\n  <ion-tab [root]="tabMais" tabTitle="Outros" tabIcon="ios-list"></ion-tab>\n\n\n\n\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Frutamina\Documents\GitHub\prePedido\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_tab_state_tab_state__["a" /* TabStateProvider */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabStateProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the TabStateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TabStateProvider = /** @class */ (function () {
    function TabStateProvider(zone) {
        this.zone = zone;
        // ## Objeto para setar as abas
        this.states = {};
    }
    // ###############################################
    // ## Função que seta o estado da aba ############
    TabStateProvider.prototype.setState = function (tab, enabled) {
        var _this = this;
        this.zone.run(function () {
            _this.states[tab] = enabled;
        });
    };
    TabStateProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], TabStateProvider);
    return TabStateProvider;
}());

//# sourceMappingURL=tab-state.js.map

/***/ })

},[370]);
//# sourceMappingURL=main.js.map