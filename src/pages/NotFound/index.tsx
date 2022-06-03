import styles from './NotFound.module.scss';
import { ReactComponent as LogoNotFound } from 'assets/img/not_found.svg';
import classNames from 'classnames';
import tema from 'styles/Tema.module.scss';
import { useNavigate } from 'react-router-dom';

export function NotFound() {

  const navigate = useNavigate();

  return (
    <div
      className={classNames({
        [styles.container]: true,
        [tema.container]: true,
      })}
    >
      <div className={styles.voltar}>
        <button onClick={()=>{navigate(-1);}}>{'< Voltar'}</button>
      </div>
      <LogoNotFound />
    </div>
  );
}
