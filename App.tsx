import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/Components/welcome';
import Dashboard from './src/screens/Dashboard';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Welcome title='Sup dude'/> */}
      <Dashboard/>
      <StatusBar style="auto" />
    </View>
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
