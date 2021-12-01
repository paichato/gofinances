import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useCallback, useEffect, useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import HistoryCard from '../../Components/HistoryCard'
import { categories } from '../../utils/categories';
import { Container, Header, Title, Content, ChartContainer, MonthSelectButton,MonthSelect,SelectIcon,Month,LoadContainer, EmptyContainer, ErrorIcon, Warning } from './styles'
import {VictoryPie} from 'victory-native'
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs' 
import {addMonths,subMonths,format} from 'date-fns'
import {ptBR} from 'date-fns/locale'
import { useFocusEffect } from '@react-navigation/core';
import keys from '../../utils/keys';
import { useAuthContext } from '../../AuthContext';


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

    const [isLoading,setIsLoading]=useState(false);
    const [selectedDate,setSelectedDate]=useState(new Date);
    const [totalByCategories,setTotalByCategories]=useState<CategoryData[]>([]);
    const [isEmpty,setIsEmpty]=useState(false);
    const theme=useTheme();
    const {user}=useAuthContext();

    const handleDateChange=(action:'next'|'prev')=>{
        // setIsLoading(true);
        if(action==='next'){
            setSelectedDate(addMonths(selectedDate,1));
            
            
            
        }else{
            setSelectedDate(subMonths(selectedDate,1));
            
        }
    }

    const loadData=async()=>{
        setIsLoading(true);
        const dataKey='@gofinances:transactions';
        const response=await AsyncStorage.getItem(keys.storage.dataKey+user.id);
            const responseFormated=response ? JSON.parse(response) : [];
            


            
            const expenses=responseFormated.filter((expense:TransactionData)=>
            expense.type==='negative' && 
            new Date(expense.date).getMonth()===selectedDate.getMonth() &&
            new Date(expense.date).getFullYear()===selectedDate.getFullYear()
            
            );

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
            setIsLoading(false);
    }

//     useEffect(()=>{
// loadData();
//     },[selectedDate])

    useFocusEffect(useCallback(()=>{
        loadData();
      },[selectedDate]))
    

    return (
        <Container>
            
            <Header>
                <Title>Resumo por categoria</Title>
            </Header>
            
            {isLoading ? <LoadContainer><ActivityIndicator color={theme.colors.primary} size='large' /></LoadContainer>:<>
            <Content
            contentContainerStyle={{paddingBottom:useBottomTabBarHeight(),paddingHorizontal:24}} 
            showsVerticalScrollIndicator={false} > 

            <MonthSelect>
                <MonthSelectButton onPress={()=>handleDateChange('prev')} >
                    <SelectIcon name='chevron-left'/>
                </MonthSelectButton>
                <Month>{format(selectedDate,'MMMM, yyyy',{locale:ptBR})}</Month>
                <MonthSelectButton onPress={()=>handleDateChange('next')} >
                    <SelectIcon name='chevron-right' />
                </MonthSelectButton>
            </MonthSelect>
            {totalByCategories==false && <EmptyContainer><ErrorIcon name='error-outline'/><Warning>Sem dados por exibir para este mes</Warning></EmptyContainer>}
                <ChartContainer>
                  <VictoryPie
                  colorScale={totalByCategories.map(category=>category.color)}
                  style={{
                      labels:{
                        fontSize:RFValue(18),
                        fontWeight:'bold',
                        fill:theme.colors.shape
                        }
                    }}
                    labelRadius={90}
                  data={totalByCategories} x='percent' y='total' />   
                </ChartContainer>
                
                
            {totalByCategories.map((item)=>( <HistoryCard key={item.key} color={item.color} title={item.name} amount={item.totalFormatted}  />))}

            </Content>
</>
}
        </Container>
    )
}
