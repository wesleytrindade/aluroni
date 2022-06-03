import { Footer } from 'components/Footer';
import { Menu } from 'components/Menu';
import { Cardapio } from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import { NotFound } from 'pages/NotFound';
import { AdminConfia} from 'pages/Admin';
import { Sobre } from 'pages/Sobre';
import { DefaultPage } from 'pages/_Shared/_DefaultPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Cardapio />} />
            <Route path="sobre" element={<Sobre/>}/>
          </Route>
          <Route path="/admin" element={<AdminConfia/>}/>
          <Route path='*' exact={true} element={<NotFound/>} />
        </Routes>
        <Footer/>
      </Router>
    </main>
  );
}
