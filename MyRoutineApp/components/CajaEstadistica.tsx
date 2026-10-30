import { StyleSheet, Text, View } from "react-native";


type CajaEstadisticaProps={
    valor: string, 
    etiqueta: string 
}

export default function CajaEstadistica({valor, etiqueta}: CajaEstadisticaProps){
    return(
        <View style={styles.container}>
            <Text style={styles.valor}>{valor}</Text>
            <Text style={styles.etiqueta}>{etiqueta}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    valor:{
        color: '#4c035c',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },

    etiqueta:{
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        paddingVertical: 5,
    },

    container:{
        flex: 1,
        backgroundColor: '#c69ff3',
        borderColor: 'black',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    }
})