export class Utilitarios{




  arrUnidade = [
    { und: "KILO", value: "kg" },
    { und: "BANDEJA", value: "bj" },
    { und: "CAIXA", value: "cx" },
    { und: "SACO", value: "sc" }
  ];
   arrTipo = [
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
}
