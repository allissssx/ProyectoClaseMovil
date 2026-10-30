import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CustomButton from './components/CustomButton';
import Encabezado from './components/Encabezado';
import CajaEstadistica from './components/CajaEstadistica';

export default function App() {

  return (
    <View style={styles.container}> 
        <Encabezado titulo= "Mi rutina de hoy" subtitulo="Lunes · Tren superior"/>

      <View style={styles.filaEstadisticas}>
        <CajaEstadistica valor= "4" etiqueta="ejercicios"/>
        <CajaEstadistica valor= "4" etiqueta="ejercicios"/>
        <CajaEstadistica valor= "4" etiqueta="ejercicios"/>
      </View>

    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingTop: 40,
    backgroundColor: 'white',
  },

  filaEstadisticas: {
    marginTop: 10,
    flexDirection: 'row',
    gap: 5
  },
});