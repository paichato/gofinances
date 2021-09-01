import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/Components/welcome';
import Dashboard from './src/screens/Dashboard';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
<View style={styles.container}>
      {/* <Welcome title='Sup dude'/> */}
      <Dashboard/>
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
