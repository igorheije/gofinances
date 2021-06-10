import React from 'react';

import { Container, Title, Cash, Footer, TypeCash, DateCash } from './styles';

interface CardListingProps {
  title: string;
  income: boolean;
  cash: string;
  typeIncome: string;
  dateIncome: string;
}

export const CardListing = ({
  title,
  income,
  cash,
  typeIncome,
  dateIncome,
}: CardListingProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Cash income={income}>{income ? `- ${cash}` : cash}</Cash>
      <Footer>
        <TypeCash>{typeIncome}</TypeCash>
        <DateCash>{dateIncome}</DateCash>
      </Footer>
    </Container>
  );
};
