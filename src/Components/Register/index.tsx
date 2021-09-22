import React, { useState } from "react";
import { View, Text, Modal, TouchableWithoutFeedback, Keyboard, Alert, } from "react-native";
import Button from "../Forms/Button";
import CategorySelectButton from "../Forms/CategorySelectButton";
import Input from "../Forms/Input";
import TransactionTypeButton from "../Forms/TransactionTypeButton";
import {Container,Header,Title,Form,Fields, TransactionTypes} from './styles'
import InputForm from "../Forms/InputForm";
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'

import CategorySelect from "../../screens/CategorySelect";

const schema =Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  amount: Yup.number().typeError('Informe um valor Numerico').positive('o valor nao pode ser negativo')
})

interface FormData{
  name:string;
  amount:string;
}

export default function Register() {

    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);
    // const [name, setName] = useState('');
    // const [amount, setAmount] = useState('');

    const [category,setCategory]=useState({
      key:'category',
      name:'Categoria',
   
    })

    const {control,handleSubmit,formState:{errors}}=useForm({resolver:yupResolver(schema)});

    const handleTransactionsTypeSelect =(type:'up'|'down')=>{
        setTransactionType(type);
    }

    const handleCloseModal=()=>{
      // console.log('me chamou');
      
      setCategoryModalOpen(false);
    }
    
    const handleOpenModal=()=>{
      setCategoryModalOpen(true);
    }

    const handleRegister=(form:FormData)=>{

      if(!transactionType)
      return Alert.alert('Selecione o tipo da transacao');

      if(category.key==='category') return Alert.alert('Selecione o tipo da transacao');

      const data={
        name:form.name,
        amount:form.amount,
        transactionType,
        category:category.key
      }

      console.log(data);
      
    }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <Container>
      
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
          <Fields>
          <InputForm error={errors.name && errors.name.message} control={control} name='name' placeholder='Nome' autoCapitalize='sentences' autoCorrect={false} />
      <InputForm error={errors.amount && errors.amount.message} control={control} name='amount' placeholder='preço' keyboardType='numeric' />
      <TransactionTypes>
      <TransactionTypeButton isActive={transactionType==='up'} onPress={()=>handleTransactionsTypeSelect('up')} type='up' title='Income'/>
      <TransactionTypeButton isActive={transactionType==='down'} onPress={()=>handleTransactionsTypeSelect('down')} type='down' title='Outcome'/>
      </TransactionTypes>

      <CategorySelectButton onPress={handleOpenModal} title={category.name}/>
     
          </Fields>
      
      <Button onPress={handleSubmit(handleRegister)} title='enviar'/>
      </Form>

      <Modal onRequestClose={()=>handleCloseModal()} visible={categoryModalOpen}>
        <CategorySelect category={category} setCategory={setCategory} closeSelectCategory={()=>handleCloseModal()}/>
      </Modal>
      
      
    </Container>
    </TouchableWithoutFeedback>
  );
}
