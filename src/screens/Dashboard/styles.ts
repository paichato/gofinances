import styled from "styled-components/native";

export const Container=styled.View`


`

export const Title=styled.Text`
font-size: 24px;
color: ${({theme})=>theme.colors.title};
font-family:${({theme})=>theme.fonts.bold} ;
`

export const Header=styled.View`
width:100%;
background-color: ${({theme})=>theme.colors.primary};

`