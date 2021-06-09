import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Head from '../../Components/Head';
import {
  Wrapper,
  Container,
  TextInput,
  SelectIncome,
  ButtonIncome,
  ViewPicker,
  TextButton,
  ButtonSend,
  TextButtonSend,
} from './styles';

export const Register = () => {
  return (
    <Wrapper>
      <Head title="Cadastrar" />
      <Container>
        <View>
          <TextInput placeholder="Nome" />
          <TextInput placeholder="Preço" />
          <SelectIncome>
            <ButtonIncome>
              <Ionicons
                name="arrow-up-circle-outline"
                size={24}
                color="green"
              />
              <TextButton>Entrada</TextButton>
            </ButtonIncome>
            <ButtonIncome>
              <Ionicons
                name="arrow-down-circle-outline"
                size={24}
                color="red"
              />
              <TextButton>Saídas</TextButton>
            </ButtonIncome>
          </SelectIncome>
          <ViewPicker>
            <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
              ]}
            />
          </ViewPicker>
        </View>

        <View>
          <ButtonSend>
            <TextButtonSend>Enviar</TextButtonSend>
          </ButtonSend>
        </View>
      </Container>
    </Wrapper>
  );
};
