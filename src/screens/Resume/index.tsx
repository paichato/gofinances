import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import HistoryCard from '../../Components/HistoryCard'
import { categories } from '../../utils/categories';
import { Container, Header, Title, Content, ChartContainer } from './styles'
import {VictoryPie} from 'victory-native'
import { RFValue } from 'react-native-responsive-fontsize';

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
    total:Number;
    totalFormatted:string;
    color:string;
    percent:string;
}

export default function Resume() {

    const [totalByCategories,setTotalByCategories]=useState<CategoryData[]>([]);

    const loadData=async()=>{
        const dataKey='@gofinances:transactions';
        const response=await AsyncStorage.getItem(dataKey);
            const responseFormated=response ? JSON.parse(response) : [];

            console.log(responseFormated);
            const expenses=responseFormated.filter((expense:TransactionData)=>expense.type==='negative');

            const expensesTotal=expenses.reduce((accumulator:number,expense:TransactionData) =>{
                return accumulator+Number(expense.amount)
            },0);

            console.log('xpTotal:',expensesTotal);
            

            const totalByCategory:CategoryData[]=[];


            categories.forEach(category=>{
                let categorySum=0;

                expenses.forEach((expense:TransactionData)=>{
                    if(expense.category===category.key){
                        categorySum +=Number(expense.amount);
                    }
                });
                if(categorySum>0){
                    const totalFormatted=categorySum.toLocaleString('pt-BR',{
                        style:'currency',
                        currency:'BRL'
                    })

                    const percent=`${(categorySum/expensesTotal*100).toFixed(0)}%`

                     totalByCategory.push({
                    key:category.key,
                    name:category.name,
                    color:category.color,
                    total:categorySum,
                    totalFormatted,
                    percent,
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
                <ChartContainer>
                  <VictoryPie
                  colorScale={totalByCategories.map(category=>category.color)}
                  style={{
                      labels:{
                        fontSize:RFValue(18),
                        fontWeight:'bold',

                        }
                    }}
                    labelRadius={50}
                  data={totalByCategories} x='percent' y='total' />   
                </ChartContainer>
                
            {totalByCategories.map((item)=>( <HistoryCard key={item.key} color={item.color} title={item.name} amount={item.totalFormatted}  />))}

            </Content>
        </Container>
    )
}
