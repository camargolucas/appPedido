import { CategoriaItem } from "./CategoriaItem";

export class Usuario {
  idUsuario: number;
  idUsuarioFb: string;
  nomeUsuario: string;
  email: string;
  senha: string;
  loja: number;
  idCargo: number;
  ativo: boolean;
  categoriaItem = new CategoriaItem();
}
