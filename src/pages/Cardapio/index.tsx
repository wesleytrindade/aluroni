import { useState } from 'react';
import styles from './Cardapio.module.scss';
import { Buscador } from './Buscador';
import { Filtros } from './Filtros';
import Ordenador from './Ordenador';
import { Itens } from './Itens';
import tema from '../../styles/Tema.module.scss';

export function Cardapio() {
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState('');

  return (
    <section className={styles.cardapio}>
      <h3 className={tema.titulo}>Cardápio</h3>
      <Buscador busca={busca} setBusca={setBusca} />
      <div className={styles.cardapio__filtros}>
        <Filtros filtro={filtro} setFiltro={setFiltro} />
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
      </div>
      <Itens busca={busca} filtro={filtro} ordenador={ordenador}/>
    </section>
  );
}
