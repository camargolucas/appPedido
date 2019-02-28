import { ModalController, AlertController } from "ionic-angular";
import { StockPage } from "./../stock/stock";
import { ListaProduto } from "./../../model/ListaProduto";
import { ModalProductPage } from "./../modal-product/modal-product";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";
import { ProductStorageProvider } from "../../providers/product-storage/product-storage";
import { Produto } from "../../model/Produto";
import { EditProductPage } from "../edit-product/edit-product";
import { ProductProvider } from "../../providers/product/product";
import { Rules } from "../../Rules/rules";
import { UserProvider } from "../../providers/user/user";
import { sortBy } from "sort-by-typescript";
import { retry } from "rxjs/operators";
/**
 * Generated class for the RequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-request",
  templateUrl: "request.html"
})
export class RequestPage {
  // Utilizada para distinguir no cache a qual categoria os dados armazenados pertencem quando armazenada
  private idCategoria: number;
  private nomeCategoria: string;

  // Array para carregar os produtos filtrados por TIPO do produto que estão no cache
  private arrProdutos: ListaProduto[];

  // Array para carregar os produtos filtrados do cache por CATEGORIA que estão no cache
  private arrRet: ListaProduto[];

  // Variavel utilizada para distinguir o tipo do produto (FRUTA, VERDURA e LEGUME) e setar as abas
  private tipo = "";

  private add: boolean;

  // Variavel utilizada para verificar se pode ou não enviar o pedido e se pode inserir Produtos
  private send: boolean;

  // Resgata a data do dia
  public date: string = new Date().toLocaleDateString();

  // Utilizada para armazenar o id do Usuario logado
  public idUsuario: number;
  public tokenUsuario: string;

  constructor(
    public modal: ModalController,
    public toast: ToastController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public provider: ProductStorageProvider,
    public alertCtrl: AlertController,
    public productApi: ProductProvider,
    public rules: Rules,
    public userApi: UserProvider
  ) {
    // ##########################################################################################
    // ## Preencho a variavel com o tipo de categoria correspondente ############################
    this.nomeCategoria = this.rules["categorias"]["pedido"]["categoriaItem"][
      "nomeCategoria"
    ];
    this.idCategoria = this.rules["categorias"]["pedido"]["categoriaItem"][
      "idCategoria"
    ];

    // ## Seto como F(Fruta) para iniciar na aba Fruta
    this.tipo = "F";
  }

  // ################################################
  // ## Função ativada quando a View é carregada ####
  async ionViewDidEnter() {
    // Armazeno o id do Usuario logado na variavel idUsuario
    await this.provider.get("Usuario").then(value => {
      this.idUsuario = value["idUsuario"];
      this.tokenUsuario = value["token"];
    });

    // ## Verifico se já foi enviado algum pedido do Usuario logado
    this.verifyRequest(this.idUsuario, this.date);

    // ## Listagem dos produtos conforme seu tipo
    this.loadData(this.tipo, this.idUsuario);
  }

  // ##############################################
  // ## Função ativada quando a aba é trocada #####
  onSegmentChange(value: any) {
    // Lista os produtos conforme seu tipo
    this.loadData(value, this.idUsuario);
  }

  // ###############################################################
  // ## Função utilizada para abrir a modal de adicionar Produtos ##
  addProduct() {
    // Criação da Modal
    const myModal = this.modal.create(ModalProductPage, {
      idCategoria: this.idCategoria,
      nomeCategoria: this.nomeCategoria
    });

    // Quando a modal é finalizada é chamado novamente o metodo de listagem com os novos produtos
    myModal.onDidDismiss(() => {
      this.loadData(this.tipo, this.idUsuario);
    });
    myModal.present();
  }

  // #######################################################################
  // ## Utilizada para verificar se há possibilidade de envio do Pedido ####
  public isAvaibleSend() {
    return this.send;
  }

  // ###################################################################################################
  // ## Função para verificar no bano de dados se aquele usuario já enviou algum pedido no dia #########
  async verifyRequest(idUser: number, dateNow: string) {
    let id = idUser;
    let date = dateNow;
    let ENVIOS: any;

    let arrUser = {
      idUsuario: id,
      data: date
    };

    // ## Verifico quantos pedidos ja foram lançados no dia atual.
    await this.userApi.getSentRequest(arrUser).then(result => {
      ENVIOS = result[0]["ENVIOS"];

      // ## Se ainda não enviou nenhum pedido no dia ...
      if (ENVIOS < this.rules.ENVIOS) {
        this.send = true;
      } else {
        this.send = false;
      }
    });
    return this.send;
  }

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
  loadData(value, idUser) {
    this.provider
      .getAll(this.nomeCategoria)
      .then(results => {
        // Filtro todos os produtos lancados de todos os tipos pelo usuario logado
        this.arrRet = results.filter(data => {
          return data.produto.usuario.idUsuario == idUser;
        });

        // Filtro os produtos por TIPO e por Usuario
        this.arrProdutos = results.filter(data => {
          return (
            data.produto.nome["TIPO"] == value &&
            data.produto.usuario.idUsuario == idUser
          ); // && data.produto.categoriaItem.nomeCategoria == this.nomeCategoria
        });
        // ## Ordeno o array pelo nome em ordem alfabetica
        this.arrProdutos.sort(sortBy("produto.nome.NAME"));
      })
      .catch(error => {
        console.log(error);
      });
  }

  // ###############################################################
  // ## Função para chamar a pagina de Edição de produtos ##########
  editProduct(item: ListaProduto) {
    this.navCtrl.push(EditProductPage, {
      key: item.key,
      produto: item.produto,
      nomeCategoria: this.nomeCategoria
    });
  }

  // ######################################################
  // ## Função para remoção de produtos do Cache ##########
  removeProduct(item: ListaProduto) {
    this.provider.remove(item.key).then(() => {
      let index = this.arrProdutos.indexOf(item);
      this.arrProdutos.splice(index, 1);
      this.loadData(this.tipo, this.idUsuario);
      this.showToast("Produto removido");
    });
  }

  // ########################################################################
  // ## Função que mostra o pop up de confirmacção de Envio #################
  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: "Deseja finalizar o Pedido?",
      message:
        "Lembre-se, se voce finalizar o pedido, ele não poderá ser alterado !",
      buttons: [
        {
          text: "Cancelar",
          handler: () => {}
        },
        {
          text: "Confirmar",
          handler: () => {
            // Verifico se já foi enviado Pedido deste usuário
            this.verifyRequest(this.idUsuario, this.date)
              .then(ret => {
                // Se for possivel o lancamento, seto a variavel de Send como falsa para impedir o
                // usuário de enviar o pedido novamente. E insiro no Banco de Dados
                if (ret == true) {
                  this.send = false;
                  this.insertDatabase();
                } else {
                  this.showToast("Produto já foi enviado hoje");
                }
              })
              .catch(() => {
                this.showToast("Não foi possivel enviar ");
              });
          }
        }
      ]
    });
    confirm.present();
  }

  // ###############################################################
  // ## Função para inserir o Pedido no banco de dados ############
  insertDatabase() {
    // this.provider.get("Usuario").then(ret => {
    //let idUsuario = this.idUsuario;

    // ## Monto um objeto com os dados de envio do Usuario, e os produtos adicionados
    let Produtos = {
      arrProduto: this.arrRet,
      idUsuario: this.idUsuario,
      dataEnvio: this.date,
      tokenUsuario: this.tokenUsuario
    };

    // ## Funcao da API que salva oss dados no banco
    this.productApi.insertRequest(Produtos)
    .then((ret) => {
      if (ret["_body"] == "1") {
        this.showToast("Pedido enviado com sucesso");
      } else {
        this.showToast("Houve um problema no envio");
      }

    });
  }

  showToast(messageString: String) {
    this.toast
      .create({
        message: "" + messageString,
        duration: 3000,
        position: "bottom"
      })
      .present();
  }
}
