import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Home.css';

function Home() {
  const [cotizacion, setCotizacion] = useState(null);

  useEffect(() => {
    fetch('https://api.bluelytics.com.ar/v2/latest')
      .then(response => response.json())
      .then(data => setCotizacion(data));
  }, []);

  return (
    <div>

      <div id='cotizacion-dolar' className="cotizacion-container">
        {cotizacion ? (
          <>
            <h2>Dólar Oficial</h2>
            <div className="cotizacion-row">
              <span className="cotizacion-label">Compra:</span>
              <span className="cotizacion-value">${cotizacion.oficial.value_buy}</span>
            </div>
            <div className="cotizacion-row">
              <span className="cotizacion-label">Venta:</span>
              <span className="cotizacion-value">${cotizacion.oficial.value_sell}</span>
            </div>
            <div className="cotizacion-row">
              <span className="cotizacion-label">Promedio:</span>
              <span className="cotizacion-value">${cotizacion.oficial.value_avg}</span>
            </div>

            <h2>Dólar Blue</h2>
            <div className="cotizacion-row">
              <span className="cotizacion-label">Compra:</span>
              <span className="cotizacion-value blue">${cotizacion.blue.value_buy}</span>
            </div>
            <div className="cotizacion-row">
              <span className="cotizacion-label">Venta:</span>
              <span className="cotizacion-value blue">${cotizacion.blue.value_sell}</span>
            </div>
            <div className="cotizacion-row">
              <span className="cotizacion-label">Promedio:</span>
              <span className="cotizacion-value blue">${cotizacion.blue.value_avg}</span>
            </div>
          </>
        ) : (
          <p>Cargando cotización...</p>
        )}
      </div>
    </div>
  );
}

export default Home;