import React from 'react'
import { View, Text } from 'react-native'
import { Container, Title,Amount,Footer,Category,Icon,CategoryName,Date } from './styles'


export default function TransactionCard() {
    return (
        <Container>
            <Title>Desenvolvimento de site</Title>
            <Amount>12.000,00 MT</Amount>

            <Footer>
                <Category>
                    <Icon name='dollar-sign' />
                    <CategoryName>Vendas</CategoryName>
                </Category>
                <Date>13/04/2020</Date>
            </Footer>
        </Container>
    )
}
