import * as React from 'react';
import { StyleSheet, ScrollView, SafeAreaView,FlatList,Image,TouchableOpacity,ActivityIndicator,TouchableHighlight,TextInput,ImageBackground,AsyncStorage} from 'react-native';
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
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import SyncStorage from 'sync-storage';

export default function SearchResultsScreen({navigation, route}: StackScreenProps<RootStackParamList, 'DishInfo'>) {

  const [dishInfo, setDishInfo] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [isFavourite, setIsFavourite] = React.useState(false);

  React.useEffect(() => {
    console.log("Pred Results", route.params)
    setDishInfo(route.params)
  }, []);

  const Loading = () => (
      <View style={styles.centeredView}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
  )

  const addToFavourites = () => {

    AsyncStorage.getItem('favourites').then((favourite)=>{
      if (favourite !== null) {
        // We have data!!
        const favouritesList = JSON.parse(favourite)
        favouritesList.push(dishInfo)
        console.log(`favouritesList`, favouritesList)
        AsyncStorage.setItem('favourites',JSON.stringify(favouritesList));
      }
      else{
        const favouritesList  = []
        favouritesList.push(itemcart)
        AsyncStorage.setItem('cart',JSON.stringify(dishInfo));
      }
      // alert("Add Cart")
    })
    .catch((err)=>{
      alert(err)
    })
  }


  const Values = () => (
    <View>
      <ScrollView>
            <View>
              <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 20, marginLeft: 50 }}>{dishInfo.recipe_name}</Text>

              <Image source={{uri: dishInfo.image}} style={styles.homeImag} />

              <View style={{ flexDirection: 'row', marginLeft: 40 }}>

                <Card style={styles.homeCards}>
                  <Icon
                    name='timer'
                    size={30}
                    color='black'
                    style={styles.HomeIcon}
                  />

                  <Card.Content>
                    <Title style={styles.cardContent}>{dishInfo.total_time}</Title>
                  </Card.Content>

                </Card>

                <Card style={styles.homeCards}>
                  <Icon
                    name='people'
                    size={30}
                    color='black'
                    style={styles.HomeIcon}
                  />

                  <Card.Content>
                    <Title style={styles.cardContent}>{dishInfo.serving}</Title>
                  </Card.Content>

                </Card>

                <Card style={styles.homeCards}>
                  <Icon
                    name='md-flag-sharp'
                    size={30}
                    color='black'
                    style={styles.HomeIcon}
                  />

                  <Card.Content>
                    <Title style={styles.cardContent}>{dishInfo.cuisine}</Title>
                  </Card.Content>

                </Card>

              </View>

              <View>
                <Text style={{ marginTop: 15, fontWeight: 'bold', fontSize: 20, paddingLeft: 20 }}> Ingredients </Text>
                <Text style={{ marginLeft: 10, marginTop: 5, fontSize: 10 }}>
                  <Text> {dishInfo.ingredients} </Text>
                </Text>
              </View>

              <View>
                <Text style={{ marginTop: 15, fontWeight: 'bold', fontSize: 20, paddingLeft: 20 }}> Method </Text>
                <Text style={{ marginLeft: 10, marginTop: 5, fontSize: 10 }}>
                  <Text> {dishInfo.cooking_method} </Text>
                </Text>
              </View>

              <Card style={{ backgroundColor: '#95abbf' }}>
                <Card.Actions style={{ marginLeft: 130 }}>
                  <Button>Save</Button>
                  <TouchableOpacity onPress={addToFavourites}>
                    <Icon
                      name='heart'
                      size={25}
                      color='red'
                    />
                  </TouchableOpacity>
                </Card.Actions>
              </Card>
            </View>
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

