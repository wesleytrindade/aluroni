import { useEffect, useState } from 'react';
import { Item, ItemProps } from './Item';
import cardapio from 'data/cardapio.json';
import styles from './Itens.module.scss';

interface ItensProps {
  busca: string;
  filtro: number | null;
  ordenador: string;
}
export function Itens({ busca, filtro, ordenador }: ItensProps) {
  const [lista, setLista] = useState(cardapio);

  useEffect(() => {
    const novaLista = cardapio.filter(
      (item) => buscaTitulo(item.title) && buscaFiltro(item.category.id)
    );
    setLista(ordenar(novaLista));
  }, [busca, filtro, ordenador]);

  function buscaTitulo(title: string) {
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }

  function buscaFiltro(id: number) {
    if (filtro !== null) return filtro === id;
    return true;
  }

  function ordenar(novaLista: typeof cardapio) {
    switch (ordenador) {
    case 'porcao':
      return novaLista.sort((a, b) => (a.size > b.size ? 1 : -1));

    case 'qtd_pessoas':
      return novaLista.sort((a, b) => (a.serving > b.serving ? 1 : -1));

    case 'preco':
      return novaLista.sort((a, b) => (a.price > b.price ? 1 : -1));

    default:
      return novaLista;
    }
  }
  return (
    <div className={styles.itens}>
      {lista.map((item: ItemProps) => {
        return <Item key={item.id} {...item} />;
      })}
    </div>
  );
}
