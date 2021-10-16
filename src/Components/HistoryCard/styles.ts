import styled from "styled-components/native";
import theme from "../../global/styles/theme";

interface ContainerProps{
    color:string;
}

export const Container=styled.View<ContainerProps>`
width: 100%;
background-color: ${({theme})=>theme.colors.shape};
flex-direction: row;
justify-content: space-between;
padding: 13px 24px;
border-radius: 5px;
border-left-width: 5px;
border-left-color: ${({color})=>color};

`

export const Title=styled.Text`


`

export const Amount=styled.Text`


`