import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {Producto} from "./Productos";
import BotonAccion from './BotonAccion';


type TarjetaProductoProps = {
    producto: Producto;
    onAgregar: () => void;
    textoBoton?: string;
    precioFinal: number;
    formatearPrecio: (precio: number) => string;

}


export default function TarjetaProducto({producto, onAgregar, textoBoton="Agregar", precioFinal, formatearPrecio}: TarjetaProductoProps){

    const categoriaStyles = {
        Bebida: styles.bebida,
        Comida: styles.comida,
        Postre: styles.postre
    };
    return(

        <View style={[styles.tarjeta, producto.disponibilidad === "agotado" && styles.agotado]}>
            <View style={styles.conrainer}>
            <Text style={styles.texto}>{producto.nombre}</Text>
            <Text style={[styles.categoria,categoriaStyles[producto.categoria]]}>{producto.categoria}</Text>
            {producto.nuevo && (<Text style={styles.etiquetaNuevo}>Nuevo</Text>)}
            </View>

            {producto.descuento ? (<View style={styles.precioContainer}>
                <Text style={styles.precioOriginal}>{formatearPrecio(producto.precio)}</Text>
                <Text style={styles.texto}>{formatearPrecio(precioFinal)}</Text>
                
            </View>) : (
                <Text style={styles.texto}>{formatearPrecio(producto.precio)}</Text>
            )}

            
            
            {producto.disponibilidad === "pocasUnidades" && (<Text style={styles.etiquetaUnidades}>Ultimas unidades</Text>)}

            <BotonAccion texto={producto.disponibilidad === "agotado" ? "Agotado" : textoBoton} onPress={onAgregar}
            Inhabilitado={producto.disponibilidad === "agotado"}/>
        </View>
    )
}

const styles = StyleSheet.create({

    conrainer:{
        flexDirection: "row",
        gap: '20'

    },

    bebida: {
        backgroundColor: "#dcbaff",
    },

    comida: {
        backgroundColor: "#a0fab2",
    },

    postre: {
        backgroundColor: "#ffc7cd",
    },

    tarjeta: {
        backgroundColor: "#e8e6ff",
        padding: 15,
        marginVertical: 8,
        borderRadius: 12,
        borderColor: "#b1aed6",
        borderWidth: 1
    },

    agotado: {
        opacity: 0.5
    },

    texto: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5
    },

    categoria: {
        padding: 5,
        borderRadius: 5,
        alignSelf: "flex-start",
        marginBottom: 10
    },

    precioContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },

    precioOriginal: {
        textDecorationLine: "line-through",
        color: "gray"
    },


    etiquetaNuevo: {
        color: "green",
        fontWeight: "bold",
        marginVertical: 5
    },

    etiquetaUnidades: {
        color: "#ffa659",
        fontWeight: "bold",
        marginVertical: 5
    }
})