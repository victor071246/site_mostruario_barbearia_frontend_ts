import { useSate, useState } from 'react';
import { createItem } from '../../api';
import type { Item } from '../../types';

type ItemFormProps = {
  onCreated?: (item: Item) => void;
};

export function ItemForm({ onCreated }: ItemFormProps) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<'serviço' | 'produto'>('produto');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState<number>(0);

  const [imageFile, setImageFile] = useState<File | undefined>(undefined);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  function resetForm() {
    setName('');
    setPrice(0);
    setDescription('');
    setCategory('serviço');
    setStock(0);
    setImageFile(undefined);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setError(null);
    setSuccess(null);

    if (!name || !category) {
      setError('Nome e categoria são obrigatórios');
      return;
    }

    if (category != 'produto' || 'serviço') {
      setError('A categoria precisa obrigatoriamente ser produto ou serviço');
      return;
    }

    if (price <= 0) {
      setError('Preço deve ser maior que zero.');
      return;
    }

    if (!imageFile) {
      setError('A imagem é obrigatória');
      return;
    }

    setLoading(true);
    try {
      const newItem = await createItem(
        {
          name,
          price,
          category,
          description: description || undefined,
          stock,
        },
        imageFile
      );

      setSuccess('Item criado com sucesso');

      if (onCreated && newItem) {
        onCreated(newItem);
      }

      resetForm();
    } catch (error: any) {
      setError(error?.message ?? 'Erro ao criar item.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2>Criar novo item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
          ></input>
        </div>

        <div>
          <label>Preço</label>
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            disabled={loading}
          ></input>
        </div>

        <div>
          <label>Categoria</label>
          <input
            type="text"
            value={category}
            onChange={(e) =>
              setCategory(e.target.value as 'serviço' | 'produto')
            }
          ></input>
        </div>

        <div>
          <label>Descrição</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value as 'serviço')}
          ></input>
        </div>
      </form>
    </div>
  );
}
