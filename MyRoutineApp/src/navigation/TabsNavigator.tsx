import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';


export type TabsList ={
    HomeScreen: {email: string},
    ProfileScreen: undefined,
    SettingsScreen: undefined
}

const Tabs = createBottomTabNavigator<TabsList>();

export default function TabsNavigator(){
    return(
        <Tabs.Navigator>
            
        <Tabs.Screen
        name="HomeScreen"
        component={Home}/>

        <Tabs.Screen
        name="ProfileScreen"
        component={Profile}/>

        <Tabs.Screen
        name="SettingsScreen"
        component={Settings}/>
        </Tabs.Navigator>
    );
}