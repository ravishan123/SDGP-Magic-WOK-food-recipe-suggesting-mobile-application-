import * as React from 'react';
import { StyleSheet , Image, ImageBackground,TextInput,Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootStackParamList } from '../types';
import axios from 'axios';

export default function register ({navigation,} : StackScreenProps<RootStackParamList, 'Root'>) {
  const image = { uri: "https://media.istockphoto.com/vectors/preparations-and-mushroom-dishes-on-a-white-background-vector-id1264636364?s=612x612" };

  const initialState = {email:'', password:''}
  const [inputs, setInputs] = React.useState(initialState)

  const handleChange = (text, id) => {
    setInputs({...inputs, [id]: text})
  }

  const loginUser = () =>  {
    // navigation.navigate('Root')
    console.log(`inputs`, inputs)
    axios.post('http://10.0.2.2:8000/api/auth/login', inputs).then(res =>{
    // axios.post('http://3.128.43.16/api/auth/login', inputs).then(res =>{
      console.log(`res`, res)
      if(res.status === 200){
        navigation.navigate('Root')
      }
    }).catch(err => {
      console.log(`err`, err.message)
    })
  }

   return(
    <View style={styles.container}>
      <ImageBackground source ={require('../components/Images/i4.jpg')} style={styles.image}>
      <View style={{marginLeft:40,marginRight:40,marginTop:220,marginBottom:120,backgroundColor:'white',borderRadius:30,borderWidth:0,}}>

      <View>
      <Text style={{padding:10, fontWeight:'bold',fontSize:35,marginTop:30,color:'black',textAlign:'center'}}>Login</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder='Email :'
        onChangeText={(text) => handleChange(text, "email")}
        autoCapitalize="none"
        placeholderTextColor='#a9a9a9'
      />

      <TextInput
          style={styles.input}
          placeholder='Password :'
          onChangeText={(text) => handleChange(text, "password")}
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='#a9a9a9'
        />
       <View style={{marginTop:20,padding:15,borderRadius: 20}}>
      <TouchableOpacity >
      {/* <Button
        title='  Login  '
        onPress={()=> navigation.navigate('Root')}
        color={'#407294'}
      /> */}
      <TouchableOpacity  onPress={loginUser}>
        <Text style={{padding:12,fontWeight:'bold',fontSize:25,marginTop:0,color:'white',backgroundColor:'#fbb124',textAlign:'center',borderRadius:50}}>Login</Text>

        </TouchableOpacity>

      </TouchableOpacity>
      </View>
      </View>
      </ImageBackground>
    </View>
    
  );
}


// }
const styles = StyleSheet.create({
  input: {
    width: 280,
    height: 55,
    backgroundColor: 'white',
    marginTop: 30,
    marginLeft:15,
    padding: 8,
    color: 'black',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '300',
    borderWidth:1,
    borderColor:'#fbb124'
  },
container: {
  flex: 1,
  justifyContent: 'center',
 
},
image: {
  flex: 1,
  resizeMode: 'cover',
},
});