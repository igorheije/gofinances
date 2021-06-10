import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { InputText } from '../Input/styles';
import { Container, Error } from './styles';

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error?: string;
}

export const InputForm = ({ control, name, error, ...rest }: Props) => {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputText {...rest} onChangeText={onChange} value={value} />
        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};
