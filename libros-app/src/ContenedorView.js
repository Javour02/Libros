import VentaLibros from './components/VentaLibros/VentaLibros.js'
import VistaEspecifica from './components/VistaEspecifica/VistaEspecifica.js'
import Navbar from './components/Navbar/Navbar.js'
import { Component } from 'react'
import AddReview from './components/AddReview/AddReview.js';

class ContenedorView extends Component {
  render() {
    return (
        <div>
            <Navbar/>
            <VentaLibros/>
        </div>
    );
  }
}

export default ContenedorView;