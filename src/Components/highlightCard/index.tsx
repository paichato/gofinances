import React from 'react'
import { View, Text } from 'react-native'
import { Container, Header, Title, Icon, Footer, Amount, LastTransaction } from './styles'

export default function HighlightCard() {
    return (
        <Container>
            <Header>
                <Title>Entrada</Title>
                <Icon name='arrow-up-circle' />
            </Header>
            <Footer>
                <Amount>17.400,00 MT</Amount>
                <LastTransaction>Ultima entrada dia 13 de abril</LastTransaction>
            </Footer>

        </Container>
    )
}
