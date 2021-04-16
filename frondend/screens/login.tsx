import * as React from 'react';
import { StyleSheet , Image, ImageBackground,TextInput,Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootStackParamList } from '../types';

export default function register ({navigation,} : StackScreenProps<RootStackParamList, 'Root'>) {
  
   return(
    <View style={styles.container}>
      <Text style={{padding:10, fontWeight:'bold',fontSize:35,marginTop:30,color:'black',textAlign:'center'}}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder='User Name :'
        autoCapitalize="none"
        placeholderTextColor='white'
      />

      <TextInput
          style={styles.input}
          placeholder='Password :'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
        />
       <View style={{marginTop:50,padding:15,borderRadius: 20}}>
      <TouchableOpacity >
      <Button
        title='  Login  '
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