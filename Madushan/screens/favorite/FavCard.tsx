import React from 'react';
import { Button, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView, StyleSheet, View, Text, ScrollView } from 'react-native';
// import { Rating } from 'react-native-ratings';
import { Card } from 'react-native-elements';

export default function FavCard() {

  const onPress = () => Alert.alert("Removed");
  const rating  = 4 ;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Card containerStyle = {styles.card}>

          <Image source={require('../../components/Images/burger.png')} style={{ width: 142, height: 82 }} /> 
          <Text style={styles.paragraph}>
            Chicken Burger       
            </Text>
          <TouchableOpacity onPress={onPress}>
            <Text style = {styles.btnText}> Remove <Icon
              style={styles.icon}
              name="trash-outline"
              color="#31C283"
              size={10}
           /></Text>
          </TouchableOpacity>

        </Card>
      </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //paddingTop: 5,
    //backgroundColor: '#333333',
    
  },
  paragraph: {
    margin: 14,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },

  btn:{
    fontSize: 9,
    fontWeight:'bold'
  },

  btnText:{
    fontSize: 8,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000',
    borderRadius: 10,
    borderWidth: 2,
    paddingBottom: 2,
    paddingTop: 2,
  },

  card:{
    // backgroundColor: '#d3816f',
    backgroundColor: '#ee9c8a',
    borderRadius: 5,
  },

  icon:{
    paddingLeft: 10,
  },

  rating:{
    paddingLeft: 10
  }

});

