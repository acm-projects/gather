import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity, Button } from 'react-native';

import bgImage from './Images/OrangeBackround.jpg'
import logo from './Images/Logo.jpg'

const { width: WIDTH } = Dimensions.get('window')
export default class Login extends Component {
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            <TouchableOpacity style={styles.btnGoogle}>
                 <Text style={styles.textGoogle} >List</Text>
            </TouchableOpacity>

            <View>
                <TextInput
                    style={styles.input}
                    placeholder={'Search Gathers'}
                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                    underlineColorAndroid='transparent'
                />
            </View>



            <Button
            title="Login"
            onPress={()=>{
                this.props.navigation.navigate("SecondScreen")
            }}
            />

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row'
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
        width: WIDTH - 170,
        height: 50,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        color: 'rgba(255, 255, 255, 0.7)',
        marginHorizontal: 15,
        marginTop: 5
    },
    btnLogin: {
        width: WIDTH - 150,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#432577',
        justifyContent: 'center',
        marginTop: 20
    },
    btnGoogle: {
        width: WIDTH - 350,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#432577',
        justifyContent: 'center',
        marginTop: 5,
        marginLeft: 10

    },
    btnSignUp: {
            width: WIDTH - 350,
            height: 45,
            borderRadius: 45,
            backgroundColor: '#432577',
            justifyContent: 'center',
            marginTop: 5,


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
