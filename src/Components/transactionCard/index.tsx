import React from 'react'
import { View, Text } from 'react-native'
import { Container, Title,Amount,Footer,Category,Icon,CategoryName,Date } from './styles'

interface Category{
    name:string,
    // key:string,
    icon:string
}

interface Props{
    data:{
        title:string,
        amount: string,
    category:Category,
    date:string,
    type:'positive' | 'negative'
}

}


export default function TransactionCard({data}:Props) {

  


    return (
        <Container>
            <Title>{data.title}</Title>
            <Amount type={data.type} >{ data.type==='negative' && '-'} {data.amount} MT</Amount>

            <Footer>
                <Category>
                    <Icon name={data.category.icon} />
                    <CategoryName>{data.category.name}</CategoryName>
                </Category>
                <Date>{data.date}</Date>
            </Footer>
        </Container>
    )
}
