import { Utilitarios } from './../../utilitarios/utilitarios';
import { CheckNetworkProvider } from './../../providers/check-network/check-network';
import { TabsPage } from "./../tabs/tabs";
import { Usuario } from "./../../model/Usuario";
import { ProductProvider } from "./../../providers/product/product";

import { ProductStorageProvider } from "./../../providers/product-storage/product-storage";
import { Component, ɵConsole, Optional } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  ModalController,
  AlertController
} from "ionic-angular";
import { EditProductPage } from "../edit-product/edit-product";
import { ModalProductPage } from "../modal-product/modal-product";
import { ListaProduto } from "../../model/ListaProduto";
import { UserProvider } from "../../providers/user/user";
import { Rules } from "../../Rules/rules";
import { TabStateProvider } from "../../providers/tab-state/tab-state";
import { sortBy } from "sort-by-typescript";

/**
 * Generated class for the StockPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-stock",
  templateUrl: "stock.html"
})
export class StockPage {
  // Array para carregar os produtos filtrados do cache por CATEGORIA que estão no cache
  private arrRet: ListaProduto[];

  // Array para carregar os produtos filtrados por TIPO do produto que estão no cache
  private arrProdutos: ListaProduto[];

  // Variavel utilizada para distinguir o tipo do produto (FRUTA, VERDURA e LEGUME) e setar as abas
  private tipo = "";

  // Variavel utilizada para verificar se é possivel editar os produtos e enviar o estoque
  public editar: boolean;

  // Data do dia
  public date: string = new Date().toLocaleDateString();

  // Utilizada para distinguir no cache a qual categoria os dados armazenados pertencem quando armazenada
  private idCategoria: number;
  private nomeCategoria: string;

  // Variavel para popular o id do usuário logado
  public idUsuario: number;
  public tokenUsuario: string;

  // Objeto do Usuario
  public usuario: Usuario;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public provider: ProductStorageProvider,
    public toast: ToastController,
    public modal: ModalController,
    public alertCtrl: AlertController,
    public storage: ProductStorageProvider,
    public apiProduct: ProductProvider,
    public userApi: UserProvider,
    public rules: Rules,
    public tabState: TabStateProvider,
    public network: CheckNetworkProvider
  ) {
    // ##########################################################################################
    // ## Preencho a variavel com o tipo de categoria correspondente ############################
    this.nomeCategoria = this.rules["categorias"]["estoque"]["categoriaItem"][
      "nomeCategoria"
    ];
    this.idCategoria = this.rules["categorias"]["estoque"]["categoriaItem"][
      "idCategoria"
    ];

    // ## Seto como F(Fruta) para iniciar na aba Fruta
    this.tipo = "F";
    //this.tabState.setState("tabRequest", true)

    console.log(this.network.statusNetwork);
   
  }

  // ################################################
  // ## Função ativada quando a View é carregada ####
  async ionViewDidEnter() {
    // Armazeno o id do Usuario logado na variavel idUsuario
    await this.provider.get("Usuario").then(value => {
      this.idUsuario = value["idUsuario"];
      this.tokenUsuario = value["token"];
    });

    // ## Listagem dos produtos conforme seu tipo
    this.loadData(this.tipo, this.idUsuario);

    // Verifica a disponibilidade para liberar a aba de Pedido
    this.verifyToEnableTab();
  }

  // ##############################################
  // ## Função ativada quando a aba é trocada #####
  onSegmentChange(value: any) {
    // Lista os produtos conforme seu tipo
    this.loadData(value, this.idUsuario);
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
      this.toast
        .create({
          message: "Produto Removido",
          duration: 3000,
          position: "bottom"
        })
        .present();
    });
  }

  // ########################################################################
  // ## Função que carrega e filtra os dados no cache do Usuario ############
  loadData(value, idUser) {
    this.provider
      .getAll(this.nomeCategoria)
      .then(results => {
        // ## Filtro todos os produtos lancados de todos os tipos pelo usuario logado
        this.arrRet = results.filter(data => {
          return data.produto.usuario.idUsuario == idUser;
        });

        // Filtro os produtos por TIPO e por Usuario
        this.arrProdutos = results.filter(data => {
          // Listo pelo tipo do produto e pelo usuario que adicionou o produto
          return (
            data.produto.nome["TIPO"] == value &&
            data.produto.usuario.idUsuario == idUser
          ); //&& data.produto.categoriaItem.nomeCategoria == this.nomeCategoria
        });
        // ## Ordeno o array pelo nome em ordem alfabetica
        this.arrProdutos.sort(sortBy("produto.nome.NAME"));
      })
      .catch(error => {
        console.log(error);
      });
  }

  // ###############################################################
  // ## Função utilizada para abrir a modal de adicionar Produtos ##
  addProduct() {
    const myModal = this.modal.create(ModalProductPage, {
      tipoProduto: this.tipo,
      idCategoria: this.idCategoria,
      nomeCategoria: this.nomeCategoria
    });

    myModal.onDidDismiss(() => {
      this.loadData(this.tipo, this.idUsuario);
    });
    myModal.present();
  }
  // ################################################################################################
  // ## Função utilizada para verificar a disponibilidade de alteração e envio de Produtos ##########
  public isAvaible() {
    return this.editar;
  }

  // ######################################################################
  // ## Função utilizada para habilitar e desabilitar abas de navegação ###
  public enableTab(tab: string, status: boolean) {
    this.tabState.setState(tab, status);
  }
  // #################################################################################
  // ## Função para verificar a disponibilidade de liberação das abas de navegação ###
  async verifyToEnableTab() {
    await this.verifyStock().then(ret => {
      if (ret == true) {
        this.enableTab("tabRequest", false);
      } else this.enableTab("tabRequest", true);
    });
  }

  // ###############################################################
  // ## Verifica se foi lancado estoque e retorna um boolean dizendo se pode ou não enviar/editar os produots
  async verifyStock() {
    let id = this.idUsuario;
    let date = this.date;
    let ENVIOS: any;
    let tabEnabled: boolean;

    let arrUser = {
      idUsuario: id,
      data: date
    };

    // ## Chamada da API para verificar quantos pedidos foram enviados no dia
    await this.userApi.getSentStock(arrUser).then(result => {
      ENVIOS = result[0]["ENVIOS"];

      if (ENVIOS < this.rules.ENVIOS) {
        this.editar = true;
      } else {
        this.editar = false;
      }
    });

    return this.editar;
  }

  // ###############################################################
  // ## Função para inserir o Estoque no banco de dados
  public insertDataBase() {
    // ## Monto um objeto com os dados de envio do Usuario, e os produtos adicionados
    let Produtos = {
      arrProduto: this.arrRet,
      idUsuario: this.idUsuario,
      dataEnvio: this.date,
      tokenUsuario: this.tokenUsuario
    };

    // ## Funcao da API que salva os dados no banco
    this.apiProduct
      .insert(Produtos)
      .toPromise() // Caso tenha inserido com sucesso ...
      .then(ret => {
        this.toast
          .create({
            message: "Estoque Enviado com sucesso",
            duration: 3000,
            position: "bottom"
          })
          .present();
      });

    this.enableTab("tabRequest", true); // Ao inserir o estoque, libera a aba de Pedido

  }

  alertNotConnection(){
    console.log("this.network.checkNetwork()" + this.network.checkNetwork());


    const confirm = this.alertCtrl.create({
      title: "Sem Conexão " + this.network.checkNetwork(),
      message: "Lembre-se se voce enviar, o estoque não poderá ser alterado",
      buttons: [
        {
          text: "Não",
          handler: () => {}
        },
        {
          text: "Ok",
          handler: () => {
          }
        }
      ]
    });
    confirm.present();
  }

  // ########################################################################
  // ## Função que mostra o pop up de confirmacção de Envio #################
  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: "Deseja enviar o estoque? ",
      message: "Lembre-se se voce enviar, o estoque não poderá ser alterado",
      buttons: [
        {
          text: "Não",
          handler: () => {
          }
        },
        {
          text: "Sim",
          handler: () => {

            if(this.network.checkNetwork() === true){
            // Verifico se já foi enviado Estoque deste usuário
            this.verifyStock()
              .then(ret => {
                // Se for possivel o lancamento, seto a variavel de Editar como falsa para impedir o
                // usuário de enviar o pedido novamente. E insiro no Banco de Dados
                if (ret == true) {
                  this.editar = false;
                  this.insertDataBase();
                } else {
                  this.showToast("Estoque já foi enviado hoje !");
                }
              })
              .catch(() => {
                this.showToast("Não foi possivel enviar o estoque !");
              });
            }else{
              this.showToast("Você não tem conexão com a internet!");
            }
          }
        }
      ]
    });
    confirm.present();





  }


  showToast(messageString:String){
    this.toast
    .create({
      message: "" + messageString,
      duration: 3000,
      position: "bottom"
    })
    .present();
  }
}
