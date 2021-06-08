import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 280px;
  height: 180px;
  background-color: ${({ theme, bg }) =>
    bg === 'secondary' ? theme.colors.secondary : theme.colors.shape};
  border-radius: 10px;
  padding: 20px 20px 25px 20px;

  justify-content: space-between;
  margin: 20px 0 0px 30px;
`;

export const HeaderCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};

  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const FooterCard = styled.View``;
export const Cash = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
export const DetailsCash = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;