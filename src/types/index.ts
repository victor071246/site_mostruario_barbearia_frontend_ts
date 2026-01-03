export interface Item {
  id: string;
  name: string;
  description: string | null;
  price: number;
  category: 'servico' | 'produto';
  data_aquisicao?: string | null;
  created_at: string;
  updated_at: string;
}

export interface Usuario {
  id: string;
  username: string;
  password_hash: string;
  created_at: string;
}

export interface CreateItemDTO {
  name: string;
  description?: string;
  price: number;
  category: 'serviço' | 'produto';
  image_url?: string;
  stock?: number;
}

export interface UpdateItemDTO {
  name?: string;
  description?: string;
  price?: number;
  category?: 'serviço' | 'produto';
  image_url?: string;
  stock?: number;
}

export interface CreateUserDTO {
  username: string;
  password: string;
}

export interface LoginDTO {
  username: string;
  password: string;
}

export interface AuthResponseDTO {
  token: string;
  user: {
    id: number;
    username: string;
    created_at: string;
  };
}

export interface AdminAuthorizationRequest {
  is_admin: boolean;
}
