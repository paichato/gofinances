import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";
import {TouchableOpacity} from 'react-native'

export const Container=styled(TouchableOpacity)`
width: 100%;
background-color: ${({theme})=>theme.colors.secondary};
border-radius: 5px;
align-items: center;
`

export const Title=styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
color: ${({theme})=>theme.colors.shape};
font-size: ${RFValue(14)}px;

padding: 18px;
`