import * as React from 'react';
import  { Component } from "react";
import { StyleSheet,Image,Button,TextInput,Alert } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParamList } from '../types';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { StackScreenProps } from '@react-navigation/stack';
import axios from 'axios';
import SyncStorage from 'sync-storage';


export default function accountSetting({navigation,}: StackScreenProps<RootStackParamList, 'Setting'>){
  const initialState = {first_name:'', last_name:'', email:''}
  const [inputs, setInputs] = React.useState(initialState)

  const handleChange = (text, id) => {
    setInputs({...inputs, [id]: text})
  }
  
    const createTextAlert = () => {
      const login_details = SyncStorage.get('login_details');
      console.log(login_details);
      navigation.navigate('login')

      Alert.alert(
        "Alert",
        "Submit All Information",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
      
    }
  
    
  
    const registerUser = () =>  {
      // navigation.navigate('Root')
     
    }
  

  return (
    <View style={{backgroundColor:'white'}}>
      <ScrollView>
      <View>
         <TouchableOpacity onPress={()=> navigation.navigate('Setting')}>
          <Image source={require('../components/Images/k1.png')} style={{width:30, height:30, marginLeft:'5%',marginTop:30}}></Image> 
          </TouchableOpacity>
          </View>
      <View>
       <Image source={require('../components/Images/i6.jpg')} style={{width:'100%', height: 250,marginTop:10}}></Image> 
       </View>
      
          
       <View>
       
      <Text style={{padding:10, fontWeight:'bold',fontSize:35,marginTop:-170,color:'black',textAlign:'center'}}>Account Setting</Text>
      </View>
      
  
<View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Enter First Name :'
          autoCapitalize="none"
          placeholderTextColor='#a9a9a9'
           id = "first_name"
           onChangeText={(text) => handleChange(text, "first_name")}
          
        />

        <TextInput
          style={styles.input} 
          placeholder='Enter Last Name :'
          autoCapitalize="none"
          placeholderTextColor='#a9a9a9'
           id = "last_name"
           onChangeText={(text) => handleChange(text, "last_name")}
        />
        <TextInput
          style={styles.input}
          placeholder='Email :'
          autoCapitalize="none"
          placeholderTextColor='#a9a9a9'
           id = "email"
           onChangeText={(text) => handleChange(text, "email")}
          
        />
     </View>

      <View style={{marginTop:0}}>
      <View style={{marginTop:50,padding:10,borderRadius:50,backgroundColor:'#fbb124',marginLeft:20,marginRight:20,borderWidth:2,borderColor:"#fbb124"}}>
      <TouchableOpacity onPress={createTextAlert} >
      <Text style={{color:'black',fontSize:25,fontWeight:'bold',textAlign:'center',alignContent:'center'}}>Submit</Text>
      </TouchableOpacity>
      </View>

      <Text style={{padding:10,fontWeight:'bold',fontSize:3,marginTop:5,color:'white'}}>magic Wok</Text>
      </View>
      </ScrollView>
     </View>
     );
    }
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    width: 280,
    height: 55,
    backgroundColor: 'white',
    marginTop: 30,
    marginLeft:5,
    padding: 8,
    color: 'black',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '300',
    borderWidth:1,
    borderColor:'#fbb124'
  },

});