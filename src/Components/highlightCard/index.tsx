import React from 'react'
import { View, Text } from 'react-native'
import { Container, Header, Title, Icon, Footer, Amount, LastTransaction } from './styles'

interface Props{
    title:string;
    amount:string;
    lastTransaction:string,
    type:'up'|'down'|'total'
}

export default function HighlightCard({title,amount,lastTransaction}:Props) {
    return (
        <Container>
            <Header>
                <Title>{title}</Title>
                <Icon name='arrow-up-circle' />
            </Header>
            <Footer>
                <Amount>{amount}</Amount>
                <LastTransaction>{lastTransaction}</LastTransaction>
            </Footer>

        </Container>
    )
}
