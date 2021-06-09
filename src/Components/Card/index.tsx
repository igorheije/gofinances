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
  bg?: null | 'secondary';
  color?: 'title' | 'shape';
}

export const Card = ({
  title,
  cash,
  icon,
  bg = null,
  color = 'title',
}: CardProps) => {
  return (
    <Container bg={bg}>
      <HeaderCard>
        <Title color={color}>{title}</Title>
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
        <Cash color={color}>{cash}</Cash>
        <DetailsCash color={color}>Ùltima entrada dia 13 de abril</DetailsCash>
      </FooterCard>
    </Container>
  );
};
