  import * as React from 'react';
  import { StyleSheet , Image, ImageBackground} from 'react-native';
  import { TouchableOpacity } from 'react-native-gesture-handler';
  import { StackScreenProps } from '@react-navigation/stack';
  import EditScreenInfo from '../components/EditScreenInfo';
  import { Text, View } from '../components/Themed';
  import { RootStackParamList } from '../types';
  
  export default function SettingsScreen({navigation,}: StackScreenProps<RootStackParamList, 'Root'>) {
   
    return (
      <View>
         <View>
         <TouchableOpacity onPress={()=> navigation.navigate('Root')}>
          <Image source={require('../components/Images/k1.png')} style={{width:30, height:30, marginLeft:'5%',marginTop:60}}></Image> 
          </TouchableOpacity>
          </View>
          <Text style={{padding:10, fontWeight:'bold',fontSize:25,marginTop:-20,color:'black',textAlign:'center'}}>Settings</Text>
          <Text style={{padding:10, fontWeight:'bold',fontSize:20,marginTop:20 ,color:'black'}}>Profile</Text>
            <TouchableOpacity  onPress={()=> navigation.navigate('accountSetting')}>
          <Text style={{padding:15, fontWeight:'bold',fontSize:15,marginTop:25,color:'black',backgroundColor:'#fff',borderRadius:10,shadowOpacity:150,elevation:25}}>Account Settings</Text>
          </TouchableOpacity>
          <View>
          <Image source={require('../components/Images/s4.png')} style={{width:30, height:30, marginLeft:'80%',marginTop:-40}}></Image> 
          </View>
          <TouchableOpacity onPress={()=> navigation.navigate('help')}>
          <Text style={{padding:15, fontWeight:'bold',fontSize:15,marginTop:25,color:'black',backgroundColor:'#fff',borderRadius:10,shadowOpacity:150,elevation:25}}>Help</Text>
          </TouchableOpacity>
          <View>
          <Image source={require('../components/Images/s4.png')} style={{width:30, height:30, marginLeft:'80%',marginTop:-40}}></Image> 
          </View>
          <Text style={{padding:10, fontWeight:'bold',fontSize:20,marginTop:40,color:'black'}}>Support</Text>
          <TouchableOpacity  onPress={()=> navigation.navigate('about')}>
          <Text style={{padding:15, fontWeight:'bold',fontSize:15,marginTop:25,color:'black',backgroundColor:'#fff',borderRadius:10,shadowOpacity:150,elevation:25}}>About</Text>
          </TouchableOpacity >
          <View>
          <Image source={require('../components/Images/s4.png')} style={{width:30, height:30, marginLeft:'80%',marginTop:-40}}></Image> 
          </View>
          <TouchableOpacity onPress={()=> navigation.navigate('Open')}>
          <Text style={{padding:15, fontWeight:'bold',fontSize:15,marginTop:25,color:'black',backgroundColor:'#fff',borderRadius:10,shadowOpacity:150,elevation:25}}>LogOut</Text>
          </TouchableOpacity>
          <View>
          <Image source={require('../components/Images/s4.png')} style={{width:30, height:30, marginLeft:'80%',marginTop:-40}}></Image> 
          </View>
         
  
          <Text style={{padding:10, fontWeight:'bold',fontSize:5,marginBottom:"100%",color:'black'}}></Text>
  
          
      </View>
     
    );
  }

// }
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
  });
  