import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CustomButton from './components/CustomButton';
import BotonAccion from './components/BotonAccion';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <View style ={styles.buttonsContainer}>
          <BotonAccion texto="boton" onPress={() =>{}} Apariencia='alternativa'  />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  buttonsContainer:{
    padding: 15,
    backgroundColor: 'pink'
  }
});