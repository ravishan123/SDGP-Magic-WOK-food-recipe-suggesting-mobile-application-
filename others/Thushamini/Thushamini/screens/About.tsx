import * as React from 'react';
import { StyleSheet, Button,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function About() {

  

  return (
    <View> 
      <ScrollView>
    <Image source={require('../components/images/fo1.jpg')} style={{width:'110%', height: 250,marginLeft:-10}}></Image> 
    <View>
    <Text style={{padding:10, fontWeight:'bold',fontSize:25,marginTop:-150,color:'white',marginLeft:'40%'}}>About</Text>
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