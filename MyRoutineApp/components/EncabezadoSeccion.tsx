import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type EncabezadoSeccionProps = {
    titulo: string;
    cantidad?: number;
    onVerTodo?: () => void;
}

export default function EncabezadoSeccion({titulo, cantidad, onVerTodo}: EncabezadoSeccionProps){
    return (
    <View style={styles.encabezado}>
        <View style={styles.contenido}>
            <Text style={styles.titulo}>{titulo}</Text>
            {cantidad !== undefined && (<Text style={styles.cantidad}>({cantidad})</Text>)}
        </View>

        {onVerTodo && (<TouchableOpacity onPress={onVerTodo}>
            <Text style={styles.enlace}>Ver todo</Text>
        </TouchableOpacity>)}
    </View>
    )
}

const styles = StyleSheet.create({
  encabezado: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15
  },

  contenido: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black"
  },

  cantidad: {
    fontSize: 20,
    color: "gray"
  },

  enlace: {
    color: "navy",
    fontSize: 15,
    textDecorationLine: "underline"
  }
})