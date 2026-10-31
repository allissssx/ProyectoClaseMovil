import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type BotonAccionProps = {
    texto: string,
    onPress: ()=> void;
    Apariencia?: "principal" | "alternativa" | "destructiva" | "enlace",
    Tamano?: "pequeno" | "mediano" | "grande",
    AnchoCompleto?: boolean,
    Inhabilitado?: boolean,
    Proceso?: boolean
}


export default function BotonAccion({texto, onPress, Apariencia="principal", Tamano="mediano", 
AnchoCompleto=false, Inhabilitado=false, Proceso=false}: BotonAccionProps){
    const aparienciaStyles = {
        principal: styles.principal,
        alternativa: styles.alternativa,
        destructiva: styles.destructiva,
        enlace: styles.enlace
    };

    const tamanoStyles = {
        pequeno: styles.pequeno,
        mediano: styles.mediano,
        grande: styles.grande
    };    
        
    return(
        <TouchableOpacity style={[styles.boton, aparienciaStyles[Apariencia], tamanoStyles[Tamano],
        AnchoCompleto && styles.anchoCompleto, (Inhabilitado || Proceso) && styles.atenuado]} onPress={onPress} disabled={Inhabilitado || Proceso}>
            {Proceso ? (<ActivityIndicator color="white" />) : (
                <Text style={styles.texto}>{texto}</Text>)}
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    boton:{
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    principal:{
        backgroundColor: 'blue'
    },

    alternativa:{
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 2
    },

    destructiva:{
        backgroundColor: 'red'
    },

    enlace:{
        backgroundColor:'transparent'
    },

    pequeno:{
        paddingVertical: 6,
        paddingHorizontal: 10
    },

    mediano: {
        paddingVertical: 12,
        paddingHorizontal: 16
    },

    grande: {
        paddingVertical: 16,
        paddingHorizontal: 20
    },

    anchoCompleto: {
        width: '100%'
    },

    atenuado: {
        opacity: 0.5
    },

    texto: {
        color: 'black',
        fontWeight: '500'
    }
})