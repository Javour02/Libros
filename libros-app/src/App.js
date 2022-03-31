import Navbar from './components/Navbar/Navbar';
import VistaEspecifica from './components/VistaEspecifica/VistaEspecifica';
import MainMenu from './pages/MainMenu/MainMenu';
import LoansPage from './components/LoansPage/LoansPage';
import './App.css';

import { Component } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
        </div>
        <Routes>
          
          <Route
            path="/"

            element={<MainMenu />}
            exact
          />
          <Route
            path="/book-view"
            element={<VistaEspecifica />}
          />
          <Route
            path="/loans"
            element={<LoansPage />}
          />
          
        </Routes>
      </BrowserRouter>

    );
  }
}

export default App;
