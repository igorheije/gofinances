import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonSend, TextButtonSend } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <ButtonSend {...rest}>
      <TextButtonSend>{title}</TextButtonSend>
    </ButtonSend>
  );
};
