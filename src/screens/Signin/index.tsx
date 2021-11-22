import React, { useEffect, useState } from 'react'
import { View, Text, Alert } from 'react-native'
import { Container, Header,TitleWrapper,Title,Footer,SigninTitle, FooterWrapper, ErrorBarContainer, ErrorBarMessage, ModalContainer, ModalTitle } from './styles'
import AppleLogo from '../../assets/apple.svg'
import GoogleLogo from '../../assets/google.svg'
import Logo from '../../assets/fin.svg'
import { RFValue } from 'react-native-responsive-fontsize'
import SignInSocialButton from '../../Components/SignInSocialButton'
import { useAuthContext } from '../../AuthContetx'
import GoModal from '../../Components/Modal'


export default function Signin() {

    const {signInWithGoogle}=useAuthContext();
    const [errorMessage,setErrorMessage]=useState('ada');
    const [modalVisible,setModalVisible]=useState(false);

    const handleSignInWithGoogle=async()=>{
        try {
            await signInWithGoogle();
        } catch (error:any) {
            console.log(error);
            // console.log(error.code);
            Alert.alert('Nao foi possivel conectar a conta Google');
            setErrorMessage(String(error.message));
            setModalVisible(true);

            
        }
    }

    useEffect(()=>{
        setTimeout(() => {
            setErrorMessage('');
        }, 10000);
    },[errorMessage])

    return (
        <Container>
            <Header>
                <TitleWrapper>
                    <Logo width={RFValue(120)} height={RFValue(68)}/>
                    <Title>
                    Controle suas {'\n'}
finanças de forma{'\n'}
muito simples
                    </Title>
                </TitleWrapper>
                <SigninTitle>Faça seu login com{'\n'}
uma das contas abaixo</SigninTitle>
            </Header>
            <Footer>
            <FooterWrapper>
                <SignInSocialButton onPress={()=>handleSignInWithGoogle()} title="Entrar com Google" svg={GoogleLogo}/>
                <SignInSocialButton onPress={()=>setModalVisible(true)} title="Entrar com Apple" svg={AppleLogo}/>
            </FooterWrapper>
            </Footer>
            {errorMessage!=='' && <ErrorBarContainer>
                <ErrorBarMessage>
                    {errorMessage}
                </ErrorBarMessage>
            </ErrorBarContainer>}
            { modalVisible && <GoModal state={setModalVisible} account='Google'/>}
        </Container>
    )
}
