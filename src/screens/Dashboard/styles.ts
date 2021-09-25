import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from "styled-components/native";
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'
import {Feather} from '@expo/vector-icons'
import {getStatusBarHeight} from 'react-native-iphone-x-helper'
import { DataListProps } from ".";
import { FlatList, Platform } from "react-native";
import {BorderlessButton} from 'react-native-gesture-handler'

interface TextProps{
   type?:Boolean
}

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
align-items: flex-start;
justify-content: center;

`
export const UserWrapper=styled.View`

width: 100%;
padding:0 24px;
margin-top: ${getStatusBarHeight()+RFValue(28)}px;

flex-direction: row;
align-items: center;
justify-content: space-between;
`

export const UserInfo=styled.View`
flex-direction: row;
align-items: center;
`
export const Photo=styled.Image`
width: ${RFValue(48)}px;
height: ${RFValue(48)}px;
border-radius: 10px;
 `
export const User=styled.View`
margin-left: 17px;
 `
export const UserGreeting=styled.Text`
color: ${({theme})=>theme.colors.shape};
font-size: ${RFValue(18)}px;
font-family: ${({theme})=>theme.fonts.regular};
 `
export const Username=styled.Text`

color: ${({theme})=>theme.colors.shape};
font-size: ${RFValue(18)}px;
font-family: ${({theme})=>theme.fonts.bold};
 `

 export const LogoutButton=styled(BorderlessButton)`
 
 `

 export const Icon=styled(Feather)`
 color: ${({theme})=>theme.colors.secondary};
 font-size: ${RFValue(24)}px;

 
 `

 export const HighlightCards=styled.ScrollView.attrs({
    horizontal:true,
     showsHorizontalScrollIndicator:false,
      contentContainerStyle:{paddingHorizontal:24}
 })`
 width: 100%;
 position: absolute;
 margin-top:${RFPercentage(30)}px;

 
 `

 export const Transactions=styled.View`
 flex:1;
 padding: 0 24px;
 margin-top: ${RFPercentage(12)}px;
 `

 export const TitleTrans=styled.Text`
 font-size: ${RFValue(18)}px;
/* color: ${({theme})=>theme.colors.title}; */
font-family:${({theme})=>theme.fonts.regular} ;
margin-bottom: 16px;

 `

 export const TransactionsList=styled(FlatList as new()=> FlatList<DataListProps>).attrs({
    showsVerticalScrollIndicator:false, contentContainerStyle:{paddingBottom:Platform.OS==='ios'? getBottomSpace() : 30}
 })`

 
 `

 export const EmptyField=styled.View`
 align-items: center;
 justify-content: center;
 margin-top:${RFPercentage(5)}%
 `

 export const EmptyFieldText=styled.Text<TextProps>`
 font-family:${({theme})=>theme.fonts.regular} ;
color: ${({theme,type})=> type? theme.colors.shape : theme.colors.text_dark}
 `

 export const EmptyFieldButton=styled.TouchableOpacity`
 
 background-color: ${({theme})=>theme.colors.primary};
 padding:10px;
 border-radius: 5px;
 `