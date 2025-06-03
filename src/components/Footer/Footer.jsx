import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>CotiDolar AR</h3>
                <p>Seguimiento actualizado del dolar en Argentina</p>
            </div>

            <div class="footer-section">
                <h4>Enlaces</h4>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Noticias</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Contacto</h4>
                <p>Sofia Ailen Genchi</p>
                <div class="social-links">
                    <a href="https://github.com/SofiaGenchi" target="_blank"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/sofiagenchi/" target="_blank"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2025 CotiDolar AR - Todos los derechos reservados</p>
        </div>
    </footer>
  )
}

export default Footer