import React, { useState } from 'react';
import './CalculadoraDolar.css';

export default function CalculadoraDolar() {
  const [monedaOrigen, setMonedaOrigen] = useState('');
  const [tipoDolar, setTipoDolar] = useState('oficial');
  const [monto, setMonto] = useState('');
  const [resultado, setResultado] = useState('');

  const tasas = {
    oficial: 1188,
    blue: 1200
  };

  function handleMonedaOrigenChange(e) {
    const value = e.target.value;
    setMonedaOrigen(value);
    setResultado('');
    setMonto(0);
  }

  function handleTipoDolarChange(e) {
    const value = e.target.value;
    setTipoDolar(value);
    calcular(monto, value, monedaOrigen);
  }

  function handleMontoChange(e) {
    const value = parseFloat(e.target.value) || 0;
    setMonto(value);
    calcular(value, tipoDolar, monedaOrigen);
  }

  function calcular(monto, tipo, origen) {
    const tasa = tasas[tipo];
    if (origen === 'usd') {
      setResultado(`${(monto * tasa).toFixed(2)} ARS`);
    } else if (origen === 'ars') {
      setResultado(`${(monto / tasa).toFixed(2)} USD`);
    } else {
      setResultado('');
    }
  }

  return (
    <section id="calculadora" className="calculadora-section">
      <div className="container">
        <h2>Calculadora de Dólar a Pesos</h2>

        <div className="form-group">
          <label>Seleccione una moneda:</label>
          <select onChange={handleMonedaOrigenChange} value={monedaOrigen}>
            <option value="">-- Seleccione --</option>
            <option value="usd">Dólares</option>
            <option value="ars">Pesos Argentinos</option>
          </select>
        </div>

        {monedaOrigen && (
          <>
            <div className="form-group">
              <label>{monedaOrigen === 'usd' ? 'Tipo de Dólar:' : 'Convertir a tipo de Dólar:'}</label>
              <select onChange={handleTipoDolarChange} value={tipoDolar}>
                <option value="oficial">Dólar Oficial</option>
                <option value="blue">Dólar Blue</option>
              </select>
            </div>

            <div className="form-group">
              <label>{monedaOrigen === 'usd' ? 'Monto en USD:' : 'Monto en ARS:'}</label>
              <input type="number" onChange={handleMontoChange} value={monto} onFocus={(e) => e.target.select()} placeholder="Ingrese un valor" placeholder="Ingrese el monto" />
            </div>

            {resultado && (<div className="resultado-box">
  <span>{resultado}</span>
</div>)}
          </>
        )}
      </div>
    </section>
  );
}