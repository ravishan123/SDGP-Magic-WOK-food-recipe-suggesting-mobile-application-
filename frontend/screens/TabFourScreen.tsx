import * as React  from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, Image, BackHandler,Platform, Button,ImageBackground, } from 'react-native';
import { LongPressGestureHandler, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParamList } from '../types';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import * as ImagePicker from 'expo-image-picker';
import  { useState, useEffect } from 'react';
import {shouldUseActivityState} from 'react-native-screens';
import TabTwoScreen from './search';
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import SyncStorage from 'sync-storage';


export default function TabFourScreen({navigation,}: StackScreenProps<RootStackParamList, 'Setting'>,props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {

    const [image, setImage] = useState(null);
    const [userData, setUserData] = useState('');
  
    useEffect(() => {
      (async () => {
        var user_data = SyncStorage.get('user_data');
        console.log(user_data.user)
        setUserData(user_data.user)
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

  return (
        
      <View style={{backgroundColor:'white'}}>
          <ScrollView showsVerticalScrollIndicator={false}>     
            <View style={{backgroundColor:'black',height:150,width:'100%'}}> 
              <TouchableOpacity onPress={()=> navigation.navigate('Setting')}>
              <Image source={require('../components/Images/s2.jpg')} style={{width: 30, height: 30, borderRadius:100 ,marginLeft:'85%', marginTop:20}}></Image> 
              </TouchableOpacity>
              </View>
              
              <View style={{alignItems:'center'}}>
           

              <View 
        style = {{
          height : 200 ,
          width :200,
          borderRadius: 1000,
          borderWidth:3,
          borderColor:'#fbb124',
          backgroundColor:'white',
          marginTop:-80
          }}>
        </View>
              <View style={{marginTop:-250}}>
                
               <Avatar  size={300} rounded icon={{name: 'user', type: 'font-awesome',color:'#fbb124',activeOpacity:0.7}} />
               
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius:100, marginLeft:50, marginTop:-250,marginBottom:50}} />}
              </View>
              </View>
              <View style={{marginTop:0}}>
              <TouchableOpacity onPress={pickImage}>
              <Text style={{padding:15,fontWeight:'bold',fontSize:20,color:'white',backgroundColor:'#fbb124',textAlign:'center',borderRadius:50,marginLeft:50,marginRight:50}}>Edit Profile</Text>

              </TouchableOpacity>
              
              </View>
             
              
              

            <View style={{marginTop:5 , backgroundColor:'white'}}>  
            <Text style={{marginTop:25, color:'#fbb124',marginBottom:5,borderBottomColor:'#fbb124',borderBottomWidth:2}}></Text>
              <Text style={{padding:10, fontWeight:'bold',fontSize:18,marginTop:-10,color:'#a9a9a9'}}>First Name - {userData.first_name}</Text>
              <Text style={{marginTop:-10, color:'gray',marginBottom:5,borderBottomColor:'#fbb124',borderBottomWidth:2}}></Text>
              <Text style={{padding:10, fontWeight:'bold',fontSize:18,marginTop:-10,color:'#a9a9a9'}}>Last Name - {userData.last_name}</Text>
              <Text style={{marginTop:-10, color:'gray',marginBottom:5,borderBottomColor:'#fbb124',borderBottomWidth:2}}></Text>
              <Text style={{padding:10, fontWeight:'bold',fontSize:18,marginTop:-10 ,color:'#a9a9a9'}}>Email - {userData.email}</Text>
              <Text style={{marginTop:-10, color:'#fbb124',marginBottom:5,borderBottomColor:'#fbb124',
    borderBottomWidth:2}}></Text>
              <Text style={{padding:10, fontWeight:'bold',fontSize:5,marginBottom:"50%",color:'black'}}></Text>

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
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});
