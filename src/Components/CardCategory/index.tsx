import React from 'react';

import { Container, Title, PriceCategory } from './styles';

export type ColorProps = 'primary' | 'secondary' | 'success' | 'attention';

interface CardCategoryProps {
  title: string;
  price: string;
  color: ColorProps;
}

export const CardCategory = ({ title, price, color }: CardCategoryProps) => {
  return (
    <Container color={color}>
      <Title>{title}</Title>
      <PriceCategory>{price}</PriceCategory>
    </Container>
  );
};
