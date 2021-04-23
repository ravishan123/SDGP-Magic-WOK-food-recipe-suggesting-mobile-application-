import * as React from 'react';
import { ImageBackground,StyleSheet,Image,TouchableOpacity,ActivityIndicator,SafeAreaView,ScrollView} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import HomeCard from '../screens/favorite/HomeCard';
import { black } from 'react-native-paper/lib/typescript/styles/colors';
import { AntDesign } from '@expo/vector-icons';
import navigation from '../navigation';
import { RootStackParamList } from '../types';
import { StackScreenProps } from '@react-navigation/stack';
import axios from 'axios'
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { Text, View } from '../components/Themed';



export default function TabOneScreen({navigation,}: StackScreenProps<RootStackParamList, 'searchbar'>) {


  // France

  const [categoryValues, setCategoryValues] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);


  const selectDish = (item) => {
    console.log('item ', item)
    navigation.navigate('DishInfo', item)
  }

 /// all reciepies at once
  React.useEffect(() => {
    setIsLoading(true)
    axios.get('http://3.131.141.252/api/recipes_for_home', {

    }).then(res => {
      console.log('res -- ', res.data)
      setCategoryValues(res.data)
      setIsLoading(false)
    }).catch(err => {
      console.log(err)
      setIsLoading(false)
     })
  }, []);


  const Loading = () => (
    <View>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  )

    const Values = () => (

    <SafeAreaView>
    <ScrollView>

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
          </ScrollView>


    {/* France */}

    <View style={styles.container}>
      <Text style={styles.innerText}>     France</Text> 
      <ScrollView horizontal={true}>
        {!!categoryValues && categoryValues.france.map((item, key) => {
          return(
            <SafeAreaView key={key} style={styles.containerCard}>
            <View style={styles.containerCard}>
       
            <Card style={styles.card}>
         
                <TouchableOpacity style={{marginLeft:5}} onPress={() => selectDish(item)}>
                    <Card.Cover source={{uri: item.image}} style={styles.cardImg}/>
                      <Card.Content>
                        <Title>{item.recipe_name}</Title>
                      </Card.Content>
                     
            </TouchableOpacity>                                    
          </Card>
      </View>
    </SafeAreaView>  
          )
        })}
        
      </ScrollView>
    </View>

    {/* Mexican */}

    <View style={styles.container}>
      <Text style={styles.innerText}>     Mexican</Text> 
      <ScrollView horizontal={true}>
        {!!categoryValues && categoryValues.mexican.map((item, key) => {
          return(
            <SafeAreaView key={key} style={styles.containerCard}>
            <View style={styles.containerCard}>
       
            <Card style={styles.card}>
         
                <TouchableOpacity style={{marginLeft:5}} onPress={() => selectDish(item)}>
                    <Card.Cover source={{uri: item.image}} style={styles.cardImg}/>
                      <Card.Content>
                        <Title>{item.recipe_name}</Title>
                      </Card.Content>
                     
            </TouchableOpacity>                                    
          </Card>
      </View>
    </SafeAreaView>  
          )
        })}
        
      </ScrollView>
    </View>

        {/* Chinese */}

        <View style={styles.container}>
      <Text style={styles.innerText}>     Chinese</Text> 
      <ScrollView horizontal={true}>
        {!!categoryValues && categoryValues.chinese.map((item, key) => {
          return(
            <SafeAreaView key={key} style={styles.containerCard}>
            <View style={styles.containerCard}>
       
            <Card style={styles.card}>
         
                <TouchableOpacity style={{marginLeft:5}} onPress={() => selectDish(item)}>
                    <Card.Cover source={{uri: item.image}} style={styles.cardImg}/>
                      <Card.Content>
                        <Title>{item.recipe_name}</Title>
                      </Card.Content>
                     
            </TouchableOpacity>                                    
          </Card>
      </View>
    </SafeAreaView>  
          )
        })}
        
      </ScrollView>
    </View>

    {/* Asian */}

    <View style={styles.container}>
      <Text style={styles.innerText}>     Asian</Text> 
      <ScrollView horizontal={true}>
        {!!categoryValues && categoryValues.asian.map((item, key) => {
          return(
            <SafeAreaView key={key} style={styles.containerCard}>
            <View style={styles.containerCard}>
       
            <Card style={styles.card}>
         
                <TouchableOpacity style={{marginLeft:5}} onPress={() => selectDish(item)}>
                    <Card.Cover source={{uri: item.image}} style={styles.cardImg}/>
                      <Card.Content>
                        <Title>{item.recipe_name}</Title>
                      </Card.Content>
                     
            </TouchableOpacity>                                    
          </Card>
      </View>
    </SafeAreaView>  
          )
        })}
        
      </ScrollView>
    </View>

    {/* Italian */}

    <View style={styles.container}>
      <Text style={styles.innerText}>     Italian</Text> 
      <ScrollView horizontal={true}>
        {!!categoryValues && categoryValues.italy.map((item, key) => {
          return(
            <SafeAreaView key={key} style={styles.containerCard}>
            <View style={styles.containerCard}>
       
            <Card style={styles.card}>
         
                <TouchableOpacity style={{marginLeft:5}} onPress={() => selectDish(item)}>
                    <Card.Cover source={{uri: item.image}} style={styles.cardImg}/>
                      <Card.Content>
                        <Title>{item.recipe_name}</Title>
                      </Card.Content>
                     
            </TouchableOpacity>                                    
          </Card>
      </View>
    </SafeAreaView>  
          )
        })}
        
      </ScrollView>
    </View>

    {/* Japanese */}

    <View style={styles.container}>
      <Text style={styles.innerText}>     Japanese</Text> 
      <ScrollView horizontal={true}>
        {!!categoryValues && categoryValues.japan.map((item, key) => {
          return(
            <SafeAreaView key={key} style={styles.containerCard}>
            <View style={styles.containerCard}>
       
            <Card style={styles.card}>
         
                <TouchableOpacity style={{marginLeft:5}} onPress={() => selectDish(item)}>
                    <Card.Cover source={{uri: item.image}} style={styles.cardImg}/>
                      <Card.Content>
                        <Title>{item.recipe_name}</Title>
                      </Card.Content>
                     
            </TouchableOpacity>                                    
          </Card>
      </View>
    </SafeAreaView>  
          )
        })}
        
      </ScrollView>
    </View>

    {/* Arabic */}

    <View style={styles.container}>
      <Text style={styles.innerText}>     Arabic</Text> 
      <ScrollView horizontal={true}>
        {!!categoryValues && categoryValues.arabic.map((item, key) => {
          return(
            <SafeAreaView key={key} style={styles.containerCard}>
            <View style={styles.containerCard}>
       
            <Card style={styles.card}>
         
                <TouchableOpacity style={{marginLeft:5}} onPress={() => selectDish(item)}>
                    <Card.Cover source={{uri: item.image}} style={styles.cardImg}/>
                      <Card.Content>
                        <Title>{item.recipe_name}</Title>
                      </Card.Content>
                     
            </TouchableOpacity>                                    
          </Card>
      </View>
    </SafeAreaView>  
          )
        })}
        
      </ScrollView>
    </View>

    {/* American */}

    <View style={styles.container}>
      <Text style={styles.innerText}>     American</Text> 
      <ScrollView horizontal={true}>
        {!!categoryValues && categoryValues.american.map((item, key) => {
          return(
            <SafeAreaView key={key} style={styles.containerCard}>
            <View style={styles.containerCard}>
       
            <Card style={styles.card}>
         
                <TouchableOpacity style={{marginLeft:5}} onPress={() => selectDish(item)}>
                    <Card.Cover source={{uri: item.image}} style={styles.cardImg}/>
                      <Card.Content>
                        <Title>{item.recipe_name}</Title>
                      </Card.Content>
                     
            </TouchableOpacity>                                    
          </Card>
      </View>
    </SafeAreaView>  
          )
        })}
        
      </ScrollView>
    </View>




  </ScrollView>
  </SafeAreaView>
)

return isLoading ?  <Loading /> : <Values /> 

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
},

containerCard: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  
  
},

btn:{
  fontSize: 9,
  fontWeight:'bold'
  
},


card:{
  marginBottom:15,
  height:'100%',
  borderRadius:15,
  marginRight:20,
  width:150,
  
 
},

cardImg:{
  padding:5,


},
  
});