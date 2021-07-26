import React, { useState, useEffect } from 'react';
import axios from 'axios';
import imagen from '../src/zzz.png';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;
const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
`;

function App() {
  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptomoneda] = useState('');
  const [resultado, guardarResultado] = useState({});
  const [cargando, guardarCargando] = useState(false);

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      // evitamos la ejecución la primera vez
      if (moneda === '') return;

      // consultar la api para obtener la cotizacion
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

      const resultado = await axios.get(url);

      // mostrar el spinner
      guardarCargando(true);

      // ocultar el spinner y mostrar el resultado
      setTimeout(() => {
        // cambiar el estado de cargando
        guardarCargando(false);

        // guardar cotizacion
        guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
      }, 3000);
    };
    cotizarCriptomoneda();
  }, [moneda, criptomoneda]);

  // Mostrar spinner o resultado
  const componente = cargando ? (
    <Spinner />
  ) : (
    <Cotizacion resultado={resultado} />
  );

  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt='sharkbaby' />
        <img
          src='https://picsum.photos/id/237/ff/354'
          onError={(e) =>
            (e.target.src = 'https://picsum.photos/id/1084/536/354?grayscale')
          }
          alt='gpd'
        />
      </div>
      <div>
        <Heading>🦈 Crypto-Shark </Heading>

        <Formulario
          guardarMoneda={guardarMoneda}
          guardarCriptomoneda={guardarCriptomoneda}
        />

        {componente}
      </div>
    </Contenedor>
  );
}

export default App;
