import * as React from 'react';
import { StyleSheet , Image, ImageBackground,TextInput,Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootStackParamList } from '../types';

export default function register ({navigation,} : StackScreenProps<RootStackParamList, 'Root'>) {
  state = {
    username: '', password: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signIn = async () => {
    const { username, password } = this.state
    try {
      // here place your signup logic
      console.log('user successfully signed up!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }
 
  
    return(
    <View style={styles.container}>
      <Text style={{padding:10, fontWeight:'bold',fontSize:35,marginTop:30,color:'black',textAlign:'center'}}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder='User Name :'
        autoCapitalize="none"
        placeholderTextColor='white'
        onChangeText={val => this.onChangeText('username', val)}
      />

      <TextInput
          style={styles.input}
          placeholder='Password :'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
       <View style={{marginTop:50,padding:15,borderRadius: 20}}>
      <TouchableOpacity >
      <Button
        title='  SignIn  '
        onPress={()=> navigation.navigate('Root')}
        color={'#407294'}
      />
      </TouchableOpacity>
      </View>
        
    </View>
    
  );
}


// }
const styles = StyleSheet.create({
input: {
  width: 350,
  height: 55,
  backgroundColor: 'gray',
  marginTop: 30,
  marginLeft:15,
  padding: 8,
  color: 'black',
  borderRadius: 14,
  fontSize: 18,
  fontWeight: '500',
},
container: {
  flex: 1,
  justifyContent: 'center',
 
}
});
 