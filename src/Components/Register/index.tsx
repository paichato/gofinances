import React, { useState } from "react";
import { View, Text } from "react-native";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import TransactionTypeButton from "../Forms/TransactionTypeButton";
import {Container,Header,Title,Form,Fields, TransactionTypes} from './styles'

export default function Register() {

    const [transactionType, setTransactionType] = useState('');

    const handleTransactionsTypeSelect =(type:'up'|'down')=>{
        setTransactionType(type);
    }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
          <Fields>
          <Input placeholder='preco'/>
      <Input placeholder='preco'/>
      <TransactionTypes>
      <TransactionTypeButton isActive={transactionType==='up'} onPress={()=>handleTransactionsTypeSelect('up')} type='up' title='Income'/>
      <TransactionTypeButton isActive={transactionType==='down'} onPress={()=>handleTransactionsTypeSelect('down')} type='down' title='Outcome'/>
      </TransactionTypes>
     
          </Fields>
      
      <Button title='enviar'/>
      </Form>
      
    </Container>
  );
}
