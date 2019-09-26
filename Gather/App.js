import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';

import bgImage from './Images/OrangeBackround.jpg'
import logo from './Images/Logo.jpg'

const { width: WIDTH } = Dimensions.get('window')
export default class Login extends Component {
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
                    placeholder={'Username'}
                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                    underlineColorAndroid='transparent'
                />
            </View>

            <View>
                <TextInput
                    style={styles.input}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                    underlineColorAndroid='transparent'
                />
            </View>

            <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.text} >Gather :D</Text>
            </TouchableOpacity>
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
        width: 120,
        height: 120
    },
    logoText:{
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
        opacity: 0.5
    },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        color: 'rgba(255, 255, 255, 0.7)',
        marginHorizontal: 25,
        marginTop: 5
    },
    btnLogin: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        backgroundColor: '#432577',
        justifyContent: 'center',
        marginTop: 20
    },
    text: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 16,
        textAlign:  'center'
    }


});
