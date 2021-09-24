import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, Platform } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import HighlightCard from "../../Components/highlightCard";
import TransactionCard, { TransactionCardProps } from "../../Components/transactionCard";
import {
  Container,
  Title,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  Username,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  TitleTrans,
  TransactionsList,
  LogoutButton

} from "./styles";


export interface DataListProps extends TransactionCardProps{
    id:string;
}

export default function Dashboard() {

  const [data,setData]=useState<DataListProps[]>([]);

  const loadTransactions=async()=>{
    const dataKey='@gofinances:transactions';
    const response= await AsyncStorage.getItem(dataKey);

    const transactions = response ? JSON.parse(response) : [];
    

    const transactionsFormated:DataListProps[]=transactions.map((item:DataListProps)=>{
      const amount=Number(item.amount).toLocaleString('pt-BR',{
        style:'currency',
        currency:'BRL'
      });
      
      const date=new Intl.DateTimeFormat('pt-BR',{
        day:'2-digit',
        month:'2-digit',
        year:'2-digit',
      }).format(new Date(item.date));
      
      
      return {
        id:item.id,
        name:item.name,
        amount,
        type:item.type,
        category:item.category,
        date
      }
    });
    
    setData(transactionsFormated);
    console.log(data);

  }

  useEffect(()=>{
    loadTransactions();
  },[])

//     const data:DataListProps[]=[
//         {id:'1',data:{title:'Desenvolvimento de site', amount:'12.000,00', date:'13/04/2020',category:{name:'Vendas', icon:'dollar-sign'}, type:'positive'}},
//     {id:'2',data:{title:'Hamburgaria', amount:'1.000,00', date:'19/08/2020',category:{name:'Alimentacao', icon:'coffee'},type:'negative'}},
//     {id:'3',data:{title:'Alugule do Apartamento ', amount:'1.200,00', date:'10/04/2020',category:{name:'Casa', icon:'shopping-bag'}, type:'negative'}},
// ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/65548563?v=4",
              }}
            />
            <User>
              <UserGreeting>Ola</UserGreeting>
              <Username>Marlon</Username>
            </User>
          </UserInfo>
          <LogoutButton onPress={()=>{}} >
          <Icon name="power" />
          </LogoutButton>

          
        </UserWrapper>
      </Header>
      <HighlightCards  >
        <HighlightCard type='up' title='Entradas' amount='17.400,00 MT' lastTransaction='Ultima entrada dia 13 de abril'/>
        <HighlightCard type='down' title='Entradas' amount='8.400,00 MT' lastTransaction='Ultima entrada dia 13 de Junho' />
        <HighlightCard type='total' title='Entradas' amount='400,00 MT' lastTransaction='Ultima entrada dia 13 de Setembro' />
      </HighlightCards>
    <Transactions>
        <TitleTrans>Listagem</TitleTrans>
        <TransactionsList data={data} keyExtractor={item=>item.id}  renderItem={({item})=><TransactionCard data={item}/>} />
              {/* <TransactionCard data={data[0]} /> */}

    </Transactions>
    </Container>
  );
}
