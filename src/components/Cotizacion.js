import React from 'react';
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
  font-size: 18px;
  span {
    font-weight: bold;
  }
`;
const Precio = styled.p`
  font-size: 30px;
  span {
    font-weight: bold;
  }
`;

const Cotizacion = ({ resultado }) => {
  if (Object.keys(resultado).length === 0) return null;

  console.log(resultado);

  return (
    <ResultadoDiv>
      <Precio>
        The price is: <span>{resultado.PRICE}</span>{' '}
      </Precio>
      <Info>
        Highest price of the day: <span>{resultado.HIGHDAY}</span>{' '}
      </Info>
      <Info>
        Lowest price of the day: <span>{resultado.LOWDAY}</span>{' '}
      </Info>
      <Info>
        Variation last 24 hours: <span>{resultado.CHANGEPCT24HOUR}</span>{' '}
      </Info>
      <Info>
        Last Update: <span>{resultado.LASTUPDATE}</span>{' '}
      </Info>
    </ResultadoDiv>
  );
};

export default Cotizacion;
