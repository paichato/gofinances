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
  EmptyFieldButton,
  MonogramContainer,
  MonogramText

} from "./styles";
import {useFocusEffect} from "@react-navigation/native"
import keys from "../../utils/keys";
import { useAuthContext } from "../../AuthContext";
import GoModal from "../../Components/Modal";


export interface DataListProps extends TransactionCardProps{
    id:string;
}

interface HighlightProps{
  amount:string;
  lastTransaction:string;
}

interface HiglightData{
  entries:HighlightProps;
  outcome:HighlightProps;
  total:HighlightProps;
}

export default function Dashboard({navigation}) {

  const [data,setData]=useState<DataListProps[]>([]);
  const [higlightData,setHighlightData]=useState<HiglightData>({} as HiglightData);
  const {signOut, user}=useAuthContext();
  const [modalVisible,setModalVisible]=useState(false);

  // const theme=useTheme();

  const getLastTransactionDate=(collection:DataListProps[], type:'positive'|'negative')=>{
    const lastTransaction=new Date(Math.max.apply(Math,collection
      .filter(transaction=>transaction.type===type)
      .map(transaction=>new Date(transaction.date).getTime())));
  
      // ultima transaction
      console.log('ultima trans',new Date(lastTransaction));
  
      // return Intl.DateTimeFormat('pt-BR',{
      //   day:'2-digit',
      //     month:'2-digit',
      //     year:'2-digit',
      //   }).format(new Date(lastTransaction));
      if(!lastTransaction.getDate()){
        return ''
      }else{
        return `${lastTransaction.getDate()} de ${lastTransaction.toLocaleString('pt-BR',{month:'long'})}`;
      }
      
  }

  const loadTransactions=async()=>{
    const dataKey='@gofinances:transactions';
    const response= await AsyncStorage.getItem(keys.storage.dataKey);
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

  const lastTransactionEntries= getLastTransactionDate(transactions, 'positive');
  const lastTransactionExpenses= getLastTransactionDate(transactions, 'negative');
  const totalInterval= !lastTransactionExpenses ? '' :  `01 a ${lastTransactionExpenses}`;


  console.log();
  
   

    const total=entriesTotal -outcomeTotal;


    setHighlightData({
      entries:{
        amount:entriesTotal.toLocaleString('pt-BR',{
          style:'currency',
          currency:'BRL',

          // currencyDisplay:'symbol'
        }),
        lastTransaction: !lastTransactionEntries? 'Sem ultima entrada' : `Ultima entrada dia ${lastTransactionEntries}`,
      },
      outcome:{
        amount:outcomeTotal.toLocaleString('pt-BR',{
          style:'currency',
          currency:'BRL'
        }),
        lastTransaction: !lastTransactionExpenses? 'Sem ultima entrada' :`Ultima saida dia ${lastTransactionExpenses}`,
      },
      total:{
        amount:total.toLocaleString('pt-BR',{
          style:'currency',
          currency:'BRL'
      }),
      lastTransaction:totalInterval,
    }
        
    });
    console.log(data);
    console.log(data.length);
    

  }

  const handleSignOut=()=>{
    setModalVisible(true);
  }

  useEffect(()=>{
    loadTransactions();
    
    
  },[])

  useFocusEffect(useCallback(()=>{
    setModalVisible(false);
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
            {
            user.photo ? <Photo
              source={{
                uri: user.photo
              }}
            /> : 
            <MonogramContainer>
              <MonogramText>
              {user.name.charAt(0)}
              </MonogramText>
              </MonogramContainer>}
            <User>
              <UserGreeting>Olá</UserGreeting>
              <Username>{user.name}</Username>
            </User>
          </UserInfo>
          <LogoutButton onPress={handleSignOut} >
          <Icon name="power" />
          </LogoutButton>

          
        </UserWrapper>
      </Header>
      <HighlightCards  >
        <HighlightCard type='up' title='Entradas' amount={higlightData?.entries?.amount} lastTransaction={higlightData?.entries?.lastTransaction}/>
        <HighlightCard type='down' title='Saidas' amount={higlightData?.outcome?.amount} lastTransaction={higlightData?.outcome?.lastTransaction} />
        <HighlightCard type='total' title='Total' amount={higlightData?.total?.amount} lastTransaction={higlightData?.total?.lastTransaction} />
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
    {
    modalVisible
     &&
      <GoModal state={setModalVisible} action={signOut} txt='Deseja terminar a sessão?' txt2='Os seus dados nao serao gravados' />
      }
    </Container>
  );
}
