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
  apelidoUsuario:string;
  categoriaItem = new CategoriaItem();
  token: string;
}
