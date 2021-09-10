import React from 'react'
import { View, Text } from 'react-native'
import { Container } from './styles'

interface Category{
    key:string;
    name:string;
}

interface Props{
    category:string;
    setCategory:(name:string)=>void;
    closeSelectCategory:()=>void;

}

export default function CategorySelect({category,setCategory,closeSelectCategory}:Props) {
    return (
        <Container>
            <Text></Text>
        </Container>
    )
}
