import './App.css';
import { Route, Routes } from 'react-router';
import { MenuNav } from './components/MenuNav';
import { Contacto } from './pages/Contacto';
import { Profile } from './pages/Profile';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <MenuNav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/perfil' element={<Profile />}/>
        <Route path='/contacto' element={<Contacto />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
