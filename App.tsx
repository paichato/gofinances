import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/Components/welcome';
import Dashboard from './src/screens/Dashboard';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';
import {useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold} from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'
import Register from './src/Components/Register';
// import CategorySelect from './src/Components/Forms/CategorySelectButton';
import CategorySelect from './src/screens/CategorySelect';
import { NavigationContainer } from '@react-navigation/native';
import {AppRoutes} from './src/routes/app.routes';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Signin from './src/screens/Signin'

export default function App() {

const [fontsLoaded]=useFonts({
  Poppins_400Regular,Poppins_500Medium,Poppins_700Bold
})

if(!fontsLoaded){
  return <AppLoading/>
}

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
    <StatusBar barStyle="light" />
    <Signin/>
    {/* <AppRoutes/> */}
    </NavigationContainer>
    </ThemeProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
