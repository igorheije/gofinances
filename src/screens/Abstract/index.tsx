import React from 'react';
import Head from '../../Components/Head';
import { CardCategory } from '../../Components/CardCategory';
import { Wrapper, Container } from './styles';

export const Abstract = () => {
  return (
    <Wrapper>
      <Head title="Resumo" />
      <Container>
        <CardCategory color="primary" title="Casa" price="R$ 700,00" />
        <CardCategory color="secondary" title="Casa" price="R$ 700,00" />
        <CardCategory color="success" title="Casa" price="R$ 700,00" />
        <CardCategory color="attention" title="Casa" price="R$ 700,00" />
        <CardCategory color="primary" title="Casa" price="R$ 700,00" />
      </Container>
    </Wrapper>
  );
};
