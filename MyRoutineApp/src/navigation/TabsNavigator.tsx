import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export type TabsList ={
    HomeScreen: {email: string},
    ProfileScreen: undefined,
    Settings: undefined
}

const Tabs = createBottomTabNavigator<TabsList>();

export default function TabsNavigator(){
    return(
        <Tabs.Screen
        name="HomeScreen"
        component={Home}/>
    );
}