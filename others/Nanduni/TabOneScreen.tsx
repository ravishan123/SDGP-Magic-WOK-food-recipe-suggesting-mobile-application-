import * as React from 'react';
import { ImageBackground, Text, View, StyleSheet,Image,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// //import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';
//import { SafeAreaView } from 'react-native';
import { Card,Button, Icon } from 'react-native-elements';
import HomeCard from '../screens/home/HomeCard';



const App = () =>{ 

return (
 

    <View>

      <View style={{ backgroundColor: 'white' }}>
        <ScrollView>

         {/* <View> */}
         {/* <Image source={require('../components/images/pic3.jpg')}style={{ width:'100%', height: 250}} /> */}
         {/* <TouchableOpacity>
         <ImageBackground source={require('../components/images/pic3.jpg')}style={{ width:'100%', height: 250}} >
            <Text > spaghetti  </Text> 
          </ImageBackground>
          </TouchableOpacity>

         
         </View> */}
          
          <TouchableOpacity>
        <ImageBackground
          style={styles.backgroundImage}
          // imageStyle={{ borderRadius: theme.borders_MediumRadius.borderRadius, backgroundColor: 'rgba(255,0,0,.6)' }}
          source={require('../components/images/pic3.jpg')}
        >
            <Text style={styles.bgtext} >{"\n"}{"\n"}   Search recipies by {"\n"}   ingredients</Text>
        </ImageBackground>
      </TouchableOpacity>
         

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
export default App;




const styles = StyleSheet.create({

  innerText: {
    color: '#C70039',
    fontWeight: 'bold',
    fontSize: 20,

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
  // backgroundImage: {
  //   width:'100%',
  //   height:500,
  //   // flex: 1,
  //   // resizeMode: 'cover', // or 'stretch'
  // } 




  // container: {
  //   flex: 1,
  //   flexDirection: 'column',
  // },
  // image: {
  //   flex: 1,
  //   resizeMode: 'cover',
  //   justifyContent: 'center',
  //   height:'40%',
  //   width: '100%',
  // },
  // text: {
  //   color: 'grey',
  //   fontSize: 30,
  //   fontWeight: 'bold',
  // },

  backgroundImage: {
    flex: 1,
    width: '100%',
    height: 200,
},

bgtext:{
  fontSize:20,
  color: 'white',
  
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
}
  
});
