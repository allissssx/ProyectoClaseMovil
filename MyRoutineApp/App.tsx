import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CustomButton from './components/CustomButton';
import Encabezado from './components/Encabezado';

export default function App() {

  const handleOnPressPrimaryButton = () =>{
    console.log("Boton 1")
  }

  const handleOnPressSecondaryButton = () =>{
    console.log("Boton 2")
  }

  return (
    <View style={styles.container}> 
        <Encabezado titulo= "Mi rutina de hoy" subtitulo="Lunes · Tren superior"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    margin: 30
  }
});