import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackParamList } from '../types';
// import TypingText from "react-native-typical";

export default function First_page({navigation,} : StackScreenProps<RootStackParamList, 'register'>) {

  // const image = { uri: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2019/06/cropped-GettyImages-643764514.jpg" };
  return (
    // <LinearGradient colors={['#f00505', '#ff2c05', '#fd6104','#fd9a01','#ffce03','#fef001']}>
      <View style={{marginTop:20,backgroundColor:'white'}}>
        <View>
          {/* <TypingText
          steps={["Welcome to ",1000,"Magic Wok !!",1000]}
          loop={Infinity}
          /> */}
        <Image source={require('../components/Images/i1.jpg')} style={{width:'100%', height:450}}></Image>
        </View>
    <View style={{marginTop:50,padding:10,borderRadius:8,backgroundColor:"white",marginLeft:20,marginRight:20,borderWidth:2,borderColor:"#fbb124"}}>
      <TouchableOpacity onPress={()=> navigation.navigate('register')}>
      <Text style={{color:'black',fontSize:25,fontWeight:'bold',textAlign:'center',alignContent:'center'}}>Register</Text>
      </TouchableOpacity>
      </View>
      <View style={{marginTop:40,padding:10,borderRadius:8,backgroundColor:"white",marginLeft:20,marginRight:20,borderWidth:2,borderColor:"#fbb124"}}>
      <TouchableOpacity onPress={()=> navigation.navigate('login')}>
      <Text style={{color:'black',fontSize:25,fontWeight:'bold',textAlign:'center',alignContent:'center'}}>Login</Text>
      </TouchableOpacity>
    </View>
    
    </View>
    /* </LinearGradient> */
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
