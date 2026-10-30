import { StyleSheet, Text, View } from "react-native";
import Etiqueta from "./Etiqueta";


type TarjetaEjercicioProps={
    nombre: string, 
    series:number,
    repeticiones: number,
    grupoMuscular: string,
    destacado?: boolean
}

export default function TarjetaEjercicio({nombre, series, repeticiones,grupoMuscular,destacado}: TarjetaEjercicioProps){
    return(
        <View style={[styles.container, destacado && styles.tarjetaDestacada]}>
            <View style={styles.containerNombre}>
                <Text style={styles.texto}>{nombre}</Text>
                <Etiqueta texto={grupoMuscular} colorFondo='#ff6060'/>  
            </View>
            <Text style={styles.textosecundario}>{series} series x {repeticiones} repeticiones</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 15,
        borderRadius: 20,
        backgroundColor: '#c69ff3',
        paddingHorizontal: 20,
        paddingVertical: 15
    },

    tarjetaDestacada:{
        backgroundColor: '#9ff3e6',
        borderColor: '#57c1b1',
        borderWidth: 2
    },

    containerNombre:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    texto:{
        color: '#4c035c',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },

    textosecundario:{
        color: '#4c035c',
        fontSize: 15,
    }
})