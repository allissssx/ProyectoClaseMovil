import { StyleSheet, Text, View } from "react-native";


type EncabezadoProps={
    titulo: string, 
    subtitulo?: string 
}

export default function Encabezado({titulo, subtitulo}: EncabezadoProps){
    return(
        <View style={styles.encabezado}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.subtitulo}>{subtitulo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titulo:{
        color: '#032a5c',
        fontSize: 45,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Berlin Sans FB Demi'
    },

    subtitulo:{
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        paddingVertical: 5,
    },

    encabezado:{
        
    }
}
)