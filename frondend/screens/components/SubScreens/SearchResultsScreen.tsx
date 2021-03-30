import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import axios from 'axios'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, TouchableHighlight, Image, ActivityIndicator } from 'react-native';

import { RootStackParamList } from '../../../types';
import { Divider } from 'react-native-elements';

export default function SearchResultsScreen({
  navigation, route
}: StackScreenProps<RootStackParamList, 'SearchResults'>) {

  const [searchedValues, setSearchedValues] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    console.log("Pred Results", route.params)
    setIsLoading(true)
    axios.post('http://10.0.2.2:8000/api/recipe_search_by_ingredient', route.params, {
      headers: {
        'content-type': 'multipart/form-data'
      }
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
      <View style={styles.centeredView}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
  )

  const Values = () => (
    <View style={styles.container}>
      <ScrollView>
        {!!searchedValues && searchedValues.map((item, key) => {
          return(
            <View key={key}>
              <View style={styles.centeredView}>
                <Image source={{uri: item.image}} style={styles.image} />
              </View>
              <Text style={styles.modalText}>
                {item.recipe_name}
              </Text>
              <Text style={styles.modalTextIngredients}>
                {item.ingredients}
              </Text>
              <Divider />
            </View>  
          )
        })}
        <TouchableHighlight
          style={{ ...styles.openButton, backgroundColor: '#000000' }}
          onPress={() => navigation.navigate('Search')} >
          <Text style={styles.textStyle}>Go back</Text>
        </TouchableHighlight>
      </ScrollView>
    </View>
  )

  return isLoading ?  <Loading /> : <Values /> 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 30,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: "500",
  },
  image:{
    width: 200,
    height: 200,
  },
});
