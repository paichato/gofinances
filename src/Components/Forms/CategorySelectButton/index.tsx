import React from 'react'
import { View, Text } from 'react-native'

import {Container,Category,Icon} from './styles'

interface Props{
    title:string;
}

export default function CategorySelectButton({title}:Props) {
    return (
        <Container>
            <Category>{title}</Category>
            <Icon name='chevron-down'/>
        </Container>
    )
}
