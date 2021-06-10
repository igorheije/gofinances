import React from 'react';
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

export function Dashboard() {
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
        <CardListing
          income={true}
          title="Desenvolvimento de site"
          cash="R$ 10.400,00"
          typeIncome="Casa"
          dateIncome="12/12/2021"
        />
        <CardListing
          income={false}
          title="Desenvolvimento de site"
          cash="R$ 10.400,00"
          typeIncome="Casa"
          dateIncome="12/12/2021"
        />
        <CardListing
          income={false}
          title="Desenvolvimento de site"
          cash="R$ 10.400,00"
          typeIncome="Casa"
          dateIncome="12/12/2021"
        />
      </Listing>
    </Container>
  );
}
