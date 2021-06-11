import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { formatReal } from '../../utils/formatReal';
import { InputText } from '../Input/styles';
import { Container, Error } from './styles';

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error?: string;
  price?: boolean;
}

export const InputForm = ({
  control,
  name,
  error,
  price = false,
  ...rest
}: Props) => {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputText
            {...rest}
            onChangeText={(value) =>
              price ? onChange(`R$ ${formatReal(value)}`) : onChange(value)
            }
            value={price ? (value === 'R$ ' ? '' : value) : value}
          />
        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};
