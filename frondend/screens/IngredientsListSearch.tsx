import * as React from 'react';
import { StyleSheet, ScrollView, SafeAreaView,FlatList,Image,TouchableOpacity,ActivityIndicator,TouchableHighlight,TextInput,Button,ImageBackground} from 'react-native';
import { Text, View } from '../components/Themed';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';



export default function IngredientsListSearch({navigation,}: StackScreenProps<RootStackParamList, 'SearchIngredientResults'>){
  
  const [ingredient, setIngredient] = useState([]);
  const[text, setText] = useState('');

  const ChangeHandler = (val) => {
    setText(val)
  }
  

  const submitHandler = () =>{
    setIngredient((prevIngredient) =>{
      return [
        {text:text},
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
    console.log(ingredient)
    console.log(ingredient[1])
    let form_data = new FormData();
    console.log(form_data)
    form_data.append('search_key', ingredient);
    var arrayObj = new Object({"search_keys": ingredient})
    console.log(arrayObj)
    // props.navigation.navigate('SearchIngredientResults', arrayObj)
    navigation.navigate('SearchIngredientResults',arrayObj)
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
        onPress={() => submitHandler(text)}>
          <AntDesign name="rightcircleo" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <ImageBackground source={require('../components/Images/eggBack.jpg')} style={{width:'100%',height:'100%'}}>

      <View style={styles.items}>
        <FlatList
          data={ingredient}
          renderItem={({item}) => (
            <Text style={{color:'white'}}>{'\u25CF'} {item.text}</Text>
          )}
        />
      </View>  

      <View style={{flexDirection: 'row',marginLeft:'20%',marginTop:'10%'}}>
        <View >
          <TouchableOpacity onPress={clearData} style={styles.mainBtn}>
            <Icon
              name = 'ios-trash'
              size={30}
              color='white'
            />
          </TouchableOpacity>
          
        </View>

        <View>
        <TouchableOpacity onPress={submitData} style={styles.mainBtn}>
            <Icon
              name = 'ios-enter'
              size={30}
              color='white'
            />
          </TouchableOpacity>
        </View>
        </View>
        </ImageBackground>

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