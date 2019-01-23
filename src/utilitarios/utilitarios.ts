import { ToastController } from 'ionic-angular';
export class Utilitarios{

  toast:ToastController;

  private arrUnidade = [
    { und: "KILO", value: "kg" },
    { und: "BANDEJA", value: "bj" },
    { und: "CAIXA", value: "cx" },
    { und: "SACO", value: "sc" }
  ];
  private arrTipo = [
    { tipo: "FRUTA", value: "fr" },
    { tipo: "LEGUME", value: "le" },
    { tipo: "VERDURA", value: "ve" }
  ];


  public getArrayUnidade(){
    return this.arrUnidade
  }

  public getArrayTipo(){
    return this.arrTipo
  }

  public showToast(mensagem: string): void {
    let toast = this.toast.create({duration: 3000,
                                      position: 'botton'});
    toast.setMessage(mensagem);
    toast.present();
  }

}
