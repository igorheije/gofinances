import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  height: 100%;
`;

export const Container = styled.View`
  height: 80%;
  padding: 20px 20px 0 20px;

  justify-content: space-between;
`;

export const TextInput = styled.TextInput`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape};
  height: 50px;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 15px;
`;

export const SelectIncome = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const ViewPicker = styled.View`
  background-color: white;
  width: 100%;
  height: 50px;
  border-radius: 8px;
  padding-right: 10px;
  justify-content: center;
  padding-left: 10px;
  margin-top: 10px;
`;

export const ButtonIncome = styled.TouchableOpacity`
  flex-direction: row;
  width: 49%;
  padding: 16px 28px;
  align-items: center;
  border-radius: 5px;
  border: 1px #ccc;
`;
export const TextButton = styled.Text`
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

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
