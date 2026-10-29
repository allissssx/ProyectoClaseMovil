import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CustomButton from './components/CustomButton';

export default function App() {

  const handleOnPressPrimaryButton = () =>{
    console.log("Boton 1")
  }

  const handleOnPressSecondaryButton = () =>{
    console.log("Boton 2")
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <View style ={styles.buttonsContainer}>
          <CustomButton title = "My App Button 1" onPress={handleOnPressPrimaryButton}/>
          <CustomButton title = "My App Button 2" onPress={handleOnPressSecondaryButton}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  buttonsContainer:{
    padding: 15,
    backgroundColor: 'pink'
  }
});