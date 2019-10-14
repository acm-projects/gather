
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

import HomeScreen from "./Screens/HomeScreen";
import SecondScreen from "./Screens/SecondScreen";

const AppNavigator= createStackNavigator({
    HomeScreen:{
        screen:HomeScreen
    },
    SecondScreen:{
        screen:SecondScreen
    }
})

export default createAppContainer(AppNavigator)