import React from 'react'
import { View, Text } from 'react-native'
import { Container, Header,TitleWrapper,Title,Footer,SigninTitle, FooterWrapper } from './styles'
import AppleLogo from '../../assets/apple.svg'
import GoogleLogo from '../../assets/google.svg'
import Logo from '../../assets/fin.svg'
import { RFValue } from 'react-native-responsive-fontsize'
import SignInSocialButton from '../../Components/SignInSocialButton'


export default function Signin() {
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
                <SignInSocialButton title="Entrar com Google" svg={GoogleLogo}/>
                <SignInSocialButton title="Entrar com Apple" svg={AppleLogo}/>
            </FooterWrapper>
            </Footer>
        </Container>
    )
}
