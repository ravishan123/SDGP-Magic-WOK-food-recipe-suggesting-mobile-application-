import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Button,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootStackParamList } from '../types';

export default function about({navigation,}: StackScreenProps<RootStackParamList, 'Setting'>) {

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
    <Text style={{padding:10, fontWeight:'bold',fontSize:35,marginTop:-170,color:'black',textAlign:'center'}}>A  b  o  u  t  </Text>
    </View>
    <View>
    <Text style={{padding:5, fontSize:12,marginTop:30}}>
     <Text>{'\u2B24'} Today people are unable to prepare their daily meals. So, they take food from outside.
      so, it becomes a culture “Take away fast-food culture''.  Poor dietary behaviors contribute to an increased risk for obesity.
      Research has demonstrated that, Specifically, frequent and skillful food preparation has been shown to be associated with healthier
      dietary intake, such as increased fruit and vegetable intake among young adults. We should think about home cooking.
      The problems behind the home cooking are looking up recipes, fetching ingredients, prepping the kitchen, prepping the ingredients
      (chopping vegetables and it has to be done properly to look pretty and cook well). {'\n'}</Text>
      <Text>
      {'\u2B24'} Sometimes we come across situations where we don’t know what to do with the ingredients that we have at home or 
      situations where we want to skip the routine meal and try something new with what we have at home. We also come across 
      situations where we can’t identify images of some dishes that look tempting or situations where we don’t know how to
      prepare that dish. Our app will provide a solution to all these above given problems.
      </Text> 
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