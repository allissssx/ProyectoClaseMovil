import { StyleSheet, Text, View } from "react-native";


type EtiqueraProps={
    texto: string, 
    colorFondo: string 
}

export default function Etiqueta({texto, colorFondo}: EtiqueraProps){
    return(
        <View style={[styles.etiqueta, {backgroundColor: colorFondo}]}>
            <Text style={styles.texto}>{texto}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    etiqueta:{
        alignSelf: 'flex-start',
        padding: 5,
        paddingHorizontal: 15,
        borderRadius: 70,
    },

    texto:{
        color: 'white',
        fontSize: 13,
        textAlign: 'center',
        paddingVertical: 5,
        textTransform: 'uppercase',
        fontWeight: 'bold',

    }
})