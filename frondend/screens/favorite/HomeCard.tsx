import * as React from 'react';
import { StyleSheet,Image,TouchableOpacity, SafeAreaView,Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
//import { SafeAreaView } from 'react-native';
import {  Icon } from 'react-native-elements';
import Background from '../../components/Background';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function HomeCard(){


    return(
       

        <SafeAreaView style={styles.container}>
      <View style={styles.container}>
       
          <Card style={styles.card}>
         
                <TouchableOpacity style={{marginLeft:5}}>
                    <Card.Cover source={require('../../components/Images/hotdog.jpg')} style={styles.cardImg}/>
                      <Card.Content>
                        <Title>Hotdog</Title>
                      </Card.Content>
                     
                </TouchableOpacity>
                         
            
          </Card>
      </View>
    </SafeAreaView>

    );

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
      
    },
    paragraph: {
      margin: 8,
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#34495e',
    },
  
    btn:{
      fontSize: 9,
      fontWeight:'bold'
      
    },
  
   
    card:{
      marginBottom:15,
      height:'100%',
      borderRadius:15,
      marginRight:20,
      
     
    },
  
    cardImg:{
      padding:5,
    

    },
  });