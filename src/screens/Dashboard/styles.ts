import styled from "styled-components/native";
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'

export const Container=styled.View`
flex:1;
background-color: ${({theme})=>theme.colors.background};
width: 100%;
`

export const Title=styled.Text`
font-size: 24px;
color: ${({theme})=>theme.colors.title};
font-family:${({theme})=>theme.fonts.bold} ;
`

export const Header=styled.View`
width:100%;
height:${RFPercentage(42)}px;
background-color: ${({theme})=>theme.colors.primary};
flex-direction: row;
align-items: center;
justify-content: center;

`

export const UserInfo=styled.View`
flex-direction: row;
`
export const Photo=styled.Image`
width: ${RFValue(55)}px;
height: ${RFValue(55)}px;
border-radius: 10px;
 `
export const User=styled.View`
 `
export const UserGreeting=styled.Text`
 `
export const Username=styled.Text`
 `