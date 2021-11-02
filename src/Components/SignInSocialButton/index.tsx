import React from 'react'
import { View } from 'react-native'
import {RectButtonProps} from 'react-native-gesture-handler'
import {SvgProps} from 'react-native-svg'
import {Button,ImageContainer,Text} from './styles'

interface Props extends RectButtonProps{
    title: string;
    svg:React.FC<SvgProps>;
}

export default function SignInSocialButton({title,svg:Svg,...rest}:Props) {
    return (
        <Button {...rest} >
            <ImageContainer>
                <Svg/>
            </ImageContainer>
            <Text>{title}</Text>
        </Button>
    )
}
