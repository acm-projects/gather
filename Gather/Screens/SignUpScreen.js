import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity, Button } from 'react-native';

import bgImage from './Images/OrangeBackround.jpg'
import logo from './Images/Logo.jpg'

import firebase from './firebaseconfig.js';

const { width: WIDTH } = Dimensions.get('window')
export default class Login extends Component {

         constructor(props){
                    super(props)

                    this.state = ({
                        email: '',
                        password: ''
                    })
                }

         signUpUser = (email, password) => {

             try{
                 firebase.auth().createUserWithEmailAndPassword(email, password)
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
                <Text style={styles.logoText}>LOGIN</Text>
            </View>



            <View>
                <TextInput
                    style={styles.input}
                    placeholder={'Email'}
                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                    underlineColorAndroid='transparent'
                    onChangeText = {(email) => this.setState({email})}
                    value = {this.state.email}
                />
            </View>



            <View>
                <TextInput
                    style={styles.input}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                    underlineColorAndroid='transparent'
                    secureTextEntry={true}
                    autoCorrect={false}
                    autoCapitalize = "none"
                    onChangeText = {(password) => this.setState({password})}
                    value = {this.state.password}
                />
            </View>

            <View style = {styles.buttonContainer}>
                <Button
                    title="Sign up with Google"
                    onPress={()=>{
                    this.props.navigation.navigate("Sign Up")
                    }}
                />
            </View>

            <View style = {styles.buttonContainer}>
                <Button
                    title="Sign Up"
                    onPress={()=>{
                    this.signUpUser(this.state.email, this.state.password)
                    }}
                />
            </View>

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
        opacity: 0.5
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
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        color: 'rgba(255, 255, 255, 0.7)',
        marginHorizontal: 25,
        marginTop: 5
    },
    btnLogin: {
        width: WIDTH - 150,
        height: 50,
        borderRadius: 45,
        marginTop: 20
    },
    btnGoogle: {
        width: WIDTH - 200,
        height: 45,
        borderRadius: 45,
        backgroundColor: '#432577',
        justifyContent: 'center',
        marginTop: 70,

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
        },
    buttonContainer:{
          width: WIDTH - 200,
          height: 45,
          borderRadius: 45,
          marginTop: 20,
        },


});
