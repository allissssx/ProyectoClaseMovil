import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CustomButton from './components/CustomButton';
import Encabezado from './components/Encabezado';
import CajaEstadistica from './components/CajaEstadistica';
import TarjetaEjercicio from './components/TarjetaEjercicio';

export default function App() {

  return (
    <View style={styles.container}> 
      <Encabezado titulo= "Mi rutina de hoy" subtitulo="Lunes · Tren superior"/>

      <View style={styles.ContainerEstadisticas}>
        <CajaEstadistica valor= "4" etiqueta="ejercicios"/>
        <CajaEstadistica valor= "45" etiqueta="minutos"/>
        <CajaEstadistica valor= "320" etiqueta="kcal"/>
      </View>

      <Encabezado titulo= "Ejercicios"/>

      <View>
        <TarjetaEjercicio nombre="Press de banca" series={4} repeticiones={10} grupoMuscular="pecho" />
        <TarjetaEjercicio nombre="Remo con barra" series={4} repeticiones={12} grupoMuscular="espalda" destacado= {true} />
        <TarjetaEjercicio nombre="Curl de bicep con barra Z" series={4} repeticiones={12} grupoMuscular="brazo" />
        <TarjetaEjercicio nombre="Extension de tricep" series={4} repeticiones={12} grupoMuscular="brazo" />
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

  ContainerEstadisticas: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row',
    gap: 5
  },
});