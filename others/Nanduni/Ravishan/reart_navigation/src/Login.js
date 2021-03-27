import React, { Component } from 'react'
import {Text,View,Image, TextInput,StyleSheet,ScrollView,SafeAreaView  } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import {SignIn, CreateAccount, Profile, Home, Search, Search2, Details, Splash, TextAndImageSearch, RecognizeDishByName, RecognizeDish, Favourite} from '../Screens'

 const  styles = StyleSheet.create({
    container:{
    
    backgroundColor:'#E6E6E6',
    alignItems:'center',
    justifyContent:'center',
     fontFamily:'',
    color:'white',
   
    },

    // area: {
    //     flex: 1,
    //     marginTop: Constants.statusBarHeight,
    

    // },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 1,
      },
    
      
});


export class Login extends Component {
    render() {
        return (
            
           <SafeAreaView>
          <ScrollView style={styles.scrollView}>
           
          <View style={{backgroundColor:"#FFFF",}}>
         
            <Image source ={require('../assets/topimg.jpg')}
                style={{
                
                width:"100%",
                height:"70%"}}
            /> 


      

            <Text
             style={{
                 fontSize:30,
                 fontFamily:"",
                 alignSelf:"center",
                 color:'#FFAA00',
                 
             }}
            >Cooking is Love</Text>

            <Text
            style={{
                fontFamily:"",
                marginHorizontal:55,
                textAlign:'center',
                marginTop:5,
                opacity:0.4,
                paddingHorizontal:50,
            }}
            >
                “If you are a chef, no matter how good a chef you are, it’s not good cooking for yourself; the joy is in cooking for others. It’s the same with music.”
 </Text>

            <View style={{
                flexDirection:"row",
                alignItems:"center",
                marginHorizontal:55,
                borderWidth:2,
                marginTop:50,
                paddingHorizontal:10,
                borderColor:"#FFAA00",
                borderRadius:23,
                paddingVertical:2
            }}>
                <Icon name="mail" color="#FFAA00" size={24}/>
                <TextInput 
                    style={{paddingHorizontal:10}}
                />

                

            </View>
            <View style={{
                flexDirection:"row",
                alignItems:"center",
                marginHorizontal:55,
                borderWidth:2,
                marginTop:15,
                paddingHorizontal:10,
                borderColor:'#E10016',
                borderRadius:23,
                paddingVertical:2
            }}>
                <Icon name="key" color="#E10016" size={24}/>
                <TextInput 
                    style={{paddingHorizontal:10}}
                />

                

            </View>

            <View style={{
                marginHorizontal:55,
                alignItems:"center",
                justifyContent:"center",
                marginTop:30,
                backgroundColor:"#E10016",
                paddingVertical:10,
                borderRadius:23
            }}>
                <Text 
                     onPress={()=>navigation.push("Home")}
                
                style={{
                    color:"white",
                    fontFamily:""
                }}>Let's Go</Text>
            </View>
            <Text 
            
            onPress={() => navigation.push("CreateAccount")}
            
            style={{
                alignSelf:"center",
                color:"#E10016",
                fontFamily:"",
                paddingVertical:30
            }}>New User</Text>
             </View>
            </ScrollView>
            </SafeAreaView>
       

        
        )
    }
}

export default Login;


