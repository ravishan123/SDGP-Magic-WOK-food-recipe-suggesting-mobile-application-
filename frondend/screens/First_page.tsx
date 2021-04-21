import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, Text, TouchableOpacity, View,Image,ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackParamList } from '../types';
import React, { useState } from 'react';




export default function First_page({navigation,} : StackScreenProps<RootStackParamList, 'register'>) {

  
    const [align, setAlign] = useState('center');
    const [alignsecond, setAlignsecond] = useState(false);
  
    setTimeout(() => {
      setAlign('flex-start'), setAlignsecond(true);
    }, 6000);
  

  return (
    <View style={{backgroundColor:'white'}}>
       {alignsecond ? null : (
    <View>
        {/* <ImageBackground source ={require('../components/Images/new.gif')} style={styles.image}></ImageBackground> */}
        <Image source={require('../components/Images/first1.gif')} style={{width:'100%',resizeMode: 'cover'}}></Image>
      </View>
       )}
           {!alignsecond ? null : (
             <View>
          <View style={{marginTop:-40,backgroundColor:'white'}}>
        <Image source={require('../components/Images/i1.jpg')} style={{width:'100%',height:500,resizeMode: 'cover'}}></Image>
        </View>
        
    <View style={{marginTop:50,padding:10,borderRadius:15,backgroundColor:"white",marginLeft:20,marginRight:20,borderWidth:2,borderColor:"#fbb124"}}>
      <TouchableOpacity onPress={()=> navigation.navigate('register')}>
      <Text style={{color:'black',fontSize:25,fontWeight:'bold',textAlign:'center',alignContent:'center'}}>Register</Text>
      </TouchableOpacity>
      </View>
      <View style={{marginTop:40,padding:10,borderRadius:15,backgroundColor:"white",marginLeft:20,marginRight:20,borderWidth:2,borderColor:"#fbb124"}}>
      <TouchableOpacity onPress={()=> navigation.navigate('login')}>
      <Text style={{color:'black',fontSize:25,fontWeight:'bold',textAlign:'center',alignContent:'center'}}>Login</Text>
      </TouchableOpacity>
    </View>
       
    </View>
  )}
   </View> 
  );
  
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },

});
