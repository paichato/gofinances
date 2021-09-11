import { Feather } from '@expo/vector-icons';
// import { Category } from './../../Components/transactionCard/styles';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";
import {TouchableOpacity, TouchableOpacityProps} from 'react-native'
// import {Category as CategoryProps} from '../CategorySelect/index'

interface CategoryProps{
isActive:boolean;
}

export const Container=styled.View`
flex:1;
width: 100%;
background-color: ${({theme})=>theme.colors.background};
`

export const Header=styled.View`
width: 100%;
height: ${RFValue(113)}px;
background-color: ${({theme})=>theme.colors.primary};
align-items:center;
justify-content: flex-end;
padding-bottom: 19px;

`

export const Title=styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
color: ${({theme})=>theme.colors.shape};
font-size: ${RFValue(18)}px;
`

export const Category=styled.TouchableOpacity<CategoryProps>`
width:100%;
padding:${RFValue(15)}px;
flex-direction: row;
align-items: center;

background-color: ${({theme, isActive})=> isActive ? theme.colors.secondary_light : theme.colors.background};

`
export const Icon=styled(Feather)`
font-size: ${RFValue(20)}px;
margin-right:16px;
`
export const Name=styled.Text`
font-family: ${({theme})=>theme.fonts.regular};
font-size: ${RFValue(14)}px;
`

export const Separator=styled.View`
height: 1px;
width: 100%;
background-color: ${({theme})=>theme.colors.text};
`

export const Footer=styled.View`
width:100%;
padding:24px;
`

// export const Button=styled.TouchableOpacity`
// width:100%;
// background-color: ${({theme})=>theme.colors.secondary};
// padding:
// `

// export const ButtonText=styled.Text``