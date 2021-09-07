import React from "react";
import { View, Text } from "react-native";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import TransactionTypeButton from "../Forms/TransactionTypeButton";
import {Container,Header,Title,Form,Fields} from './styles'

export default function Register() {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
          <Fields>
          <Input/>
      <Input/>
      <TransactionTypeButton/>
          </Fields>
      
      <Button title='enviar'/>
      </Form>
      
    </Container>
  );
}
