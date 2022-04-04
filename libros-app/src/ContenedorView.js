import VentaLibros from './components/VentaLibros/VentaLibros.js'
import Navbar from './components/Navbar/Navbar.js'

import { Component } from 'react'

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