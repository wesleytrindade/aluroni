import { Header } from 'components/Header';
import { Outlet } from 'react-router-dom';
import tema from 'styles/Tema.module.scss';

export function DefaultPage() {
  return (
    <>
      <Header />
      <div className={tema.container}>
        <Outlet/>
      </div>
    </>
  );
}
