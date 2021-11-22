import React, {Dispatch, SetStateAction} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import theme from '../../global/styles/theme'
import { ConfirmButton, ErrorIcon, ErrorText, ModalContainer, ModalDescription, ModalTitle } from './styles'


interface ModalProps{
    account:'Google' | 'Apple';
    // state:({}:Boolean)=>void;
    state:Dispatch<SetStateAction<boolean>>
    

}

export default function GoModal({account,state}:ModalProps) {
    return (
    <>
    <View style={[StyleSheet.absoluteFill,{backgroundColor:'rgba(0,0,0,0.5)'}]} >
    </View>
    
        <ModalContainer>
                <ErrorIcon name='error-outline' color={theme.colors.primary} size={48}  />
                <ModalTitle>
                Nao foi possivel conectar a conta {account} 
                </ModalTitle>
                <ModalDescription>
                    Tente novamente
                </ModalDescription>
                <ConfirmButton onPress={()=> state(false)} >
                    <ErrorText>
                        Confirmar
                    </ErrorText>
                </ConfirmButton>
            </ModalContainer>
           
            </>
    )
}
