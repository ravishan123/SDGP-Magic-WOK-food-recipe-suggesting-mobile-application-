import * as React from 'react';
import { StyleSheet, ScrollView, SafeAreaView,FlatList,Image,TouchableOpacity,ActivityIndicator,TouchableHighlight,TextInput,Button,ImageBackground,Alert} from 'react-native';
import { Text, View } from '../components/Themed';
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import *as Permissions from 'expo-permissions'
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import axios from 'axios';

export default function IngredientsListSearch({navigation,}: StackScreenProps<RootStackParamList, 'SearchIngredientResults'>){
  
  const [ingredient, setIngredient] = useState([]);
  const [text, setText] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  // const [predictedIngredient, setPredictedIngredient] = useState('');

  const ChangeHandler = (val) => {
    setText(val)
  }
  
  const pickFromGallery = async() => {
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
   
     let form_data = new FormData();
     form_data.append('image_base64', data.base64);

     axios.post('http://10.0.2.2:8000/api/ingredient_image_recognition', form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }).then(res => {
      // alert(res.data.prediction)
      console.log(res)
      submitHandlerPredict(res.data.prediction)
    }).catch(err => {
      console.log(err)
     })

    }else{
     Alert.alert("you need to give permission to continue")
    }
  }

  const pickFromCamera = async() => {
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
      let localUri = data.uri;
      let base64 = data.base64;
  
      let filename = localUri.split('/').pop();
  
      // Infer the type of the image
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;
      let form_data = new FormData();
    // form_data.append('photo', { uri: localUri, name: filename, type, base64 });
  
      form_data.append('image_base64', data.base64);
  
     axios.post('http://10.0.2.2:8000/api/ingredient_image_recognition', form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }).then(res => {
      console.log(res)
      submitHandlerPredict(res.data.prediction)
    }).catch(err => {
      console.log(err)
     })
  
    }else{
     Alert.alert("you need to give permission to continue")
    }
  }

  const submitHandler = () =>{
    setIngredient((prevIngredient) =>{
      return [
        {text:text},
        ...prevIngredient
      ]
      
    })
  }

  // const submitHandlerPredict = () =>{
  //   setIngredient(prevIngredient => [...prevIngredient, {predictedIngredient:predictedIngredient}])
  // }

  const submitHandlerPredict = (item) =>{
    setIngredient((prevIngredient) =>{
      return [
        {"text":item},
        ...prevIngredient
      ]
      
    })
  }

  function clearData(){
    console.log(ingredient)

    setIngredient(() => {
      return [
        {},
      ]
      
    })
    
  }

  function submitData(){
    var ingredient_list = []
    console.log(ingredient)
    console.log(ingredient[1])
    ingredient.map(item =>  {
      ingredient_list.push(item)
    })
    let form_data = new FormData();
    console.log(form_data)
    form_data.append('search_keys', ingredient);
    var arrayObj = new Object({"search_keys": ingredient})
    console.log(arrayObj)
    // props.navigation.navigate('SearchIngredientResults', arrayObj)
    navigation.navigate('SearchByIngredientsResultsScreen', arrayObj)
  }

  return (
    <View  style={styles.container}>

      <View style={styles.container2}>
      
      <TextInput
          style={styles.textinput}
          onChangeText={ChangeHandler}
          placeholder='Type here' />

        <TouchableOpacity 
        style={styles.button}
        onPress={() => submitHandler()}>
          <AntDesign name="rightcircleo" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* <ImageBackground source={require('../components/Images/bg8.jpg')} style={{width:'100%',height:'100%'}}> */}

      <View style={styles.items}>
        <FlatList
          data={ingredient}
          renderItem={({item}) => (
            <Text style={{color:'black'}}>{'\u25CF'} {item.text}</Text>
          )}
        />
      </View>  

      <View style={{flexDirection: 'row',marginLeft:'20%',marginTop:'10%'}}>

        <View >
          <TouchableOpacity onPress={pickFromCamera} style={styles.mainBtn}>
            <Icon
              name = 'ios-camera'
              size={30}
              color='black'
            />
          </TouchableOpacity>
        </View>

        <View >
          <TouchableOpacity onPress={pickFromGallery} style={styles.mainBtn}>
            <Icon
              name = 'ios-image'
              size={30}
              color='black'
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flexDirection: 'row',marginLeft:'20%',marginTop:'10%'}}>
        <View >
          <TouchableOpacity onPress={clearData} style={styles.mainBtn}>
            <Icon
              name = 'ios-trash'
              size={30}
              color='black'
            />
          </TouchableOpacity>
          
        </View>

        <View>
        <TouchableOpacity onPress={submitData} style={styles.mainBtn}>
            <Icon
              name = 'ios-enter'
              size={30}
              color='black'
            />
          </TouchableOpacity>
        </View>
        </View>
        {/* </ImageBackground> */}

    </View>
);
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column'
  },
  container2:{
    height:'8%',
    flexDirection:'row',
    width:'100%',
    backgroundColor:'#5D6D7E'
  },
  textinput:{
    height:'75%',
    backgroundColor:'white',
    width:'80%',
    borderRadius:5,
    margin:'2%',
    alignSelf:'center' ,
    alignContent:'center', 
  },
  button:{
    marginTop:'3%',
    marginLeft:'2%',
  },
  icon:{
    position:'absolute',
    margin:'3%'
  },

  items:{
    height:'60%',
    borderColor:'#a3b60a',
    borderRadius:7,
    borderWidth:3,
    margin:15,
    padding:20,
  },
  
  mainBtn:{
    borderRadius:5,
    padding:10,
    borderWidth:2,
    borderColor:'#cbdc3f',
    width:60,
    marginLeft: 30,

  },
});