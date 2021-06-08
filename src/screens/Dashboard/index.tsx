import React from 'react';
import { Card } from '../../Components/Card';
import { CardListing } from '../../Components/CardListing';

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
              <UserName>Igor</UserName>
            </User>
          </UserInfo>
        </UserWrapper>
        <Cards horizontal showsHorizontalScrollIndicator={false}>
          <Card title="Entradas" cash="R$ 17.400,00" icon="up" />
          <Card title="Saídas" cash="R$ 17.400,00" icon="down" />
          <Card title="Total" cash="R$ 17.400,00" icon="cash" bg="secondary" />
        </Cards>
      </Header>
      <Listing>
        <TitleList>Listagem</TitleList>
        <CardListing />
        <CardListing />
        <CardListing />
      </Listing>
    </Container>
  );
}
