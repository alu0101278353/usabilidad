import './App.css';
import { Route, Routes } from 'react-router';
import { MenuNav } from './components/MenuNav';
import { SubirApuntes } from './pages/SubirApuntes';
import { VerApuntes } from './pages/VerApuntes';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import { QuienesSomos } from './pages/QuienesSomos';
import { Login } from './pages/Login';
import { Faqs } from './pages/faqs';

function App() {
  return (
    <div className="App">
      <MenuNav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/subir_apuntes' element={<SubirApuntes />}/>
        <Route path='/ver_apuntes' element={<VerApuntes />}/>
        <Route path='/quienes_somos' element={<QuienesSomos />}/>
        <Route path='/faqs' element={<Faqs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/usabilidad' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
