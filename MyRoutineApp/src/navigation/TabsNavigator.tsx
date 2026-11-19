import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';



export type TabsList ={
    HomeScreen: {email: string},
    ProfileScreen: undefined,
    SettingsScreen: undefined
}

const Tabs = createBottomTabNavigator<TabsList>();

export default function TabsNavigator(){
    return(
        <Tabs.Navigator >
            
        <Tabs.Screen
        name="HomeScreen"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name={'home'}
              size={25}
              color={"blue"}/>),
            }}
      />

        <Tabs.Screen
        name="ProfileScreen"
        component={Profile}/>

        <Tabs.Screen
        name="SettingsScreen"
        component={Settings}/>
        </Tabs.Navigator>
    );
}