import React from 'react'
import { View, Text, TouchableOpacityProps } from 'react-native'
import { Container, Icon,Title } from './styles'

interface Props extends TouchableOpacityProps{
    title:string,
    type:'up' | 'down',
    isActive:boolean;
}

const icons={
    up:'arrow-up-circle',
    down:'arrow-down-circle'
}

export default function TransactionTypeButton({title,type,...rest}:Props) {
    return (
        <Container {...rest}>
            <Icon type={type} name={icons[type]}/>
            <Title>{title}</Title>
        </Container>
    )
}
