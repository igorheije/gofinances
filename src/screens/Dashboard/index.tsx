import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Card } from '../../Components/Card';
import { CardListing } from '../../Components/CardListing';
import { Ionicons } from '@expo/vector-icons';
import {
  Container,
  Header,
  Photo,
  User,
  UserWrapper,
  UserInfo,
  UserGreeting,
  UserName,
  Cards,
  TitleList,
  Listing,
} from './styles';
import { useTransactions } from '../../context/TransectionsContext';
import { useNavigation } from '@react-navigation/core';

export function Dashboard() {
  const { transactions, loadingTransactions } = useTransactions();
  const navigation = useNavigation();

  useEffect(() => {
    loadingTransactions();
  }, [navigation]);

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/69907484?s=400&u=fb0c4cc952bb60baffb031b84c2f5e7549744888&v=4',
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Igor Heije</UserName>
            </User>
          </UserInfo>
          <Ionicons name="ios-power" size={32} color="orange" />
        </UserWrapper>
        <Cards
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24 }}
        >
          <Card title="Entradas" cash="R$ 17.400,00" icon="up" />
          <Card title="Saídas" cash="R$ 17.400,00" icon="down" />
          <Card
            title="Total"
            cash="R$ 17.400,00"
            icon="cash"
            bg="secondary"
            color="shape"
          />
        </Cards>
      </Header>
      <Listing>
        <TitleList>Listagem</TitleList>
        <View>
          {transactions?.map((item) => (
            <CardListing
              key={item.id}
              icon={item.category.icon}
              income={item.transactionType}
              title={item.name}
              cash={String(item.amount)}
              typeIncome={item.category.name}
              dateIncome={`${item.date}`}
            />
          ))}
        </View>
      </Listing>
    </Container>
  );
}
