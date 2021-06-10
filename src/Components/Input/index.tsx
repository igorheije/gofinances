import React from 'react';

import { TextInputProps } from 'react-native';
import { InputText } from './styles';

export const Input = ({ ...rest }: TextInputProps) => {
  return <InputText {...rest} />;
};
