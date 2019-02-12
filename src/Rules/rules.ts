import { CategoriaItem } from "../model/CategoriaItem";


// Classe utilizada para setar constantes de Regra de Negocio.


export class Rules {

  //////////////////////////////////////////////////////////////////////////////////////////
  // CATEGORIA DOS OBJETOS DECLARADOS NO SISTEMA, TODOS DEVEM SER DO TIPO: CATEGORIA ITEM
  //////////////////////////////////////////////////////////////////////////////////////////
 readonly categoriaItem: CategoriaItem;
 readonly categorias = {
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
readonly ENVIOS:number = 1; //Padrão de envio por Usuario per dia
////////////////////////////////////////////////////////////////////////////////////////////////


}
