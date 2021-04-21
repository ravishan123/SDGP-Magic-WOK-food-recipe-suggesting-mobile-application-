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
    <Text style={{padding:5, fontSize:12,marginTop:30}}>qwedrfgthjklsedrftghyujkledrfgthjk    rfghj swdfgh sdfgh sdfghj sddfgh   dfgh    ghjk  hyjk  ghjk
    zsxdcfvgbh   cfvgbh  cfvgbhnj dcfvgbhnj rfgh dcfvgbhnj xdcfvgbhnj cvgtbhnj xdcfvgbhnj dxcfvgbhn rfvgbhnj xdcfvgbhn cdfvgbhn cfrvgbhnj 
    dxcfvgbh crdtvybunj cdfvgbhnj cxrfvgbhnj </Text>
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