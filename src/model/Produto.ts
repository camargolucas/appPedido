
import { CategoriaItem } from './CategoriaItem';
import { Usuario } from './Usuario';
export class Produto {
  id:number
  nome:string
  qtd:number
  unidade:string
  tipo:string
  categoriaItem:CategoriaItem
  usuario:Usuario
}
