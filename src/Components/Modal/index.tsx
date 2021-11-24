import React, {Dispatch, SetStateAction} from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import theme from '../../global/styles/theme'
import { CancelButton, ConfirmButton, ErrorIcon, ErrorText, ModalContainer, ModalDescription, ModalTitle, Spacer } from './styles'

export interface AccountProps{
    account:'Google' | 'Apple';
}

interface ModalProps{
    account?: AccountProps["account"];
    // state:({}:Boolean)=>void;
    state:Dispatch<SetStateAction<boolean>>;
    txt?:string;
    txt2?:string;
    action?:()=>void;
    

}

export default function GoModal({account,state,action,txt,txt2}:ModalProps) {

    const handleTouch=()=>{
        console.log('s');
        
        if(txt){
            state(false);
        }
    }

    return (
    <>
   <TouchableWithoutFeedback onPress={handleTouch}>
    <View  style={[StyleSheet.absoluteFill,{backgroundColor:'rgba(0,0,0,0.5)'}]} >
     
    </View>
    </TouchableWithoutFeedback>
    
        <ModalContainer>
                {account ? 
                <>
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
                </>
                :
                <>
                    <ErrorIcon name='logout' color={theme.colors.primary} size={48}  />
                    <Spacer/>
                    <ModalTitle>
                   {txt}
                    </ModalTitle>
                    <ModalDescription>
                    {txt2}
                    </ModalDescription>
                    <Spacer/>
                    <Spacer/>
                    <ConfirmButton onPress={action} >
                        <ErrorText>
                            Terminar sessao
                        </ErrorText>
                    </ConfirmButton>
                    <Spacer/>
                    <CancelButton onPress={()=> state(false)} >
                        <ErrorText>
                            Cancelar
                        </ErrorText>
                    </CancelButton>
                </>
                }
            </ModalContainer>
            
           
            </>
    )
}
