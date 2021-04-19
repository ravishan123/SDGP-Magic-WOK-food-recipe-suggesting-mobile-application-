import { StyleSheet,ImageBackground, TouchableHighlight, ActivityIndicator, TextInput } from 'react-native';
import {Container,Header,Icon,Input,Item,Text,View} from 'native-base';
import { SearchBar } from 'react-native-elements';
import React,{ constructor } from 'react';
import { Component } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Image, Platform ,Modal,Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import *as Permissions from 'expo-permissions'
import { AntDesign } from '@expo/vector-icons';


export default class searchbar2 extends Component {

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
    //  this.props.navigation.navigate('PredResults2', form_data)

   
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
  
      
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;
      let form_data = new FormData();
  
          form_data.append('image_base64', data.base64);
  
    //  this.props.navigation.navigate('PredResults2', form_data)
    
  
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

  ingredientSearch = () => {
    // this.props.navigation.navigate('ingredientSearch')
  
  }

  render(){


  
    return (
      <Container style={styles.container}>
          <View style={styles.redirect}>
            <TouchableOpacity 
            style={styles.redirectButton}
            onPress={()=> this.ingredientSearch()}
            >
              <Text style={{marginRight:5, fontSize:24}}>Search by Text</Text>
              <AntDesign  style={{marginLeft:15}} name="rightcircleo" size={40} color="black" />
            </TouchableOpacity>
          </View>

          
          <View style={styles.container2}>
          <ImageBackground source={require('../components/Images/bg9.jpg')}  style={styles.image2}>
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
  redirect:{
    height:'10%',
    backgroundColor:'#ffd300',
    marginTop:'5%',
    borderBottomWidth:2,
    alignItems:'center',

  },
  redirectButton:{
    flex:1,
    flexDirection:'row',
    alignItems:'center'
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