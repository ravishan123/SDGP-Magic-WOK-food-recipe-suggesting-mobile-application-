import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Button,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { RootStackParamList } from '../types';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { StackScreenProps } from '@react-navigation/stack';

export default function help({navigation,}: StackScreenProps<RootStackParamList, 'Setting'>) {

  return (
    <View> 
      <ScrollView>
      <View>
         <TouchableOpacity onPress={()=> navigation.navigate('Setting')}>
          <Image source={require('../components/Images/k1.png')} style={{width:30, height:30, marginLeft:'5%',marginTop:30}}></Image> 
          </TouchableOpacity>
          </View>
      <View>
       <Image source={require('../components/Images/i6.jpg')} style={{width:'100%', height: 250,marginTop:10}}></Image> 
       </View> 
    <View>
    <Text style={{padding:10, fontWeight:'bold',fontSize:35,marginTop:-170,color:'black',textAlign:'center'}}>H    e    l     p</Text>
    </View>
    <View>
    <Text style={{padding:5, fontSize:12,marginTop:30}}>
          In this app, meal planning is the process of choosing beforehand the meal you are trying to cook. 
          If we can do our meal planning properly, we can save our money. By having a grocery list of what you need 
          for the meal you want to cook you can buy just what you use. So, our aim is to main two features. It can 
          recognize food dishes and ingredients (fruits and vegetables) then gives the recipes accordingly.  {'\n'}
          <Text>{'\u2B24'} Scanning photos of the dish given by the user and giving back the relevant recipes {'\n'}</Text>
          <Text>{'\u2B24'} when the user inputs ingredients our app will predict the recipe and display it to the user.
          It is able to predict the recipe relevant to the given photos of ingredients given by the user.</Text>
          
        </Text>
        </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  scrollView: {
    backgroundColor: 'white',
    
  },
});

