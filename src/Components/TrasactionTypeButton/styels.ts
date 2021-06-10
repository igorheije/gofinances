import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

type types = 'up' | 'down';

type ContainerProps = {
  isActive: boolean;
  type: types;
};
type ColorIconProps = {
  type: types;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  flex-direction: row;
  width: 49%;
  padding: 16px 28px;
  align-items: center;
  border-radius: 5px;
  border-width: 1px;
  border-color: #ccc;

  ${({ isActive, type }) =>
    isActive &&
    type === 'up' &&
    css`
      background-color: ${({ theme }) => theme.colors.success_light};
      border-color: ${({ theme }) => theme.colors.success};
    `}
  ${({ isActive, type }) =>
    isActive &&
    type === 'down' &&
    css`
      background-color: ${({ theme }) => theme.colors.attention_light};
      border-color: ${({ theme }) => theme.colors.attention};
    `}
`;

export const Icon = styled(Feather)<ColorIconProps>`
  color: ${({ theme, type }) =>
    type === 'up' ? theme.colors.success : theme.colors.attention};
`;

export const Title = styled.Text`
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
