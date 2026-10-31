import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {Producto} from "./Productos";


type TarjetaProductoProps = {
    producto: Producto;
    onAgregar: () => void;
    textoBoton?: string;
    precioFinal: number;
}


export default function TarjetaProducto({}: TarjetaProductoProps){

    return(
        <TouchableOpacity style={styles.} >
            <Text style={styles.}>{}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    
})