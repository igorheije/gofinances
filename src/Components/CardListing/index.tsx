import React from 'react';

import {
  Container,
  Title,
  Cash,
  Footer,
  TypeCash,
  DateCash,
  FooterType,
  Icon,
} from './styles';

interface CardListingProps {
  title: string;
  income: 'up' | 'down';
  cash: string;
  typeIncome: string;
  dateIncome: string;
  icon: string;
}

export const CardListing = ({
  title,
  income,
  cash,
  typeIncome,
  dateIncome,
  icon,
}: CardListingProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Cash income={income}>{`${
        income === 'down' ? '-' : ''
      } R$ ${cash}`}</Cash>
      <Footer>
        <FooterType>
          <Icon name={icon} size={20} />
          <TypeCash>{typeIncome}</TypeCash>
        </FooterType>
        <DateCash>{dateIncome}</DateCash>
      </Footer>
    </Container>
  );
};
