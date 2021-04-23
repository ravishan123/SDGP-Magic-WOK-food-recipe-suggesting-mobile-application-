import {Button,TextInput,StyleSheet,Image} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import * as React from 'react';
// import  { Component } from "react";
// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default class register extends React.Component {
  state = {
    username: '', password: '', email: '', phone_number: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  register = async () => {
    const { username, password, email, phone_number } = this.state
    try {
      // here place your signup logic
      console.log('user successfully registered!: ', success)
    } catch (err) {
      console.log('error Register: ', err)
    }
  }
 
  render() {
    return (
      <View >
        <ScrollView>
        
        <View>
        <Text style={{padding:10, fontWeight:'bold',fontSize:35,marginTop:30,color:'black',textAlign:'center'}}>Register Page</Text>
        {/* <Image source={require('../components/Images/reg.jpg')} style={{width:'100%', height: 250}}></Image>  */}
        
        </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='First Name :'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('first_name', val)}
        />

        <TextInput
          style={styles.input}
          placeholder='Last Name :'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('last_name', val)}
        />

        <TextInput
          style={styles.input}
          placeholder='Username :'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password :'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
         <TextInput
          style={styles.input}
          placeholder='Confirm Password :'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('Confirm_password', val)}
        />

        <TextInput
          style={styles.input}
          placeholder='Email :'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Phone Number :'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('phone_number', val)}
        />
        </View>
        <View style={{marginTop:50,padding:15,borderRadius:50}}>
          <TouchableOpacity>
        <Button
          title='  Register  '
          onPress={this.register}
          color={'#407294'}
        />
        </TouchableOpacity>
        </View>
        <Text style={{padding:10,fontWeight:'bold',fontSize:3,marginTop:'20%',color:'white'}}>magic Wok</Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: 'gray',
    marginTop: 30,
    marginLeft:15,
    padding: 8,
    color: 'black',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
   
  }
})