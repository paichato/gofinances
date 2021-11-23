import React from 'react'
import { View, Text } from 'react-native'
import { AppRoutes } from './app.routes'
import {NavigationContainer} from '@react-navigation/native'
import {AuthRoutes} from './auth.routes'
import { useAuthContext } from '../AuthContext'

export default function Routes() {

    const {user}=useAuthContext();
    console.log(user);
    

 return (
  <NavigationContainer>
   {user.id ? <AppRoutes/> : <AuthRoutes/>}
   
  </NavigationContainer>
 )
}
