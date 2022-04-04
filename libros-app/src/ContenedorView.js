import VentaLibros from './components/VentaLibros/VentaLibros.js'
import VistaEspecifica from './components/VistaEspecifica/VistaEspecifica.js'
import Navbar from './components/Navbar/Navbar.js'

import { Component } from 'react'

class ContenedorView extends Component {
  render() {
    return (
        <div>
            <Navbar/>
            <VistaEspecifica/>
        </div>
    );
  }
}

export default ContenedorView;