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
import searchbar2 from './searchbar2';



export default function TabOneScreen({navigation,}: StackScreenProps<RootStackParamList, 'searchbar', 'searchbar2'>) {


    // American

    const [searchedValuesAmerican, setSearchedValuesAmerican] = React.useState('');
    const [isLoadingAmerican, setIsLoadingAmerican] = React.useState(false);
  
    React.useEffect(() => {
      setIsLoadingAmerican(true)
      axios.get('http://10.0.2.2:8000/api/home_recipe_american', {
  
      }).then(res => {
        console.log('res -- ', res)
        setSearchedValuesAmerican(res.data)
        setIsLoadingAmerican(false)
      }).catch(err => {
        console.log(err)
        setIsLoadingAmerican(false)
       })
    }, []);
  

  // Mexican

  const [searchedValuesMexican, setSearchedValuesMexican] = React.useState('');
  const [isLoadingMexican, setIsLoadingMexican] = React.useState(false);

  React.useEffect(() => {
    setIsLoadingMexican(true)
    axios.get('http://10.0.2.2:8000/api/home_recipe_mexican', {

    }).then(res => {
      console.log('res -- ', res)
      setSearchedValuesMexican(res.data)
      setIsLoadingMexican(false)
    }).catch(err => {
      console.log(err)
      setIsLoadingMexican(false)
     })
  }, []);

  // Chinese

  const [searchedValuesChinese, setSearchedValuesChinese] = React.useState('');
  const [isLoadingChinese, setIsLoadingChinese] = React.useState(false);

  React.useEffect(() => {
    setIsLoadingChinese(true)
    axios.get('http://10.0.2.2:8000/api/home_recipe_chinese', {

    }).then(res => {
      console.log('res -- ', res)
      setSearchedValuesChinese(res.data)
      setIsLoadingChinese(false)
    }).catch(err => {
      console.log(err)
      setIsLoadingChinese(false)
     })
  }, []);


    // Asian

    const [searchedValuesAsian, setSearchedValuesAsian] = React.useState('');
    const [isLoadingAsian, setIsLoadingAsian] = React.useState(false);
  
    React.useEffect(() => {
      setIsLoadingAsian(true)
      axios.get('http://10.0.2.2:8000/api/home_recipe_asian', {
  
      }).then(res => {
        console.log('res -- ', res)
        setSearchedValuesAsian(res.data)
        setIsLoadingAsian(false)
      }).catch(err => {
        console.log(err)
        setIsLoadingAsian(false)
       })
    }, []);

  // Italian

  const [searchedValuesItalian, setSearchedValuesItalian] = React.useState('');
  const [isLoadingItalian, setIsLoadingItalian] = React.useState(false);

  React.useEffect(() => {
    setIsLoadingItalian(true)
    axios.get('http://10.0.2.2:8000/api/home_recipe_italy', {

    }).then(res => {
      console.log('res -- ', res)
      setSearchedValuesItalian(res.data)
      setIsLoadingItalian(false)
    }).catch(err => {
      console.log(err)
      setIsLoadingItalian(false)
     })
  }, []);

  // Japanese

  const [searchedValuesJapanese, setSearchedValuesJapanese] = React.useState('');
  const [isLoadingJapanese, setIsLoadingJapanese] = React.useState(false);

  React.useEffect(() => {
    setIsLoadingJapanese(true)
    axios.get('http://10.0.2.2:8000/api/home_recipe_japanese', {

    }).then(res => {
      console.log('res -- ', res)
      setSearchedValuesJapanese(res.data)
      setIsLoadingJapanese(false)
    }).catch(err => {
      console.log(err)
      setIsLoadingJapanese(false)
     })
  }, []);

  // Arabic

  const [searchedValuesArabic, setSearchedValuesArabic] = React.useState('');
  const [isLoadingArabic, setIsLoadingArabic] = React.useState(false);

  React.useEffect(() => {
    setIsLoadingArabic(true)
    axios.get('http://10.0.2.2:8000/api/home_recipe_arabic', {

    }).then(res => {
      console.log('res -- ', res)
      setSearchedValuesArabic(res.data)
      setIsLoadingArabic(false)
    }).catch(err => {
      console.log(err)
      setIsLoadingArabic(false)
     })
  }, []);


  // France

  const [searchedValues, setSearchedValues] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true)
    axios.get('http://10.0.2.2:8000/api/home_recipe_france', {

    }).then(res => {
      console.log('res -- ', res)
      setSearchedValues(res.data)
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
                    
                    source={require('../components/Images/z3.jpg')}
                  >
                      <Text style={styles.bgtext} >Search by ingredients</Text>
          
                      <View style ={{marginLeft: '80%',marginTop : -47}}>
                        <TouchableOpacity onPress={()=> navigation.navigate('searchbar2')}>
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

    {/* American */}

    <View style={styles.container}>
      <Text style={styles.innerText}>     American</Text> 
      <ScrollView horizontal={true}>
        {!!searchedValuesAmerican && searchedValuesAmerican.map((item, key) => {
          return(
            <SafeAreaView style={styles.containerCard}>
            <View style={styles.containerCard}>
       
            <Card style={styles.card}>
         
                <TouchableOpacity style={{marginLeft:5}}>
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
        {!!searchedValuesMexican && searchedValuesMexican.map((item, key) => {
          return(
            <SafeAreaView style={styles.containerCard}>
            <View style={styles.containerCard}>
       
            <Card style={styles.card}>
         
                <TouchableOpacity style={{marginLeft:5}}>
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
        {!!searchedValuesChinese && searchedValuesChinese.map((item, key) => {
          return(
            <SafeAreaView style={styles.containerCard}>
            <View style={styles.containerCard}>
       
            <Card style={styles.card}>
         
                <TouchableOpacity style={{marginLeft:5}}>
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
        {!!searchedValuesAsian && searchedValuesAsian.map((item, key) => {
          return(
            <SafeAreaView style={styles.containerCard}>
            <View style={styles.containerCard}>
       
            <Card style={styles.card}>
         
                <TouchableOpacity style={{marginLeft:5}}>
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
        {!!searchedValuesItalian && searchedValuesItalian.map((item, key) => {
          return(
            <SafeAreaView style={styles.containerCard}>
            <View style={styles.containerCard}>
       
            <Card style={styles.card}>
         
                <TouchableOpacity style={{marginLeft:5}}>
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
        {!!searchedValuesJapanese && searchedValuesJapanese.map((item, key) => {
          return(
            <SafeAreaView style={styles.containerCard}>
            <View style={styles.containerCard}>
       
            <Card style={styles.card}>
         
                <TouchableOpacity style={{marginLeft:5}}>
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
        {!!searchedValuesArabic && searchedValuesArabic.map((item, key) => {
          return(
            <SafeAreaView style={styles.containerCard}>
            <View style={styles.containerCard}>
       
            <Card style={styles.card}>
         
                <TouchableOpacity style={{marginLeft:5}}>
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


     {/* France */}

     <View style={styles.container}>
      <Text style={styles.innerText}>     France</Text> 
      <ScrollView horizontal={true}>
        {!!searchedValues && searchedValues.map((item, key) => {
          return(
            <SafeAreaView style={styles.containerCard}>
            <View style={styles.containerCard}>
       
            <Card style={styles.card}>
         
                <TouchableOpacity style={{marginLeft:5}}>
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