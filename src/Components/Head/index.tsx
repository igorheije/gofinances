import React from 'react';

import { Header, Title } from './styles';

interface HeadProps {
  title: string;
}

const Head = ({ title }: HeadProps) => {
  return (
    <Header>
      <Title>{title}</Title>
    </Header>
  );
};

export default Head;
