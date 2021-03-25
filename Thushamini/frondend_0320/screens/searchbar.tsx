import { StyleSheet,ImageBackground } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Container,Header,Icon,Input,Item,Text,View} from 'native-base';
import React,{ constructor } from 'react';
import { Component } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, Image, Platform ,Modal,Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import *as Permissions from 'expo-permissions'

const pickFromGallery = async()=>{
 const {granted}= await Permissions.askAsync(Permissions.CAMERA_ROLL)
 if (granted){
  let data=await ImagePicker.launchImageLibraryAsync({
    mediaTypes:ImagePicker.MediaTypeOptions.Images,
    allowsEditing:true,
    aspect:[1,1],
    quality:0.5
  })
  console.log(data)
 }else{
  Alert.alert("you need to give permission to continue")
 }
}

const pickFromCamera = async()=>{
  const {granted}= await Permissions.askAsync(Permissions.CAMERA)
  if (granted){
   let data=await ImagePicker.launchCameraAsync({
     mediaTypes:ImagePicker.MediaTypeOptions.Images,
     allowsEditing:true,
     aspect:[1,1],
     quality:0.5
   })
   console.log(data)
  }else{
   Alert.alert("you need to give permission to continue")
  }
 }

export default class TabFourScreen extends Component {

  

  render(){

    return (
      <Container style={styles.container}>

        <View style={styles.headerContainer}>
        <Header  style={styles.header} searchBar rounded >
              <Item>
                <Icon name="search"/>
                  <Input placeholder="search"></Input>
              </Item>
        </Header>
        <View style={styles.cameraIcon}>
          <Icon name="camera"/>
        </View>
        </View>

        
        
        <TouchableOpacity style={styles.button} onPress={()=>pickFromCamera()}>
          <Text>
            camera
          </Text>
        </TouchableOpacity >


        <TouchableOpacity style={styles.button} onPress={()=>pickFromGallery()}>
          <Text>
            gallery
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text>
            search
          </Text>
        </TouchableOpacity>         
      </Container>
    );
  }  
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  headerContainer:{
    flexDirection:'column',
    backgroundColor:'rgb(255, 204, 0)',
    flex:0.2
  },
  header:{
    backgroundColor:'rgb(255, 204, 0)',
    borderColor:'black',
    borderWidth:3,
    width:'99%',

  },
  cameraIcon:{
    alignSelf:'center',
  },
  button:{
    height:60,
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    width:'98%',
    marginLeft:'1%'
  },
});