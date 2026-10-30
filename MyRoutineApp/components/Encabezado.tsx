import { StyleSheet, Text, View } from "react-native";


type EncabezadoProps={
    titulo: string, 
    subtitulo?: string 
}

export default function Encabezado({titulo, subtitulo}: EncabezadoProps){
    return(
        <View style={styles.encabezado}>
            <Text style={styles.titulo}>{titulo}</Text>
            {subtitulo && 
                (<Text style={styles.subtitulo}>{subtitulo}</Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    titulo:{
        color: '#032a5c',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    subtitulo:{
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
        paddingVertical: 5,
    },

    encabezado:{
        padding: 20,
        backgroundColor: '#9fc4f3',
        borderRadius: 20
    }
})