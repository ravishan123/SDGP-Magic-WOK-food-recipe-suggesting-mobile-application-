import * as React from 'react';
import { ImageBackground,StyleSheet,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { SafeAreaView } from 'react-native';
import { Card,Button, Icon } from 'react-native-elements';

// const image = { uri: "https://reactjs.org/logo-og.png" };
const App = () =>{

return (
  <View>
    <View style={styles.container}>
    {/* <Image source={require('../components/Images/pic3.jpg')} style={styles.backgroundImage} /> */}
    </View>

      <View style={{backgroundColor:'white'}}>
        <ScrollView>

          <Text style={styles.innerText}>  Italian</Text>
    

{/* -------------------------------------------------------------------------------------------------------------------------------- */}
            <ScrollView horizontal={true}>

              <Card>
              {/* <Card.Title>HELLO WORLD</Card.Title> */}
              {/* <Card.Divider/> */}
              <Card.Image source={require('../components/Images/food1.jpg')}>
                {/* <Text style={{marginBottom: 10}}>
                    The idea with React Native Elements is more about component structure than actual design.
                </Text> */}
                {/* <Button
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 60}}
                title='spaghetti' /> */}
              </Card.Image>
              <Button
                icon={<Icon name='code' color='#ffffff'  />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'black',}}
                title ='spaghetti'  />
              </Card>

              <View style={{backgroundColor:'white',padding:20, }}>
              <Card title="Local Modules">
              <Image source={require('../components/Images/food1.jpg')} style={{ width: 100, height:100}}></Image>

                <Text style = {{color:'black'}}>
                spaghetti
                </Text>
              </Card>
              </View>

              <View style={{backgroundColor:'white',padding:20,}}>
              <Card title="Local Modules">
              <Image source={require('../components/Images/food1.jpg')} style={{ width: 100, height:100}}></Image>

                <Text style = {{color:'black'}}>
                spaghetti
                </Text>
              </Card>
              </View>

              <View style={{backgroundColor:'white',padding:20, }}>
              <Card title="Local Modules">
              <Image source={require('../components/Images/food1.jpg')} style={{ width: 100, height:100}}></Image>

                <Text style = {{color:'black'}}>
                spaghetti
                </Text>
              </Card>
              </View>

              <View style={{backgroundColor:'white',padding:20, }}>
              <Card title="Local Modules">
              <Image source={require('../components/Images/food1.jpg')} style={{ width: 100, height:100}}></Image>

                <Text style = {{color:'black'}}>
                spaghetti
                </Text>
              </Card>
              </View>

              <View style={{backgroundColor:'white',padding:20, }}>
              <Card title="Local Modules">
              <Image source={require('../components/Images/food1.jpg')} style={{ width: 100, height:100}}></Image>

                <Text style = {{color:'black'}}>
                spaghetti
                </Text>
              </Card>
              </View>

            </ScrollView>

{/* ------------------------------------------------------------ */}
          
            <Text style={styles.innerText}>  Italian</Text>
    

            <ScrollView horizontal={true}>
                
              <View style={{backgroundColor:'white',padding:20, }}>
                <Card title="Local Modules">
                <Image source={require('../components/Images/food1.jpg')} style={{ width: 100, height:100}}></Image>

                  <Text style = {{color:'black'}}>
                  spaghetti
                  </Text>
                </Card>
                </View>

                <View style={{backgroundColor:'white',padding:20, }}>
                <Card title="Local Modules">
                <Image source={require('../components/Images/food1.jpg')} style={{ width: 100, height:100}}></Image>

                  <Text style = {{color:'black'}}>
                  spaghetti
                  </Text>
                </Card>
                </View>

                <View style={{backgroundColor:'white',padding:20, }}>
                <Card title="Local Modules">
                <Image source={require('../components/Images/food1.jpg')} style={{ width: 100, height:100}}></Image>

                  <Text style = {{color:'black'}}>
                  spaghetti
                  </Text>
                </Card>
                </View>

                <View style={{backgroundColor:'white',padding:20, }}>
                <Card title="Local Modules">
                <Image source={require('../components/Images/food1.jpg')} style={{ width: 100, height:100}}></Image>

                  <Text style = {{color:'black'}}>
                  spaghetti
                  </Text>
                </Card>
                </View>

                <View style={{backgroundColor:'white',padding:20, }}>
                <Card title="Local Modules">
                <Image source={require('../components/Images/food1.jpg')} style={{ width: 100, height:100}}></Image>

                  <Text style = {{color:'black'}}>
                  spaghetti
                  </Text>
                </Card>
                </View>

              </ScrollView>
              
{/* ---------------------------------------------------------------------------------------------------------------------------------------- */}

            <Text style={styles.innerText}>  Italian</Text>
    

              <ScrollView horizontal={true}>
          
                <View style={{backgroundColor:'white',padding:20, }}>
                <Card title="Local Modules">
                <Image source={require('../components/Images/food1.jpg')} style={{ width: 100, height:100}}></Image>

                  <Text style = {{color:'black'}}>
                  spaghetti
                  </Text>
                </Card>
                </View>

                <View style={{backgroundColor:'white',padding:20, }}>
                <Card title="Local Modules">
                <Image source={require('../components/Images/food1.jpg')} style={{ width: 100, height:100}}></Image>

                  <Text style = {{color:'black'}}>
                  spaghetti
                  </Text>
                </Card>
                </View>

                <View style={{backgroundColor:'white',padding:20, }}>
                <Card title="Local Modules">
                <Image source={require('../components/Images/food1.jpg')} style={{ width: 100, height:100}}></Image>

                  <Text style = {{color:'black'}}>
                  spaghetti
                  </Text>
                </Card>
                </View>

                <View style={{backgroundColor:'white',padding:20, }}>
                <Card title="Local Modules">
                <Image source={require('../components/Images/food1.jpg')} style={{ width: 100, height:100}}></Image>

                  <Text style = {{color:'black'}}>
                  spaghetti
                  </Text>
                </Card>
                </View>

                <View style={{backgroundColor:'white',padding:20, }}>
                <Card title="Local Modules">
                <Image source={require('../components/Images/food1.jpg')} style={{ width: 100, height:100}}></Image>

                  <Text style = {{color:'black'}}>
                  spaghetti
                  </Text>
                </Card>
                </View>

              </ScrollView>
          
{/* -------------------------------------------------------------------------------------------------------         */}
          
          <Text style={styles.innerText}>  Italian</Text>
    

            <ScrollView horizontal={true}>
                
              <View style={{backgroundColor:'white',padding:20, }}>
                <Card title="Local Modules">
                <Image source={require('../components/Images/food1.jpg')} style={{ width: 100, height:100}}></Image>

                  <Text style = {{color:'black'}}>
                  spaghetti
                  </Text>
                </Card>
                </View>

                <View style={{backgroundColor:'white',padding:20, }}>
                <Card title="Local Modules">
                <Image source={require('../components/Images/food1.jpg')} style={{ width: 100, height:100}}></Image>

                  <Text style = {{color:'black'}}>
                  spaghetti
                  </Text>
                </Card>
                </View>

                <View style={{backgroundColor:'white',padding:20, }}>
                <Card title="Local Modules">
                <Image source={require('../components/Images/food1.jpg')} style={{ width: 100, height:100}}></Image>

                  <Text style = {{color:'black'}}>
                  spaghetti
                  </Text>
                </Card>
                </View>

                <View style={{backgroundColor:'white',padding:20, }}>
                <Card title="Local Modules">
                <Image source={require('../components/Images/food1.jpg')} style={{ width: 100, height:100}}></Image>

                  <Text style = {{color:'black'}}>
                  spaghetti
                  </Text>
                </Card>
                </View>

                <View style={{backgroundColor:'white',padding:20, }}>
                <Card title="Local Modules">
                <Image source={require('../components/Images/food1.jpg')} style={{ width: 100, height:100}}></Image>

                  <Text style = {{color:'black'}}>
                  spaghetti
                  </Text>
                </Card>
                </View>

              </ScrollView>

{/* ------------------------------------------------------------ */}
          <Text style={styles.innerText}>  Italian</Text>

            <ScrollView horizontal={true}>
                
              <View style={{backgroundColor:'white',padding:20, }}>
                <Card title="Local Modules">
                <Image source={require('../components/Images/food1.jpg')} style={{ width: 100, height:100}}></Image>

                  <Text style = {{color:'black'}}>
                  spaghetti
                  </Text>
                </Card>
                </View>

                <View style={{backgroundColor:'white',padding:20, }}>
                <Card title="Local Modules">
                <Image source={require('../components/Images/food1.jpg')} style={{ width: 100, height:100}}></Image>

                  <Text style = {{color:'black'}}>
                  spaghetti
                  </Text>
                </Card>
                </View>

                <View style={{backgroundColor:'white',padding:20, }}>
                <Card title="Local Modules">
                <Image source={require('../components/Images/food1.jpg')} style={{ width: 100, height:100}}></Image>

                  <Text style = {{color:'black'}}>
                  spaghetti
                  </Text>
                </Card>
                </View>

                <View style={{backgroundColor:'white',padding:20, }}>
                <Card title="Local Modules">
                <Image source={require('../components/Images/food1.jpg')} style={{ width: 100, height:100}}></Image>

                  <Text style = {{color:'black'}}>
                  spaghetti
                  </Text>
                </Card>
                </View>

                <View style={{backgroundColor:'white',padding:20, }}>
                <Card title="Local Modules">
                <Image source={require('../components/Images/food1.jpg')} style={{ width: 100, height:100}}></Image>

                  <Text style = {{color:'black'}}>
                  spaghetti
                  </Text>
                </Card>
                </View>

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
    width:'100%',
    height:500,
    // flex: 1,
    // resizeMode: 'cover', // or 'stretch'
  } 
  
});
