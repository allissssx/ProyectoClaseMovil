import { Alert, Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import BotonAccion from './components/BotonAccion';
import TarjetaProducto from './components/TarjetaProducto';
import {Producto} from "./components/Productos";
import {productos} from "./components/Productos";
import EncabezadoSeccion from './components/EncabezadoSeccion';

const formatearPrecio = (precio: number): string => {
  return `L ${precio.toFixed(2)}`;
};

const agregarProducto = (nombre: string): void => {
  Alert.alert("CampusCafé", `${nombre} agregado al pedido`);
};
    
const pedirOtraVez = (nombre: string): void => {
  Alert.alert("CampusCafé", `Pedido rápido: ${nombre}`);
};

const confirmarPedido = (): void => {
  Alert.alert("CampusCafé", "Pedido confirmado");
};

  const vaciarPedido = (): void => {
    Alert.alert("CampusCafé", "Se vació el pedido");
};

const productosFavoritos = productos.filter(
    (producto) =>
      producto.nombre === "Cafe americano" ||
      producto.nombre === "Galleta de avena"
  );

export default function App() {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <EncabezadoSeccion titulo="Menú del día" cantidad={productos.length} onVerTodo={() => Alert.alert("CampusCafé", "Mostrando el menú completo")}/>

        {productos.map((producto) => { const precioFinal = producto.descuento
            ? producto.precio * (1 - producto.descuento / 100)
            : producto.precio;

          return (
            <TarjetaProducto key={producto.id} producto={producto} precioFinal={precioFinal} formatearPrecio={formatearPrecio}
              onAgregar={() => agregarProducto(producto.nombre)}/>);
        })}
      </View>

      <View>
        <EncabezadoSeccion titulo="Sus favoritos" cantidad={productosFavoritos.length}/>

        {productosFavoritos.map((producto) => { const precioFinal = producto.descuento
            ? producto.precio * (1 - producto.descuento / 100)
            : producto.precio;

          return (
            <TarjetaProducto key={producto.id} producto={producto} precioFinal={precioFinal} formatearPrecio={formatearPrecio}
              textoBoton="Pedir otra vez" onAgregar={() => pedirOtraVez(producto.nombre)}/>);
        })}
      </View>

      <View>
        <EncabezadoSeccion titulo="Su pedido" />

        <View style={styles.botonesPedido}>
          <BotonAccion texto="Confirmar pedido" Apariencia="principal" AnchoCompleto={true} onPress={confirmarPedido}/>

          <BotonAccion texto="Vaciar pedido" Apariencia="destructiva" AnchoCompleto={true} onPress={vaciarPedido}/>

          <BotonAccion texto="Enviando..." Apariencia="principal" AnchoCompleto={true} Proceso={true} onPress={() => {}}/>
        </View>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 20,
    paddingTop: 50,
    paddingBottom: 30,
  },

  botonesPedido: {
    gap: 12,
    marginTop: 10,
  },
});