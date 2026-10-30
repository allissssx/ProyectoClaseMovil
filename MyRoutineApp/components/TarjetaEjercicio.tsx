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
        <View style={styles.container}>
            <View style={styles.containerNombre}>
                <Text style={styles.texto}>{nombre}</Text>
                <Etiqueta texto={grupoMuscular} colorFondo='red'/>  
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 15
    },

    containerNombre:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#c69ff3',
        borderRadius: 20,
        padding: 10
    },

    texto:{
        color: '#4c035c',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})