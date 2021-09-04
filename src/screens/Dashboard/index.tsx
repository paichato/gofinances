import React from "react";
import { View, Text, Platform } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import HighlightCard from "../../Components/highlightCard";
import TransactionCard from "../../Components/transactionCard";
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
  TransactionsList
} from "./styles";

export default function Dashboard() {


    const data=[
        {title:'Desenvolvimento de site', amount:'12.000,00', date:'13/04/2020',category:{name:'Vendas', icon:'dollar-sign'}, type:'positive'},
    {title:'Hamburgaria', amount:'1.000,00', date:'19/08/2020',category:{name:'Alimentacao', icon:'dollar-sign'},type:'negative'},
    {title:'Alugule do Apartamento ', amount:'1.200,00', date:'10/04/2020',category:{name:'Casa', icon:'dollar-sign'}, type:'negative'},
];

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
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards  >
        <HighlightCard type='up' title='Entradas' amount='17.400,00 MT' lastTransaction='Ultima entrada dia 13 de abril'/>
        <HighlightCard type='down' title='Entradas' amount='8.400,00 MT' lastTransaction='Ultima entrada dia 13 de Junho' />
        <HighlightCard type='total' title='Entradas' amount='400,00 MT' lastTransaction='Ultima entrada dia 13 de Setembro' />
      </HighlightCards>
    <Transactions>
        <TitleTrans>Listagem</TitleTrans>
        <TransactionsList showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:Platform.OS==='ios'? getBottomSpace() : 30}} renderItem={({item})=><TransactionCard data={item}/>} data={data}/>
              {/* <TransactionCard data={data} /> */}
    </Transactions>
    </Container>
  );
}
