import styled from 'styled-components/native';
import { TextInput } from 'react-native';

export const InputText = styled(TextInput)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape};
  height: 50px;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;
