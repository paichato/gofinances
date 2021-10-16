import React from 'react'
import { View, Text } from 'react-native'
import { categories } from '../../utils/categories'
import { Container, Title,Amount,Footer,Category,Icon,CategoryName,Date } from './styles'

interface Category{
    name:string,
    // key:string,
    icon:string
}

export interface TransactionCardProps{
    
        name:string,
        amount: string,
    category:Category,
    date:string,
    type:'positive' | 'negative'


}
interface Props{
    data:TransactionCardProps
}


export default function TransactionCard({data}:Props) {

  
const [category]=categories.filter((item)=>item.key===data.category);

    return (
        <Container>
            <Title>{data?.name}</Title>
            <Amount type={data?.type} >{ data?.type==='negative' && '-'} {data?.amount} </Amount>

            <Footer>
                <Category>
                    <Icon name={category.icon} />
                    <CategoryName>{category.name}</CategoryName>
                </Category>
                <Date>{data?.date}</Date>
            </Footer>
        </Container>
    )
}
