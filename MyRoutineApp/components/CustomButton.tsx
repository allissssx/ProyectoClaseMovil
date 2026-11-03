import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CustomButtonProps } from "../utils/types/ButtonProps";



export default function CustomButton({title, onPressButton, variant}: CustomButtonProps){

    return(
        <Pressable style={styles.button} onPress={onPressButton}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: 'navy',
        padding: 12,
        marginTop: 10,
        width: 180,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: 'white',
        fontWeight: '500'
    }
})