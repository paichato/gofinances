import React, { useState } from "react";
import { View, Text, Modal } from "react-native";
import Button from "../Forms/Button";
import CategorySelectButton from "../Forms/CategorySelectButton";
import Input from "../Forms/Input";
import TransactionTypeButton from "../Forms/TransactionTypeButton";
import {Container,Header,Title,Form,Fields, TransactionTypes} from './styles'

import CategorySelect from "../../screens/CategorySelect";

export default function Register() {

    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);

    const [category,setCategory]=useState({
      key:'category',
      name:'Categoria',
   
    })

    const handleTransactionsTypeSelect =(type:'up'|'down')=>{
        setTransactionType(type);
    }

    const handleCloseModal=()=>{
      setCategoryModalOpen(!categoryModalOpen)
    }
    
    const handleOpenModal=()=>{
      setCategoryModalOpen(true);
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

      <CategorySelectButton onPress={handleOpenModal} title='Categoria'/>
     
          </Fields>
      
      <Button title='enviar'/>
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect category={category} setCategory={setCategory} closeSelectCategory={handleCloseModal}/>
      </Modal>
      
    </Container>
  );
}
