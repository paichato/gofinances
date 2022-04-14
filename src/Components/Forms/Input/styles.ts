import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

interface Props {
  active: boolean;
}

export const Container = styled(TextInput)<Props>`
  width: 100%;
  padding: 16px 18px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.text_dark};
  ${({ active, theme }) =>
    active &&
    css`
      border-width: 3px;
      border-color: ${theme.colors.attention};
      border-style: solid;
    `}
`;
