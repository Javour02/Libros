import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
//import VistaEspecifica from './components/VistaEspecifica/VistaEspecifica';
import MainMenu from './components/MainMenu/MainMenu';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainMenu/>
    </div>
  );
}

export default App;
