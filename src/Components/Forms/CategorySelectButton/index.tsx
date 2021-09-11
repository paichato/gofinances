import React from 'react'
import { View, Text,TouchableOpacityProps } from 'react-native'

import {Container,Category,Icon} from './styles'

interface Props extends TouchableOpacityProps{
    title:string;
    onPress:()=>void;
    
}

export default function CategorySelectButton({title, onPress}:Props) {
    return (
        <Container onPress={onPress}>
            <Category>{title}</Category>
            <Icon name='chevron-down'/>
        </Container>
    )
}
