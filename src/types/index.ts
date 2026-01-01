export interface Item {
  id: string;
  nome: string;
  descricao?: string;
  categoria: string;
  localização?: string;
  data_aquisicao?: string;
  created_at: string;
  updated_at: string;
}

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  departamento?: string;
  created_at: string;
  updated_at: string;
}
