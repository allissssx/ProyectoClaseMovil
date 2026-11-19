import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';



export type TabsList ={
    Home: {email: string},
    Profile: undefined,
    Settings: undefined
}

const Tabs = createBottomTabNavigator<TabsList>();

export default function TabsNavigator(){
    return(
        <Tabs.Navigator >
            
        <Tabs.Screen
        name="Home"
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
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name={'person'}
              size={25}
              color={"blue"}/>),
            }}/>

        <Tabs.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name={'settings'}
              size={25}
              color={"blue"}/>),
            }}/>
        </Tabs.Navigator>
    );
}