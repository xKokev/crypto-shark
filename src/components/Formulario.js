import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import Error from './Error';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import axios from 'axios';

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Formulario = ({ guardarMoneda, guardarCriptomoneda }) => {
  // state del listado de criptomonedas
  const [listacripto, guardarCriptomonedas] = useState([]);
  const [error, guardarError] = useState(false);

  const MONEDAS = [
    { codigo: 'USD', nombre: 'ðºð¸ U.S. dollar' },
    { codigo: 'EUR', nombre: 'ðªðº Euro' },
    { codigo: 'CAD', nombre: 'ð¨ð¦ Canadian dollar' },
    { codigo: 'GBP', nombre: 'ð¬ð§ Pound Sterling' },
    { codigo: 'ILS', nombre: 'ð®ð± Israeli shekel' },
    { codigo: 'AED', nombre: 'ð¦ðª DÃ­rham' },
    { codigo: 'AED', nombre: 'ð¦ðº Australian dollar' },
    { codigo: 'JPY', nombre: 'ð¯ðµ Japanese Yen' },
    { codigo: 'CNY', nombre: 'ð¨ð³ Yuan' },
    { codigo: 'MXN', nombre: 'ð²ð½ Mexican peso' },
  ];

  // Utilizar useMoneda
  const [moneda, SelectMonedas] = useMoneda(
    'Choose your Currency',
    '',
    MONEDAS
  );

  // utilizar useCriptomoneda
  const [criptomoneda, SelectCripto] = useCriptomoneda(
    'Choose your Cryptocurrency',
    '',
    listacripto
  );

  // Ejecutar llamado a la API
  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

      const resultado = await axios.get(url);

      guardarCriptomonedas(resultado.data.Data);
    };
    consultarAPI();
  }, []);

  // cuando el usuario hace submit
  const cotizarMoneda = (e) => {
    e.preventDefault();

    // validar si ambos campos estan llenos
    if (moneda === '' || criptomoneda === '') {
      guardarError(true);
      return;
    }

    // pasar los datos al componente principal
    guardarError(false);
    guardarMoneda(moneda);
    guardarCriptomoneda(criptomoneda);
  };

  return (
    <form onSubmit={cotizarMoneda}>
      {error ? <Error mensaje='All fields are required' /> : null}

      <SelectMonedas />

      <SelectCripto />

      <Boton type='submit' value='Calculate' />
    </form>
  );
};

export default Formulario;
