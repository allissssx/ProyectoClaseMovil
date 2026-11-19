import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { View,Text } from "react-native"
import { RootStackParamList } from "../navigation/StackNavigator"
import { TabsList } from "../navigation/TabsNavigator";

export default function Home(){

    return(
        <View>
            <Text>Welcome home </Text>
        </View>
    )
}