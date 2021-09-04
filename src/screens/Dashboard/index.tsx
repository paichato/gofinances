import React from "react";
import { View, Text } from "react-native";
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
  TitleTrans
} from "./styles";

export default function Dashboard() {
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
              <TransactionCard/>
    </Transactions>
    </Container>
  );
}
