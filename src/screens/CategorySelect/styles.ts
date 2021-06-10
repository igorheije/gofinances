import { Feather } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

interface BGProps {
  isActive: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;
export const Content = styled.View`
  flex: 1;
`;

export const Category = styled.TouchableOpacity<BGProps>`
  flex-direction: row;
  padding: 16px;
  align-items: center;

  border-top-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.5);

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${({ theme }) => theme.colors.secondary_light};
    `}
`;

export const Icon = styled(Feather)`
  margin-right: 14px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Footer = styled.View`
  padding: 20px;
`;
