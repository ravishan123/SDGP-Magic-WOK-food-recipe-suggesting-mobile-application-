import {Button,TextInput,StyleSheet,ImageBackground} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import * as React from 'react';
import  { Component } from "react";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
 import { StackScreenProps } from '@react-navigation/stack';
  import { RootStackParamList } from '../types';

export default function register ({navigation,} : StackScreenProps<RootStackParamList, 'Root'>){
  const image = { uri: "https://media.istockphoto.com/vectors/preparations-and-mushroom-dishes-on-a-white-background-vector-id1264636364?s=612x612" };
    return (
      
      <View >
        
        <ScrollView>
        <ImageBackground source ={require('../components/Images/i4.jpg')} style={styles.image}>
        <View style={{marginLeft:40,marginRight:40,marginTop:120,marginBottom:120,backgroundColor:'white',borderRadius:30,borderWidth:0,}}>
          <View>
        <Text style={{padding:10, fontWeight:'bold',fontSize:35,marginTop:30,color:'black',textAlign:'center'}}>Register Page</Text>
        </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='First Name :'
          autoCapitalize="none"
          placeholderTextColor='#a9a9a9'
          
        />

        <TextInput
          style={styles.input} 
          placeholder='Last Name :'
          autoCapitalize="none"
          placeholderTextColor='#a9a9a9'
          
        />

        <TextInput
          style={styles.input}
          placeholder='Username :'
          autoCapitalize="none"
          placeholderTextColor='#a9a9a9'
          
        />
        <TextInput
          style={styles.input}
          placeholder='Password :'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='#a9a9a9'
         
        />
         <TextInput
          style={styles.input}
          placeholder='Confirm Password :'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='#a9a9a9'
         
        />

        <TextInput
          style={styles.input}
          placeholder='Email :'
          autoCapitalize="none"
          placeholderTextColor='#a9a9a9'
          
        />
        <TextInput
          style={styles.input}
          placeholder='Phone Number :'
          autoCapitalize="none"
          placeholderTextColor='#a9a9a9'
          
        />
        </View>
        <View style={{marginTop:30,padding:0,borderRadius:50,marginLeft:20,marginRight:20}}>
          
        {/* <Button
          title='  Register  '
          onPress={()=> navigation.navigate('Root')} 
          color={'#fbb124'}
      
        /> */}
        <TouchableOpacity  onPress={()=> navigation.navigate('Root')}>
        <Text style={{padding:12,fontWeight:'bold',fontSize:25,marginTop:'5%',color:'white',backgroundColor:'#fbb124',textAlign:'center',borderRadius:50}}>Register</Text>

        </TouchableOpacity>
        </View>
        <Text style={{padding:10,fontWeight:'bold',fontSize:3,marginTop:5,color:'white'}}>magic Wok</Text>
        </View>
        </ImageBackground>
        </ScrollView>
        
      </View>
    
  
    );
    
 
}

const styles = StyleSheet.create({
  input: {
    width: 280,
    height: 55,
    backgroundColor: 'white',
    marginTop: 30,
    marginLeft:15,
    padding: 8,
    color: 'black',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '300',
    borderWidth:1,
    borderColor:'#fbb124'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
   
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});

