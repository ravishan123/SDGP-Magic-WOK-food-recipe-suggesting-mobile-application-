import * as React from 'react';
import { StyleSheet, Button,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {

  

  return (
    <View> 
      <ScrollView>
    <Image source={require('../components/images/fo1.jpg')} style={{width:'110%', height: 250,marginLeft:-10}}></Image> 
    <View>
    <Text style={{padding:10, fontWeight:'bold',fontSize:25,marginTop:-150,color:'white',marginLeft:'30%'}}>H    e    l     p</Text>
    </View>
    <View>
    <Text style={{padding:5, fontSize:12,marginTop:30}}>When developing your food delivery marketing plan, your first step is to define who you will be targeting. 
      You need to perform tests that reveal insights such as your key demographic and common trends you can benefit from. 
      You will also need to perform competitor research for best results. This will help you identify which demographics will 
      be harder to target and which potential users are currently not properly catered for by your competitors.
      A defining question for all food delivery apps is how you will work with food providers. For example, a discovery platform
       will have different goals to an aggregated food delivery app. These are critical questions that must be answered in order to
        lay the foundations of your overall strategy. User personas are also needed to successfully target different user types who will 
        find your product valuable.
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

