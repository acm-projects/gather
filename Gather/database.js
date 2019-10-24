import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import bgImage from './Images/OrangeBackround.jpg'
import logo from './Images/Logo.jpg'
import firebase from './firebaseconfig.js';
import {Button} from 'native-base';

const { width: WIDTH } = Dimensions.get('window')
export default class Login extends Component {

  constructor(props){
            super(props)

            this.state = ({
                title:'',
                time: '',
                location: '',
                description:''
            })
   }

    submitGather = (title, time, location, description) => {
        var postData = {
            title: title,
            time: time,
            location: location,
            description: description
        };

        var newPostKey = firebase.database().ref().child('users').push().key;

        var updates = {};
        updates[newPostKey] = postData;

        return firebase.database().ref().update(updates);
    }

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
                    onChangeText = {(title) => this.setState({title})}
                    value = {this.state.title}
                />
                <TextInput
                    style={styles.input}
                    placeholder={'Time'}
                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                    underlineColorAndroid='transparent'
                    onChangeText = {(time) => this.setState({time})}
                    value = {this.state.time}
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
                    onChangeText = {(location) => this.setState({location})}
                    value = {this.state.location}
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
                    onChangeText = {(description) => this.setState({description})}
                    value = {this.state.description}
                />
            </View>

            <View style={styles.btnLogin}>
                <Button
                    full
                    rounded
                    success
                    onPress = {() => this.submitGather(this.state.title, this.state.time, this.state.location, this.state.description)}
                 >
                 <Text> Submit Gather </Text>
                 </Button>
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






//import React, { Component } from 'react';
////import { Text, View, StyleSheet, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';
////import firebase from 'firebase';
////import Database from './database.js';
//import Login from './login.js';
////import bgImage from './Images/OrangeBackround.jpg'
////import logo from './Images/Logo.jpg'
////
////const { width: WIDTH } = Dimensions.get('window')
//
//export default Login




