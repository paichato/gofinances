import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"
import { MaterialIcons } from '@expo/vector-icons'; 


export const ModalContainer=styled.View`
height: ${RFValue(200)}px;
width: 80%;
background-color: ${({theme})=>theme.colors.shape};
position: absolute;
align-self: center;
align-items: center;
border-radius: 10px;
justify-content: space-evenly;
margin-top: ${RFPercentage(10)}%;
padding: 20px;

`
export const ModalTitle=styled.Text`
font-family: ${({theme})=>theme.fonts.bold};
font-size: ${RFValue(15)}px;
color: ${({theme})=>theme.colors.text};
text-align: center;
`

export const ModalDescription=styled.Text`
font-size: ${RFValue(12)}px;
font-family: ${({theme})=>theme.fonts.regular}
color: ${({theme})=>theme.colors.text};
margin-bottom:10px;
`

export const ErrorIcon=styled(MaterialIcons)`

`

export const ConfirmButton=styled.TouchableOpacity`
background-color: ${({theme})=>theme.colors.primary};
width: 100%;
height: 20%;
border-radius: 5px;
align-items: center;
justify-content:center;
`

export const ErrorText=styled.Text`
color: ${({theme})=>theme.colors.shape};
font-family: ${({theme})=>theme.fonts.bold};
font-size: ${RFValue(15)}px;
`