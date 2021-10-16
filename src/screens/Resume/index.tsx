import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import HistoryCard from '../../Components/HistoryCard'
import { categories } from '../../utils/categories';
import { Container, Header, Title, Content } from './styles'

interface TransactionData{
    name:string,
    amount: string,
category:string,
date:string,
type:'positive' | 'negative'
}

interface CategoryData{
    key:string;
    name: string;
    total:string;
    color:string;
}

export default function Resume() {

    const [totalByCategories,setTotalByCategories]=useState<CategoryData[]>([]);

    const loadData=async()=>{
        const dataKey='@gofinances:transactions';
        const response=await AsyncStorage.getItem(dataKey);
            const responseFormated=response ? JSON.parse(response) : [];

            console.log(responseFormated);
            const expenses=responseFormated.filter((expense:TransactionData)=>expense.type==='negative');

            const totalByCategory:CategoryData[]=[];


            categories.forEach(category=>{
                let categorySum=0;

                expenses.forEach((expense:TransactionData)=>{
                    if(expense.category===category.key){
                        categorySum +=Number(expense.amount);
                    }
                });
                if(categorySum>0){
                    const total=categorySum.toLocaleString('pt-BR',{
                        style:'currency',
                        currency:'BRL'
                    })
                     totalByCategory.push({
                    key:category.key,
                    name:category.name,
                    color:category.color,
                    total,
                });
                }
               
            });

            setTotalByCategories(totalByCategory);
    }

    useEffect(()=>{
loadData();
    },[])
    

    return (
        <Container>
            <Header>
                <Title>Resumo por categoria</Title>
            </Header>
            <Content  >
            {totalByCategories.map((item)=>( <HistoryCard key={item.key} color={item.color} title={item.name} amount={item.total}  />))}

            </Content>
        </Container>
    )
}
