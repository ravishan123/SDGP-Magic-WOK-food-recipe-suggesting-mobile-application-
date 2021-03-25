import * as React from 'react';
import { StyleSheet,Image,TouchableOpacity, SafeAreaView,Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
//import { SafeAreaView } from 'react-native';
import { Card,Button, Icon } from 'react-native-elements';
import Background from '../../components/Background';

export default function HomeCard(){


    return(
        // <View style={{backgroundColor:'white',padding:20, }}>
        //     <Card title="Local Modules">
        //       <Image source={require('../../components/images/food1.jpg')} style={{ width: 100, height:100}}></Image>
        //         <Text style = {{color:'black'}}>
        //         spaghetti
        //         </Text>
        //     </Card>
        // </View>

        <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Card containerStyle = {styles.card}>

          <Image source={require('../../components/images/food1.jpg')} style={{ width: 130, height: 82 }} /> 
          {/* <Text style={styles.paragraph}>
          spaghetti       
            </Text> */}
          <TouchableOpacity>
            <Text style = {styles.btnText}> spaghetti  </Text>
          </TouchableOpacity>

        </Card>
      </View>
    </SafeAreaView>

    );

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      //paddingTop: 5,
      //backgroundColor: '#333333',
      
    },
    paragraph: {
      margin: 8,
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#34495e',
    },
  
    btn:{
      fontSize: 9,
      fontWeight:'bold'
      
    },
  
    btnText:{
      fontSize: 15,
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: 'white',
    //   borderRadius: 10,
    //   borderWidth: 2,
      paddingBottom: 2,
      paddingTop: 2,
    },
  
    card:{
      // backgroundColor: '#d3816f',
      backgroundColor: 'white',
      borderRadius: 5,
    },
  
    // icon:{
    //   paddingLeft: 10,
    // },
  
    // rating:{
    //   paddingLeft: 10
    // }
  
  });