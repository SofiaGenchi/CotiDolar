
import React from 'react'
import './Header.css'

function Header() {
  return (
    <header>
      <div id='header-content'>
        <h1>CotiDolar</h1>
        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#noticias">Noticias</a>
          <a href="#calculadora">Calculadora</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
