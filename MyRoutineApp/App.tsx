import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import BotonAccion from './components/BotonAccion';
import TarjetaProducto from './components/TarjetaProducto';
import {Producto} from "./components/Productos";
import {productos} from "./components/Productos";
import EncabezadoSeccion from './components/EncabezadoSeccion';

const formatearPrecio = (precio: number): string => {
  return `L ${precio.toFixed(2)}`;
};

export default function App() {

  return (
    <ScrollView style={styles.comtainer}>
      <EncabezadoSeccion titulo="Menú del día" cantidad={productos.length} onVerTodo={() => {}}/>

    {productos.map((producto) => {

      const precioFinal = producto.descuento ? producto.precio * (1 - producto.descuento / 100) : producto.precio;

      return (
        <TarjetaProducto producto={producto} onAgregar={() => {}} formatearPrecio={formatearPrecio} precioFinal={precioFinal}/>
      );
    })}

  </ScrollView>
  );
}

const styles = StyleSheet.create({
  comtainer:{
    padding: 20,
    paddingTop: 50
  }
});