import React from 'react'
import { View, Text } from 'react-native'
import { Container, Title, Header, UserInfo, Photo,User,UserGreeting,Username } from './styles'

export default function Dashboard() {
    return (
        <Container>
            <Header>
               <UserInfo>
                    <Photo source={{uri:'https://avatars.githubusercontent.com/u/65548563?v=4'}} />
                    <User/>
                    <UserGreeting>Ola</UserGreeting>
                    <Username>Marlon</Username>
               </UserInfo>
            </Header>
            {/* <Title>Dashboard</Title> */}
            
        </Container>
    )
}
