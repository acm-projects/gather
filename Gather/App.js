//run npm install react-navigation-stack before running
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import EventCreationScreen from "./Screens/EventCreationScreen";

const AppNavigator= createStackNavigator({
    HomeScreen:{
        screen:HomeScreen
    },
    LoginScreen:{
        screen:LoginScreen
    },
    SignUpScreen:{
        screen:SignUpScreen
    },
    EventCreationScreen:{
        screen:EventCreationScreen
    }
})

export default createAppContainer(AppNavigator)
