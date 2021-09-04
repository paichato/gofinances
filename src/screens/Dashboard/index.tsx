import React from 'react'
import { View, Text } from 'react-native'
import HighlightCard from '../../Components/highlightCard'
import { Container, Title, Header, UserInfo, Photo,User,UserGreeting,Username, UserWrapper, Icon } from './styles'



export default function Dashboard() {
    return (
        <Container>

            <Header>
                <UserWrapper>
                <UserInfo>
                    <Photo source={{uri:'https://avatars.githubusercontent.com/u/65548563?v=4'}} />
                    <User>
                    <UserGreeting>Ola</UserGreeting>
                    <Username>Marlon</Username>
                    </User>
                    
               </UserInfo>
               <Icon name='power'/>
                </UserWrapper>
               
            </Header>
          <HighlightCard/>
            
        </Container>
    )
}
