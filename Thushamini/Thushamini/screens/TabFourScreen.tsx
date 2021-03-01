import * as React  from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, Image, BackHandler,Platform, Button,ImageBackground, } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Settings from './SettingScreen';
import { RootStackParamList } from '../types';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import * as ImagePicker from 'expo-image-picker';
import  { useState, useEffect } from 'react';
import {shouldUseActivityState} from 'react-native-screens';



export default function TabFourScreen({navigation,}: StackScreenProps<RootStackParamList, 'NotFound'>) {

  
    const [image, setImage] = useState(null);
  
    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []);
  
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };


    const image5 = { uri: "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg" };

      return (
        
      <View>
          <ScrollView showsVerticalScrollIndicator={false}> 
          
            <View> 
            <View style={{backgroundColor:'black',width:'100%',height:70}}>
            <TouchableOpacity>
              <Image source={require('../components/images/s2.jpg')} style={{width: 30, height: 30, borderRadius:100 ,marginLeft:'85%', marginTop:20}}></Image> 
              </TouchableOpacity>
              </View>
              <View>
            <Image source={require('../components/images/w1.jpg')} style={{width:'100%', height: 175,}}></Image> 
            </View>
              
              {/* <TouchableOpacity style={{width:'20%'}}>
              <Image source={require('../components/images/bck2.png')} style={{width: 30, height: 30, borderRadius:100 , marginTop:-20,marginRight:'87%'}}></Image> 
              </TouchableOpacity> */}
              
            </View>
            {/* <View>
                <ImageBackground source={image5}>
                <View >
                  <TouchableOpacity >
                  </TouchableOpacity>
                  <View>
                    <Text>hello</Text>
                  </View>

                </View>
              </ImageBackground>
              </View> */}
            {/* <Image source ={require('../components/images/w1.jpg')}style={{width:'100%',height:150,marginTop:-80}} /> */}
            <View style={{alignItems:'center'}}>
            
              <View style={{marginTop:50}}>
              {/*  */}
              <View>
              {image && <Image source={{ uri: image }} style={{ width: 120, height: 120, borderRadius:100, marginLeft:0, marginBottom:20,marginTop:-80}} />}
              </View>
              <TouchableOpacity style={{elevation:15,borderRadius:100,shadowOpacity:20}}>
              <Button title="Edit Profile" onPress={pickImage} color='black'/>
              </TouchableOpacity>
              {/* </View> */}
              
              </View>

            <View style={{marginTop:20}}>  
            <Text style={{marginTop:25, color:'#D35400',marginBottom:5,borderBottomColor:'#D35400',
    borderBottomWidth:2}}></Text>
              <Text style={{padding:10, fontWeight:'bold',fontSize:18,marginTop:-10,color:'black',marginRight:280}}>User Name</Text>
              <Text style={{marginTop:-10, color:'#D35400',marginBottom:5,borderBottomColor:'#D35400',
    borderBottomWidth:2}}></Text>
              <Text style={{padding:10, fontWeight:'bold',fontSize:18,marginTop:-10 ,color:'black',marginRight:280}}>Email</Text>
              <Text style={{marginTop:-10, color:'#D35400',marginBottom:5,borderBottomColor: '#D35400',
    borderBottomWidth:2}}></Text>
              <Text style={{padding:10, fontWeight:'bold',fontSize:18,marginTop:15,color:'black',marginRight:270}}>Preferences</Text>
              
              <Text style={{padding:10, fontWeight:'bold',fontSize:5,marginBottom:"50%",color:'black'}}></Text>

              </View>
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
    color:'black'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  

});
