import React,{useState} from 'react'
import { Text, View, TextInput, FlatList, StyleSheet,TouchableOpacity } from 'react-native'
import { Component } from 'react';
import { AntDesign } from '@expo/vector-icons';
import {Icon,} from 'native-base';

// return data.filter(function (e){return e.City == text}).map(element => <FarmerItem farmer={element} key={element.id} /> );

export default function TabThreeScreen () {

    
  const [todos, setTodos] = useState([
    {text:'buy coffee'},

  ]);

  const[text, setText] = useState('');

  const ChangeHandler = (val) => {
    setText(val)
  }
  

  const submitHandler = (text) =>{
    setTodos((prevTodos) =>{
      return [
        {text:text},
        ...prevTodos
      ]
      
    })
  }
  

        return (
            <View  style={styles.container}>

              <View style={styles.container2}>
              
              <TextInput
                  style={styles.textinput}
                  onChangeText={ChangeHandler}
                  placeholder='' />
              <Icon name="search" style={styles.icon}/>    
                <TouchableOpacity 
                style={styles.button}
                onPress={() => submitHandler(text)}>
                  <AntDesign name="rightcircleo" size={30} color="white" />
                </TouchableOpacity>
              </View>

              <View style={styles.items}>
                <FlatList
                  data={todos}
                  renderItem={({item}) => (
                    <Text>{item.text}</Text>
                  )}
                />
              </View>

              <View >
                <TouchableOpacity onPress={console.log(todos)} style={styles.searchButton}>
                  <Text>set</Text>
                </TouchableOpacity>
              </View>


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
    backgroundColor:'coral'
  },
  textinput:{
    height:'75%',
    backgroundColor:'white',
    width:'80%',
    borderRadius:5,
    margin:'2%',
    alignSelf:'center' ,
    alignContent:'center'  
  },
  button:{
    marginTop:'3%',
    marginLeft:'2%',
  },
  icon:{
    position:'absolute',
    margin:'3%'
  },
  searchButton:{
    height:'20%',
    backgroundColor:'yellow',
    margin:'10%',
    alignItems:'center',
    justifyContent:'center'
  },
  items:{
    height:'60%',
    backgroundColor:'red'
  }
})