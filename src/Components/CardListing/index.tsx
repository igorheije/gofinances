import React from 'react';

import { Container, Title, Cash, Footer, TypeCash, DateCash } from './styles';

export const CardListing = () => {
  return (
    <Container>
      <Title>Desenvolvimento de site</Title>
      <Cash>R$ 12.000,00</Cash>
      <Footer>
        <TypeCash>Vendas</TypeCash>
        <DateCash>13/04/2020</DateCash>
      </Footer>
    </Container>
  );
};
