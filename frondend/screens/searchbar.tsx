import { StyleSheet,ImageBackground, TouchableHighlight, ActivityIndicator, TextInput } from 'react-native';
import {Container,Header,Icon,Input,Item,Text,View} from 'native-base';
import { SearchBar } from 'react-native-elements';
import React,{ constructor } from 'react';
import { Component } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Image, Platform ,Modal,Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import *as Permissions from 'expo-permissions'
import base64 from 'base-64'
import { AntDesign } from '@expo/vector-icons';

import PredResult from './components/Modals/PredResult'

import axios from 'axios';
import SearchResult from './components/Modals/SearchResult';

export default class TabTwoScreen extends Component {

  state = {
    predictedValues: '',
    modalPredictVisible: false,
    modalSearchVisible: false,
    isLoading: false,
    searchValue: '',
    userInput: '',
    searchResults: '',
    userIngredientlist: [],
  }

  // loadModal = () => {
  //   return (
  //     <View style={styles.centeredView}>
  //       <Modal
  //         animationType="slide"
  //         transparent={true}
  //         visible={this.state.isLoading}
  //         onRequestClose={() => {
  //           Alert.alert('Modal has been closed.');
  //         }}>
  //         <View style={styles.centeredView}>
  //           <View style={styles.modalView}>
  //             <Text style={styles.modalText}>
  //               <ActivityIndicator size="large" color="#00ff00" />
  //             </Text>
  //           </View>
  //         </View>

  //       </Modal>

  //     </View>
  //   );
  // }


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
     this.props.navigation.navigate('PredResults', form_data)

    //  axios.post('http://10.0.2.2:8000/api/image_recognition', form_data, {
    //    headers: {
    //      'content-type': 'multipart/form-data'
    //    }
    //  }).then(res => {
    //    console.log(res)
    //    this.setState({
    //     predictedValues: res.data[0], 
    //     isLoading: false,
    //   })
    //   this.props.navigation.navigate('PredResults')
    //  }).catch(err => {
    //    console.log(err)
    //    this.setState({
    //     modalPredictVisible: false,
    //     isLoading: false,
    //     })
    //   })
   
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
     this.setState({modalPredictVisible:true})
     
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
  
     this.props.navigation.navigate('PredResults', form_data)
    //  axios.post('http://10.0.2.2:8000/api/image_recognition', form_data, {
    //   headers: {
    //     'content-type': 'multipart/form-data'
    //   }
    // }).then(res => {
    //   console.log(res)
    //   this.setState({
    //     predictedValues: res.data[0], 
    //     isLoading: false,
    //   })
    // }).catch(err => {
    //   console.log(err)
    //   this.setState({
    //    modalPredictVisible:false,
    //    isLoading: false,
    //    })
    //  })
  
    }else{
     Alert.alert("you need to give permission to continue")
    }
   }

   parentHandlerForSearch(result){
    //do your update here
    console.log(result);
  }

  parentHandlerForPredict(result){
    //do your update here
    console.log(result);
  }

  handleSubmitIngredient = () => {
    console.log("LLLLLLLLLLLLLLLLL")
    this.setState({isLoading: true})
    let form_data = new FormData();
    form_data.append('search_key', this.state.searchValue);
    this.props.navigation.navigate('SearchResults', form_data)
  //   axios.post('http://10.0.2.2:8000/api/recipe_search_by_ingredient', form_data)
  //   .then(res => {
  //     console.log(res.data)
  //     this.setState({
  //       searchResults: res.data, 
  //       isLoading: false
  //     })
  //     this.props.navigation.navigate('PredResults')
  //   }).catch(err => {
  //     console.log(err)
  //     this.setState({
  //       isLoading: false
  //     })
  //   })
  }

  addUserIngredients = () => {
    const ingredientList = []
    ingredientList.push(this.state.searchValue)
    this.setState({
      searchValue: '',
      userIngredientlist: ingredientList,
    })
  }

  handleChange = (text) => {
    console.log(`text`, text)
    this.setState({
      searchValue: text
    })
  }

  render(){

    return (
      <Container style={styles.container}>

        {/* <View style={styles.headerContainer}> */}
          {/* <Header  style={styles.header} searchBar rounded >
                <Item>
                  <Icon name="search"/>
                    <TextInput
                      onChangeText={this.handleChange}
                      placeholder='search' />
                </Item>
                <TouchableOpacity 
                style={styles.arrowButton}
                onPress={this.handleSubmitIngredient}
                >
                  <AntDesign name="rightcircleo" size={30} color="white" />
                </TouchableOpacity>
          </Header> */}
          <SearchBar
              placeholder="Type Here..."
              onChangeText={this.handleChange}
              value={this.state.searchValue}
              onSubmitEditing={this.handleSubmitIngredient}
          />
        {/* </View> */}

        {/* <View>
          {this.state.userIngredientlist && this.state.userIngredientlist.map(item => {
            <Text>
              {item}
            </Text>
          })}
        </View> */}

        
        {/* <View style={styles.bodyContainer}>
          <TouchableOpacity style={styles.button} onPress={()=> this.pickFromCamera()}>
            <Text>
              camera
            </Text>
          </TouchableOpacity >


          <TouchableOpacity style={styles.button} onPress={()=> this.pickFromGallery()}>
            <Text>
              gallery
            </Text>
          </TouchableOpacity> */}
          <Button title="Camera" onPress={() => this.pickFromCamera()} />
          <Button title="Gallery" onPress={()=> this.pickFromGallery()} />

          {/* <TouchableOpacity style={styles.button}           
            onPress={
              () => this.setState({modalPredictVisible:true})
            //  () => console.log("CLIKED")
            }>
            <Text>
              search
            </Text>
          </TouchableOpacity>   */}
        {/* </View> */}
        {/* {this.loadModal()}    */}
        {/* {this.resultModal()}        */}
        {/* <PredResult visible={this.state.modalPredictVisible} predictedValues={this.state.predictedValues} handler={this.parentHandlerForPredict} />
        <SearchResult visible={this.state.modalSearchVisible} searchResults={this.state.searchResults} handler={this.parentHandlerForSearch} /> */}
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
  bodyContainer:{
    marginTop:20,
    flexDirection:'column',
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
    marginTop:40,
    width:'98%',
    marginLeft:'1%'
  },
  // button:{
  //   height:60,
  //   backgroundColor:'red',
  //   justifyContent:'center',
  //   alignItems:'center',
  //   width:'98%',
  //   marginLeft:'1%',
  //   marginTop:'20%'
  // },
  arrowButton:{
    marginTop: 10,
    marginLeft:20,
  },
  //modal styles
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});