import './App.css';
import { Route, Routes } from 'react-router';
import { MenuNav } from './components/MenuNav';
import { SubirApuntes } from './pages/SubirApuntes';
import { VerApuntes } from './pages/VerApuntes';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <MenuNav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/subir_apuntes' element={<SubirApuntes />}/>
        <Route path='/ver_apuntes' element={<VerApuntes />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
