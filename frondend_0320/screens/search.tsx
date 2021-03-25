// import * as React from 'react';
// import { StyleSheet, Button } from 'react-native';

// import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';

// export default function TabTwoScreen() {

//   const cameraRedirect = (props) => {
//     props.navigation.navigate("Camera");
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Recognize a dish by camera</Text>
//       <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//       {/* <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
//       <Button
//         onPress={cameraRedirect}
//         title="Camera"
//         color="#841584"
//         accessibilityLabel="Learn more about this purple button"
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });


import { StyleSheet,ImageBackground, TouchableHighlight, ActivityIndicator } from 'react-native';
import {Container,Header,Icon,Input,Item,Text,View} from 'native-base';
import React,{ constructor } from 'react';
import { Component } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Image, Platform ,Modal,Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import *as Permissions from 'expo-permissions'
import base64 from 'base-64'

import PredResult from './components/Modals/PredResult'

import axios from 'axios';


// const pickFromGallery = async()=>{
//  const {granted}= await Permissions.askAsync(Permissions.CAMERA_ROLL)
//  if (granted){
//   let data=await ImagePicker.launchImageLibraryAsync({
//     mediaTypes:ImagePicker.MediaTypeOptions.Images,
//     allowsEditing:true,
//     base64:true,
//     aspect:[1,1],
//     quality:0.5
//   })
//   console.log(data)

//   let form_data = new FormData();
//   form_data.append('image_base64', data.base64);
//   axios.post('http://10.0.2.2:8000/api/image_recognition', form_data, {
//     headers: {
//       'content-type': 'multipart/form-data'
//     }
//   }).then(res => {
//     console.log(res)
//   }).catch(err => console.log(err))

//  }else{
//   Alert.alert("you need to give permission to continue")
//  }
// }

// const pickFromCamera = async()=>{
//   const {granted}= await Permissions.askAsync(Permissions.CAMERA)
//   if (granted){
//    let data=await ImagePicker.launchCameraAsync({
//      mediaTypes:ImagePicker.MediaTypeOptions.Images,
//      allowsEditing:true,
//      base64:true,
//      aspect:[1,1],
//      quality:0.5
//    })
//    console.log(data)
//   //  console.log(base64.isbase64(data.base64))
//   //  axios.post('http://127.0.0.1:8000/api/image_recognition', ).then(res => {
//   //    console.log(res)
//   //  }).catch(err => console.log(err))
//     // ImagePicker saves the taken photo to disk and returns a local URI to it
//     let localUri = data.uri;
//     let base64 = data.base64;

//     let filename = localUri.split('/').pop();

//     // Infer the type of the image
//     let match = /\.(\w+)$/.exec(filename);
//     let type = match ? `image/${match[1]}` : `image`;
//     let form_data = new FormData();
//   // form_data.append('photo', { uri: localUri, name: filename, type, base64 });

//         form_data.append('image_base64', data.base64);

//    axios.post('http://10.0.2.2:8000/api/image_recognition', form_data, {
//     headers: {
//       'content-type': 'multipart/form-data'
//     }
//   }).then(res => {
//     console.log(res)
//   }).catch(err => console.log(err))

//   }else{
//    Alert.alert("you need to give permission to continue")
//   }
//  }

export default class search extends Component {

  state = {
    predictedValues: '',
    modalVisible: false,
    isLoading: false,
    searchedArray:{data:''},
  }

  loadModal = () => {
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.isLoading}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                <ActivityIndicator size="large" color="#00ff00" />
              </Text>
            </View>
          </View>

        </Modal>

      </View>
    );
  }

  resultModal = () => {
    return (
      <View style={styles.centeredView}>
        <Modal
          presentationStyle="fullScreen"
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          {/* <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
  
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
                onPress={() => {
                  this.setState({modalVisible:!this.state.modalVisible});
                }}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View> */}
          <View style={styles.container}>
              <Image source={this.state.predictedValues.image} style={{ width: 142, height: 82 }} />
              <Text style={styles.paragraph}>
                {this.state.predictedValues.recipe_name}
              </Text>
              <Text style={styles.paragraph}>
                AYYO
              </Text>
              <Text style={styles.paragraph}>
                {this.state.predictedValues}
              </Text>
              {console.log("kkkkkkkkkkk", this.state.predictedValues)}
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: '#000000' }}
                onPress={() => {
                  this.setState({modalVisible:!this.state.modalVisible});
                }}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableHighlight>
          </View>
        </Modal>
  
        {/* <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setState({modalVisible:true});
          }}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </TouchableHighlight> */}
      </View>
    );
  }

  pickFromGallery = async()=>{
    const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if (granted){
     let data = await ImagePicker.launchImageLibraryAsync({
       mediaTypes:ImagePicker.MediaTypeOptions.Images,
       allowsEditing:true,
       base64:true,
       aspect:[1,1],
       quality:0.5
     })
     console.log(data)
     this.setState({isLoading:true})
   
     let form_data = new FormData();
     form_data.append('image_base64', data.base64);
     axios.post('http://10.0.2.2:8000/api/image_recognition', form_data, {
       headers: {
         'content-type': 'multipart/form-data'
       }
     }).then(res => {
       console.log(res)
       this.setState({
        predictedValues: res.data[0], 
        isLoading: false,
        modalVisible:true
      })
     }).catch(err => {
       console.log(err)
       this.setState({
        modalVisible:false,
        isLoading: false,
        })
      })
   
    }else{
     Alert.alert("you need to give permission to continue")
    }
   }

  pickFromCamera = async()=>{
    const {granted} = await Permissions.askAsync(Permissions.CAMERA)
    if (granted){
     let data = await ImagePicker.launchCameraAsync({
       mediaTypes:ImagePicker.MediaTypeOptions.Images,
       allowsEditing:true,
       base64:true,
       aspect:[1,1],
       quality:0.5
     })
     console.log(data)
     this.setState({modalVisible:true})
    //  console.log(base64.isbase64(data.base64))
    //  axios.post('http://127.0.0.1:8000/api/image_recognition', ).then(res => {
    //    console.log(res)
    //  }).catch(err => console.log(err))
      // ImagePicker saves the taken photo to disk and returns a local URI to it
      let localUri = data.uri;
      let base64 = data.base64;
  
      let filename = localUri.split('/').pop();
  
      // Infer the type of the image
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;
      let form_data = new FormData();
    // form_data.append('photo', { uri: localUri, name: filename, type, base64 });
  
          form_data.append('image_base64', data.base64);
  
     axios.post('http://10.0.2.2:8000/api/image_recognition', form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }).then(res => {
      console.log(res)
      this.setState({
        predictedValues: res.data[0], 
        isLoading: false,
      })
    }).catch(err => {
      console.log(err)
      this.setState({
       modalVisible:false,
       isLoading: false,
       })
     })
  
    }else{
     Alert.alert("you need to give permission to continue")
    }
   }

   parentHandler(result){
    //do your update here
    console.log(result);
  }

  handleChange = (e) => {
    this.setState({
        searchedArray:{
            ...this.state.searchedArray,
            [e.target.name] : e.target.value
        }
    })
  }

  submitSearch = (e) => {
    
    const {search} = this.state;
    console.log(search)
    axios.post('http://10.0.2.2:8000/api/api/recipe', {
        headers: {
          'content-type': 'multipart/form-data'
        },
        search: search
      })
      .then(res => {
        console.log(res)
        this.setState({
          predictedValues: res.data[0], 
          isLoading: false,
        })
      }).catch(err => {
        console.log(err)
        this.setState({
         modalVisible:false,
         isLoading: false,
         })
       })
  }

  render(){

    return (
      <Container style={styles.container}>

        <View style={styles.headerContainer}>
        <Header  style={styles.header} searchBar rounded >
              <Item>
                <Icon name="search"/>
                  <Input placeholder="search" onChange={this.handleChange} ></Input>
                  {/* <Input placeholder="search" onChangeText={search => this.handleChange(search)}> </Input> */}
              </Item>
        </Header>
        <View style={styles.cameraIcon}>
          <Icon name="camera"/>
        </View>
        </View>

        
        
        <TouchableOpacity style={styles.button} onPress={()=> this.pickFromCamera()}>
          <Text>
            camera
          </Text>
        </TouchableOpacity >


        <TouchableOpacity style={styles.button} onPress={()=> this.pickFromGallery()}>
          <Text>
            gallery
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}           
          // onPress={
          //   () => this.setState({modalVisible:true})
        
           
          // }  
          onPress={this.submitSearch}

          >
          <Text>
            search
          </Text>
        </TouchableOpacity>  
        {this.loadModal()}   
        {/* {this.resultModal()}        */}
        <PredResult visible={this.state.modalVisible} predictedValues={this.state.predictedValues} handler={this.parentHandler} />
      </Container>
    );
  }  
}

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//   },
//   headerContainer:{
//     flexDirection:'column',
//     backgroundColor:'rgb(255, 204, 0)',
//     flex:0.2
//   },
//   header:{
//     backgroundColor:'rgb(255, 204, 0)',
//     borderColor:'black',
//     borderWidth:3,
//     width:'99%',

//   },
//   cameraIcon:{
//     alignSelf:'center',
//   },
//   button:{
//     height:60,
//     backgroundColor:'red',
//     justifyContent:'center',
//     alignItems:'center',
//     marginTop:20,
//     width:'98%',
//     marginLeft:'1%'
//   },

//   //modal styles
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 40,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   openButton: {
//     backgroundColor: '#F194FF',
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
// });
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  headerContainer:{
    height:70,
    flexDirection:'row',
    backgroundColor:'rgb(255, 204, 0)',
    flex:0.2
  },
  header:{
    backgroundColor:'rgb(255, 204, 0)',
    // borderColor:'black',
    // borderWidth:3,
    // borderBottomWidth:3,
    // borderBottomColor:'black',
    width:'130%',

  },
  cameraIcon:{
    alignSelf:'center',
  },
  button:{
    height:60,
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center',
    width:'98%',
    marginLeft:'1%',
    marginTop:'20%'
  },
  enterButton:{
    marginLeft:'42%',
    marginTop:'10%'
  },
});