import React from "react";
import { View, Text } from "react-native";
import Input from "../Forms/Input";
import {Container,Header,Title} from './styles'

export default function Register() {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Input/>
    </Container>
  );
}
