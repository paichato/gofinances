import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import HistoryCard from '../../Components/HistoryCard'
import { categories } from '../../utils/categories';
import { Container, Header, Title } from './styles'

interface TransactionData{
    name:string,
    amount: string,
category:string,
date:string,
type:'positive' | 'negative'
}

export default function Resume() {

    const loadData=async()=>{
        const dataKey='@gofinances:transactions';
        const response=await AsyncStorage.getItem(dataKey);
            const responseFormated=response ? JSON.parse(response) : [];

            console.log(responseFormated);
            const expenses=responseFormated.filter((expense:TransactionData)=>expense.type==='negative');

            const totalByCategory=[];


            categories.forEach(category=>{
                let categorySum=0;

                expenses.forEach((expense:TransactionData)=>{
                    if(expense.category===category.key){
                        categorySum +=Number(expense.amount);
                    }
                });
                if(categorySum>0){
                     totalByCategory.push({
                    name:category.name,
                    total:categorySum
                });
                }
               
            });

            console.log(totalByCategory);
    }

    useEffect(()=>{
loadData();
    },[])
    

    return (
        <Container>
            <Header>
                <Title>Resumo por categoria</Title>
            </Header>
            <HistoryCard color='red' title='Compras' amount='R$ 150,50'  />
        </Container>
    )
}
