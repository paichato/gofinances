import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';
import styled from "styled-components/native";
import {Feather} from '@expo/vector-icons'


export const Container=styled(TouchableOpacity)`
width:100%;

flex-direction: row;
align-items: center;
border: 1.5px solid ${({theme})=>theme.colors.text};
border-radius: 5px;
padding: 16px 59px;
justify-content: center;

`

export const Icon=styled(Feather)`
font-size: ${RFValue(24)}px;
margin-right: 12px;

`
export const Title=styled.Text`
font-size: ${RFValue(14)}px;
font-family: ${({theme})=>theme.fonts.regular};

`