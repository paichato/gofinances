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

export default function App() {

const [fontsLoaded]=useFonts({
  Poppins_400Regular,Poppins_500Medium,Poppins_700Bold
})

if(!fontsLoaded){
  return <AppLoading/>
}

  return (
    <ThemeProvider theme={theme}>
<View style={styles.container}>
      {/* <Welcome title='Sup dude'/> */}
      {/* <Dashboard/> */}
      <Register/>
      <StatusBar style="auto" />
    </View>
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
