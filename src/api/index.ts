import { data } from 'react-router-dom';
import type {
  Item,
  CreateItemDTO,
  UpdateItemDTO,
  LoginDTO,
  CreateUserDTO,
  AuthResponseDTO,
  AdminAuthorizationRequest,
} from '../types';

const API_BASE_URL = 'http://localhost:8080';

// AUTH | Rotas Públicas
export async function register(
  userData: CreateUserDTO
): Promise<AuthResponseDTO> {
  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
    credentials: 'include',
  });
  if (!response.ok) throw new Error('Erro ao fazer login');
  return response.json();
}

export async function login(credentials: LoginDTO): Promise<AuthResponseDTO> {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
    credentials: 'include',
  });
  if (!response.ok) throw new Error('Erro ao fazer login');
  return response.json();
}

export async function checkIsAdmin(): Promise<AdminAuthorizationRequest> {
  const response = await fetch('/api/check-admin');
  if (response.ok) {
    const data: AdminAuthorizationRequest = await response.json();
    return data;
  }

  return { is_admin: false };
}
// ITEMS | Rotas Públicas
export async function listItems(): Promise<Item[]> {
  const response = await fetch(`${API_BASE_URL}/items`, {
    credentials: 'include',
  });
  if (!response.ok) throw new Error('Erro ao listar items');
  return response.json();
}

export async function getItemById(id: string): Promise<Item> {
  const response = await fetch(`${API_BASE_URL}/items/${id}`, {
    credentials: 'include',
  });
  if (!response.ok) throw new Error('Erro ao buscar item');
  return response.json();
}

// ITEMS | Rotas Protegidas (admin only)
export async function createItem(
  data: CreateItemDTO,
  imageFile?: File
): Promise<Item> {
  const formData = new FormData();
  formData.append('name', data.name);
  formData.append('price', data.price.toString());
  formData.append('category', data.category);
  if (data.description) formData.append('description', data.description);
  if (data.stock !== undefined) formData.append('stock', data.stock.toString());
  if (imageFile) formData.append('image', imageFile);

  const response = await fetch(`${API_BASE_URL}/items`, {
    method: 'POST',
    body: formData,
    credentials: 'include',
  });
  if (!response.ok) throw new Error('Erro ao criar item');
  return response.json();
}

export async function updateItem(
  id: number,
  data: UpdateItemDTO
): Promise<Item> {
  const response = await fetch(`${API_BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    credentials: 'include',
  });
  if (!response.ok) throw new Error('Erro ao atualizar item');
  return response.json();
}

export async function deleteItem(id: number): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/items/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  });
  if (!response.ok) throw new Error('Erro ao deletar item');
}
