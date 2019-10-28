/*
Run these two commands in your command prompt before using:
npm install
npm install --save react-native-material-dropdown
*/

import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import bgImage from './Images/OrangeBackround.jpg'
import logo from './Images/Logo.jpg'

const { width: WIDTH } = Dimensions.get('window')
export default class Login extends Component {
  render() {
  let data = [{
        value: 'AM',
      }, {
        value: 'PM',
      }];
  let data2 = [{
          value: 'Public',
        }, {
          value: 'Private',
        }];
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>

            <View>

                <TextInput
                    style={styles.input}
                    placeholder={'Event Name'}
                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                    underlineColorAndroid='transparent'
                />
                <TextInput
                    style={styles.input}
                    placeholder={'Time'}
                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                    underlineColorAndroid='transparent'
                />
                <Dropdown
                    label={'AM/PM'}
                    itemPadding = {4}
                    data={data}
                />
                <TextInput
                    style={styles.input}
                    placeholder={'Location'}
                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                    underlineColorAndroid='transparent'
                />
                <Dropdown
                    label={'Public/Private'}
                    itemPadding = {4}
                    data={data2}
                />
                <TextInput
                    style={styles.description}
                    placeholder={'Description'}
                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                    underlineColorAndroid='transparent'
                />
            </View>

            <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.loginText} >Post Gather</Text>
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
        backgroundColor: '#432577',
        justifyContent: 'center',
        marginTop: 20
    },
    description: {
        width: WIDTH - 55,
                height: 125,
                borderRadius: 45,
                fontSize: 16,
                paddingLeft: 45,
                backgroundColor: 'rgba(0, 0, 0, 0.35)',
                color: 'rgba(255, 255, 255, 0.7)',
                marginHorizontal: 25,
                marginTop: 5

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
