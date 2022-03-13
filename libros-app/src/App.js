//import VentaLibros from './components/VentaLibros/VentaLibros';
import Navbar from './components/Navbar/Navbar';
import VistaEspecifica from './components/VistaEspecifica/VistaEspecifica';
//import MainMenu from './components/MainMenu/MainMenu';
//import LoansPage from './components/LoansPage/LoansPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <VistaEspecifica/>
    </div>
  );
}

export default App;
