import React from 'react'
import { View, Text } from 'react-native'
import { Container, Title, Amount } from './styles'

interface Props{
    title:string;
    amount: string;
    color: string;
}

export default function HistoryCard({color,title,amount}:Props) {
    return (
        <Container color={color} >
            <Title>{title}</Title>
            <Amount>{amount}</Amount>
        </Container>
    )
}
