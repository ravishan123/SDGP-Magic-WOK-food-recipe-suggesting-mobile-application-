import * as React from 'react';
import { StyleSheet, ScrollView, SafeAreaView,FlatList,Image,TouchableOpacity,ActivityIndicator,TouchableHighlight,TextInput,ImageBackground} from 'react-native';
import axios from 'axios'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import FavCard from './favorite/FavCard';
// import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { Divider } from 'react-native-elements';
import { useState } from 'react';
import { useRef } from 'react';
import { generate } from "shortid";
//import { AsyncStorage } from "react-native";
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';


export default function RecipeDisplay({
    navigation, route
  }: StackScreenProps<RootStackParamList, 'RecipeDisplay'>){

  const [searchedValues, setSearchedValues] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    //console.log("Pred Results", route.params)
    setIsLoading(true)
    axios.post('http://10.0.2.2:8000/api/recipe_display_france', route.params, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }).then(res => {
      console.log('res -- ', res)
      setSearchedValues(res.data)
      setIsLoading(false)
    }).catch(err => {
      console.log(err)
      setIsLoading(false)
     })
  }, []);

  const Loading = () => (
      <View style={styles.centeredView}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
  )

  const Values = () => (
    <View>
        <ScrollView>
        {!!searchedValues && searchedValues.map((item, key) => { 
            return(
                <View key={key}>
                    <Text style={{fontSize:30,fontWeight:'bold',marginTop:20,marginLeft:50}}>{item.recipe_name}</Text>  
  
  <Image source = {item.image} style = {styles.homeImag}/>

  <View style={{flexDirection: 'row',marginLeft:40}}>
        
    <Card style = {styles.homeCards}>
      <Icon
        name='timer'
        size={30}
        color='black'
        style={styles.HomeIcon}      
      />

      <Card.Content>
          <Title style={styles.cardContent}>{item.total_time}</Title>
      </Card.Content>

    </Card>

    <Card style = {styles.homeCards}>
      <Icon
        name='people'
        size={30}
        color='black'
        style={styles.HomeIcon}      
      />

      <Card.Content>
          <Title style={styles.cardContent}>{item.serving}</Title>
      </Card.Content>

    </Card>

    <Card style = {styles.homeCards}>
      <Icon
        name='md-flag-sharp'
        size={30}
        color='black'
        style={styles.HomeIcon}      
      />

      <Card.Content>
          <Title style={styles.cardContent}>{item.cuisine}</Title>
      </Card.Content>

    </Card>

  </View>

  <View>
    <Text style={{marginTop:15,fontWeight:'bold',fontSize:20,paddingLeft:20}}> Ingredients </Text>   
    <Text style={{marginLeft:10,marginTop:5,fontSize:10}}>
    <Text> {item.ingredients} </Text>
    </Text>
  </View>

  <View>
  <Text style={{marginTop:15,fontWeight:'bold',fontSize:20,paddingLeft:20}}> Method </Text>   
    <Text style={{marginLeft:10,marginTop:5,fontSize:10}}>
      <Text> {item.cooking_method} </Text> 
    </Text>
  </View>

  <Card style={{backgroundColor:'#95abbf'}}>
    <Card.Actions style={{marginLeft:130}}>
    <Button>Save</Button>
        <TouchableOpacity>
          <Icon
            name='heart'
            size={25}
            color='red'
          />
  </TouchableOpacity>
    </Card.Actions>
  </Card>
                </View>
            )
        })}
        </ScrollView>
        <Divider />
    </View>
  
  )

  return isLoading ?  <Loading /> : <Values /> 
}




const styles = StyleSheet.create({
    innerText: {
      color: '#C70039',
      fontWeight: 'bold',
      fontSize: 20,
  
    },
  
    btnSave:{
      borderColor:'red',
      borderRadius:5,
      borderWidth:3,
      width:60,
    },
  
    cardContent:{
      fontSize:15,
    },
  
    HomeIcon:{
      marginLeft:18,
      marginTop:7,
    },
  
    homeImag:{
      alignItems:'center',
      justifyContent:'center',
      height:300,
      width:300,
      borderColor:'black',
      borderWidth:4,
      marginTop:20,
      marginLeft:40,
    },
  
    homeCards:{
      width:70,
      height:100,
      marginTop:20,
      marginLeft:20,
      borderRadius:20,
      backgroundColor:'#e0f90f',
    },
  
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      alignItems: 'center',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
});
