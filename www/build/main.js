webpackJsonp([8],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_user_user__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_product_storage_product_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model_Usuario__ = __webpack_require__(352);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, menu, firebaseAuth, toast, modal, storage, userApi) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.firebaseAuth = firebaseAuth;
        this.toast = toast;
        this.modal = modal;
        this.storage = storage;
        this.userApi = userApi;
        this.nomeCategoria = 'Usuario';
        this.idCategoria = 3;
        this.arrProduto = [];
        this.model = new __WEBPACK_IMPORTED_MODULE_8__model_Usuario__["a" /* Usuario */]();
        this.menu.enable(false);
        this.firebaseAuth.user.subscribe(function (data) {
            _this.user = data;
        });
    }
    LoginPage.prototype.ngOnInit = function () {
        this.formLogin = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            usuario: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            senha: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required)
        });
    };
    LoginPage.prototype.userData = function (email, password) {
        var _this = this;
        this.model.email = email;
        this.model.senha = password;
        this.userApi.getByEmail(this.model)
            .then(function (ret) {
            _this.model.nomeUsuario = ret[0]['nomeUsuario'];
            _this.model.loja = ret[0]['loja'];
            _this.model.email = ret[0]['email'];
            _this.model.idCargo = ret[0]['idCargo'];
            _this.model.idUsuario = ret[0]['idUsuario'];
            _this.model.categoriaItem.idCategoria = _this.idCategoria;
            _this.model.categoriaItem.nomeCategoria = _this.nomeCategoria;
            _this.storage.insertUser(_this.model);
        });
    };
    LoginPage.prototype.loginWithEmail = function () {
        var _this = this;
        var email = this.email.value;
        var password = this.password.value;
        this.firebaseAuth.auth
            .signInWithEmailAndPassword(email, password)
            .then(function (result) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
            _this.menu.enable(true);
            _this.userData(email, password);
        })
            .catch(function (erro) {
            console.log(erro);
        });
    };
    LoginPage.prototype.showToast = function (mensagem) {
        var toast = this.toast.create({ duration: 3000, position: "botton" });
        toast.setMessage(mensagem);
        toast.present();
    };
    LoginPage.prototype.openSignUp = function () {
        var myModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
        myModal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_8" /* ViewChild */])("usuario"),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_8" /* ViewChild */])("senha"),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "password", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["m" /* Component */])({
            selector: "page-login",template:/*ion-inline-start:"C:\DemarchiApp\RequestApp\src\pages\login\login.html"*/'<ion-content padding>\n  <div class="div-components">\n    <form [formGroup]="formLogin">\n      <div class="title">\n        <ion-title>\n          <h1>Bem Vindo</h1>\n        </ion-title>\n      </div>\n      <ion-item class="ion-item" no-lines>\n        <ion-label color="primary">\n          <ion-icon name="md-mail"></ion-icon>\n          Email\n        </ion-label>\n        <ion-input type="text" formControlName="usuario" #usuario> </ion-input>\n        <hr>\n      </ion-item>\n      <ion-item class="ion-item" no-lines>\n        <ion-label  color="primary">\n          <ion-icon name="md-lock" left></ion-icon>\n          Senha\n        </ion-label>\n        <ion-input type="password" formControlName="senha" #senha> </ion-input>\n        <hr>\n      </ion-item>\n      <div padding>\n        <button ion-button block (click)="loginWithEmail()" round [disabled]="formLogin.invalid">Entrar</button>\n      </div>\n      <div padding>\n        <button ion-button (click)="openSignUp()" round clear >Cadastre-se</button>\n      </div>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\DemarchiApp\RequestApp\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["g" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["g" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["AngularFireAuth"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["m" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["m" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* ModalController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__providers_product_storage_product_storage__["a" /* ProductStorageProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_product_storage_product_storage__["a" /* ProductStorageProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__providers_user_user__["a" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_user_user__["a" /* UserProvider */]) === "function" && _h || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(54);

var ApiData = /** @class */ (function () {
    function ApiData() {
        //this.API_URL = "http://apprequestapi.kinghost.net:21093/";
        this.API_URL = "http://localhost:21093/"; // TESTE API LOCAL
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

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utilitarios; });
var Utilitarios = /** @class */ (function () {
    function Utilitarios() {
        this.arrUnidade = [
            { und: "KILO", value: "kg" },
            { und: "BANDEJA", value: "bj" },
            { und: "CAIXA", value: "cx" },
            { und: "SACO", value: "sc" }
        ];
        this.arrTipo = [
            { tipo: "FRUTA", value: "fr" },
            { tipo: "LEGUME", value: "le" },
            { tipo: "VERDURA", value: "ve" }
        ];
    }
    Utilitarios.prototype.getArrayUnidade = function () {
        return this.arrUnidade;
    };
    Utilitarios.prototype.getArrayTipo = function () {
        return this.arrTipo;
    };
    Utilitarios.prototype.showToast = function (mensagem) {
        var toast = this.toast.create({ duration: 3000,
            position: 'botton' });
        toast.setMessage(mensagem);
        toast.present();
    };
    return Utilitarios;
}());

//# sourceMappingURL=utilitarios.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilitarios_apiData__ = __webpack_require__(139);
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
        return _this;
    }
    UserProvider.prototype.insert = function (usuario) {
        var usuarioData = JSON.stringify(usuario);
        return this.http.post(this.API_URL + "users/insert/" + encodeURIComponent(usuarioData) + "", this.requestOptions);
    };
    UserProvider.prototype.getByEmail = function (usuario) {
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
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], UserProvider);
    return UserProvider;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__utilitarios_apiData__["a" /* ApiData */]));

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request_request__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__more_more__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stock_stock__ = __webpack_require__(198);
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
    function TabsPage() {
        //tabHome = HomePage;
        this.tabEstoque = __WEBPACK_IMPORTED_MODULE_3__stock_stock__["a" /* StockPage */];
        this.tabRequest = __WEBPACK_IMPORTED_MODULE_0__request_request__["a" /* RequestPage */];
        this.tabMais = __WEBPACK_IMPORTED_MODULE_1__more_more__["a" /* MorePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\DemarchiApp\RequestApp\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n\n\n  <!--  <ion-tab [root]="tabHome" tabTitle="Inicio" tabIcon="home"></ion-tab> -->\n  <ion-tab [root]="tabEstoque" tabTitle="Estoque" tabIcon="ios-archive"></ion-tab>\n  <ion-tab [root]="tabRequest" tabTitle="Pedidos" tabIcon="ios-basket"></ion-tab>\n  <ion-tab [root]="tabMais" tabTitle="Outros" tabIcon="ios-list"></ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"C:\DemarchiApp\RequestApp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_Usuario__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_user__ = __webpack_require__(157);
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
    function SignupPage(http, navCtrl, navParams, firebaseauth, toast) {
        var _this = _super.call(this, http) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.firebaseauth = firebaseauth;
        _this.toast = toast;
        _this.usuario = new __WEBPACK_IMPORTED_MODULE_1__model_Usuario__["a" /* Usuario */]();
        return _this;
    }
    SignupPage.prototype.ngOnInit = function () {
        this.formSignUp = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            usuario: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            senha: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            loja: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required)
        });
    };
    SignupPage.prototype.insertUserFb = function () {
        this.firebaseauth.auth
            .createUserWithEmailAndPassword(this.email.value, this.password.value)
            .then(function (ret) {
        })
            .catch(function (erro) {
            console.log(erro);
        });
    };
    SignupPage.prototype.insertUser = function () {
        var _this = this;
        this.usuario.nomeUsuario = this.user.value;
        this.usuario.senha = this.password.value;
        this.usuario.loja = this.loja.value;
        this.usuario.email = this.email.value;
        this.insert(this.usuario)
            .toPromise()
            .then(function () {
            _this.insertUserFb();
            _this.showToast('Cadastrado com sucesso');
            _this.navCtrl.pop();
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    SignupPage.prototype.showToast = function (mensagem) {
        var toast = this.toast.create({ duration: 3000, position: "botton" });
        toast.setMessage(mensagem);
        toast.present();
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
            selector: "page-signup",template:/*ion-inline-start:"C:\DemarchiApp\RequestApp\src\pages\signup\signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>signup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="scroll-content" padding>\n  <div class="div-components">\n    <form [formGroup]="formSignUp">\n\n      <ion-title>\n        <h1>Cadastrar</h1>\n      </ion-title>\n      <div>\n        <ion-item class="ion-item" no-lines>\n          <ion-label>\n            <ion-icon name="md-people"></ion-icon>\n            Nome\n          </ion-label>\n          <ion-input type="text" formControlName="usuario" #usuario></ion-input>\n        </ion-item>\n      </div>\n      <div>\n        <ion-item class="ion-item" no-lines>\n          <ion-label>\n            <ion-icon name="md-mail"></ion-icon>\n            Email\n          </ion-label>\n          <ion-input type="text" formControlName="email" #email></ion-input>\n        </ion-item>\n      </div>\n      <div class="div-senha">\n        <ion-item class="ion-item" no-lines>\n          <ion-label>\n            <ion-icon name="md-lock" left></ion-icon>\n            Senha\n          </ion-label>\n          <ion-input type="password" formControlName="senha" #senha></ion-input>\n        </ion-item>\n      </div>\n      <div class="div-loja">\n        <ion-item class="ion-item" no-lines>\n          <ion-label>\n            <ion-icon name="md-bookmark" left></ion-icon>\n            Loja\n          </ion-label>\n          <ion-input type="number" pattern="[0-9]*" formControlName="loja" #loja></ion-input>\n        </ion-item>\n      </div>\n      <button ion-button round [disabled]="formSignUp.invalid"  (click)="insertUser()">Cadastrar</button>\n    </form>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\DemarchiApp\RequestApp\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* ToastController */]])
    ], SignupPage);
    return SignupPage;
}(__WEBPACK_IMPORTED_MODULE_6__providers_user_user__["a" /* UserProvider */]));

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_product_modal_product__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_product_storage_product_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_product_edit_product__ = __webpack_require__(80);
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
 * Generated class for the RequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RequestPage = /** @class */ (function () {
    function RequestPage(modal, toast, navCtrl, navParams, provider) {
        this.modal = modal;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.idCategoria = 2;
        this.nomeCategoria = 'Pedido';
        this.tipo = "";
        this.tipo = 'F';
    }
    RequestPage.prototype.isAvaible = function () {
    };
    RequestPage.prototype.ionViewDidEnter = function () {
        this.loadData(this.tipo);
    };
    RequestPage.prototype.onSegmentChange = function (value) {
        this.loadData(value);
    };
    RequestPage.prototype.addProduct = function () {
        var _this = this;
        var myModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_1__modal_product_modal_product__["a" /* ModalProductPage */], {
            idCategoria: this.idCategoria,
            nomeCategoria: this.nomeCategoria,
        });
        myModal.onDidDismiss(function () {
            _this.loadData(_this.tipo);
        });
        myModal.present();
    };
    RequestPage.prototype.loadData = function (value) {
        var _this = this;
        this.provider
            .getAll(this.nomeCategoria)
            .then(function (results) {
            _this.arrRet = results;
            _this.arrProdutos = results.filter(function (data) {
                return (data.produto.nome["TIPO"] == value); // && data.produto.categoriaItem.nomeCategoria == this.nomeCategoria
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    RequestPage.prototype.editProduct = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_product_edit_product__["a" /* EditProductPage */], {
            key: item.key,
            produto: item.produto,
            nomeCategoria: this.nomeCategoria,
        });
    };
    RequestPage.prototype.removeProduct = function (item) {
        var _this = this;
        this.provider.remove(item.key).then(function () {
            var index = _this.arrProdutos.indexOf(item);
            _this.arrProdutos.splice(index, 1);
            _this.loadData(_this.tipo);
            _this.toast
                .create({
                message: "Produto Removido",
                duration: 3000,
                position: "bottom"
            })
                .present();
        });
    };
    RequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-request',template:/*ion-inline-start:"C:\DemarchiApp\RequestApp\src\pages\request\request.html"*/'<!--\n  Generated template for the RequestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title class="title"> Pedido </ion-title>\n    <button class="icon-cfg" ion-button menuToggle color="indigo">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-buttons end>\n      <button class="icon-cfg" ion-button color="indigo" (click)="addProduct()">\n        <ion-icon name="md-add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class="background-img">\n\n  <div>\n    <ion-segment color="indigo" (ionChange)="onSegmentChange(tipo)" [(ngModel)]="tipo">\n      <ion-segment-button value="F"> Fruta </ion-segment-button>\n      <ion-segment-button value="V"> Verdura </ion-segment-button>\n      <ion-segment-button value="L"> Legume </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div class="cfg-title" *ngIf="arrProdutos && arrProdutos.length">\n    <ion-grid>\n      <ion-row>\n        <ion-col name="Produto" class="size-title" align-self-center col-8>\n          Produto\n        </ion-col>\n\n        <ion-col name="Qtd" align-self-center align="right"> Qtd </ion-col>\n        <ion-col name="Und" align="right"> Und </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div *ngFor="let item of arrProdutos" class="card">\n    <ion-list>\n      <ion-item-sliding>\n        <ion-item class="item">\n          <ion-grid>\n            <div>\n              <ion-row>\n                <ion-col class="ion-col" align-self-start col-8>\n                  <h4>{{ item.produto.nome.NAME }}</h4>\n                </ion-col>\n                <ion-col align-self-center align="right">\n                  <h4>{{ item.produto.qtd }}</h4>\n                </ion-col>\n\n                <ion-col align="right">\n                  <h4>{{ item.produto.unidade }}</h4>\n                </ion-col>\n              </ion-row>\n            </div>\n          </ion-grid>\n        </ion-item>\n        <ion-item-options side="right" (ionSwipe)="removeProduct(item)">\n          <button ion-button expandable color="danger" (click)="removeProduct(item)">\n            <ion-icon name="trash"></ion-icon>Excluir\n          </button>\n          <button ion-button (click)="editProduct(item)">\n            <ion-icon name="create"></ion-icon>Editar\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n\n    </ion-list>\n\n  </div>\n  <!--  <div class="ion-fab">\n    <ion-fab bottom right mini>\n      <button ion-fab color="indigo" (click)="addProduct()" round small>\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-fab>\n  </div> -->\n\n</ion-content>\n'/*ion-inline-end:"C:\DemarchiApp\RequestApp\src\pages\request\request.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_product_storage_product_storage__["a" /* ProductStorageProvider */]])
    ], RequestPage);
    return RequestPage;
}());

//# sourceMappingURL=request.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_product_storage_product_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
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
    function MorePage(navCtrl, navParams, provider, viewCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.viewCtrl = viewCtrl;
        this.app = app;
    }
    MorePage.prototype.leave = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginPage */]);
    };
    MorePage.prototype.clear = function () {
        this.provider.clear();
    };
    MorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-more',template:/*ion-inline-start:"C:\DemarchiApp\RequestApp\src\pages\more\more.html"*/'<!--\n  Generated template for the MorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle color = "primary">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title></ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header>\n      <h1>Outros</h1>\n    </ion-card-header>\n\n    <ion-list>\n      <button ion-item (click)="clear()" clear>\n        <ion-icon name="trash" item-start clear color="primary"></ion-icon>\n        <h2>Limpar</h2>\n      </button>\n\n      <button ion-item (click)="leave()" clear>\n        <ion-icon name="md-walk" item-start clear color="primary"></ion-icon>\n        <h2>Sair</h2>\n      </button>\n    </ion-list>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\DemarchiApp\RequestApp\src\pages\more\more.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_product_storage_product_storage__["a" /* ProductStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */]])
    ], MorePage);
    return MorePage;
}());

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_product_product__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_product_storage_product_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_product_edit_product__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_product_modal_product__ = __webpack_require__(81);
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
 * Generated class for the StockPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StockPage = /** @class */ (function () {
    function StockPage(navCtrl, navParams, provider, toast, modal, alertCtrl, storage, apiProduct) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.toast = toast;
        this.modal = modal;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.apiProduct = apiProduct;
        this.tipo = "";
        this.editar = true;
        this.idCategoria = 1;
        this.date = new Date().toLocaleDateString();
        this.nomeCategoria = "Estoque";
        this.tipo = 'F';
    }
    StockPage.prototype.ionViewDidEnter = function () {
        this.loadData(this.tipo);
    };
    StockPage.prototype.onSegmentChange = function (value) {
        this.loadData(value);
    };
    StockPage.prototype.editProduct = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_product_edit_product__["a" /* EditProductPage */], {
            key: item.key,
            produto: item.produto,
            nomeCategoria: this.nomeCategoria,
        });
    };
    StockPage.prototype.removeProduct = function (item) {
        var _this = this;
        this.provider.remove(item.key).then(function () {
            var index = _this.arrProdutos.indexOf(item);
            _this.arrProdutos.splice(index, 1);
            _this.loadData(_this.tipo);
            _this.toast
                .create({
                message: "Produto Removido",
                duration: 3000,
                position: "bottom"
            })
                .present();
        });
    };
    StockPage.prototype.loadData = function (value) {
        var _this = this;
        this.provider
            .getAll(this.nomeCategoria)
            .then(function (results) {
            _this.arrRet = results;
            _this.arrProdutos = results.filter(function (data) {
                return (data.produto.nome["TIPO"] == value); //&& data.produto.categoriaItem.nomeCategoria == this.nomeCategoria
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    StockPage.prototype.addProduct = function () {
        var _this = this;
        var myModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_5__modal_product_modal_product__["a" /* ModalProductPage */], {
            tipoProduto: this.tipo,
            idCategoria: this.idCategoria,
            nomeCategoria: this.nomeCategoria,
        });
        myModal.onDidDismiss(function () {
            _this.loadData(_this.tipo);
        });
        myModal.present();
    };
    StockPage.prototype.isAvaible = function () {
        return this.editar;
    };
    StockPage.prototype.insertDataBase = function () {
        var _this = this;
        this.storage.get('Usuario')
            .then(function (ret) {
            var idUsuario = ret['idUsuario'];
            var dataEnvio = _this.date;
            var Produtos = [{
                    arrProduto: _this.arrProdutos,
                    idUsuario: idUsuario,
                    dataEnvio: dataEnvio
                }];
            _this.apiProduct.insert(Produtos);
        });
    };
    StockPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: "Deseja enviar o estoque? ",
            message: "Lembre-se se voce enviar, o estoque não poderá ser alterado",
            buttons: [
                {
                    text: "Não",
                    handler: function () {
                        _this.editar = true;
                    }
                },
                {
                    text: "Sim",
                    handler: function () {
                        _this.editar = false;
                        _this.insertDataBase();
                        console.log(_this.arrRet);
                    }
                }
            ]
        });
        confirm.present();
    };
    StockPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: "page-stock",template:/*ion-inline-start:"C:\DemarchiApp\RequestApp\src\pages\stock\stock.html"*/'<!--\n  Generated template for the StockPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n      <ion-title class="title"> Estoque </ion-title>\n      <button class="icon-cfg" ion-button  menuToggle color="primary">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n\n    <ion-buttons end>\n      <button class="icon-cfg" ion-button color="primary" (click)="addProduct()">\n        <ion-icon name="md-add"></ion-icon>\n      </button>\n    </ion-buttons>\n\n\n  </ion-toolbar>\n\n\n</ion-header>\n\n\n\n\n<ion-content class="scroll-content">\n  <ion-segment (ionChange)="onSegmentChange(tipo)" [(ngModel)]="tipo">\n    <ion-segment-button value="F">\n      Fruta\n    </ion-segment-button>\n    <ion-segment-button value="V">\n      Verdura\n    </ion-segment-button>\n    <ion-segment-button value="L">\n      Legume\n    </ion-segment-button>\n  </ion-segment>\n\n  <div class="cfg-title" *ngIf="arrProdutos && arrProdutos.length">\n    <ion-grid>\n      <ion-row>\n        <ion-col name="Produto" class="size-title" align-self-center col-8>\n          Produto\n        </ion-col>\n\n        <ion-col name="Qtd" align-self-center align="right">\n          Qtd\n        </ion-col>\n        <ion-col name="Und" align="right">\n          Und\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div *ngFor="let item of arrProdutos " class="card">\n    <ion-list>\n      <ion-item-sliding>\n        <ion-item class="item">\n          <ion-grid>\n            <div>\n              <ion-row>\n\n                <ion-col class="ion-col" align-self-start col-8>\n                  <h4>{{ item.produto.nome.NAME }}</h4>\n                </ion-col>\n                <ion-col align-self-center align="right">\n                  <h4> {{ item.produto.qtd }}</h4>\n                </ion-col>\n\n                <ion-col align="right">\n                  <h4>{{ item.produto.unidade }}</h4>\n                </ion-col>\n\n              </ion-row>\n            </div>\n\n          </ion-grid>\n        </ion-item>\n        <ion-item-options *ngIf="isAvaible()" side="right" (ionSwipe)="removeProduct(item)">\n          <button ion-button expandable color="danger" (click)="removeProduct(item)">\n            <ion-icon name="trash"></ion-icon>Excluir\n          </button>\n          <button ion-button (click)="editProduct(item)">\n            <ion-icon name="create"></ion-icon>Editar\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </div>\n\n\n\n  <!--  <div *ngIf="isAvaible()" >\n    <ion-fab left bottom >\n      <button ion-fab color="primary"  (click)="addProduct()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-fab>\n  </div>\n  <div *ngIf="arrRet && arrRet.length">\n    <ion-fab right bottom>\n      <button ion-fab color="secondary" (click)="showConfirm()">\n        <ion-icon name="md-done-all"></ion-icon>\n      </button>\n    </ion-fab>\n  </div> -->\n\n  <ion-fab *ngIf="arrRet && arrRet.length" bottom left clear>\n      <button ion-fab color = "secondary"  (click)="showConfirm()" clear>\n        <ion-icon name="md-done-all"> </ion-icon>\n      </button>\n    </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\DemarchiApp\RequestApp\src\pages\stock\stock.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_product_storage_product_storage__["a" /* ProductStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_product_storage_product_storage__["a" /* ProductStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_product_product__["a" /* ProductProvider */]])
    ], StockPage);
    return StockPage;
}());

//# sourceMappingURL=stock.js.map

/***/ }),

/***/ 209:
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
webpackEmptyAsyncContext.id = 209;

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/edit-product/edit-product.module": [
		798,
		7
	],
	"../pages/login/login.module": [
		799,
		6
	],
	"../pages/menu/menu.module": [
		800,
		5
	],
	"../pages/modal-product/modal-product.module": [
		801,
		4
	],
	"../pages/more/more.module": [
		802,
		3
	],
	"../pages/request/request.module": [
		803,
		2
	],
	"../pages/signup/signup.module": [
		804,
		1
	],
	"../pages/stock/stock.module": [
		805,
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
webpackAsyncContext.id = 254;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 351:
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

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CategoriaItem__ = __webpack_require__(353);

var Usuario = /** @class */ (function () {
    function Usuario() {
        this.categoriaItem = new __WEBPACK_IMPORTED_MODULE_0__CategoriaItem__["a" /* CategoriaItem */]();
    }
    return Usuario;
}());

//# sourceMappingURL=Usuario.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaItem; });
var CategoriaItem = /** @class */ (function () {
    function CategoriaItem() {
    }
    return CategoriaItem;
}());

//# sourceMappingURL=CategoriaItem.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilitarios_apiData__ = __webpack_require__(139);
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
    ProductProvider.prototype.insert = function (product) {
        var productData = JSON.stringify(product);
        this.http.post(this.API_URL + '/products/insertEstoque/' + productData, this.requestOptions)
            .subscribe(function (ret) {
            console.log(ret);
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

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
            selector: 'page-menu',template:/*ion-inline-start:"C:\DemarchiApp\RequestApp\src\pages\menu\menu.html"*/'<!--\n  Generated template for the MenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)">\n        <!--   <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon> -->\n        {{ p.title }}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<!-- main navigation -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\DemarchiApp\RequestApp\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(417);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_menu_menu__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_request_request__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_stock_stock__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utilitarios_utilitarios__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_modal_product_modal_product__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mobiscroll_angular__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_edit_product_edit_product__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_product_storage_product_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_storage__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ionic2_auto_complete__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_complete_service_complete_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_login_login__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_signup_signup__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_more_more__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angularfire2__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angularfire2_auth__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_user_user__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_product_product__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var firebaseConfig = {
    apiKey: "AIzaSyCdcciBxo_3dsnem8ltRTcMVStKOZX12xM",
    authDomain: "request-app-907fc.firebaseapp.com",
    databaseURL: "https://request-app-907fc.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "447443219945"
};
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
                        { loadChildren: '../pages/request/request.module#RequestPageModule', name: 'RequestPage', segment: 'request', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stock/stock.module#StockPageModule', name: 'StockPage', segment: 'stock', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_18__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_19__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_20_ionic2_auto_complete__["b" /* AutoCompleteModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_26_angularfire2__["AngularFireModule"].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_27_angularfire2_auth__["AngularFireAuthModule"]
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
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_17__providers_product_storage_product_storage__["a" /* ProductStorageProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_complete_service_complete_service__["a" /* CompleteServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_3__utilitarios_utilitarios__["a" /* Utilitarios */],
                __WEBPACK_IMPORTED_MODULE_28__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_product_product__["a" /* ProductProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductStorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_ListaProduto__ = __webpack_require__(438);
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
    function ProductStorageProvider(storage, datePipe) {
        this.storage = storage;
        this.datePipe = datePipe;
    }
    ProductStorageProvider.prototype.insert = function (produto) {
        var key = this.datePipe.transform(new Date(), "ddMMyyyyHHmmss");
        return this.save(key, produto);
    };
    ProductStorageProvider.prototype.save = function (key, produto) {
        return this.storage.set(key, produto);
    };
    ProductStorageProvider.prototype.remove = function (key) {
        return this.storage.remove(key);
    };
    ProductStorageProvider.prototype.update = function (key, produto) {
        return this.save(key, produto);
    };
    ProductStorageProvider.prototype.get = function (key) {
        return this.storage.get(key);
    };
    ProductStorageProvider.prototype.clear = function () {
        return this.storage.clear();
    };
    ProductStorageProvider.prototype.insertUser = function (user) {
        //let key = this.datePipe.transform(new Date(), "ddMMyyyyHHmmss");
        var key = 'Usuario';
        return this.saveUser(key, user);
    };
    ProductStorageProvider.prototype.saveUser = function (key, user) {
        return this.storage.set(key, user);
    };
    ProductStorageProvider.prototype.getAll = function (categoria) {
        var produtos = [];
        var teste = [];
        return this.storage
            .forEach(function (value, key, iterationNumber) {
            var produto = new __WEBPACK_IMPORTED_MODULE_4__model_ListaProduto__["a" /* ListaProduto */]();
            produto.key = key;
            produto.produto = value;
            produtos.push(produto);
        })
            .then(function () {
            teste = produtos.filter(function (value) {
                return value.produto.categoriaItem.nomeCategoria === categoria;
            });
            return Promise.resolve(teste);
        })
            .catch(function (error) {
            return Promise.reject(teste);
        });
    };
    ProductStorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DatePipe */]])
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

/***/ 438:
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

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(112);
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
    function MyApp(platform, statusBar, splashScreen) {
        //rootPage = '';
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.pages = [
            { title: 'Estoque / Pedido', component: __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */] },
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component, { openTab: page.openTab });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\DemarchiApp\RequestApp\src\app\app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <button ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)">\n          <!--   <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon> -->\n          {{ p.title }}\n        </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <!-- main navigation -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n<!-- <ion-nav [root]="rootPage"></ion-nav>\n -->\n'/*ion-inline-end:"C:\DemarchiApp\RequestApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
            selector: 'page-contact',template:/*ion-inline-start:"C:\DemarchiApp\RequestApp\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n<!--  <ion-list>\n    <ion-card>\n      <ion-card-content>\n\n        <ion-item>\n          <ion-label fixed>Produto</ion-label>\n          <ion-input\n            type="Text"\n            placeholder="Digite o Produto"\n            text-right\n          ></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label fixed>Quantidade</ion-label>\n            <ion-input\n              type="number"\n              placeholder="Digite a Qtd"\n              text-right\n              value = "1"\n            ></ion-input>\n          </ion-item>\n\n\n        <ion-item>\n          <ion-label >Tipo</ion-label>\n          <ion-select [(ngModel)]="arrTipo.toString" >\n              <ion-option *ngFor="let item of arrTipo" value="{{item.value}}">{{item.tipo}}</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Und. Medida</ion-label>\n          <ion-select [(ngModel)]="arrUnidade.toString" >\n              <ion-option *ngFor="let item of arrUnidade" value="{{item.value}}">{{item.und}}</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n  </ion-list> -->\n</ion-content>\n'/*ion-inline-end:"C:\DemarchiApp\RequestApp\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_complete_service_complete_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_product_modal_product__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_product_edit_product__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_product_storage_product_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(20);
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
            selector: "page-home",template:/*ion-inline-start:"C:\DemarchiApp\RequestApp\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar> <ion-title></ion-title> </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-card *ngFor="let item of arrProdutos">\n      <ion-card-content color="primary">\n       <ion-grid>\n        <ion-row>\n          <ion-col align-self-start>\n            <h3>Produto:</h3>\n          </ion-col>\n          <ion-col justify-content-end>\n            <p align="right" *ngIf="item.produto.nome.name">{{ item.produto.nome.name}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col align-self-start>\n            <h3>Quantidade:</h3> </ion-col>\n          <ion-col align-self-end>\n            <p align="right" >{{ item.produto.qtd }}</p>\n          </ion-col>\n        </ion-row>\n\n       <!--  <ion-row>\n            <ion-col align-self-start> <h3>Tipo:</h3> </ion-col>\n            <ion-col align-self-end>\n              <p align="right">{{ item.produto.tipo }}</p>\n            </ion-col>\n          </ion-row>\n -->\n          <ion-row>\n              <ion-col align-self-start> <h3>Unidade:</h3> </ion-col>\n              <ion-col align-self-end>\n                <p align="right">{{ item.produto.unidade }}</p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n      </ion-card-content>\n\n      <ion-row text-center>\n        <ion-col>\n          <button ion-button icon-left clear small (click)="editProduct(item)">\n            <ion-icon name="create"></ion-icon>\n            <div>Editar</div>\n          </button>\n        </ion-col>\n        <ion-col>\n          <button\n            ion-button\n            icon-left\n            clear\n            small\n            (click)="removeProduct(item)"\n          >\n            <ion-icon name="trash"></ion-icon>\n            <div>Excluir</div>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="addProduct()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n\n\n'/*ion-inline-end:"C:\DemarchiApp\RequestApp\src\pages\home\home.html"*/
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

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_complete_service_complete_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_product_storage_product_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utilitarios_utilitarios__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic2_auto_complete__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_Produto__ = __webpack_require__(351);
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
        if (this.navParams.data.produto && this.navParams.data.key) {
            this.model = this.navParams.data.produto;
            this.key = this.navParams.data.key;
        }
        else {
            this.model = new __WEBPACK_IMPORTED_MODULE_7__model_Produto__["a" /* Produto */]();
        }
        this.arrTipo = this.utilitarios.getArrayTipo();
        this.arrUnidade = this.utilitarios.getArrayUnidade();
        this.nomeProd = this.model.nome;
        // verifico em qual tela ele esta querendo editar para colocar a imagem de fundo correspondente ;
        this.nomeCategoria = navParams.data.nomeCategoria;
        if (this.nomeCategoria === 'Estoque')
            this.classCssImg = 'Estoque-Background';
        else
            this.classCssImg = 'Pedido-Background';
    }
    EditProductPage.prototype.ionViewDidLoad = function () {
        this.changeBackground();
    };
    EditProductPage.prototype.changeBackground = function () {
        document.getElementById('content').className = this.classCssImg;
    };
    EditProductPage.prototype.ngOnInit = function () {
        this.myForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            qtd: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required),
            products: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required),
            //   tipo: new FormControl('',Validators.required),
            und: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required),
        });
        this.searchbar.setFocus();
    };
    EditProductPage.prototype.save = function () {
        var _this = this;
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
                position: "botton",
            })
                .present();
        });
    };
    EditProductPage.prototype.saveProduct = function () {
        this.model.nome = this.nomeProd;
        return this.storage.update(this.key, this.model);
    };
    EditProductPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])('searchbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic2_auto_complete__["a" /* AutoCompleteComponent */])
    ], EditProductPage.prototype, "searchbar", void 0);
    EditProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: "page-edit-product",template:/*ion-inline-start:"C:\DemarchiApp\RequestApp\src\pages\edit-product\edit-product.html"*/'\n\n<ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Editar\n      </ion-title>\n      <ion-buttons clear start>\n          <button ion-button (click)="closeModal()">\n            <span ion-text color="primary" showWhen="ios">Cancel</span>\n           <!--  <ion-icon name="md-close" ></ion-icon> -->\n          </button>\n        </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n\n<ion-content id=\'content\' class="Pedido-Background"  padding>\n  <form [formGroup]="myForm" novalidate>\n    <div>\n      <ion-label class="label-product" stacked>Produto</ion-label>\n      <ion-auto-complete\n        type="text"\n        name="produto"\n        [(ngModel)]="nomeProd"\n        [dataProvider]="completeService"\n        formControlName="products"\n        [options]="{ placeholder : \'Digite o Produto\' }"\n        #searchbar\n        formControlName="products"\n      ></ion-auto-complete>\n    </div>\n    <hr />\n\n    <!--  <ion-item>\n    <ion-label stacked>Produto</ion-label>\n    <ion-input type="text" name ="nome" [(ngModel)]="model.nome" placeholder="Digite o Produto"></ion-input>\n  </ion-item> -->\n\n    <ion-item>\n      <ion-label stacked>Quantidade</ion-label>\n      <ion-input\n        id="qtd"\n        type="number"\n        name="qtd"\n        [(ngModel)]="model.qtd"\n        placeholder="Digite a quantidade"\n        formControlName="qtd"\n      ></ion-input>\n    </ion-item>\n\n   <!--  <ion-item>\n      <ion-label stacked>Tipo</ion-label>\n      <ion-select\n        name="tipo"\n        [(ngModel)]="model.tipo"\n        placeholder="Escolha o Tipo"\n        formControlName="tipo"\n      >\n        <ion-option *ngFor="let item of arrTipo" value="{{ item.tipo }}">{{\n          item.tipo\n        }}</ion-option>\n      </ion-select>\n    </ion-item> -->\n\n    <ion-item>\n      <ion-label stacked>Und. Medida</ion-label>\n      <ion-select\n        name="unidade"\n        [(ngModel)]="model.unidade"\n        placeholder="Escolha a Unidade"\n        formControlName="und"\n      >\n        <ion-option *ngFor="let item of arrUnidade" value="{{ item.und }}">{{\n          item.und\n        }}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <button type="submit" ion-button block (click)="save()" [disabled]="myForm.invalid">Salvar</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\DemarchiApp\RequestApp\src\pages\edit-product\edit-product.html"*/
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

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilitarios_utilitarios__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_complete_service_complete_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_product_storage_product_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_Produto__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_CategoriaItem__ = __webpack_require__(353);
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
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.completeService = completeService;
        this.storage = storage;
        this.toast = toast;
        this.utilitarios = utilitarios;
        this.view = view;
        this.model = new __WEBPACK_IMPORTED_MODULE_6__model_Produto__["a" /* Produto */]();
        this.model.categoriaItem = new __WEBPACK_IMPORTED_MODULE_7__model_CategoriaItem__["a" /* CategoriaItem */]();
        this.arrTipo = this.utilitarios.getArrayTipo();
        this.arrUnidade = this.utilitarios.getArrayUnidade();
        // Carrego variaveis com a caategoria do produto para separar Produtos de Estoque e Produtos de Pedido
        this.idCategoria = navParams.data["idCategoria"];
        this.nomeCategoria = navParams.data["nomeCategoria"];
        this.model.categoriaItem.idCategoria = this.idCategoria;
        this.model.categoriaItem.nomeCategoria = this.nomeCategoria;
        this.model.unidade = "KILO";
        // Verifico em qual tela esta sendo aberto a inclusao para indicar ao css qual imagem de fundo ele deve utilizar
        if (this.nomeCategoria === 'Estoque')
            this.classCssImg = 'Estoque-Background';
        else if (this.nomeCategoria === 'Pedido')
            this.classCssImg = 'Pedido-Background';
    }
    ModalProductPage.prototype.ionViewDidLoad = function () {
        this.changeBackground();
    };
    ModalProductPage.prototype.changeBackground = function () {
        document.getElementById('content').className = this.classCssImg;
    };
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
    ModalProductPage.prototype.save = function () {
        var _this = this;
        this.insertProduct()
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
    };
    ModalProductPage.prototype.insertProduct = function () {
        this.model.categoriaItem.nomeCategoria = this.nomeCategoria;
        this.model.categoriaItem.idCategoria = this.idCategoria;
        return this.storage.insert(this.model);
    };
    ModalProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: "page-modal-product",template:/*ion-inline-start:"C:\DemarchiApp\RequestApp\src\pages\modal-product\modal-product.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Inserir Produto\n    </ion-title>\n    <ion-buttons clear start>\n      <button ion-button (click)="closeModal()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <!--  <ion-icon name="md-close" ></ion-icon> -->\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content id=\'content\' class="Pedido-Background" padding>\n  <form [formGroup]="myForm">\n    <div>\n      <ion-label class="label-product" stacked>Produto</ion-label>\n      <ion-auto-complete type="text" name="produto" [(ngModel)]="model.nome" [dataProvider]="completeService"\n        formControlName="products" [options]="{ autocomplete  : \'on\' , placeholder : \'Digite o Produto\'}"></ion-auto-complete>\n    </div>\n    <hr>\n\n    <ion-item>\n      <ion-label stacked>Quantidade</ion-label>\n      <ion-input type="number" pattern="[0-9]*" name="qtd" [(ngModel)]="model.qtd" placeholder="Digite a quantidade" formControlName="qtd"></ion-input>\n    </ion-item>\n\n    <!--  <ion-item>\n        <ion-label stacked>Tipo</ion-label>\n        <ion-select name="tipo" [(ngModel)]="model.tipo" placeholder="Escolha o Tipo" formControlName="tipo">\n          <ion-option *ngFor="let item of arrTipo" value="{{ item.tipo }}">{{\n            item.tipo\n          }}</ion-option>\n        </ion-select>\n      </ion-item> -->\n\n    <ion-item>\n      <ion-label stacked>Und. Medida</ion-label>\n      <ion-select name="unidade" [(ngModel)]="model.unidade" placeholder="Escolha a Unidade" formControlName="und">\n        <ion-option *ngFor="let item of arrUnidade" value="{{ item.und }}"> {{\n          item.und\n          }}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <button type="submit" ion-button block (click)="save()" [disabled]="myForm.invalid">Salvar</button>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\DemarchiApp\RequestApp\src\pages\modal-product\modal-product.html"*/
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

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleteServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilitarios_apiData__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
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
    function CompleteServiceProvider(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.labelAttribute = "NAME";
        _this.formValueAttribute = "";
        return _this;
    }
    CompleteServiceProvider.prototype.getResults = function (keyword) {
        return this.http.get(this.API_URL + 'products/search/name/' + keyword)
            .map(function (result) {
            return result.json()
                .filter(function (item) { return item.NAME.toLowerCase().startsWith(keyword.toLowerCase()); });
        });
    };
    CompleteServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], CompleteServiceProvider);
    return CompleteServiceProvider;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_0__utilitarios_apiData__["a" /* ApiData */]));

//# sourceMappingURL=complete-service.js.map

/***/ })

},[412]);
//# sourceMappingURL=main.js.map