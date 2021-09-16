import React from 'react'
import { View, Text, TextInputProps } from 'react-native'
import Input from '../Input'
import { Container } from './styles'
import {Control, Controller} from 'react-hook-form'
// import {Input} from '../Input'

interface Props extends TextInputProps{
    control: Control;
    name:string;
}

export default function InputForm({
    control, name, ...rest
}:Props) {
    return (
        <Container>
            <Controller control={control} render={({field:{onChange,onBlur, value}})=>(
                <Input {...rest} />
            )} name={name}  />
            
           
            
        </Container>
    )
}
