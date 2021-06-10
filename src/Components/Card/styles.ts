import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ColorProps {
  color: 'title' | 'shape';
}
interface BgProps {
  bg: 'secondary' | null;
}

export const Container = styled.View<BgProps>`
  width: 280px;
  height: 180px;
  background-color: ${({ theme, bg }) =>
    bg === 'secondary' ? theme.colors.secondary : theme.colors.shape};
  border-radius: 10px;
  padding: 20px 20px 25px 20px;

  justify-content: space-between;
  margin-right: 14px;
`;

export const HeaderCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<ColorProps>`
  color: ${({ theme, color }) => theme.colors[color]};

  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const FooterCard = styled.View``;

export const Cash = styled.Text<ColorProps>`
  color: ${({ theme, color }) => theme.colors[color]};
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
export const DetailsCash = styled.Text<ColorProps>`
  color: ${({ theme, color }) =>
    color === 'title' ? theme.colors.text : theme.colors[color]};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
