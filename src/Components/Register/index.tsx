import React from "react";
import { View, Text } from "react-native";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import {Container,Header,Title,Form} from './styles'

export default function Register() {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
      <Input/>
      <Input/>
      <Button title='enviar'/>
      </Form>
      
    </Container>
  );
}
