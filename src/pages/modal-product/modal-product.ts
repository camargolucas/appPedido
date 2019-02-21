import { Utilitarios } from "./../../utilitarios/utilitarios";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  Img
} from "ionic-angular";
import { ModalController, ViewController } from "ionic-angular";
import { CompleteServiceProvider } from "../../providers/complete-service/complete-service";
import { ProductStorageProvider } from "../../providers/product-storage/product-storage";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Produto } from "../../model/Produto";
import { CategoriaItem } from "../../model/CategoriaItem";
import { Usuario } from "../../model/Usuario";

/**
 * Generated class for the ModalProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-modal-product",
  templateUrl: "modal-product.html"
})
export class ModalProductPage {
  // Objeto do tipo Produto
  private model: Produto;

  // Utilizado para fazer um grupo de formulários
  public myForm: FormGroup;

  // Array preenchido com as Unidades do produto
  public arrUnidade: any;

  // Array preenchido com os Tipos do produto
  public arrTipo: any;

  // Utilizado para indicar qual a classe deve ser usada no css indicando a Imagem de Fundo
  private classCssImg: string;

  // Utilizada para distinguir no cache a qual categoria os dados armazenados pertencem quando armazenada
  private nomeCategoria: string;
  private idCategoria: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public completeService: CompleteServiceProvider,
    public storage: ProductStorageProvider,
    public toast: ToastController,
    public utilitarios: Utilitarios,
    public view: ViewController
  ) {
    // Instancia do Produto e do Tipo Categoria Item do Objeto Produto
    this.model = new Produto();
    this.model.categoriaItem = new CategoriaItem();
    this.model.usuario = new Usuario();

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
    this.storage.get("Usuario").then((ret) => {
      this.model.usuario.idUsuario = ret['idUsuario'];
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
  ionViewDidLoad() {
    // ## chamada do Método para troca a imagem de fundo do APP
    this.changeBackground();
  }

  // ## Método para troca a imagem de fundo do APP
  changeBackground() {
    document.getElementById("content").className = this.classCssImg;
  }

  // ## Método ativado quando a tela é aberta e carrega o formulário com as validações
  ngOnInit(): void {
    this.myForm = new FormGroup({
      qtd: new FormControl("", Validators.required), // Obriga o usuario a nao deixar o campo vazio
      products: new FormControl("", Validators.required),
      und: new FormControl("", Validators.required)
    });
  }

  closeModal() {
    this.view.dismiss();
  }

  // ##############################################################
  // ## Método que chama a função que salva o produto no cache ####
  save() {
    // ## Verifico se o usuário digitou um valor válido
    if (this.model.qtd > 0) {
      this.insertProduct()
        .then(ret => {
          this.toast
            .create({
              message: "Produto Salvo",
              duration: 2000,
              position: "botton"
            })
            .present();
          this.navCtrl.pop();
        })
        .catch(() => {
          this.toast
            .create({
              message: "Erro ao Salvar Produto",
              duration: 3000,
              position: "botton"
            })
            .present();
        });
    } else {
      this.toast
        .create({
          message: "Insira um valor válido !",
          duration: 3000,
          position: "botton"
        })
        .present();
    }
  }

  // ## Função para inserir os produtos no CACHE do usuario
  insertProduct() {
    // ## Chamada da função para inserção
    return this.storage.insert(this.model);
  }
}
