import * as React from 'react';
import  { Component } from "react";
import { StyleSheet,Image,Button,TextInput,Alert } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';




  class App extends Component {
    createTextAlert = () =>
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
  
  render(){
  return (
    <View>
      <ScrollView>
      <View>
       <Image source={require('../components/images/food.jpg')} style={{width:'100%', height: 250}}></Image> 
       <View>
      <Text style={{padding:10, fontWeight:'bold',fontSize:25,marginTop:-150,color:'white',marginLeft:'25%'}}>Account Setting</Text>
      </View>
      </View>
      <View>
        <View>
      <Text style={{padding:10, fontWeight:'bold',fontSize:15,marginTop:30,color:'black'}}>Enter User Name</Text>
      <TextInput
      style={{ height: 30, borderColor: 'gray', borderWidth:0,marginLeft:170,marginTop:-20,marginHorizontal:10 }}/>
      <Text style={{padding:10, fontWeight:'bold',fontSize:15,color:'black',marginLeft:150,marginTop:-20}}>________________________________</Text>
      
      </View>
      <View>
      <Text style={{padding:10, fontWeight:'bold',fontSize:15,marginTop:20,color:'black'}}>Enter Email</Text>
      <TextInput
      style={{ height: 30, borderColor: 'gray', borderWidth:0,marginLeft:170,marginTop:-20 ,marginHorizontal:10}}/>
      <Text style={{padding:10, fontWeight:'bold',fontSize:15,color:'black',marginLeft:150,marginTop:-20,elevation:5}}>________________________________</Text>
      </View>
      <Text style={{padding:10, fontWeight:'bold',fontSize:20,marginTop:30,color:'black'}}>Change Password</Text>
      <View>
      <Text style={{padding:10, fontWeight:'bold',fontSize:15,marginTop:20,color:'black'}}>Current Password</Text>
      <TextInput
      style={{ height: 30, borderColor: 'gray', borderWidth:0,marginLeft:170,marginTop:-20 ,marginHorizontal:10}}/>
      <Text style={{padding:10, fontWeight:'bold',fontSize:15,color:'black',marginLeft:150,marginTop:-20}}>________________________________</Text>
      </View>
      <View>
      <Text style={{padding:10, fontWeight:'bold',fontSize:15,marginTop:20,color:'black'}}>New Password</Text>
      <TextInput
      style={{ height: 30, borderColor: 'white', borderWidth:1,marginLeft:170,marginTop:-20,marginHorizontal:10}}/>
      <Text style={{padding:10, fontWeight:'bold',fontSize:15,color:'black',marginLeft:150,marginTop:-20}}>________________________________</Text>
      </View>
      </View>
      <View style={{marginTop:50}}>
        <TouchableOpacity>
     { /* <Text style={{padding:10,fontWeight:'bold',fontSize:15,marginTop:30,color:'white',backgroundColor:'#D35400'}}>                                           submit              </Text> */}
       <Button title={"Submit"} onPress={this.createTextAlert} color='#D35400' /> 
      </TouchableOpacity>

      <Text style={{padding:10,fontWeight:'bold',fontSize:3,marginTop:'50%',color:'white'}}>magic Wok</Text>
      {/* <Button 
        title="submit"
        onPress={() => Alert.alert('Simple Button pressed')}
        color='#D3540099'/> */}
      </View>
      </ScrollView>
     </View>
     );
    }
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

});

export default App;
