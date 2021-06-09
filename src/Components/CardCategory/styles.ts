import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { ColorProps } from '.';

interface BorderColorProps {
  color: ColorProps;
}

export const Container = styled.View<BorderColorProps>`
  width: 100%;
  height: 50px;
  padding: 0 20px;
  margin-bottom: 15px;

  background-color: ${({ theme }) => theme.colors.shape};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-radius: 5px;
  border-left-color: ${({ theme, color }) => theme.colors[color]};
  border-left-width: 5px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
export const PriceCategory = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
