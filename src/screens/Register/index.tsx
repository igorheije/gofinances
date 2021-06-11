import React, { useState } from 'react';
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
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
import { useTransactions } from '../../context/TransectionsContext';
import { formatReal } from '../../utils/formatReal';

interface FormData {
  name: string;
  amount: string;
}
const schema = yup.object().shape({
  name: yup.string().required('Informe um nome!'),
  amount: yup.string().required('Informe um Valor!'),
});
const defaultCategory = {
  key: 'category',
  name: 'Categorias',
  icon: '',
  color: '',
};

export const Register = () => {
  const [transactionType, setTransactionType] = useState<'up' | 'down' | ''>();
  const [openModal, setOpenModal] = useState(false);
  const [category, setCategory] = useState<Category>(defaultCategory);
  const {
    control,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigation = useNavigation();
  const { saveTransactions } = useTransactions();

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

    const newTransection = {
      id: String(uuid.v4()),
      name: form.name,
      amount: formatReal(form.amount),
      category,
      transactionType,
      date: new Date(),
    };

    const res = await saveTransactions(newTransection);
    if (res) {
      setTransactionType('');
      setCategory(defaultCategory);
      reset();
      navigation.navigate('Listagem');
    } else {
      Alert.alert('Não foi possível salvar');
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
                price
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
