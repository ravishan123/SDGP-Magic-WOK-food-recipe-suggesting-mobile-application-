import * as React from 'react';
import { ImageBackground, Text, View, StyleSheet,Image,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card,Button, Icon } from 'react-native-elements';
import HomeCard from '../screens/favorite/HomeCard';
import { black } from 'react-native-paper/lib/typescript/styles/colors';
import { AntDesign } from '@expo/vector-icons';
import navigation from '../navigation';
import { RootStackParamList } from '../types';
import { StackScreenProps } from '@react-navigation/stack';



export default function TabOneScreen({navigation,}: StackScreenProps<RootStackParamList, 'searchbar'>) {
 

return (
 

    <View>

      <View style={{ backgroundColor: 'white'}}>
        <ScrollView>

        <View > 
          
        <ImageBackground
          style={styles.backgroundImage}
          
          source={require('../components/Images/z2.jpg')}
        >
            <Text style={styles.bgtext} >Search by ingredients</Text>

            <View style ={{marginLeft: '80%',marginTop : -47}}>
              <TouchableOpacity onPress={()=> navigation.navigate('searchbar')}>
              <AntDesign name="rightcircleo" size={50} color="black" />
              </TouchableOpacity>
            </View>

            <View
            style={{
              marginTop : 25,
              marginBottom :-20,
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              marginLeft: 30,
              marginRight: 30,
            }}
/>

            <Text style={styles.bgtext2} >Search by dish</Text>

            <View style ={{marginLeft: '80%',marginTop : -47}}>
              <TouchableOpacity onPress={()=> navigation.navigate('searchbar')}>
              <AntDesign name="rightcircleo" size={50} color="black" />
              </TouchableOpacity>
            </View>

        </ImageBackground>
     
      </View> 
        

          <Text style={styles.innerText}>  Italian</Text>


          {/* -------------------------------------------------------------------------------------------------------------------------------- */}
          <ScrollView horizontal={true}>


            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />

          </ScrollView>

          {/* ------------------------------------------------------------ */}

          <Text style={styles.innerText}>  Italian</Text>


          <ScrollView horizontal={true}>
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
          </ScrollView>

          {/* ---------------------------------------------------------------------------------------------------------------------------------------- */}

          <Text style={styles.innerText}>  Italian</Text>


          <ScrollView horizontal={true}>
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
          </ScrollView>

          {/* -------------------------------------------------------------------------------------------------------         */}

          <Text style={styles.innerText}>  Italian</Text>


          <ScrollView horizontal={true}>
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
          </ScrollView>

          {/* ------------------------------------------------------------ */}
          <Text style={styles.innerText}>  Italian</Text>

          <ScrollView horizontal={true}>
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
          </ScrollView>


      

        </ScrollView>
      
    </View>
    </View>
    
  );
};





const styles = StyleSheet.create({

  innerText: {
    color: '#E65100',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop:20,
    marginBottom:10,


  },

  container: {
    flex: 1,
    alignItems:'flex-start',
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#fff',
    flexDirection: 'column',   
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
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',  
  },
 

backgroundImage: {
    flex: 1,
    width: '100%',
    height: 275,  
},

bgtext:{
  fontSize:27,
  color: 'black',
  fontWeight: 'bold',
  marginTop: 50,
  marginLeft: 10,
  padding: 10,
  
  
},

bgtext2:{
  fontSize:27,
  color: 'black',
  fontWeight: 'bold',
  marginTop: 50,
  marginLeft: 10,
  padding:10,
  
},

btnText:{
  fontSize: 15,
  color: 'black',
  fontWeight: 'bold',
  textAlign: 'center',
  backgroundColor: 'white',
  paddingBottom: 2,
  paddingTop: 2,
}
  
});