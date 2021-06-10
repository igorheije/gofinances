import React, { useState } from 'react';
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  AsyncStorage,
} from 'react-native';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import uuid from 'react-native-uuid';

import { InputSelect } from '../../Components/InputSelect';
import Head from '../../Components/Head';
import { TrasactionTypeButton } from '../../Components/TrasactionTypeButton';
import { Button } from '../../Components/Button';
import { InputForm } from '../../Components/InputForm';
import { Category, CategorySelect } from '../CategorySelect';

import {
  Wrapper,
  Container,
  Inputgroup,
  SelectTransection,
  Footer,
} from './styles';
import { useNavigation } from '@react-navigation/core';

interface FormData {
  name: string;
  amount: string;
}
const schema = yup.object().shape({
  name: yup.string().required('Informe um nome!'),
  amount: yup.number().positive().required('Informe um Valor!'),
});
const defaultCategory = {
  key: 'category',
  name: 'Categorias',
};

export const Register = () => {
  const [transactionType, setTransactionType] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [category, setCategory] = useState<Category>(defaultCategory);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dataKey = '@gofinances:transactions';
  const navigation = useNavigation();

  function handleTransactionsTypeSelect(type: 'up' | 'down') {
    setTransactionType(type);
  }
  function handleOpenModal() {
    setOpenModal(true);
  }
  function handleCloseModal() {
    setOpenModal(false);
  }
  async function onSubmit(form: FormData) {
    if (!transactionType) return Alert.alert('Selecione o tipo da transação');
    if (category.key === 'category')
      return Alert.alert('Selecione uma categoria');

    try {
      const newTransection = {
        id: String(uuid.v4()),
        name: form.name,
        amount: form.amount,
        category: category.key,
        transactionType,
        date: new Date(),
      };

      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];
      const dataFormated = [...currentData, newTransection];
      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormated));

      setTransactionType('');
      setCategory(defaultCategory);
      reset();
      navigation.navigate('Listagem');
    } catch (err) {
      console.log(err);
      Alert.alert('Não foi possivel salvar');
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Wrapper>
        <Head title="Cadastrar" />
        <Container>
          <View>
            <Inputgroup>
              <InputForm
                control={control}
                name="name"
                placeholder="Nome"
                autoCapitalize="sentences"
                autoCorrect={false}
                error={errors.name && errors.name.message}
              />
              <InputForm
                control={control}
                name="amount"
                placeholder="Preço"
                keyboardType="numeric"
                error={errors.amount && errors.amount.message}
              />
            </Inputgroup>
            <SelectTransection>
              <TrasactionTypeButton
                title="Entrada"
                type="up"
                onPress={() => handleTransactionsTypeSelect('up')}
                isActive={transactionType === 'up'}
              />
              <TrasactionTypeButton
                title="Saída"
                type="down"
                onPress={() => handleTransactionsTypeSelect('down')}
                isActive={transactionType === 'down'}
              />
            </SelectTransection>
            <InputSelect title={category.name} onPress={handleOpenModal} />
          </View>

          <Footer>
            <Button title="Enviar" onPress={handleSubmit(onSubmit)} />
          </Footer>
        </Container>
        <Modal visible={openModal} animationType="slide">
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseModal}
          />
        </Modal>
      </Wrapper>
    </TouchableWithoutFeedback>
  );
};
