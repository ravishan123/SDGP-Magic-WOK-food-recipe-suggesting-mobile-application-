import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

export default class Register extends React.Component{

    render(){
        
        return(
            <View style={{backgroundColor:"#FFFFFF",height:"100%"}}>
                <Image source ={require('../assets/image.jpg')}
                    style={{width:"100%",height:"60%"}}
                />
                <Text
                 style={{
                     fontSize:30,
                     fontFamily:"",
                     alignSelf:"center",
                     color:'#FFAA00'
                 }}
                >JOIN WITH US</Text>

                <Text
                style={{
                    fontFamily:"",
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                >
                   A recipe has no soul. You as the cook must bring soul to the recipe.
                </Text>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#FFAA00",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                  
                    <TextInput 
                        placeholder="Email"
                        placeholderTextColor="#FFAA00"
                        style={{paddingHorizontal:10}}
                    />

                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#FFAA00",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                   
                   <TextInput 
                        secureTextEntry
                        placeholder="Password"
                        placeholderTextColor="#FFAA00"
                        style={{paddingHorizontal:10}}
                    />


                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#FFAA00",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                   
                   <TextInput 
                        secureTextEntry
                        placeholder="Confirm Password"
                        placeholderTextColor="#FFAA00"
                        style={{paddingHorizontal:10}}
                    />
                    

                </View>

                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#FFAA00",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text style={{
                        color:"#FFFFFF"
                    }}>Register</Text>
                </View>
              
            </View>
        )
    }
}