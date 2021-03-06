import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 15px;
  margin: 15px 0;
  border-radius: 5px;
`;
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
`;

interface IncomeProps {
  income: 'up' | 'down';
}

export const Cash = styled.Text<IncomeProps>`
  ${({ income }) =>
    income === 'up' &&
    css`
      color: ${({ theme }) => theme.colors.success};
    `}
  ${({ income }) =>
    income === 'down' &&
    css`
      color: ${({ theme }) => theme.colors.attention};
    `}
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(24)}px;
`;
export const Footer = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;
export const TypeCash = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
export const DateCash = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Feather)`
  margin-right: 15px;

  color: ${({ theme }) => theme.colors.text};
`;

export const FooterType = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;
