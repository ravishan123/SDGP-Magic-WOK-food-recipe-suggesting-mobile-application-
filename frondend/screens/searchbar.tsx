// import { StyleSheet,ImageBackground, TouchableHighlight, ActivityIndicator, TextInput } from 'react-native';
// import {Container,Header,Icon,Input,Item,Text,View} from 'native-base';
// import { SearchBar } from 'react-native-elements';
// import React,{ constructor } from 'react';
// import { Component } from 'react';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { Button, Image, Platform ,Modal,Alert} from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import *as Permissions from 'expo-permissions'
// import base64 from 'base-64'
// import { AntDesign } from '@expo/vector-icons';

// import PredResult from './components/Modals/PredResult'

// import axios from 'axios';
// import SearchResult from './components/Modals/SearchResult';

// export default class TabTwoScreen extends Component {

//   state = {
//     predictedValues: '',
//     modalPredictVisible: false,
//     modalSearchVisible: false,
//     isLoading: false,
//     searchValue: '',
//     userInput: '',
//     searchResults: '',
//     userIngredientlist: [],
//   }



//   pickFromGallery = async()=>{
//     const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
//     if (granted){
//      let data = await ImagePicker.launchImageLibraryAsync({
//        mediaTypes:ImagePicker.MediaTypeOptions.Images,
//        allowsEditing:true,
//        base64:true,
//        aspect:[1,1],
//        quality:0.5
//      })
//      console.log(data)
//      this.setState({isLoading:true})
   
//      let form_data = new FormData();
//      form_data.append('image_base64', data.base64);
//      this.props.navigation.navigate('PredResults', form_data)

    
   
//     }else{
//      Alert.alert("you need to give permission to continue")
//     }
//    }

//   pickFromCamera = async()=>{
//     const {granted} = await Permissions.askAsync(Permissions.CAMERA)
//     if (granted){
//      let data = await ImagePicker.launchCameraAsync({
//        mediaTypes:ImagePicker.MediaTypeOptions.Images,
//        allowsEditing:true,
//        base64:true,
//        aspect:[1,1],
//        quality:0.5
//      })
//      console.log(data)
//      this.setState({modalPredictVisible:true})
     
  
//       // ImagePicker saves the taken photo to disk and returns a local URI to it
//       let localUri = data.uri;
//       let base64 = data.base64;
  
//       let filename = localUri.split('/').pop();
  
//       // Infer the type of the image
//       let match = /\.(\w+)$/.exec(filename);
//       let type = match ? `image/${match[1]}` : `image`;
//       let form_data = new FormData();
//     // form_data.append('photo', { uri: localUri, name: filename, type, base64 });
  
//           form_data.append('image_base64', data.base64);
  
   
  
//     }else{
//      Alert.alert("you need to give permission to continue")
//     }
//    }

//    parentHandlerForSearch(result){
//     //do your update here
//     console.log(result);
//   }

//   parentHandlerForPredict(result){
//     //do your update here
//     console.log(result);
//   }

//   handleSubmitIngredient = () => {
//     console.log("LLLLLLLLLLLLLLLLL")
//     this.setState({isLoading: true})
//     let form_data = new FormData();
//     form_data.append('search_key', this.state.searchValue);
//     this.props.navigation.navigate('SearchResults', form_data)
 
//   }

//   addUserIngredients = () => {
//     const ingredientList = []
//     ingredientList.push(this.state.searchValue)
//     this.setState({
//       searchValue: '',
//       userIngredientlist: ingredientList,
//     })
//   }

//   handleChange = (text) => {
//     console.log(`text`, text)
//     this.setState({
//       searchValue: text
//     })
//   }

//   render(){

//     return (
//       <Container style={styles.container}>

//           <SearchBar
//               placeholder="Type Here..."
//               onChangeText={this.handleChange}
//               value={this.state.searchValue}
//               onSubmitEditing={this.handleSubmitIngredient}
//           />
        


//           <TouchableOpacity style={styles.button} onPress={()=> this.pickFromGallery()}>
//             <Text>
//               gallery
//             </Text>
//           </TouchableOpacity> */}
//           <Button title="Camera" onPress={() => this.pickFromCamera()} />
//           <Button title="Gallery" onPress={()=> this.pickFromGallery()} />

        
//       </Container>
//     );
//   }  
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//   },
//   headerContainer:{
//     flexDirection:'column',
//     backgroundColor:'rgb(255, 204, 0)',
//     flex:0.2
    
//   },
//   bodyContainer:{
//     marginTop:20,
//     flexDirection:'column',
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
//     marginTop:40,
//     width:'98%',
//     marginLeft:'1%'
//   },
//   // button:{
//   //   height:60,
//   //   backgroundColor:'red',
//   //   justifyContent:'center',
//   //   alignItems:'center',
//   //   width:'98%',
//   //   marginLeft:'1%',
//   //   marginTop:'20%'
//   // },
//   arrowButton:{
//     marginTop: 10,
//     marginLeft:20,
//   },
//   //modal styles
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
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




import { StyleSheet,ImageBackground, TouchableHighlight, ActivityIndicator, TextInput } from 'react-native';
import {Container,Header,Icon,Input,Item,Text,View} from 'native-base';
import { SearchBar } from 'react-native-elements';
import React,{} from 'react';
import { Component } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Image, Platform ,Modal,Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import *as Permissions from 'expo-permissions'
import { AntDesign } from '@expo/vector-icons';

import PredResult from './components/Modals/PredResult'

import axios from 'axios';
import SearchResult from './components/Modals/SearchResult';

export default class searchbar extends Component {

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
    
  
    }else{
     Alert.alert("you need to give permission to continue")
    }
   }

   parentHandlerForSearch(result){
    
    console.log(result);
  }

  parentHandlerForPredict(result){
    
    console.log(result);
  }

  handleSubmitIngredient = () => {
    console.log("LLLLLLLLLLLLLLLLL")
    this.setState({isLoading: true})
    let form_data = new FormData();
    form_data.append('search_key', this.state.searchValue);
    this.props.navigation.navigate('SearchResults', form_data)
  
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

  button = () => {
    this.props.navigation.navigate('Root')
  }

  render(){


  
    return (
      <Container style={styles.container}>
        <View>
         <TouchableOpacity onPress={this.button}>
          <Image source={require('../components/Images/k1.png')} style={{width:30, height:30, marginLeft:'5%',marginTop:15,marginBottom:10}}></Image> 
          </TouchableOpacity>
          </View>
          <SearchBar
              placeholder="Type Here..."
              onChangeText={this.handleChange}
              value={this.state.searchValue}
              onSubmitEditing={this.handleSubmitIngredient}
              containerStyle={{backgroundColor: 'black'}}
              round={true}
          />

          
          <View style={styles.container2}>
          <ImageBackground source={require('../components/Images/bg8.jpg')}  style={styles.image2}>
          <View style={styles.container2} >

          <View style={styles.circle}>
            <TouchableOpacity style={styles.button} onPress={()=> this.pickFromGallery()}>
              <AntDesign style={styles.icon} name="picture" size={100} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.circle}>
            <TouchableOpacity style={styles.button} onPress={() => this.pickFromCamera()}>
              <AntDesign style={styles.icon} name="camera" size={100} color="white" />
            </TouchableOpacity>
          </View>

          </View>
          </ImageBackground>
          </View>

          
          
      </Container>
    );
  }  
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:'6%'
  },
  container2:{
    flex:1,
  },
  circle:{
    marginTop:'25%',
    borderWidth:5,
    borderColor:'white',
    opacity:0.8,
    backgroundColor:'black',
    width:'40%',
    height:'24%',
    alignSelf:'center',
    borderRadius:100,
  },
  image:{
    resizeMode: "cover",
    flex:1
  },
  image2:{
    resizeMode: "stretch",
    flex:1,
    opacity:0.9
  },
  button:{
    height:'79%',
    width:'76%',
    alignSelf:'center',
    marginTop:'13%'
  },
  icon:{
    alignSelf:'center',
    opacity:1,
    color:'white'
  }
});