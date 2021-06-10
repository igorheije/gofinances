import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Icon, Title } from './styels';

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
};

interface TrasactionTypeButtonProps extends TouchableOpacityProps {
  title: string;
  type: 'up' | 'down';
  isActive: boolean;
}

export const TrasactionTypeButton = ({
  title,
  type,
  isActive,
  ...rest
}: TrasactionTypeButtonProps) => {
  return (
    <Container isActive={isActive} type={type} {...rest}>
      <Icon name={icons[type]} type={type} size={24} />
      <Title>{title}</Title>
    </Container>
  );
};
