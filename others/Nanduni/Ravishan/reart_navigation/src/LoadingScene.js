import React, { Component } from 'react';
import {View,Text,StyleSheet,Animated,Image} from 'react-native';

import { ScreenContainer } from "react-native-screens";


const styles = StyleSheet.create({
    container:{
    flex: 1,
   
    backgroundColor:'#E6E6E6',
    alignItems:'center',
    justifyContent:'center',
    fontFamily:'',
    
    },
    


    tinyLogo: {
        width: 300,
        height: 300,
      },
    
   
    
    });

export class LoadingScene extends Component {

    state = {
        LogoAnime : new Animated.Value(0),
        LogoText: new Animated.Value(0),
        loadingSpinner:false,
    };

    componentDidMount(){
        const {LogoAnime,LogoText} = this.state;
            Animated.parallel([
            Animated.spring(LogoAnime,{
                toValue:1,
                tension:10,
                friction:2,
                duration:1000,
            }).start(),

            Animated.timing(LogoText, {
                toValue : 1,
                duration: 1200,
            }),
        ]).start(()=> {
            this.setState({
                loadingSpinner:true,
            });
        });
    }
   
    

    render() {
        return (
           
 <View style={styles.container} >
 <Animated.View  style = {{
     opacity:this.state.LogoAnime,
     top:this.state.LogoAnime.interpolate({
         inputRange:[0,1],
         outputRange:[94,0]
     })
 }}>

<Image
        style={styles.tinyLogo}
        source={require('../assets/WOK-MACAU.gif')}
      />


</Animated.View>

<Animated.View style={{opacity:this.state.LogoText}}>
      <Text 
      style={styles.logoText}
      ></Text>
      </Animated.View>

</View> 



           
        )
    }
}

export default LoadingScene;


