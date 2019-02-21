import { ToastController } from "ionic-angular";
export class Utilitarios {
  toast: ToastController;

  // Array onde é armazenada as Unidades
  // Utilizado para carregar combo box na tela de inserção de produto (modalProduct)
  private arrUnidade = [
    { und: "KILO", value: "kg" },
    { und: "BANDEJA", value: "bj" },
    { und: "CAIXA", value: "cx" },
    { und: "SACO", value: "sc" }
  ];

  // Array onde é armazenada os Tipos de produto
  private arrTipo = [
    { tipo: "FRUTA", value: "fr" },
    { tipo: "LEGUME", value: "le" },
    { tipo: "VERDURA", value: "ve" }
  ];

  // ## Função que retorna o array de Unidade
  public getArrayUnidade() {
    return this.arrUnidade;
  }

  // ## Função que retorna o array de Tipo
  public getArrayTipo() {
    return this.arrTipo;
  }

  // ## Função para mostrar mensagens
  public showToast(mensagem: string): void {
    let toast = this.toast.create({ duration: 3000, position: "botton" });
    toast.setMessage(mensagem);
    toast.present();
  }
}
