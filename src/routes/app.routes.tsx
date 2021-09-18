import React from 'react'
import { View, Text } from 'react-native'
import Dashboard from '../screens/Dashboard' 
import Register from '../Components/Register';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const {Navigator,Screen}=createBottomTabNavigator();

export default function AppRoutes() {
 return (
  <Navigator>
   <Screen name='Listagem' component={Dashboard} ></Screen>
  </Navigator>
 )
}
