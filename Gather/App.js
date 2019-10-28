/**
//run npm install react-navigation-stack before running
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import SignUpScreen from "./Screens/SignUpScreen";


import * as firebase from 'firebase';

        var config = {
            apiKey: "AIzaSyBTTXx1PbNDkQ3CZESDpSOYtlVq-IwUORI",
            authDomain: "gather-4cb69.firebaseapp.com",
            databaseURL: "https://gather-4cb69.firebaseio.com",
            projectId: "gather-4cb69",
            storageBucket: "gather-4cb69.appspot.com",
            messagingSenderId: "550846630622",
            appId: "1:550846630622:web:ba0898d5f5a23ab07cd04f",
            measurementId: "G-M18QKHTKMF"
        };
            firebase.initializeApp(config);

const { width: WIDTH } = Dimensions.get('window')
export default class Login extends Component {

        constructor(props){
            super(props)

            this.state = ({
                email: '',
                password: ''
            })
        }

        signUpUser = (email,password) => {

            try{
                firebase.auth().createUserWithEmailAndPassword(email,password)
            }

            catch(error){
                console.log(error.toString())
            }
        }

        loginUser = (email,password) => {

            try{
                firebase.auth().signInWithEmailAndPassword(email,password)
            }

            catch(error){
                console.log(error.toString())
            }

        }



  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.logoText}>SIGN UP</Text>
            </View>

            <View>
                <TextInput
                    style={styles.input}
                    placeholder={'Name'}
                    placeholderTextColor={'rgba(0, 0, 0, 0.7)'}
                    underlineColorAndroid='transparent'
                    autoCorrect={false}
                    autoCapitalize = "none"
                    onChangeText = {(email) => this.setState({email})}
                    value = {this.state.email}
                />
            </View>

            <View>
                            <TextInput
                                style={styles.input}
                                placeholder={'Email'}
                                placeholderTextColor={'rgba(0, 0, 0, 0.7)'}
                                underlineColorAndroid='transparent'
                            />
                        </View>

            <View>
                            <TextInput
                                style={styles.input}
                                placeholder={'Username'}
                                placeholderTextColor={'rgba(0, 0, 0, 0.7)'}
                                underlineColorAndroid='transparent'
                            />
                        </View>

            <View>
                <TextInput
                    style={styles.input}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    placeholderTextColor={'rgba(0, 0, 0, 0.7)'}
                    underlineColorAndroid='transparent'
                    secureTextEntry={true}
                    autoCorrect={false}
                    autoCapitalize = "none"
                    onChangeText = {(password) => this.setState({password})}
                    value = {this.state.password}
                />
            </View>

<<<<<<< HEAD
            <TouchableOpacity style={styles.btnSignUp}>
                            <Text style={styles.textGoogle} >Sign Up</Text>
                        </TouchableOpacity>
=======

            <Button
                full
                rounded
                success
                onPress = {() => this.loginUser(this.state.email,this.state.password)}
            >

            <Text> Login </Text>
            </Button>

>>>>>>> loginPage

            <TouchableOpacity style={styles.btnGoogle}>
                <Text style={styles.textGoogle} >Login with Google</Text>
            </TouchableOpacity>




            <Button
                full
                rounded
                success
                onPress = {() => this.signUpUser(this.state.email,this.state.password)}
            >

            <Text> Sign2 </Text>
            </Button>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
    },
<<<<<<< HEAD
    LoginScreen:{
        screen:LoginScreen
    },
    SignUpScreen:{
        screen:SignUpScreen
    }
})
=======
    logoContainer: {
        alignItems: 'center'
    },
    logo: {
        width: 150,
        height: 150
    },
    logoText:{
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
        opacity: 1.0
    },
    loginText:{
            color: 'white',
            fontSize: 30,
            fontWeight: '500',
            textAlign: 'center',
        },
    input: {
        width: WIDTH - 55,
        height: 50,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        color: 'rgba(255, 200, 255, 0.7)',
        marginHorizontal: 25,
        marginTop: 5
    },
    btnLogin: {
        width: WIDTH - 150,
        height: 50,
        borderRadius: 45,
        backgroundColor: '#432577',
        justifyContent: 'center',
        marginTop: 20
    },
    btnGoogle: {
        width: WIDTH - 200,
        height: 45,
        borderRadius: 45,
        backgroundColor: '#432577',
        justifyContent: 'center',
        marginTop: 10,

    },
    btnSignUp: {
            width: WIDTH - 200,
            height: 45,
            borderRadius: 45,
            backgroundColor: '#432577',
            justifyContent: 'center',
            marginTop: 20,

        },
    text: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 16,
        textAlign:  'center'
    },
    textGoogle: {
            color: 'white',
            fontSize: 16,
            textAlign:  'center'
        }


});

**/

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

