import styled from 'styled-components/native';

export const Container = styled.View``;
export const Error = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.attention};
  margin: 7px 0;
`;
