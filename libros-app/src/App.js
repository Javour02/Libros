import logo from './logo.svg';
import Navbar from './Navbar';
import VistaEspecifica from './VistaEspecifica';
import VentaLibros from './VentaLibros';
import Navbar from './components/Navbar/Navbar';
import VistaEspecifica from './components/VistaEspecifica/VistaEspecifica';
import MainMenu from './components/MainMenu/MainMenu';
import LoansPage from './components/LoansPage/LoansPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <VistaEspecifica/>
      <VentaLibros/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <LoansPage/>
    </div>
  );
}

export default App;
