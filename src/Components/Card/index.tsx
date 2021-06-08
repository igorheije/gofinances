import React from 'react';
import {
  Container,
  HeaderCard,
  Title,
  FooterCard,
  Cash,
  DetailsCash,
} from './styles';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
interface CardProps {
  title: string;
  cash: string;
  icon: 'up' | 'down' | 'cash';
  bg?: 'default' | 'secondary';
}

export const Card = ({ title, cash, icon, bg = 'default' }: CardProps) => {
  return (
    <Container bg={bg}>
      <HeaderCard>
        <Title>{title}</Title>
        {icon === 'up' && (
          <Ionicons name="arrow-up-circle-outline" size={40} color="green" />
        )}
        {icon === 'down' && (
          <Ionicons name="arrow-down-circle-outline" size={40} color="red" />
        )}
        {icon === 'cash' && (
          <Feather name="dollar-sign" size={40} color="white" />
        )}
      </HeaderCard>
      <FooterCard>
        <Cash>{cash}</Cash>
        <DetailsCash>Ùltima entrada dia 13 de abril</DetailsCash>
      </FooterCard>
    </Container>
  );
};
