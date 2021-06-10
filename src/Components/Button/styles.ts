import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const ButtonSend = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.shape};
  padding: 16px;
  align-items: center;
  border-radius: 5px;
  border: 1px #ccc;
`;
export const TextButtonSend = styled.Text`
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
