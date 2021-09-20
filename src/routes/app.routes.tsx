import React from 'react'
import { View, Text } from 'react-native'
import Dashboard from '../screens/Dashboard' 
import Register from '../Components/Register';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Tab=createBottomTabNavigator();

export  function AppRoutes() {
 return (
  <Tab.Navigator>
   <Tab.Screen name='Listagem' component={Dashboard} />
   <Tab.Screen name='Cadastrar' component={Register} />
  </Tab.Navigator>
 )
}
