import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";
import { TextInput } from "react-native";

export const Container=styled(TextInput)`
width: 100%;
padding:16px 18px;

font-size: ${RFValue(14)}px;
background-color: ${({theme})=>theme.colors.shape};

`