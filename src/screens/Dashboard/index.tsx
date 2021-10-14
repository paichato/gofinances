import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useCallback, useEffect, useState } from "react";
import { View, Text, Platform, Button, TouchableOpacity } from "react-native";
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
  LogoutButton,
  EmptyField,
  EmptyFieldText,
  EmptyFieldButton

} from "./styles";
import {useFocusEffect} from "@react-navigation/native"


export interface DataListProps extends TransactionCardProps{
    id:string;
}

interface HighlightProps{
  amount:string;
}

interface HiglightData{
  entries:HighlightProps;
  outcome:HighlightProps;
  total:HighlightProps;
}

export default function Dashboard({navigation}) {

  const [data,setData]=useState<DataListProps[]>([]);
  const [higlightData,setHighlightData]=useState<HiglightData>({} as HiglightData);

  // const theme=useTheme();

  const getLastTransactionDate=(collection:DataListProps[], type:'positive'|'negative')=>{
    const lastTransactionsEntries=Math.max.apply(Math,collection
      .filter(transaction=>transaction.type===type)
      .map(transaction=>new Date(transaction.date).getTime()));
  
      // ultima transaction
      console.log('ultima trans',new Date(lastTransactionsEntries));
  
      const lastTransactionEntriesFormatted=Intl.DateTimeFormat('pt-BR',{
        day:'2-digit',
          month:'2-digit',
          year:'2-digit',
        }).format(new Date(lastTransactionsEntries));
  }

  const loadTransactions=async()=>{
    const dataKey='@gofinances:transactions';
    const response= await AsyncStorage.getItem(dataKey);
    let entriesTotal=0;
    let outcomeTotal=0;
    const transactions = response ? JSON.parse(response) : [];
    

    const transactionsFormated:DataListProps[]=transactions.map((item:DataListProps)=>{


      if(item.type==='positive'){
        entriesTotal =Number(item.amount)+entriesTotal;
      }else  {
        outcomeTotal +=Number(item.amount)
      }

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

  
   

    const total=entriesTotal -outcomeTotal;


    setHighlightData({
      entries:{
        amount:entriesTotal.toLocaleString('pt-BR',{
          style:'currency',
          currency:'BRL',

          // currencyDisplay:'symbol'
        })
      },
      outcome:{
        amount:outcomeTotal.toLocaleString('pt-BR',{
          style:'currency',
          currency:'BRL'
        })
      },
      total:{
        amount:total.toLocaleString('pt-BR',{
          style:'currency',
          currency:'BRL'
      }),
    }
        
    });
    console.log(data);
    console.log(data.length);
    

  }

  useEffect(()=>{
    loadTransactions();
    
    
  },[])

  useFocusEffect(useCallback(()=>{
    loadTransactions();
  },[]))

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
        <HighlightCard type='up' title='Entradas' amount={higlightData?.entries?.amount} lastTransaction='Ultima entrada dia 13 de abril'/>
        <HighlightCard type='down' title='Saidas' amount={higlightData?.outcome?.amount} lastTransaction='Ultima entrada dia 13 de Junho' />
        <HighlightCard type='total' title='Total' amount={higlightData?.total?.amount} lastTransaction='Ultima entrada dia 13 de Setembro' />
      </HighlightCards>
      {data.length<1 ? <EmptyField>
          <EmptyFieldText>Sem nada a listar</EmptyFieldText>
          <EmptyFieldButton onPress={()=>navigation.navigate('Cadastrar')} ><EmptyFieldText type >Cadastrar uma transação</EmptyFieldText></EmptyFieldButton>
        </EmptyField> :<>
    <Transactions>
        <TitleTrans>Listagem</TitleTrans>
          
        <TransactionsList data={data} keyExtractor={item=>item.id}  renderItem={({item})=><TransactionCard data={item}/>} />
              {/* <TransactionCard data={data[0]} /> */}

    </Transactions>
    </>
    }
    </Container>
  );
}
